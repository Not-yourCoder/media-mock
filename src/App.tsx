import './App.css'
import Logo from './components/Logo'
import Sidebar from './components/Sidebar'
import Search from './components/Search'
import Seller from './components/Seller'
import Content from './components/Content'
import Artists from './components/people/Artists'

function App() {

  return (
    <>
      <div className='grid grid-cols-12 gap-6 items-center font-gilroy'>
        <Logo />
        <Search />
        <Seller />
      </div>
      <div className='grid grid-cols-12 gap-6 mt-8 overflow-y-auto font-gilroy'>
        <Sidebar />
        <Content />
        <Artists />
      </div>

    </>
  )
}

export default App
