import React, { useState } from 'react';
import Modal from '../Modal';

function UnidadeProjeto({ path, text, description, githubLink, websiteLink }) {
    const [isModalOpen, setIsModalOpen] = useState(false);

    const openModal = () => {
        setIsModalOpen(true);
    };

    const closeModal = () => {
        setIsModalOpen(false);
    };

    return (
        <div
            className="md:w-[48%] rounded-[18px] bg-[#222222] p-4 cursor-pointer flex flex-col items-center hover:bg-[#444444] hover:bg-opacity-80 transition-colors duration-300"
            onClick={openModal}
        >
            <div className="w-full">
                <img src={path} alt="" className="w-full h-auto rounded-lg" />
                <span className="block mt-2 text-[#c5c5c5] font-extrabold text-[10px]">Clique aqui para visitar</span>
                <p className="mt-1 text-white font-extrabold text-[19px]">{text}</p>
            </div>

            {isModalOpen && (
                <Modal
                    closeModal={(e) => {
                        e.stopPropagation();  // Impede que o clique se propague para o pai
                        closeModal();
                    }}
                    description={description}
                    githubLink={githubLink}
                    websiteLink={websiteLink}
                />
            )}
        </div>
    );
}

export default UnidadeProjeto;
