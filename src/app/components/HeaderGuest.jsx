import { useState } from "react"
import { Image, Menu } from "semantic-ui-react"

const HeaderGuest = () => {
  const [activeItem, setActiveItem] = useState(null)

  const handleItemClick = name => {
    setActiveItem(name)
  }

  return (
    <Menu className="header" pointing secondary>
      <Menu.Item position="left"></Menu.Item>
      <Menu.Item>
        <Image src="/logo/logo32.png" />
      </Menu.Item>
      <Menu.Item position="right"></Menu.Item>
    </Menu>
  )
}

export default HeaderGuest
