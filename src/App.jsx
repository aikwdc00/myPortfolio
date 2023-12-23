import { useState } from 'react'

// redux
import { Provider} from "react-redux";
import store from "@Reducer/index";

// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'

import Root from './RootRouter.jsx'

// css
// import './App.css'
import '@Public/styles/main.scss'

function App() {
  const [count, setCount] = useState(0)

  return (
    <Provider store={store}>
      <Root />
    </Provider>
  )
}

export default App
