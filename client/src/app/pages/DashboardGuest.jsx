import faker from "faker"
import { useState } from "react"
import StoreList from "../components/StoreList"

const DashboardGuest = () => {
  const generateStores = () => {
    const stores = []
    for (let i = 0; i < faker.datatype.number({ min: 10, max: 100 }); i++) {
      const store = {
        id: `STR${faker.datatype.number({
          min: 100000,
          max: 999999,
        })}`,
        name: faker.company.companyName(),
        brief: faker.lorem.sentences(),
        image: `https://source.unsplash.com/random/900x900?food,${faker.datatype.number()}`,
        location: faker.address.city(),
        phoneNumber: faker.phone.phoneNumber(),
      }
      stores.push(store)
    }
    return stores
  }

  const [stores] = useState(generateStores())

  return (
    <>
      <div className="store-search"></div>
      <div className="store-list">
        {stores && <StoreList stores={stores}></StoreList>}
      </div>
    </>
  )
}

export default DashboardGuest
