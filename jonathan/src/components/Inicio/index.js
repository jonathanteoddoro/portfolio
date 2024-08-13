import Button from '../Button'
import Experiencia from '../Experiencia'
import Projetos from '../Projetos'
import RedesSociais from '../RedesSociais'
import Servicos from '../Servicos'
import icon from './assets/icon.jpg'
import jonathan from './jonathan.jpeg'
function Inicio(){
    const handleScrollToContact = () => {
        document.getElementById('contato').scrollIntoView({ behavior: 'smooth' });
    };

    return(
        <>
        <div id='inicio' className='md:px-[25%] px-[10%] flex flex-col justify-center'>
            <div className='flex justify-center mt-[10%]'>
                <img src={icon} className='rounded-full w-[70%] md:w-[40%]  transition-transform duration-300 transform hover:scale-110'></img>
            </div>
            <h1 className='justify-center flex font-extrabold md:text-[55px] text-[30px] text-white text-center leading-tight mt-[5%] md:mt-5%'>Jonathan Teodoro</h1>
            <h2 className='text-center bg-gradient-to-r from-[#9A33FF] to-[#FF8660] bg-clip-text text-transparent md:text-[24px] text-[16px] font-bold text-center'>Transformando ideias em experiências</h2>
            <RedesSociais></RedesSociais>
            <p className='font-light text-[#C5C5C5] md:text-[18px] text-[16px] text-center mt-[5%] '>
                Hoje, faço Engenharia de Software no Instituto de Tecnologia e Liderança - INTELI. Aqui, não aprendo somente teorias, mas aplico-as na prática a partir de projetos que buscam solucionar problemas reais.
            </p>
            <div className='flex flex-wrap flex-row justify-center gap-4 mt-[54px]'>
                <Button 
                    text='Currículo' 
                    color='bg-white'
                    fonte='text-dark'
                    onClick={() => window.open('https://drive.google.com/file/d/18ciZb6Pm6F4rBPHNLpyG1vjm-hxU5SJZ/view?usp=sharing', '_blank')}
                />
                <Button 
                    text='Contate-me' 
                    color='bg-red-transparent' 
                    fonte='text-white' 
                    onClick={handleScrollToContact}
                />
            </div>
            <Experiencia></Experiencia>
            <Projetos></Projetos>
            <Servicos></Servicos>
        </div>
        </>
    )
}
export default Inicio;
