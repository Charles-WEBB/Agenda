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
  FaMailBulk,
  FaTrash,
} from 'react-icons/fa';
import 'bootstrap/dist/css/bootstrap.min.css';

import { useState } from 'react';

const TablaContactos = () => {
  const users = [];

  const usersD = [
    {
      id: 1,
      nombre: 'Paticio',
      apellido: 'Alejandro',
      email: 'paleandro@gmail.com',
    },
    {
      id: 2,
      nombre: 'Maria',
      apellido: 'Espina',
      email: 'mariaespina@gmail.com',
    },
    {
      id: 3,
      nombre: 'Maria',
      apellido: 'Espina',
      email: 'mariaespina@gmail.com',
    },
    {
      id: 4,
      nombre: 'Maria',
      apellido: 'Espina',
      email: 'mariaespina@gmail.com',
    },
    {
      id: 5,
      nombre: 'Maria',
      apellido: 'Espina',
      email: 'mariaespina@gmail.com',
    },
    {
      id: 7,
      nombre: 'Maria',
      apellido: 'Espina',
      email: 'mariaespina@gmail.com',
    },
    {
      id: 7,
      nombre: 'Maria',
      apellido: 'Espina',
      email: 'mariaespina@gmail.com',
    },
  ];

  const espacioIconos = { padding: 5, fontSize: 30 };

  const [user, setUser] = useState(users);

  const state = {
    data: users,
    form: {
      id: '',
      nombre: '',
      apellido: '',
      correo: '',
    },
    modalInsertar: false,
  };

  const mostrarModalInsertar = () => {
    this.setState({ modalInsertar: true });
  };

  const cerrarModalInsertar = () => {
    this.setState({ modalInsertar: false });
  };

  return (
    <div className="paquete">
      <div className="parteIz-botones">
        <Button
          className="agregar"
          color="success"
          onclick={() => {
            mostrarModalInsertar();
          }}
        >
          {' '}
          <FaPlus style={espacioIconos} />
          <span id="todos-botones-actiones"> Insertar </span>
        </Button>
        <Button className="borrarTodo" color="danger">
          {' '}
          <FaTrash style={espacioIconos} />{' '}
          <span id="todos-botones-actiones"> Borrar Todo </span>
        </Button>
      </div>
      <div className="parteDr-tabla">
        <Container>
          <br />
          {users.length ? (
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
                {users.map((usuario) => (
                  <tr key={usuario.id}>
                    <td>{usuario.id}</td>
                    <td>{usuario.nombre}</td>
                    <td>{usuario.apellido}</td>
                    <td>{usuario.email}</td>
                    <td>
                      <div className="acciones">
                        <Button color="primary">
                          <FaUserEdit style={espacioIconos} />{' '}
                          <span id="todos-botones-actiones"> Editar </span>
                        </Button>
                        <Button color="warning">
                          <FaEraser style={espacioIconos} />
                          <span id="todos-botones-actiones"> Borrar </span>
                        </Button>
                        <Button color="success">
                          <FaMailBulk style={espacioIconos} />{' '}
                        </Button>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </Table>
          ) : (
            <div className="emptyTable">
              <h6>No se ha agreagdo ningun usuario a&uacute;n.</h6>
            </div>
          )}
        </Container>
        <div class="pagination">
          <a href="#">&laquo;</a>
          <a href="#">1</a>
          <a class="active" href="#">
            2
          </a>
          <a href="#">3</a>
          <a href="#">4</a>
          <a href="#">5</a>
          <a href="#">6</a>
          <a href="#">&raquo;</a>
        </div>

        <Modal isOpen={this.state.modalInsertar}>
          <ModalHeader>
            <div>
              <h3>Insertar registro</h3>
            </div>
          </ModalHeader>

          <ModalBody>
            <FormGroup>
              <label for="id"></label>
              <input
                className="form-control"
                readOnly
                type="text"
                name="id"
                id="id"
              />
            </FormGroup>

            <FormGroup>
              <label for="nombre"></label>
              <input
                className="form-control"
                type="text"
                placeholder="Nombre"
                name="nombre"
                id="nombre"
              />
            </FormGroup>

            <FormGroup>
              <label for="apellido"></label>
              <input
                className="form-control"
                type="text"
                placeholder="Apellido"
                id="apellido"
                name="apelido"
              />
            </FormGroup>

            <FormGroup>
              <label for="correo"></label>
              <input
                className="form-control"
                type="text"
                placeholder="correo"
                name="correo"
                id="correo"
              />
            </FormGroup>
          </ModalBody>

          <ModalFooter>
            <Button color="primary">Insertar</Button>
            <Button color="danger">Cancelar</Button>
          </ModalFooter>
        </Modal>
      </div>
    </div>
  );
};

export default TablaContactos;
