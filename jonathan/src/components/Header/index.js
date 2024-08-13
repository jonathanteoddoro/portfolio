function Header() {
    return (
        <>
            <header className='bg-[#222222] h-16 w-full md:px-[25%] px-[10%] flex items-center justify-between hidden lg:flex'>
                <div className='text-white text-[20px]'>
                    JTeodoro
                </div>
                <div className='text-white text-[15px] gap-[71px] flex flex-row'>
                    <a href="#projetos">Projetos</a>
                    <a href="#servicos">Servicos</a>
                    <a href="#contato">Contato</a>
                </div>
            </header>
        </>
    )
}

export default Header;
