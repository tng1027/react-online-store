import { nanoid } from "nanoid"
import { Container, Divider, Grid, Header, Segment } from "semantic-ui-react"
import CartItem from "./CartItem"

const CartItemGroup = ({ group }) => {
  const { userId, userName, items } = group
  return (
    <Segment raised>
      <Header size={"small"}>{userName}</Header>
      <Container>
        <Grid>
          {items &&
            items.map(item => <CartItem key={nanoid()} item={item}></CartItem>)}
        </Grid>
      </Container>
    </Segment>
  )
}

export default CartItemGroup
