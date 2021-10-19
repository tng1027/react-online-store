import { AgGridReact } from "ag-grid-react"
import { Header } from "semantic-ui-react"
import { useMemo, useRef, useState } from "react"
import OrderDetailModal from "./ViewOrders/OrderDetailModal"
import ActionCellRenderer from "./ViewOrders/ActionCellRenderer"
import StatusCellRenderer from "./ViewOrders/StatusCellRenderer"
import faker from "faker"
import { nanoid } from "nanoid"
import dayjs from "dayjs"

const ViewOrders = () => {
  const generateOrders = () => {
    const orders = []
    const status = [
      "Confirmed",
      "Cancelled",
      "Sent To Kitchen",
      "Ready for Pickup",
      "Ready for Delivery",
      "Delivered",
    ]
    for (let i = 0; i < faker.datatype.number({ min: 10, max: 100 }); i++) {
      const order = {
        id: nanoid(),
        orderNumber: `ORD${faker.datatype.number({
          min: 100000,
          max: 999999,
        })}`,
        orderTime: dayjs(faker.date.past()).format("MM/DD/YYYY HH:mm"),
        customerName: faker.name.findName(),
        customerPhone: faker.phone.phoneNumber(),
        total: faker.datatype.number({ min: 300, max: 2000 }),
        status:
          status[faker.datatype.number({ min: 0, max: status.length - 1 })],
      }

      orders.push(order)
    }
    return orders
  }

  // never changes, so we can use useMemo
  const columnDefs = useMemo(
    () => [
      { field: "orderNumber", pinned: "left" },
      { field: "customerName" },
      { field: "customerPhone" },
      { field: "total" },
      { field: "status", cellRenderer: "statusCellRenderer" },
      { field: "orderTime", sort: "desc" },
      {
        field: "action",
        pinned: "right",
        cellRenderer: "actionCellRenderer",
        cellRendererParams: {
          onViewOrder: id => viewOrder(id),
        },
      },
    ],
    []
  )

  const defaultColDef = useMemo(
    () => ({
      resizable: true,
      sortable: true,
    }),
    []
  )

  // changes, needs to be state
  const [rowData] = useState(generateOrders())
  const gridHeight = window.innerHeight

  const modalRef = useRef(null)

  const viewOrder = id => {
    modalRef.current.open(id)
  }

  return (
    <>
      <Header size="medium">View Orders</Header>
      <div
        className="ag-theme-material grid-order"
        style={{ height: gridHeight - 150 }}
      >
        <AgGridReact
          reactUi="true"
          className="ag-theme-material"
          animateRows="true"
          columnDefs={columnDefs}
          defaultColDef={defaultColDef}
          rowData={rowData}
          frameworkComponents={{
            actionCellRenderer: ActionCellRenderer,
            statusCellRenderer: StatusCellRenderer,
          }}
        />
      </div>
      <OrderDetailModal ref={modalRef}></OrderDetailModal>
    </>
  )
}

export default ViewOrders
