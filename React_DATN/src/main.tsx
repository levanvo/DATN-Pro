import React from "react"
import ReactDOM from "react-dom/client"
import App from "./App.tsx"
import { Provider } from "react-redux"
import { BrowserRouter } from "react-router-dom"
import persistor from "./App/store.tsx"
import { PersistGate } from "redux-persist/integration/react"
import { store } from "./store.ts"
ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <Provider store={store}>
    <PersistGate loading="null" persistor={persistor}>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </PersistGate>
  </Provider>
)
