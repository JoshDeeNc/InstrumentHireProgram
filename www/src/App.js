import React, { useState, useEffect } from 'react';
import { Container, Jumbotron, Row, Col, Alert, Button } from 'reactstrap';
import { BrowserRouter, Link, Route, Switch, Redirect } from 'react-router-dom';
import axios from 'axios';
import Home from './Home';
import NewHire from './NewHire';
import HireRecord from './HireRecord';
import InstrumentList from './InstrumentList';
import NewInstrument from './NewInstrument';
import InstrumentRecord from './InstrumentRecord';
import StudentList from './StudentList';
import NewStudent from './NewStudent';
import StudentRecord from './StudentRecord'
import './App.css';

import config from './config';

function App() {
  const [alert, setAlert] = useState();
  const [alertStyle, setAlertStyle] = useState('info');
  const [alertVisible, setAlertVisible] = useState(false);
  const [alertDismissable, setAlertDismissable] = useState(false);
  const [idToken, setIdToken] = useState('');
  const [toDos, setToDos] = useState([]);
  const [instInventory, setInstInventory] = useState([]);
  const [studentList, setStudents] = useState([]);

  useEffect(() => {
    getIdToken();
    if (idToken.length > 0) {
      getAllInstruments();
      getAllStudents();
      getAllTodos();
    }
  }, [idToken]);

  axios.interceptors.response.use(response => {
    console.log('Response was received');
    return response;
  }, error => {
    window.location.href = config.redirect_url;
    return Promise.reject(error);
  });

  function onDismiss() {
    setAlertVisible(false);
  }

  function updateAlert({ alert, style, visible, dismissable }) {
    setAlert(alert ? alert : '');
    setAlertStyle(style ? style : 'info');
    setAlertVisible(visible);
    setAlertDismissable(dismissable ? dismissable : null);
  }

  const clearCredentials = () => {
    window.location.href = config.redirect_url;
  }

  const getIdToken = () => {
    const hash = window.location.hash.substr(1);
    const objects = hash.split("&");
    objects.forEach(object => {
      const keyVal = object.split("=");
      if (keyVal[0] === "id_token") {
        setIdToken(keyVal[1]);
      }
    });
  };

  const getAllTodos = async () => {
    const result = await axios({
      url: `${config.api_base_url}/item/`,
      headers: {
        Authorization: idToken
      }
    }).catch(error => {
      console.log(error);
    });

    console.log(result);

    if (result && result.status === 401) {
      clearCredentials();
    } else if (result && result.status === 200) {
      console.log(result.data.Items);
      setToDos(result.data.Items);
    }
  };

  const addToDo = async (event) => {
    const name = document.getElementById('newToDoName').value;
    const code = document.getElementById('newToDoCode').value;
    const instrument = document.getElementById('newToDoInstrument').value;
    const brand = document.getElementById('newToDoBrand').value;
    const rate = document.getElementById('newToDoRate').value;
    const owner = document.getElementById('newToDoOwner').value;
    const dueDate = document.getElementById('newToDoDueDate').value;
    console.log(name);
    if (!name || name === '' || !code || code === '' || !instrument || instrument === ''
      || !brand || brand === '' || !rate || rate === '' || !owner || owner === '' || !dueDate || dueDate === '') return;

    const newToDo = {
      "name": name,
      "code": code,
      "instrument": instrument,
      "brand": brand,
      "rate": rate,
      "owner": owner,
      "due": dueDate,
    };

    const result = await axios({
      method: 'POST',
      url: `${config.api_base_url}/item/`,
      headers: {
        Authorization: idToken
      },
      data: newToDo
    });

    if (result && result.status === 401) {
      clearCredentials();
    } else if (result && result.status === 200) {
      getAllTodos();
      name = '';
      code = '';
      instrument = '';
      brand = '';
      rate = '';
      owner = '';
      dueDate = '';
    }
  }

  const updateToDo = async (itemId, event) => {
    if (itemId === null) return;
    const name = document.getElementById('editToDoName').value;
    const code = document.getElementById('editToDoCode').value;
    const instrument = document.getElementById('editToDoInstrument').value;
    const brand = document.getElementById('editToDoBrand').value;
    const rate = document.getElementById('editToDoRate').value;
    const owner = document.getElementById('editToDoOwner').value;
    const dueDate = document.getElementById('editToDoDueDate').value;
    console.log(name);
    if (!name || name === '' || !code || code === '' || !instrument || instrument === ''
      || !brand || brand === '' || !rate || rate === '' || !owner || owner === '' || !dueDate || dueDate === '') return;
      
    const updateToDo = {
      "name": name,
      "completed": true,
      "code": code,
      "instrument": instrument,
      "brand": brand,
      "rate": rate,
      "owner": owner,
      "due": dueDate
    };

    const result = await axios({
      method: 'PUT',
      url: `${config.api_base_url}/item/${itemId}`,
      headers: {
        Authorization: idToken
      },
      data: updateToDo
    });

    if (result && result.status === 401) {
      clearCredentials();
      console.log(result)
    } else if (result && result.status === 200) {
      getAllTodos();
    }
  }

  const deleteToDo = async (itemId) => {
    if (itemId === null) return;

    const result = await axios({
      method: 'DELETE',
      url: `${config.api_base_url}/item/${itemId}`,
      headers: {
        Authorization: idToken
      }
    });

    if (result && result.status === 401) {
      clearCredentials();
    } else if (result && result.status === 200) {
      getAllTodos();
    }
    return result;
  }

  const completeToDo = async (itemId) => {
    if (itemId === null) return;

    const result = await axios({
      method: 'POST',
      url: `${config.api_base_url}/item/${itemId}/done`,
      headers: {
        Authorization: idToken
      }
    });

    if (result && result.status === 200) {
      getAllTodos();
    }
  }

  const getAllInstruments = async () => {
    const result = await axios({
      url: `${config.api_base_url}/instrument/`,
      headers: {
        Authorization: idToken
      }
    }).catch(error => {
      console.log(error);
    });

    console.log(result);

    if (result && result.status === 401) {
      clearCredentials();
    } else if (result && result.status === 200) {
      console.log(result.data.Items);
      setInstInventory(result.data.Items);
    }
  };

  const addInstrument = async (event) => {
    const code = document.getElementById('newInstCode').value;
    const type = document.getElementById('newInstType').value;
    const object = document.getElementById('newInstName').value;
    const brand = document.getElementById('newInstBrand').value;
    const rate = document.getElementById('newInstRate').value;
    const purchVal = document.getElementById('newInstPurchVal').value
    const depreciation = document.getElementById('newInstDepr').value;
    const owner = document.getElementById('newInstOwner').value;
    
    if (!code || code === '' || !type || type === '' || !object || object === ''
      || !brand || brand === '' || !rate || rate === '' || !purchVal || purchVal === '' 
      || !depreciation || depreciation === '' || !owner || owner === '') return;

    const newInstrument = {
      "code": code,
      "type": type,
      "object": object,
      "brand": brand,
      "rate": rate,
      "purchaseValue": purchVal,
      "depreciation": depreciation,
      "owner": owner,
      "available": true
    };

    const result = await axios({
      method: 'POST',
      url: `${config.api_base_url}/instrument/`,
      headers: {
        Authorization: idToken
      },
      data: newInstrument
    });

    if (result && result.status === 401) {
      clearCredentials();
    } else if (result && result.status === 200) {
      getAllInstruments();
      code = '';
      type = '';
      object = '';
      brand = '';
      rate = '';
      purchVal = '';
      depreciation = '';
      owner = '';
      window.location.href = "/instrumentlist";
    }
  }

  const updateInstrument = async (itemId, event) => {
    const code = document.getElementById('editInstCode').value;
    const type = document.getElementById('editInstType').value;
    const object = document.getElementById('editInstName').value;
    const brand = document.getElementById('editInstBrand').value;
    const rate = document.getElementById('editInstRate').value;
    const purchVal = document.getElementById('editInstPurchVal').value
    const depreciation = document.getElementById('editInstDepr').value;
    const owner = document.getElementById('editInstOwner').value;
    
    if (!code || code === '' || !type || type === '' || !object || object === ''
      || !brand || brand === '' || !rate || rate === '' || !purchVal || purchVal === '' 
      || !depreciation || depreciation === '' || !owner || owner === '') return;

    const updateInstrument = {
      "code": code,
      "type": type,
      "object": object,
      "brand": brand,
      "rate": rate,
      "purchaseValue": purchVal,
      "depreciation": depreciation,
      "owner": owner,
      "available": true
    };

    const result = await axios({
      method: 'PUT',
      url: `${config.api_base_url}/instrument/${itemId}`,
      headers: {
        Authorization: idToken
      },
      data: updateInstrument
    });

    if (result && result.status === 401) {
      clearCredentials();
    } else if (result && result.status === 200) {
      getAllInstruments();
    }
  }

  const deleteInstrument = async (itemId) => {
    if (itemId === null) return;

    const result = await axios({
      method: 'DELETE',
      url: `${config.api_base_url}/instrument/${itemId}`,
      headers: {
        Authorization: idToken
      }
    });

    if (result && result.status === 401) {
      clearCredentials();
    } else if (result && result.status === 200) {
      getAllInstruments();
    }
    return result;
  }

  const addStudent = async (event) => {
    const firstName = document.getElementById('newFirstName').value;
    const lastName = document.getElementById('newLastName').value;
    const phone = document.getElementById('newPhoneNumber').value;
    const email = document.getElementById('newEmail').value;

    if (!firstName || firstName === '' || !lastName || lastName === '' || !phone || phone === ''
      || !email || email === '') return;

    const newStudent = {
      "firstName": firstName,
      "lastName": lastName,
      "phone": phone,
      "email": email,
    };

    const result = await axios({
      method: 'POST',
      url: `${config.api_base_url}/student/`,
      headers: {
        Authorization: idToken
      },
      data: newStudent
    });

    if (result && result.status === 401) {
      clearCredentials();
    } else if (result && result.status === 200) {
      getAllStudents();
      firstName = '';
      lastName = '';
      phone = '';
      email = '';
      window.location.href = '/studentlist';
    }
  }

  const getAllStudents = async () => {
    const result = await axios({
      url: `${config.api_base_url}/student/`,
      headers: {
        Authorization: idToken
      }
    }).catch(error => {
      console.log(error);
    });

    console.log(result);

    if (result && result.status === 401) {
      clearCredentials();
    } else if (result && result.status === 200) {
      console.log(result.data.Items);
      setStudents(result.data.Items);
    }
  };

  const updateStudent = async (itemId, event) => {
    if (itemId === null) return;
    const firstName = document.getElementById('editFirstName').value;
    const lastName = document.getElementById('editLastName').value;
    const phone = document.getElementById('editPhoneNumber').value;
    const email = document.getElementById('editEmail').value;
    
    if (!firstName || firstName === '' || !lastName || lastName === '' || !phone || phone === ''
      || !email || email === '') return;

    const updateStudent = {
      "firstName": firstName,
      "lastName": lastName,
      "phone": phone,
      "email": email,
    };

    const result = await axios({
      method: 'PUT',
      url: `${config.api_base_url}/student/${itemId}`,
      headers: {
        Authorization: idToken
      },
      data: updateStudent
    });

    if (result && result.status === 401) {
      clearCredentials();
      console.log(result)
    } else if (result && result.status === 200) {
      getAllStudents();
    }
  }

  const deleteStudent = async (itemId) => {
    if (itemId === null) return;

    const result = await axios({
      method: 'DELETE',
      url: `${config.api_base_url}/student/${itemId}`,
      headers: {
        Authorization: idToken
      }
    });

    if (result && result.status === 401) {
      clearCredentials();
    } else if (result && result.status === 200) {
      getAllStudents();
    }
    return result;
  }

  return (
    <div className="App">
      <Alert color={alertStyle} isOpen={alertVisible} toggle={alertDismissable ? onDismiss : null}>
        <p dangerouslySetInnerHTML={{ __html: alert }}></p>
      </Alert>
      <Row>
        <Col md="12">
          {idToken.length > 0 ? (
            <BrowserRouter>
              <Switch>
                <Route path="/newhire"><NewHire toDos={toDos} studentList={studentList} instInventory={instInventory} addToDo={addToDo} /></Route>
                <Route path="/hirerecord"><HireRecord deleteToDo={deleteToDo} updateToDo={updateToDo} toDos={toDos} /></Route>
                <Route path="/instrumentrecord"><InstrumentRecord deleteInstrument={deleteInstrument} updateInstrument={updateInstrument} instInventory={instInventory} /></Route>
                <Route path="/instrumentlist"><InstrumentList instInventory={instInventory} /></Route>
                <Route path="/newinstrument"><NewInstrument addInstrument={addInstrument} /></Route>
                <Route path="/studentrecord"><StudentRecord deleteStudent={deleteStudent} updateStudent={updateStudent} studentList={studentList} /></Route>
                <Route path="/studentlist"><StudentList studentList={studentList} /></Route>
                <Route path="/newstudent"><NewStudent addStudent={addStudent} /></Route>
                <Route path="/"><Home updateAlert={updateAlert} toDos={toDos} addToDo={addToDo} deleteToDo={deleteToDo} completeToDo={completeToDo} /></Route>
              </Switch>
            </BrowserRouter>
          ) : (
            <Button
              href={`https://${config.cognito_hosted_domain}/login?response_type=token&client_id=${config.aws_user_pools_web_client_id}&redirect_uri=${config.redirect_url}`}
              color="primary"
              className="mt-5 float-center"
            >
              Log In
            </Button>
          )
          }
        </Col>
      </Row>
    </div >


  );
}

export default App;