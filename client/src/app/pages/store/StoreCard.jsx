import { Card, Icon, Image } from "semantic-ui-react"

const StoreCard = ({ store }) => {
  const { image, name, id, brief } = store

  return (
    <Card>
      <Image src={image} wrapped ui={false} />
      <Card.Content>
        <Card.Header>{name}</Card.Header>
        <Card.Meta>Joined in 2016</Card.Meta>
        <Card.Description>{brief}</Card.Description>
      </Card.Content>
      <Card.Content extra>
        <a>
          <Icon name="user" />
          10 Friends
        </a>
      </Card.Content>
    </Card>
  )
}

export default StoreCard
