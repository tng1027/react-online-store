import { Header } from "semantic-ui-react"
import { useRef, useState } from "react"
import faker from "faker"
import MenuDetailModal from "./ViewMenu/MenuDetailModal"
import MenuItemList from "./../../components/MenuItemList"

const ViewMenu = () => {
  const generateMenu = () => {
    const menu = []
    for (let i = 0; i < 15; i++) {
      const item = {
        image: `https://source.unsplash.com/random/?food,${i}`,
        name: faker.commerce.productName(),
        id: `ITM${faker.datatype.number({
          min: 100000,
          max: 999999,
        })}`,
        price: faker.commerce.price() * 1000,
        description: faker.commerce.productDescription(),
      }
      menu.push(item)
    }
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
        <MenuItemList items={rowData} viewOrder={viewOrder}></MenuItemList>
      )}

      <MenuDetailModal ref={modalRef}></MenuDetailModal>
    </>
  )
}

export default ViewMenu
