import {
  Table,
  Button,
  Container,
  Modal,
  ModalBody,
  ModalHeader,
  FormGroup,
  ModalFooter,
} from 'reactstrap';

import {
  FaPlus,
  FaEraser,
  FaUserEdit,
  FaTelegramPlane,
  FaTrash,
} from 'react-icons/fa';
import 'bootstrap/dist/css/bootstrap.min.css';

//############-BAse de datos-#################\\
import users from './data/data.json';

//############Base de datos#################\\
import { useState } from 'react';

const TablaContactos = () => {
  //Track el estado de los datos
  //############_Combio estado de los datos_#################\\
  const [data, setData] = useState(users);
  //############_Cambio estado en los datos_#################\\

  //############_Cambia tamano de los iconos_#################\\
  const espacioIconos = {
    sp: {
      padding: 5,
      fontSize: 30,
      marginBottom: 5,
      color: 'rgb(78, 91, 94);',
    },
    otros: {
      padding: 5,
      fontSize: 30,
      marginBottom: 5,
      color: 'fff',
    },
  };
  //############_----_#################\\

  //Insertar Handler
  //############-Insertar-#################\\
  const [modalInsertarIsOpen, setModalInsertarIsOpen] = useState(false);

  //############_Editar_#################\\

  //Eliminar Handler
  //############-Eliminar-#################\\
  const [modalEliminarIsOpen, setModalEliminarIsOpen] = useState(false);

  const eliminar = () => {
    setData(data.filter((id) => id.id !== idSelecionado.id));
    setModalEliminarIsOpen(false);
  };
  //############_Eliminar_#################\\

  //Edicion Handler
  //############-Editar-#################\\
  const [modalEditarIsOpen, setModalEditarIsOpen] = useState(false);

  const [idSelecionado, setIdSelecionado] = useState({
    id: '',
    nombre: '',
    apellido: '',
    correo: '',
  });

  const selecionadoId = (elemento, caso) => {
    setIdSelecionado(elemento);
    caso === 'editar'
      ? setModalEditarIsOpen(true)
      : setModalEliminarIsOpen(true);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setIdSelecionado((prevState) => ({
      ...prevState,
      [name]: value,
    }));
    console.log(idSelecionado);
  };

  const editar = () => {
    var dataNueva = data;
    dataNueva.map((id) => {
      if (id.id === idSelecionado.id) {
        id.nombre = idSelecionado.nombre;
        id.apellido = idSelecionado.apellido;
        id.correo = idSelecionado.correo;
      }
    });
    setData(dataNueva);
    setModalEditarIsOpen(false);
  };

  //############_Editar_#################\\

  //Insertar
  const abrirModalInsertar = () => {
    setIdSelecionado(null);
    setModalInsertarIsOpen(true);
  };

  const insertar = () => {
    var valorInsertar = idSelecionado;
    //valorInsertar.id = data[data.length - 1].id + 1;
    console.log(valorInsertar);
    var dataNueva = data;
    dataNueva.push(valorInsertar);
    setData(dataNueva);
    setModalInsertarIsOpen(false);
  };

  //........................
  return (
    <div className="paquete">
      <div className="parteIz-botones">
        <Button
          className="agregar"
          color="light"
          onClick={() => {
            abrirModalInsertar();
          }}
        >
          {' '}
          <FaPlus style={espacioIconos.sp} />
          <span id="sp-botones-actiones"> Insertar </span>
        </Button>
        <Button className="borrarTodo" color="dark">
          {' '}
          <FaTrash style={espacioIconos.otros} />{' '}
          <span id="todos-botones-actiones"> Borrar Todo </span>
        </Button>
      </div>
      <div className="parteDr-tabla">
        <Container>
          <br />

          <Table>
            <thead>
              <tr className="text-center" id="headTable">
                <th>ID</th>
                <th>Nombre</th>
                <th>Apellido</th>
                <th>Correo</th>
                <th>Acciones</th>
              </tr>
            </thead>
            <tbody>
              {users.length === 0 ? (
                <>
                  <td>No hay contactos aun</td>
                  <td>(Vacio)</td>
                  <td>(Vacio)</td>
                  <td>(Vacio)</td>
                  <td>(Vacio)</td>
                </>
              ) : (
                users.map((usuario) => (
                  <tr key={usuario.id}>
                    <td>{usuario.id}</td>
                    <td>{usuario.nombre}</td>
                    <td>{usuario.apellido}</td>
                    <td>{usuario.correo}</td>
                    <td>
                      <div className="acciones">
                        <Button
                          color="warning"
                          onClick={() => {
                            selecionadoId(usuario, 'editar');
                          }}
                        >
                          <FaUserEdit style={espacioIconos.otros} />{' '}
                          <span id="todos-botones-actiones"> Editar </span>
                        </Button>
                        <Button
                          color="dark"
                          onClick={() => {
                            selecionadoId(usuario, 'eliminar');
                          }}
                        >
                          <FaEraser style={espacioIconos.otros} />
                          <span id="todos-botones-actiones"> Borrar </span>
                        </Button>
                        <Button color="primary">
                          <FaTelegramPlane style={espacioIconos.otros} />{' '}
                          <span id="todos-botones-actiones"> Mail </span>
                        </Button>
                      </div>
                    </td>
                  </tr>
                ))
              )}
            </tbody>
          </Table>
        </Container>
        <div className="pagination">
          <a href="#">&laquo;</a>
          <a href="#">1</a>
          <a className="active" href="#">
            2
          </a>
          <a href="#">3</a>
          <a href="#">4</a>
          <a href="#">5</a>
          <a href="#">6</a>
          <a href="#">&raquo;</a>
        </div>
        <Modal isOpen={modalInsertarIsOpen} keyboard={true}>
          <ModalHeader>
            <div>
              <h3>Insertar registro</h3>
            </div>
          </ModalHeader>

          <ModalBody>
            <FormGroup>
              <label htmlFor="id"></label>
              <input
                className="form-control"
                readOnly
                placeholder="ID"
                type="text"
                name="id"
                id="id"
                value={data[data.length - 1].id + 1}
              />
            </FormGroup>

            <FormGroup>
              <label htmlFor="nombre"></label>
              <input
                className="form-control"
                type="text"
                placeholder="Nombre"
                name="nombre"
                id="nombre"
                value={idSelecionado ? idSelecionado.nombre : ''}
              />
            </FormGroup>

            <FormGroup>
              <label htmlFor="apellido"></label>
              <input
                className="form-control"
                type="text"
                placeholder="Apellido"
                id="apellido"
                name="apellido"
                value={idSelecionado ? idSelecionado.apellido : ''}
              />
            </FormGroup>

            <FormGroup>
              <label htmlFor="correo"></label>
              <input
                className="form-control"
                type="text"
                placeholder="Correo"
                name="correo"
                id="correo"
                value={idSelecionado ? idSelecionado.correo : ''}
              />
            </FormGroup>
          </ModalBody>

          <ModalFooter>
            <Button color="primary" onClick={insertar}>
              Insertar
            </Button>
            <Button
              color="danger"
              onClick={() => {
                setModalInsertarIsOpen(false);
              }}
            >
              Cancelar
            </Button>
          </ModalFooter>
        </Modal>
        <Modal isOpen={modalEditarIsOpen} keyboard={true}>
          <ModalHeader>
            <div>
              <h3>Editar registro</h3>
            </div>
          </ModalHeader>

          <ModalBody>
            <FormGroup>
              <label htmlFor="id"></label>
              <input
                className="form-control"
                readOnly
                placeholder="ID"
                type="text"
                name="id"
                id="id"
                value={idSelecionado && idSelecionado.id}
              />
            </FormGroup>

            <FormGroup>
              <label htmlFor="nombre"></label>
              <input
                className="form-control"
                type="text"
                placeholder="Nombre"
                name="nombre"
                id="nombre"
                value={idSelecionado && idSelecionado.nombre}
                onChange={handleChange}
              />
            </FormGroup>

            <FormGroup>
              <label htmlFor="apellido"></label>
              <input
                className="form-control"
                type="text"
                placeholder="Apellido"
                id="apellido"
                name="apellido"
                value={idSelecionado && idSelecionado.apellido}
                onChange={handleChange}
              />
            </FormGroup>

            <FormGroup>
              <label htmlFor="correo"></label>
              <input
                className="form-control"
                type="text"
                placeholder="Correo"
                name="correo"
                id="correo"
                value={idSelecionado && idSelecionado.correo}
                onChange={handleChange}
              />
            </FormGroup>
          </ModalBody>

          <ModalFooter>
            <Button
              color="primary"
              onClick={() => {
                editar();
              }}
            >
              Actualizar
            </Button>
            <Button
              color="danger"
              onClick={() => {
                setModalEditarIsOpen(false);
              }}
            >
              Cancelar
            </Button>
          </ModalFooter>
        </Modal>

        <Modal isOpen={modalEliminarIsOpen} keyboard={true}>
          <ModalHeader>
            <div>
              <h3>
                Usted desea eliminar {idSelecionado && idSelecionado.nombre}
              </h3>
            </div>
          </ModalHeader>

          <ModalBody>
            <p>
              Los contactos eliminados no podr&aacute;n ser recuperados
              despu&eacute;s de haber dado click en el bot&oacute;n.
            </p>
          </ModalBody>

          <ModalFooter>
            <Button
              color="primary"
              onClick={() => {
                eliminar();
              }}
            >
              Eliminar
            </Button>
            <Button
              color="danger"
              onClick={() => {
                setModalEliminarIsOpen(false);
              }}
            >
              Cancelar
            </Button>
          </ModalFooter>
        </Modal>
      </div>
    </div>
  );
};

export default TablaContactos;
