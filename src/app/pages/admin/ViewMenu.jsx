import { Button, Grid, Header, Icon, Image, List } from "semantic-ui-react"
import { useRef, useState } from "react"
import faker from "faker"
import { nanoid } from "nanoid"
import MenuDetailModal from "./ViewMenu/MenuDetailModal"

const ViewMenu = () => {
  const generateMenu = () => {
    const menu = []
    for (let i = 0; i < 15; i++) {
      const item = {
        image: `https://source.unsplash.com/random/?food,${i}`,
        name: faker.commerce.productName(),
        id: nanoid(),
        price: faker.commerce.price(),
        description: faker.commerce.productDescription(),
      }
      menu.push(item)
    }
    console.log(menu)
    return menu
  }

  const [rowData] = useState(generateMenu())
  const modalRef = useRef(null)

  const viewOrder = id => {
    modalRef.current.open(id)
  }

  return (
    <>
      <Header size="medium">View Menu</Header>
      {rowData && (
        <List size={"large"}>
          {rowData.map(({ image, name, price, description, id }) => (
            <List.Item className="menu-item">
              <List.Content>
                <Grid>
                  <Grid.Column width={4}>
                    <Image rounded src={image} />
                  </Grid.Column>
                  <Grid.Column width={10}>
                    <List.Header as="a">{name}</List.Header>
                    <List.Header>{price}</List.Header>
                    <List.Description>{description}</List.Description>
                  </Grid.Column>
                  <Grid.Column width={2}>
                    <div class="menu-item_actions">
                      <Button
                        icon
                        color="blue"
                        onClick={() => viewOrder(id)}
                        title="Modify Item"
                      >
                        <Icon name="pencil" />
                      </Button>
                      <Button icon color="red" title="Delete Item">
                        <Icon name="delete" />
                      </Button>
                    </div>
                  </Grid.Column>
                </Grid>
              </List.Content>
            </List.Item>
          ))}
        </List>
      )}

      <MenuDetailModal ref={modalRef}></MenuDetailModal>
    </>
  )
}

export default ViewMenu
