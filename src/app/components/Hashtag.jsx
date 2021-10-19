import { Icon } from "semantic-ui-react"

const Hashtag = props => {
  const { name } = props
  return (
    <a className="hashtag" href="true">
      <Icon name="hashtag"></Icon>
      <span>{name}</span>
    </a>
  )
}

export default Hashtag
