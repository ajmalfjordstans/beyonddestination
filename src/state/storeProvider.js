'use client'

const { store } = require("@/state/store");
const { Provider } = require("react-redux");

export default function StoreProvider({ children }) {
  return (
    <Provider store={store}>
      {children}
    </Provider>
  )
}