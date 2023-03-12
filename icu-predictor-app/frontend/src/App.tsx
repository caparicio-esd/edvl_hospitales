import React from 'react'
import HeaderBase from './components/HeaderBase'
import Playground from './components/Playground'
import Presentation from './components/Presentation'

const App = () => {
  return (
    <div>
      <HeaderBase />
      <Presentation />
      <Playground />
    </div>
  )
}

export default App