import { FaSearch } from 'react-icons/fa';

function Buscador() {
  return (
    <div className="barraDeBusqueda">
      <form method="get" action="index.js">
        <input type="search" placeholder="Buscar a alguien... " />
        <button id="buscarContacto">
          <FaSearch />
        </button>
      </form>
    </div>
  );
}

export default Buscador;
