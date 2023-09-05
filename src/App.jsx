import './App.css'
import { Outlet } from 'react-router-dom'
import Menu from './components/Menu'


function App()
{
  return (
    <>
      <Menu/>
      <Outlet/>
      <Rodape/>
    </>
  )
}
export default App