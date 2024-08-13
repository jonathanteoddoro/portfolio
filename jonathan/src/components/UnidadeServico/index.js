function UnidadeServico({text, description}) {


    return (
        <div
            className="md:w-[32%] rounded-[18px] bg-[#222222] p-4 flex flex-col items-center hover:scale-105" 
        >
            <div className="w-full">
                
                <p className="mt-1 text-center text-white font-bold text-[14px]">{text}</p>
                <p className='mt-1 text-center text-[#c5c5c5] font-ligth text-[12px]'>{description}</p>
            </div>
        </div>
    );
}

export default UnidadeServico;
