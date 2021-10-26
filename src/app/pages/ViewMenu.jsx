import { Header } from "semantic-ui-react"
import { useRef, useState } from "react"
import MenuDetailModal from "./ViewMenu/MenuDetailModal"
import MenuItemList from "../components/MenuItemList"
import { generateMenu } from "../helpers/fake-data-helper"

const ViewMenu = () => {
  const [rowData] = useState(generateMenu())
  const modalRef = useRef(null)

  const viewOrder = id => {
    modalRef.current.open(id)
  }

  return (
    <>
      <Header size="medium">View Menu</Header>
      {rowData && (
        <MenuItemList items={rowData} viewOrder={viewOrder}></MenuItemList>
      )}

      <MenuDetailModal ref={modalRef}></MenuDetailModal>
    </>
  )
}

export default ViewMenu
