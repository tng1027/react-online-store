import { Modal, Button, Grid } from "semantic-ui-react"
import { forwardRef, useImperativeHandle, useMemo, useState } from "react"
import OrderInforField from "./../../../components/OrderInforField"
import { nanoid } from "nanoid"
import faker from "faker"
import dayjs from "dayjs"
import { AgGridReact } from "ag-grid-react"

const OrderDetailModal = forwardRef((props, ref) => {
  const [isOpen, setIsOpen] = useState(false)
  const [order] = useState({
    id: nanoid(),
    orderNumber: `ORD${faker.datatype.number({
      min: 100000,
      max: 999999,
    })}`,
    orderTime: faker.date.past(),
    customerName: faker.name.findName(),
    customerPhone: faker.phone.phoneNumber(),
  })

  useImperativeHandle(ref, () => ({
    open() {
      setIsOpen(true)
    },
  }))

  const columnDefs = useMemo(
    () => [
      { field: "name", minWidth: 100 },
      { field: "price" },
      { field: "quantity" },
      { field: "total" },
      { field: "note" },
    ],
    []
  )

  const defaultColDef = useMemo(
    () => ({
      resizable: false,
      sortable: true,
    }),
    []
  )

  const generateItems = () => {
    const order = []
    for (let i = 0; i < faker.datatype.number({ min: 1, max: 10 }); i++) {
      const item = {
        name: faker.commerce.productName(),
        id: nanoid(),
        price: faker.commerce.price(),
        quantity: faker.datatype.number({ min: 1, max: 10 }),
        note: `N/A`,
      }

      item.total = item.quantity * item.price

      order.push(item)
    }
    return order
  }

  const [rowData] = useState(generateItems())

  const { id, orderNumber, customerName, customerPhone, orderTime } = order

  return (
    <Modal
      onClose={() => setIsOpen(false)}
      onOpen={() => setIsOpen(true)}
      open={isOpen}
    >
      <Modal.Header>{`Order #${id}`}</Modal.Header>
      <Modal.Content image>
        <Modal.Description>
          <div className="order-info">
            <Grid container>
              <Grid.Column width={3}>
                <OrderInforField
                  title="Order No"
                  label={orderNumber}
                ></OrderInforField>
              </Grid.Column>
              <Grid.Column width={3}>
                <OrderInforField
                  title="Order Time"
                  label={dayjs(orderTime).format("MM/DD/YYYY HH:mm")}
                ></OrderInforField>
              </Grid.Column>
              <Grid.Column width={3}>
                <OrderInforField
                  title="Customer Name"
                  label={customerName}
                ></OrderInforField>
              </Grid.Column>
              <Grid.Column width={3}>
                <OrderInforField
                  title="Customer Phone"
                  label={customerPhone}
                ></OrderInforField>
              </Grid.Column>
            </Grid>
          </div>
          <div
            className="order-items ag-theme-material"
            style={{ height: 240 }}
          >
            <AgGridReact
              reactUi="true"
              className="ag-theme-material"
              animateRows="true"
              columnDefs={columnDefs}
              defaultColDef={defaultColDef}
              enableRangeSelection="true"
              rowData={rowData}
              rowSelection="multiple"
              suppressRowClickSelection="true"
            />
          </div>
        </Modal.Description>
      </Modal.Content>
      <Modal.Actions>
        <Button color="black" onClick={() => setIsOpen(false)}>
          Close
        </Button>
        <Button
          content="Cancel Order"
          labelPosition="left"
          icon="close"
          onClick={() => setIsOpen(false)}
          color="red"
        />
        <Button
          content="Complete Order"
          labelPosition="right"
          icon="checkmark"
          onClick={() => setIsOpen(false)}
          positive
        />
      </Modal.Actions>
    </Modal>
  )
})

export default OrderDetailModal
