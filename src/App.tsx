import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Layout from './components/Layout'
import Details from './pages/Details'
import Home from './pages/Home'

function App() {
  return (
    <BrowserRouter basename="/jk-book">
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route path="home" element={<Home />} />
          <Route path="details" element={<Details />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
