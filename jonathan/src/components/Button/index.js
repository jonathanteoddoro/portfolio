function Button({ fonte, text, color = 'bg-white', onClick }) {
    return (
      <button
        className={`${color} ${fonte} md:w-2/5 w-5/6 md:h-14 h-11 rounded-[50px] font-bold text-[20px] border-2 border-white transition-transform duration-300 transform hover:scale-110`}
        type="button"
        onClick={onClick}
      >
        {text}
      </button>
    );
  }
  
  export default Button;