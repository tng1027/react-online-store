import React, { useState } from "react"
import SignInModal from "./components/SignInModal"
import SignUpModal from "./components/SignUpModal"
import Header from "./components/Header"
import Router from "./routers/router"

function App() {
  const [isOpenSignInModal, openSignInModal] = useState(false)
  const [isOpenSignUpModal, openSignUpModal] = useState(false)

  return (
    <React.Fragment>
      <Header></Header>
      <Router></Router>

      <SignInModal
        open={isOpenSignInModal}
        setOpen={openSignInModal}
      ></SignInModal>
      <SignUpModal
        open={isOpenSignUpModal}
        setOpen={openSignUpModal}
      ></SignUpModal>
    </React.Fragment>
  )
}

export default App
