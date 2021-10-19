import { Modal, Button, Image, Header, Form, Checkbox } from "semantic-ui-react"
import { forwardRef, useImperativeHandle, useState } from "react"
import faker from "faker"
import { nanoid } from "nanoid"

const ModifyStoreModal = forwardRef((props, ref) => {
  const [isOpen, setIsOpen] = useState(false)
  const [store] = useState({
    id: `STR${faker.datatype.number({
      min: 100000,
      max: 999999,
    })}`,
    image: `https://source.unsplash.com/random/?food,${faker.datatype.number()}`,
    name: `${faker.company.companyName()}`,
    address: `${faker.address.streetAddress()}, ${faker.address.county()}, ${faker.address.city()}, ${faker.address.state()}`,
    phone: faker.phone.phoneNumber(),
  })

  useImperativeHandle(ref, () => ({
    open() {
      setIsOpen(true)
    },
  }))

  const { id, name, address, phone, image } = store

  return (
    <Modal
      onClose={() => setIsOpen(false)}
      onOpen={() => setIsOpen(true)}
      open={isOpen}
      className="store-modify-modal"
    >
      <Modal.Header>Modify Store</Modal.Header>
      <Modal.Content image>
        <Image rounded fluid size="medium" src={image} wrapped />
        <Modal.Description>
          <Form size={"small"}>
            <Form.Field>
              <label>Name</label>
              <input placeholder="Name" value={name} />
            </Form.Field>
            <Form.Field>
              <label>Phone Number</label>
              <input placeholder="Phone" value={phone} />
            </Form.Field>
            <Form.Field>
              <label>Address</label>
              <input placeholder="Address" value={address} />
            </Form.Field>
          </Form>
        </Modal.Description>
      </Modal.Content>
      <Modal.Actions>
        <Button color="black" onClick={() => setIsOpen(false)}>
          Close
        </Button>
        <Button
          content="Submit"
          labelPosition="right"
          icon="checkmark"
          onClick={() => setIsOpen(false)}
          positive
        />
      </Modal.Actions>
    </Modal>
  )
})

export default ModifyStoreModal
