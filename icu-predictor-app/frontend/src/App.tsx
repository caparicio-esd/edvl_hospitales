import React from 'react'
import HeaderBase from './components/HeaderBase'
import ModalWindow from './components/ModalWindow'
import Playground from './components/Playground'
import Presentation from './components/Presentation'

const App = () => {
  return (
    <div>
      <HeaderBase />
      <Presentation />
      <Playground />
      <ModalWindow />
    </div>
  )
}

export default App