import { BrowserRouter, Switch, Route } from "react-router-dom"
import { Redirect } from "react-router"
import AdminLayoutRoute from "./../layouts/AdminLayout"
import CustomerLayoutRoute from "./../layouts/CustomerLayout"
import NotFound from "./../pages/404"
import ViewOrders from "../pages/ViewOrders"
import ViewMenu from "./../pages/ViewMenu"
import Stores from "../pages/Stores"
import Store from "../pages/Store"

const Router = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact>
          <Redirect to="/store" />
        </Route>
        <Route path="/admin" exact>
          <Redirect to="/admin/view-orders" />
        </Route>
        <AdminLayoutRoute
          exact
          path="/admin/view-orders"
          component={ViewOrders}
        />
        <AdminLayoutRoute exact path="/admin/view-menu" component={ViewMenu} />
        <CustomerLayoutRoute exact path="/store" component={Stores} />
        <CustomerLayoutRoute exact path="/store/:id" component={Store} />
        <Route path="*">
          <NotFound />
        </Route>
      </Switch>
    </BrowserRouter>
  )
}

export default Router
