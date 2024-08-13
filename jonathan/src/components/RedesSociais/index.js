import linkedin from './assets/linkedin.svg';
import github from './assets/github.svg';
function RedesSociais() {
  return (
    <div className="flex justify-center mt-[16px]">
      <div className="flex flex-row justify-around md:w-[15%] gap-4 md:gap-2">
        <a
          href="https://www.linkedin.com/in/jonathanteoalves/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <button className="transition-transform duration-300 transform hover:scale-110">
            <img src={linkedin} className="md:w-[36px]" alt="LinkedIn" />
          </button>
        </a>
        <a 
          href="https://github.com/seu-usuario-github"
          target="_blank"
          rel="noopener noreferrer"
        >
          <button className="transition-transform duration-300 transform hover:scale-110">
            <img src={github} className="md:w-[36px]" alt="GitHub" />
          </button>
        </a>
      </div>
    </div>
  );
}
export default RedesSociais;
