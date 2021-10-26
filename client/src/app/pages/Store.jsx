import { useParams } from "react-router"
import { useState } from "react"
import MenuItemList from "./../components/MenuItemList"
import { nanoid } from "nanoid"
import faker from "faker"
import { Grid, Header } from "semantic-ui-react"
import Cart from "../components/Cart"

const Store = () => {
  const generateCart = menuItems => {
    const cartGroups = []
    let total = 0
    const discount = (faker.datatype.number({ min: 1, max: 5 }) * 10) / 100

    // groups
    for (let i = 0; i < faker.datatype.number({ min: 1, max: 5 }); i++) {
      // items
      const items = []
      for (let j = 0; j < menuItems.length; j++) {
        if (faker.datatype.number({ min: 1, max: 5 }) % 3 === 0) {
          const item = {
            ...menuItems[j],
            quantity: faker.datatype.number({ min: 1, max: 5 }),
          }
          total += item.price * item.quantity
          items.push(item)
        }
      }

      const group = {
        userId: `USR${faker.datatype.number({
          min: 100000,
          max: 999999,
        })}`,
        userName: faker.name.findName(),
        items,
      }

      cartGroups.push(group)
    }

    return {
      id: `CRT${faker.datatype.number({
        min: 100000,
        max: 999999,
      })}`,
      subtotal: total,
      discount,
      total: total - total * discount,
      groups: cartGroups,
    }
  }

  const generateMenu = () => {
    const menu = []
    for (let i = 0; i < 15; i++) {
      const item = {
        image: `https://source.unsplash.com/random/?food,${i}`,
        name: faker.commerce.productName(),
        id: nanoid(),
        price: faker.commerce.price() * 1000,
        description: faker.commerce.productDescription(),
      }
      menu.push(item)
    }
    return menu
  }

  const menuFake = generateMenu()
  const cartFake = generateCart(menuFake)

  const { id } = useParams()
  const [items] = useState(menuFake)
  const [cart] = useState(cartFake)

  console.log(cart)

  const addToCart = id => {
    console.log(`add item ${id}`)
  }

  return (
    <>
      <Header size="medium">Shop {id}</Header>
      <Grid>
        <Grid.Column width={12}>
          {items && (
            <MenuItemList items={items} addToCart={addToCart}></MenuItemList>
          )}
        </Grid.Column>
        <Grid.Column width={4}>
          <Cart cart={cart}></Cart>
        </Grid.Column>
      </Grid>
    </>
  )
}

export default Store
