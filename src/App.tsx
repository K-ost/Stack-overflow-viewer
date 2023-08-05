import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import Results from './pages/Results'
import InfoPage from './pages/InfoPage'

function App() {
  return (
    <div className="app">
      <Routes>
        <Route index path="/" element={<Home />} />
        <Route path="/results" element={<Results />} />
        <Route path="/info:id" element={<InfoPage />} />
      </Routes>
    </div>
  )
}

export default App;
