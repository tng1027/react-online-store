import { Modal, Button, Image, Form } from "semantic-ui-react"
import { forwardRef, useImperativeHandle, useState } from "react"
import { generateStore } from "../../../helpers/fake-data-helper"

const ModifyStoreModal = forwardRef((props, ref) => {
  const [isOpen, setIsOpen] = useState(false)
  const [store] = useState(generateStore())

  useImperativeHandle(ref, () => ({
    open() {
      setIsOpen(true)
    },
  }))

  const { name, address, phone, image } = store

  return (
    <Modal
      onClose={() => setIsOpen(false)}
      onOpen={() => setIsOpen(true)}
      open={isOpen}
      className="store-modify-modal"
    >
      <Modal.Header>Modify Store</Modal.Header>
      <Modal.Content image>
        <Image rounded fluid src={image} wrapped />
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
