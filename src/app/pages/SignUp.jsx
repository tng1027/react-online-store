import { useHistory } from "react-router"
import { useState } from "react"
import useToast from "./../hooks/useToast"
import {
  Button,
  Image,
  Form,
  Grid,
  Segment,
  Container,
  Divider,
  Label,
  Icon,
} from "semantic-ui-react"

const Login = () => {
  const history = useHistory()
  const [isShop, setIsShop] = useState(true)
  const { toastSuccess } = useToast()

  const signIn = () => {
    history.push("/sign-in")
  }

  const toggleView = () => {
    setIsShop(!isShop)
  }

  const submit = () => {
    toastSuccess("Create account successfully")

    if (isShop) {
      history.push("/admin")
    } else {
      history.push("/")
    }
  }

  const label = isShop
    ? "Register as a customer?"
    : "Register as a store owner?"
  const labelName = isShop ? "Shop Number" : "Customer Name"

  return (
    <Container className="auth-form">
      <Image src="/logo/logo64.png" centered />
      <Grid columns="equal">
        <Grid.Column></Grid.Column>
        <Grid.Column width={6}>
          <Segment raised>
            <Label as="a" style={{ width: "100%" }} onClick={toggleView}>
              <Icon name="question circle" /> {label}
            </Label>
            <Divider />

            <Form>
              <Form.Field>
                <label>{labelName}</label>
                <input placeholder={labelName} />
              </Form.Field>
              <Form.Field>
                <label>Phone Number</label>
                <input placeholder="Phone Number" />
              </Form.Field>
              <Button type="submit" color="green" fluid onClick={submit}>
                Register
              </Button>
            </Form>

            <Divider />
            <Label
              as="a"
              basic
              style={{ width: "100%" }}
              color="grey"
              onClick={signIn}
            >
              <Icon name="user" /> Already a member. Sign In
            </Label>
          </Segment>
        </Grid.Column>
        <Grid.Column></Grid.Column>
      </Grid>
    </Container>
  )
}

export default Login
