import React from 'react'
import Page from './components/templates/Page'
import axios from 'axios'

// https://keko5342.hatenadiary.jp/entry/2021/12/10/031756
axios.defaults.baseURL = `http://127.0.0.1:5432`

export default function App() {
  return (
    <Page />
  )
}