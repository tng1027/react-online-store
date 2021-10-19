import { Route } from "react-router"

const CustomerLayout = ({ children }) => {
  return <div className="layout__default">{children}</div>
}

const CustomerLayoutRoute = ({ component: Component, ...rest }) => {
  return (
    <Route
      {...rest}
      render={props => (
        <CustomerLayout>
          <Component {...props} />
        </CustomerLayout>
      )}
    />
  )
}

export default CustomerLayoutRoute
