import { useState } from "react"
import { Image, Menu } from "semantic-ui-react"

const Header = () => {
  const [activeItem, setActiveItem] = useState(null)

  const handleItemClick = name => {
    setActiveItem(name)
  }

  return (
    <Menu className="header" stackable>
      <Menu.Item>
        <Image src="/logo/logo32.png" />
      </Menu.Item>

      <Menu.Item
        name="admin"
        active={activeItem === "admin"}
        onClick={handleItemClick}
      >
        Store Management
      </Menu.Item>

      <Menu.Item
        name="store"
        active={activeItem === "store"}
        onClick={handleItemClick}
      >
        Store Browser
      </Menu.Item>

      <Menu.Item name="sign-in" onClick={handleItemClick}>
        Sign-in
      </Menu.Item>
    </Menu>
  )
}

export default Header
