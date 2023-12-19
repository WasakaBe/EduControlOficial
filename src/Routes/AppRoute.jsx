import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Index from '../View/Public';

export default function AppRoutes(){
  return(
    <div>
      <Router>
        <Routes>
            <Route exact path="/" element={<Index />} />
        </Routes>
      </Router>
    </div>
  )
}