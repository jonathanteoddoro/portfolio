import UnidadeServico from '../UnidadeServico';

function Servicos() {
  return (
    <>
      <h2
        id="servicos"
        className="text-center text-[35px] font-extrabold text-white"
      >
        SERVIÇOS OFERTADOS
      </h2>
      <div className="flex justify-between mt-[27px] mb-[96px] flex-wrap gap-y-6">
        <UnidadeServico 
          text='Sites e Sistemas'
          description='Soluções digitais sob medida para atender às especificidades do seu negócio.'></UnidadeServico>
        <UnidadeServico 
          text='Análise de dados'
          description='Transformação de dados em estratégias eficazes para o crescimento da sua empresa.'></UnidadeServico>
        <UnidadeServico 
          text='Inteligências Artificiais'
          description='Implementação de IAs personalizadas para otimizar processos'></UnidadeServico>
    
      </div>

    </>
  );
}
export default Servicos;
