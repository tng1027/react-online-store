import { useState } from "react"
import { useHistory } from "react-router"
import { Icon, Image, Menu } from "semantic-ui-react"

const HeaderGuest = () => {
  const history = useHistory()
  const [activeItem, setActiveItem] = useState(null)

  const handleItemClick = name => {
    switch (activeItem) {
      case "logoff":
        // do clear authentication token
        history.push("/sign-in")
        break
      case "profile":
        break
      default:
        break
    }

    setActiveItem(name)
  }

  return (
    <Menu className="header" pointing secondary widths={5}>
      <Menu.Item></Menu.Item>
      <Menu.Item
        name="profile"
        active={activeItem === "profile"}
        onClick={() => handleItemClick("profile")}
      >
        <Icon name="user" />
        Profile
      </Menu.Item>
      <Menu.Item onClick={() => history.push("/store")}>
        <Image src="/logo/logo32.png" />
      </Menu.Item>
      <Menu.Item
        name="logoff"
        active={activeItem === "logoff"}
        onClick={() => handleItemClick("logoff")}
      >
        <Icon name="log out" />
        Sign Out
      </Menu.Item>
      <Menu.Item></Menu.Item>
    </Menu>
  )
}

export default HeaderGuest
