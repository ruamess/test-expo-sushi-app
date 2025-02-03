import React from 'react'
import { Provider } from 'react-redux'
import { Slot } from 'expo-router'
import store from '../store/store'
import "../../global.css"

export default function RootLayout() {
  return (
    <Provider store={store}>
      <Slot />
    </Provider>
  )
}
