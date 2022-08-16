import { FaUser, FaArrowAltCircleRight } from 'react-icons/fa';

const Header = () => {
  const userIconsUpdate = {
    color: 'rgb(78, 91, 94)',
    fontSize: 40,
    paddingTop: 10,
  };

  return (
    <div className="head-class">
      <div className="logoPagina">Agenda Grupo 3</div>
      <div className="apartadoUsuario">
        <div>
          <FaUser style={userIconsUpdate} />
          <span id="mostrarNombreUsuario">userName</span>
        </div>
        <div>
          <FaArrowAltCircleRight style={userIconsUpdate} />
        </div>
      </div>
    </div>
  );
};

export default Header;
