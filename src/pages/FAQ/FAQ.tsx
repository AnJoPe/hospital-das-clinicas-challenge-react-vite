import Header from "../../components/Header/Header";
import Pergunta from "../../components/Pergunta/Pergunta";

export default function FAQ() {
  return (
    <>
      <Header titulo='Perguntas Frequentes' icone='./Icons/faq_icon.svg' />
      <div className='flex flex-col items-center py-7'>
        <Pergunta
          pergunta='O que é uma consulta online ou híbrida?'
          resposta='Consultas online são feitas por vídeo chamada, sem a
                    necessidade de ir até o hospital. Já as consultas híbridas combinam atendimentos presenciais e
                    virtuais, dependendo da necessidade do paciente.'
        />
        <hr className='my-5 border-2 border-[#68bfc2] rounded mx-10 shadow-md w-[95%]' />
        <Pergunta
          pergunta='E se eu tiver dificuldades com tecnologia?'
          resposta='Você pode contar com nosso suporte digital humanizado. Temos tutoriais simples, passo a passo, e até ajuda por telefone ou WhatsApp para te orientar antes da consulta.'
        />
        <hr className='my-5 border-2 border-[#68bfc2] rounded mx-10 shadow-md w-[95%]' />
        <Pergunta
          pergunta='O que acontece se eu perder a consulta?'
          resposta='Recomendamos que você contate o suporte do HC, o quanto antes, pelo WhatsApp ou telefone. Assim, eles podem ajudar você a remarcar ou entender o que dificultou seu acesso, evitando perdas futuras.'
        />
        <hr className='my-5 border-2 border-[#68bfc2] rounded mx-10 shadow-md w-[95%]' />
        <Pergunta
          pergunta='A consulta online é segura?'
          resposta='Sim. Todos os dados são protegidos e a conversa com o profissional de saúde é sigilosa, como em uma consulta presencial.'
        />
        <hr className='my-5 border-2 border-[#68bfc2] rounded mx-10 shadow-md w-[95%]' />
        <Pergunta
          pergunta='Alguém vai me avisar quando for a hora da consulta?'
          resposta='Sim! Lembretes são enviados, automaticamente, antes da consulta. Algumas formas de comunicação nas quais você seria avisado(a): Whatsapp, Email, Telefone etc.'
        />
        <hr className='my-5 border-2 border-[#68bfc2] rounded mx-10 shadow-md w-[95%]' />
        <Pergunta
          pergunta='Essa plataforma é feita pelo Hospital das Clínicas?'
          resposta='Não! Essa plataforma foi feita por uma equipe, de estudantes da FIAP, participante do Desafio fornecido pelo Hospital das Clínicas. Nosso objetivo é auxiliar aqueles que encontram dificuldades ao interagirem com a tecnologia, mais especificamente ao acessar os sistemas do Hospital das Clínicas.

'
        />
        <hr className='my-5 border-2 border-[#68bfc2] rounded mx-10 shadow-md w-[95%]' />
      </div>
    </>
  );
}
