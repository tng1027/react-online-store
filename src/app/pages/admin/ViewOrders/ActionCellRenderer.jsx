import { Button, Icon } from "semantic-ui-react"

const ActionCellRenderer = props => {
  const { onViewOrder, data } = props
  const { id } = data

  return (
    <Button
      icon
      labelPosition="left"
      color="green"
      onClick={() => onViewOrder(id)}
      title="View Order"
    >
      <Icon name="eye" />
      View Order
    </Button>
  )
}

export default ActionCellRenderer
