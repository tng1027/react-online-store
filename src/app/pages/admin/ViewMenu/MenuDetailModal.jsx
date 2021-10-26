import { Modal, Button, Image, Form } from "semantic-ui-react"
import { forwardRef, useImperativeHandle, useState } from "react"
import { generateMenuItem } from "./../../../helpers/fake-data-helper"

const MenuDetailModal = forwardRef((props, ref) => {
  const [isOpen, setIsOpen] = useState(false)
  const [menu] = useState(generateMenuItem())

  useImperativeHandle(ref, () => ({
    open() {
      setIsOpen(true)
    },
  }))

  const { image, name, price, description } = menu

  return (
    <Modal
      onClose={() => setIsOpen(false)}
      onOpen={() => setIsOpen(true)}
      open={isOpen}
      className="menu-modify-modal"
    >
      <Modal.Header>Modify Menu</Modal.Header>
      <Modal.Content image>
        <Image rounded fluid src={image} wrapped />
        <Modal.Description>
          <Form size={"small"}>
            <Form.Field>
              <label>Name</label>
              <input placeholder="Name" value={name} />
            </Form.Field>
            <Form.Field>
              <label>Price</label>
              <input placeholder="Price" value={price} />
            </Form.Field>
            <Form.Field>
              <label>Description</label>
              <textarea placeholder="Description" value={description} />
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

export default MenuDetailModal
