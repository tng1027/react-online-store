import { useState } from "react"
import { Image, Menu } from "semantic-ui-react"

const HeaderAdmin = () => {
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
        <a href="/admin">Admin</a>
      </Menu.Item>

      <Menu.Item
        name="store"
        active={activeItem === "store"}
        onClick={handleItemClick}
      >
        <a href="/store">Store</a>
      </Menu.Item>
    </Menu>
  )
}

export default HeaderAdmin
