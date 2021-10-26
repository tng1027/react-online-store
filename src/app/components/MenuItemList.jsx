import { nanoid } from "nanoid"
import { List } from "semantic-ui-react"
import MenuItem from "./MenuItem"

const MenuItemList = ({ items, viewOrder, addToCart }) => {
  return (
    <List size={"large"}>
      {items.map(item => (
        <MenuItem
          key={nanoid()}
          item={item}
          viewOrder={viewOrder}
          addToCart={addToCart}
        ></MenuItem>
      ))}
    </List>
  )
}

export default MenuItemList
