
import Contato from './components/Contato';
import Header from './components/Header';
import Inicio from './components/Inicio';
function App() {
  return (
    <div className="bg-[#191919] w-full min-h-screen font-poppins">
      <Header></Header>
      <Inicio></Inicio>
      <Contato></Contato>
    </div>
  );
}

export default App;
