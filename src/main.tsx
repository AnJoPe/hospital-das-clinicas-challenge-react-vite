import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import App from "./App.tsx";
import "./index.css";
import Home from "./pages/Home/Home.tsx";
import FAQ from "./pages/FAQ/FAQ.tsx";
import Contato from "./pages/Contato/Contato.tsx";
import QuemSomos from "./pages/QuemSomos/QuemSomos.tsx";
import Cadastro from "./pages/Cadastro/Cadastro.tsx";
import Login from "./pages/Login/Login.tsx";
import Perfil from "./pages/Perfil/Perfil.tsx";
import RegistroPaciente from "./pages/RegistroPaciente/RegistroPaciente.tsx";
import Exames from "./pages/Exames/Exames.tsx";
import Prescricoes from "./pages/Prescricoes/Prescricoes.tsx";
import Agendamentos from "./pages/Agendamentos/Agendamentos.tsx";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<App />}>
          <Route index element={<Home />} />
          <Route path='faq' element={<FAQ />} />
          <Route path='contato' element={<Contato />} />
          <Route path='quem_somos' element={<QuemSomos />} />
          <Route path='cadastro' element={<Cadastro />} />
          <Route path='login' element={<Login />} />
          <Route path='perfil/:email' element={<Perfil />} />
          <Route path='registro_paciente' element={<RegistroPaciente />} />
          <Route path='exames' element={<Exames />} />
          <Route path='prescricoes' element={<Prescricoes />} />
          <Route path='agendamentos' element={<Agendamentos />} />
        </Route>
      </Routes>
    </BrowserRouter>
  </StrictMode>
);
