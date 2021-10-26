import { nanoid } from "nanoid"
import { Button, Divider, Header, Label, List } from "semantic-ui-react"
import CartItemGroup from "./CartItemGroup"

const Cart = ({ cart }) => {
  const { id, groups, subtotal, discount, total } = cart
  console.log({ id, groups, subtotal, discount, total })
  return (
    <>
      <Header>Cart {id}</Header>

      <List divided selection>
        <List.Item>
          Sub-total
          <Label horizontal style={{ float: "right" }}>
            {subtotal || 0}
          </Label>
        </List.Item>
        <List.Item>
          Discount
          <Label horizontal style={{ float: "right" }}>
            {discount * 100 || 0}
          </Label>
        </List.Item>
        <List.Item className="total">
          Total
          <Label horizontal style={{ float: "right" }}>
            {total || 0}
          </Label>
        </List.Item>
      </List>
      <Button
        basic
        content="Submit"
        labelPosition="left"
        icon="thumbs up outline"
        color="green"
        style={{ marginTop: 15, width: "100%" }}
      />
      <Divider></Divider>
      {groups &&
        groups.map(group => (
          <CartItemGroup key={nanoid()} group={group}></CartItemGroup>
        ))}
    </>
  )
}

export default Cart
