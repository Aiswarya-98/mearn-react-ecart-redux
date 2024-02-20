import React from "react"
import ReactDOM from "react-dom/client"
import "./index.css"
import App from "./App"
import { BrowserRouter } from "react-router-dom"
import "./bootstrap.min.css"
import "mdb-react-ui-kit/dist/css/mdb.min.css"
import "@fortawesome/fontawesome-free/css/all.min.css"
import { Provider } from "react-redux"
import store from "./Redux/store"

const root = ReactDOM.createRoot(document.getElementById("root"))
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </Provider>
  </React.StrictMode>
)
