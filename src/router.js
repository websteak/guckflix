import { HashRouter as Router, Routes, Route } from 'react-router-dom'
import Home from './page/home/Home'

const AppRouter = () => {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<Home />}></Route>
      </Routes>
    </Router>
  )
}

export default AppRouter;