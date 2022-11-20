import './app.less'
import { Content } from './components/content/Content'
import { HeaderMain } from './components/header/header-main/HeaderMain'


function App() {

  return (
    <div className="app">
      <HeaderMain className="header"></HeaderMain>
      <div className="main">
        <Content className='content' />
      </div>
    </div>
  )
}

export default App
