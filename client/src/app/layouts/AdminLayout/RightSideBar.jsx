import { useRef } from "react"
import { Button, Image } from "semantic-ui-react"
import StoreInforField from "../../components/StoreInforField"
import ModifyStoreModal from "./RightSideBar/ModifyStoreModal"
import faker from "faker"
import { nanoid } from "nanoid"

const RightSideBar = () => {
  const store = {
    id: `STR${faker.datatype.number({
      min: 100000,
      max: 999999,
    })}`,
    link: `link.com/${nanoid()}`,
    image: `https://source.unsplash.com/random/?food,${faker.datatype.number()}`,
    name: `${faker.company.companyName()}`,
    address: `${faker.address.streetAddress()}, ${faker.address.county()}, ${faker.address.city()}, ${faker.address.state()}`,
    phone: faker.phone.phoneNumber(),
  }

  const { id, image, link, name, address, phone } = store
  const modalRef = useRef(null)

  const viewOrder = id => {
    modalRef.current.open(id)
  }

  const share = () => {
    console.log(link)
  }

  const copy = () => {
    console.log(link)
  }

  return (
    <div className="admin-layout_side-bar">
      <Image src={image} fluid rounded onClick={viewOrder} target="_blank" />

      <StoreInforField
        icon="linkify"
        title="Link"
        label={link}
        link={link}
      ></StoreInforField>
      <StoreInforField icon="hashtag" title="ID" label={id}></StoreInforField>
      <StoreInforField icon="home" title="Name" label={name}></StoreInforField>
      <StoreInforField
        icon="phone"
        title="Phone Number"
        label={phone}
      ></StoreInforField>
      <StoreInforField
        icon="map pin"
        title="Address"
        label={address}
      ></StoreInforField>

      <Button
        basic
        content="Share"
        labelPosition="left"
        icon="share alternate"
        onClick={share}
        color="blue"
        style={{ marginTop: 15, width: "100%" }}
      />

      <Button
        basic
        content="Copy Link"
        labelPosition="left"
        icon="linkify"
        onClick={copy}
        color="blue"
        style={{ marginTop: 15, width: "100%" }}
      />

      <ModifyStoreModal ref={modalRef}></ModifyStoreModal>
    </div>
  )
}

export default RightSideBar
