import React from 'react';
import close from './assets/minimize.png'

function Modal({ closeModal, description, githubLink, websiteLink }) {
    return (
        <div className='fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center'>
            <div className='bg-[#222222] rounded-lg p-6 w-[80%] md:w-[50%] lg:w-[50%]'>
                <button onClick={closeModal} className='text-white float-right font-bold text-xl'><img src={close}></img></button>
                <h2 className='text-2xl font-bold text-white mb-4'>Detalhes do Projeto</h2>
                <p className='text-white mb-4 text-justify'>{description}</p>
                <a href={githubLink} className='text-[#c5c5c5] block mb-2' target="_blank" rel="noopener noreferrer">GitHub</a>
                <a href={websiteLink} className='text-[#c5c5c5]' target="_blank" rel="noopener noreferrer">Visitar Site</a>
            </div>
        </div>
    );
}

export default Modal;
