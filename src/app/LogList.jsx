import { Card, Container } from "semantic-ui-react"
import LogItem from "./components/LogList/LogItem"
import { generateKey } from "./helpers/crypto-helper"
import { diff } from "./helpers/date-helper"

const LogList = props => {
  const { logs } = props

  const renderLogs = logs.sort((a, b) => {
    const diffResult = diff(a.date, b.date)
    if (diffResult > 0) return 1
    if (diffResult < 0) return -1
    return 0
  })

  return (
    <Container>
      <Card.Group>
        {renderLogs &&
          renderLogs.map(log => (
            <LogItem key={generateKey("logItem")} log={log}></LogItem>
          ))}
      </Card.Group>
    </Container>
  )
}

export default LogList
