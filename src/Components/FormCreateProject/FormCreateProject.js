import { useEffect, useState } from 'react';
import dateNow from '../../helpers/dateNow';
import {
  addProject,
  getClients,
  getOneClient,
  getProject,
} from '../../services/api';
import Button from '../Button/Button';
import SelectClient from '../SelectClient/SelectClient';
import { DivButton, Form } from './FormCreateProject.styled';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import SelectProject from '../SelectProject/SelectProject';
const FormCreateProject = () => {
  const [clients, setClients] = useState([]);
  const [oneClient, setOneClient] = useState('');
  const [oneProject, setOneProject] = useState(null);
  const [projects, setProjects] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    getProject().then(data => {
      setProjects(data.projects);
      setLoading(false);
    });
    getClients().then(data => {
      setClients(data.clients);
      setLoading(false);
    });
  }, []);

  const handleChange = e => {
    setOneClient(e.target.value);
  };

  const normalIdProject = item => {
    if (item) {
      return `${item.id}-${item.id_project}`;
    }
    return '';
  };

  const handleChangeProject = e => {
    const string = e.target.value;
    const newObject = projects.find(item => normalIdProject(item) === string);
    const { id_dep_client } = newObject;
    setOneProject(newObject);
    if (oneClient !== id_dep_client) {
      getOneClient(id_dep_client).then(data => {
        setOneClient(data.client.id_dep_client);
      });
    }
  };

  const newIdProject = oneClient => {
    const newFormatDate = dateNow().replace(/\./g, '');
    const normalIdProject = `${oneClient}-${newFormatDate}`;

    return normalIdProject;
  };

  function compareClients(a, b) {
    const depA = a.id_dep_client;
    const depB = b.id_dep_client;
    if (depA < depB) return -1;
    if (depA > depB) return 1;
  }
  const handleSubmit = e => {
    e.preventDefault();
    if (oneClient) {
      addProject({
        id_dep_client: oneClient,
        id_project: newIdProject(oneClient),
      })
        .then(data => {
          setProjects(prevState =>
            [...prevState, data.project].sort(compareClients).sort(),
          );
          setOneProject(data.project);
        })
        .catch(() => toast.error('Проект з цим клієнтом і цією датою вже є'));
    }
  };

  return (
    <>
      {loading ? (
        <h2>loading</h2>
      ) : (
        <Form onSubmit={e => handleSubmit(e)}>
          <SelectClient
            value={oneClient}
            text={'Client №'}
            items={clients}
            handleChange={handleChange}
            normalIdProject={normalIdProject}
          />
          <DivButton>
            <Button boolean={!oneClient}>Create Project</Button>
          </DivButton>
          <SelectProject
            oneProject={oneProject}
            text="Project №"
            items={projects}
            handleChange={handleChangeProject}
            normalIdProject={normalIdProject}
          />
        </Form>
      )}
    </>
  );
};

export default FormCreateProject;
