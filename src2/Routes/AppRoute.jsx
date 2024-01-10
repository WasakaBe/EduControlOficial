import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Index from '../View/Public';
import IndexAlumn from '../View/Alumns'
import IndexFamily from '../View/PatherFamily';
import IndexCE from '../View/Teacher_CE/IndexCE';
//section de login
import { LoginAlumnos,LoginAdministrador,LoginCE,LoginDocentes,LoginPadres } from '../MVC/View';
//section de register
import { RegisterAdministrador,RegisterAlumno,RegisterCE,RegisterDocente,RegisterPadres } from '../MVC/View';
export default function AppRoutes(){
  return(
    <div>
      <Router>
        <Routes>
            <Route exact path="/" element={<Index />} />
            <Route path="/IndexAlumn" element={<IndexAlumn/>} />
            <Route path="/IndexFamily" element={<IndexFamily/>} />
            <Route path="/IndexCE" element={<IndexCE/>} />
            <Route path="/LoginAlumnos" element={<LoginAlumnos/>} />
            <Route path="/LoginAdministrador" element={<LoginAdministrador/>} />
            <Route path="/LoginCE" element={<LoginCE/>} />
            <Route path="/LoginDocentes" element={<LoginDocentes/>} />
            <Route path="/LoginPadres" element={<LoginPadres/>} />
            <Route path="/RegisterAdministrador" element={<RegisterAdministrador/>} />
            <Route path="/RegisterAlumno" element={<RegisterAlumno/>} />
            <Route path="/RegisterCE" element={<RegisterCE/>} />
            <Route path="/RegisterDocente" element={<RegisterDocente/>} />
            <Route path="/RegisterPadres" element={<RegisterPadres/>} />
        </Routes>
      </Router>
    </div>
  )
}