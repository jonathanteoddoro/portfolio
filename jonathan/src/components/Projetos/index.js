import { useState } from 'react';
import UnidadeProjeto from '../UnidadeProjeto';
import jogo from './assets/image.png';
import wintoken from './assets/wintoken.png';

function Projetos() {
  const [isModalOpen, setModalOpen] = useState(false);

  const openModal = () => setModalOpen(true);
  const closeModal = () => setModalOpen(false);

  return (
    <>
      {/* Camada de desfoque */}
      {isModalOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-10 backdrop-blur-lg z-50" // Adiciona desfoque ao fundo
          onClick={closeModal}
        ></div>
      )}

      {/* Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 flex items-center justify-center z-60">
          <div className="bg-white p-4 rounded shadow-lg relative">
            <button onClick={closeModal} className="absolute top-2 right-2 p-2 bg-gray-300 rounded">
              X
            </button>
            {/* Conteúdo do modal */}
          </div>
        </div>
      )}

      <h2
        id="projetos"
        className="text-center mt-[88px] text-[35px] font-extrabold text-white"
      >
        PROJETOS
      </h2>
      <div className="flex justify-between mt-[27px] mb-[96px] flex-wrap gap-y-6">
        <UnidadeProjeto
          path={jogo}
          text="JOGO DE QUEIMADURAS"
          description="O Jogo de queimaduras é um jogo desenvolvido em parceria com a Faculdade de Medicina da USP para atuar na conscientização e prevenção de queimaduras. O jogo foi desenvolvido em um período de 10 semanas a partir do framework Phaser na linguagem Javascript."
          githubLink="https://github.com/seu-usuario/seu-repositorio"
          websiteLink="https://inteli-college.github.io/2024-T0013-IN01-G03/"
        />
        <UnidadeProjeto
          path={wintoken}
          text="WINTOKEN"
          description="Projeto realizado em 72hrs para competir no Lumx Hackathon."
          websiteLink='https://win-token.vercel.app/'
          githubLink='https://github.com/tiagovrs/WinToken'
        />
      </div>
    </>
  );
}

export default Projetos;
