import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useSidebar } from "../../context/SidebarContext";
import Header from "../../components/Header/Header";
import Navbar from "../../components/Navbar/Navbar";

export default function Login() {
  const { open } = useSidebar();
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");
  const [loading, setLoading] = useState(false);
  const [erros, setErros] = useState({ email: false, senha: false });

  const API_URL = "https://api-sistema-hc.onrender.com/";

  const handleLogin = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (loading) return;

    if (!email || !senha) {
      alert("Email e senha são obrigatórios!");
      return;
    }

    setLoading(true);

    try {
      const response = await fetch(API_URL + "conta_paciente", {
        method: "GET",
        headers: { "Content-type": "application/json" },
      });

      if (response.ok) {
        const contas = await response.json();
        const contaEncontrada = contas.find((conta: any) => conta.email === email && conta.senha === senha);

        if (contaEncontrada) {
          navigate(`/perfil/${contaEncontrada.email}`);
        } else {
          alert("Email ou senha incorretos!");
          setLoading(false);
        }
      } else {
        alert("Erro ao buscar contas!");
        setLoading(false);
      }
    } catch (error) {
      console.error(error);
      alert("Erro de conexão com o servidor!");
      setLoading(false);
    }
  };

  function resetForm(input: string) {
    setErros((prev) => ({ ...prev, [input]: false }));
  }

  const getLabelClass = (campoErro: boolean) => `flex flex-col font-semibold text-[1.2rem] lg:text-xl ${campoErro ? "text-[#FF0000]" : "text-[#0077C8]"}`;

  const getInputClass = (campoErro: boolean) =>
    `p-2 text-black font-normal text-[1.2rem] lg:text-xl outline-none border-b-2 ${campoErro ? "border-[#FF0000]" : "border-[#0077C8]"}`;

  return (
    <>
      <div
        className={`absolute right-0 z-0 w-full overflow-hidden transition-all duration-300 flex flex-col ${
          open ? "md:w-[77%] lg:w-[81%] xl:w-[84%]" : "md:w-[93%] lg:w-[94.5%] xl:w-[96%]"
        }`}>
        <Header titulo='Login' icone='./Icons/login_icon.svg' alt='Ícone de Pessoa simbolizando a página de login' />
        <Navbar />
        <form onSubmit={handleLogin} className='flex flex-col m-auto w-[90%] md:w-[75%] lg:w-[60%] xl:w-[45%] py-4 my-4 gap-5 text-[#0077C8] font-bold text-2xl'>
          <h3 className='text-[#0077C8] font-bold font-[InterItalic] text-2xl'>Acesso à Conta:</h3>
          <label htmlFor='email' className={getLabelClass(erros.email)}>
            Email:
            <input
              id='email'
              name='email'
              type='email'
              placeholder='seu.email@dominio.com'
              value={email}
              onFocus={() => resetForm("email")}
              onChange={(e) => setEmail(e.target.value)}
              className={getInputClass(erros.email)}
              autoComplete='username'
              required
            />
          </label>
          <label htmlFor='senha' className={getLabelClass(erros.senha)}>
            Senha:
            <input
              id='senha'
              name='senha'
              type='password'
              placeholder='Digite sua senha'
              value={senha}
              onFocus={() => resetForm("senha")}
              onChange={(e) => setSenha(e.target.value)}
              className={getInputClass(erros.senha)}
              autoComplete='current-password'
              required
            />
          </label>

          <button
            type='submit'
            disabled={loading}
            className={`flex items-center justify-around self-end rounded-lg p-2 h-10 text-white text-xl font-bold transition-all duration-300 shadow ${
              loading ? "bg-gray-400 w-[120px] cursor-not-allowed" : "bg-[#0077C8] w-[100px]"
            }`}>
            {loading ? "Entrando..." : "Entrar"}
          </button>
        </form>

        <p className='self-center pb-4'>
          Não possui conta?{" "}
          <Link to='/cadastro' className='text-[#0077C8]'>
            Crie uma aqui
          </Link>
        </p>
      </div>
    </>
  );
}
