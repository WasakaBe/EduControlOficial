import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Index from '../View/Public';
import IndexAlumn from '../View/Alumns'
import IndexFamily from '../View/PatherFamily';
import IndexCE from '../View/Teacher_CE/IndexCE';
import { Login,RegisterSelection,RegisterAdmin,RegisterAlumn,RegisterDocent,RegisterDocentCE,RegisterFamily,ForgoutPassword,ForgoutToken,ForgoutUpdate } from '../MVC';

export default function AppRoutes(){
  return(
    <div>
      <Router>
        <Routes>
            <Route exact path="/" element={<Index />} />
            <Route path="/IndexAlumn" element={<IndexAlumn/>} />
            <Route path="/IndexFamily" element={<IndexFamily/>} />
            <Route path="/IndexCE" element={<IndexCE/>} />
            <Route path="/Login" element={<Login/>} />
            <Route path="/RegisterSelection" element={<RegisterSelection/>} />
            <Route path="/RegisterAdmin" element={<RegisterAdmin/>} />
            <Route path="/RegisterAlumn" element={<RegisterAlumn/>} />
            <Route path="/RegisterDocent" element={<RegisterDocent/>} />
            <Route path="/RegisterDocentCE" element={<RegisterDocentCE/>} />
            <Route path="/RegisterFamily" element={<RegisterFamily/>} />
            <Route path="/ForgoutPassword" element={<ForgoutPassword/>} />
            <Route path="/ForgoutToken/:correo" element={<ForgoutToken/>} />
            <Route path="/ForgoutUpdate/:correo" element={<ForgoutUpdate/>} />
        </Routes>
      </Router>
    </div>
  )
}
