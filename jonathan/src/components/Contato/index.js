import { useState } from 'react';
import mail from './assets/mail.svg';
import phone from './assets/phone.svg';
import emailjs from '@emailjs/browser';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function Contato() {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [telefone, setTelefone] = useState('');
    const [message, setMessage] = useState('');

    function sendEmail(e) {
        e.preventDefault();
        if (name === '' || email === '' || message === '') {
            toast.error('Preencha todos os campos');
            return;
        }

        const templateParams = {
            from_name: name,
            message: message,
            email: email,
            telefone: telefone,
        };

        emailjs.send('service_gt2kfs8', 'template_c9ylk4b', templateParams, 'aGKonnhnEnR9-l-mS')
        .then((res) => {
            console.log('email enviado', res.status, res.text);
            setName('');
            setEmail('');
            setMessage('');
            setTelefone('');
            toast.success('Mensagem enviada com sucesso!');
        }, (err) => {
            console.log('ERRO', err);
            toast.error('Ocorreu um erro ao enviar a mensagem. Tente novamente.');
        });
    }

    return (
        <footer
            id="contato"
            className="px-[15%] md:h-screen py-[5%] bg-[#222222] text-white flex md:flex-row flex-col justify-between"
        >
            <ToastContainer />
            <div className="md:w-[40%] flex flex-col">
                <h3 className="text-[24px] font-bold">Tem alguma ideia?</h3>
                <p>Vamos construí-la juntos!</p>
                <br />
                <span className="flex">
                    <img src={mail} className="w-[20px] mb-4 mr-2" alt="mail icon"></img>
                    jonathanteoddoro@gmail.com
                </span>
                <span className="flex">
                    <img src={phone} className="w-[20px] mr-2" alt="phone icon"></img>(31) 995186017
                </span>
            </div>
            <div className="flex flex-col md:w-[50%] md:p-0 py-[20%] " onSubmit={sendEmail}>
                <form className="flex flex-col gap-4">
                    <div className="flex flex-col">
                        <label>Nome:</label>
                        <input
                            className="rounded-md h-[36px] bg-transparent border-2 border-[#c5c5c5] p-2"
                            onChange={(e) => setName(e.target.value)}
                            value={name}
                        ></input>
                    </div>
                    <div className="flex flex-col">
                        <label>Email:</label>
                        <input
                            className="rounded-md h-[36px] bg-transparent border-2 border-[#c5c5c5] p-2"
                            onChange={(e) => setEmail(e.target.value)}
                            value={email}
                        ></input>
                    </div>
                    <div className="flex flex-col">
                        <label>Telefone:</label>
                        <input
                            className="rounded-md h-[36px] bg-transparent border-2 border-[#c5c5c5] p-2"
                            onChange={(e) => setTelefone(e.target.value)}
                            value={telefone}
                        ></input>
                    </div>
                    <div className="flex flex-col">
                        <label>Mensagem:</label>
                        <textarea
                            className="rounded-md h-[72px] bg-transparent border-2 border-[#c5c5c5] p-2"
                            value={message}
                            onChange={(e) => setMessage(e.target.value)}
                        ></textarea>
                    </div>
                    <div className="flex justify-end">
                        <button
                            className="rounded-md h-[36px] bg-white text-black font-bold w-[40%]"
                            type="submit"
                        >
                            Enviar
                        </button>
                    </div>
                </form>
            </div>
        </footer>
    );
}

export default Contato;
