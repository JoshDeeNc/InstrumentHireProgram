import React, { useState } from 'react';
import { Button, ButtonGroup, Form, FormGroup, Input, Label, Row, Col } from 'reactstrap';



function Home({ toDos, addToDo, deleteToDo, completeToDo }) {
  const [filter, setFilter] = useState('all');

  const changeFilter = (newFilter) => {
    setFilter(newFilter);
  };

  return (
    
    <div className="ToDo">
      <Row>
        <Col xs="12" className="mt-1 mb-1">

          <div class="row">
            <div class="col-xl-12">
              <div id="panel-1" class="panel">
                <div class="panel-hdr">
                  <h2>
                    New Hire
                          </h2>

                </div>
                <div class="panel-container show">
                  <div class="panel-content">
                    <table class="dt-basic-example table table-bordered table-hover table-striped w-100">
                      <thead>
                        <tr>
                          <th>Name</th>
                          <th>Code</th>
                          <th>Instrument</th>
                          <th>Brand</th>
                          <th>Rate</th>
                          <th>Owner</th>
                          <th>Due Date</th>
                        </tr>
                      </thead>
                      <tbody>
                        {toDos.filter(item => ((filter === 'all') || (filter === 'complete' && item.completed) || (filter === 'incomplete' && !item.completed))).map((item, index) => (
                          <tr role="row" key={item.id}>
                            <td>{item.name}</td>
                            <td>{item.code}</td>
                            <td>{item.instrument}</td>
                            <td>{item.brand}</td>
                            <td>{item.rate}</td>
                            <td>{item.owner}</td>
                            <td>{item.due}</td>
                          </tr>
                        ))}

                      </tbody>

                    </table>

                  </div>
                </div>
              </div>
            </div>
          </div>

          <Form inline>
            <FormGroup>
              <Label for="newToDo" hidden>ToDo</Label>
              <Input type="text" name="name" id="newToDoName" placeholder="new name" />
              <Input type="text" name="code" id="newToDoCode" placeholder="new code" />
              <Input type="text" name="instrument" id="newToDoInstrument" placeholder="new instrument" />
              <Input type="text" name="brand" id="newToDoBrand" placeholder="new brand" />
              <Input type="text" name="rate" id="newToDoRate" placeholder="new rate" />
              <Input type="text" name="owner" id="newToDoOwner" placeholder="new owner" />
              <Input type="text" name="date" id="newToDoDueDate" placeholder="new date" />
            </FormGroup>
            <Button onClick={addToDo} color="primary" className="ml-1">Add</Button>
          </Form>
        </Col>
        <Col xs="12" className="mt-1 mb-1">
          <ButtonGroup>
            <Button onClick={(e) => changeFilter('all')} color={(filter === 'all') ? 'primary' : 'secondary'}>All</Button>
            <Button onClick={(e) => changeFilter('complete')} color={(filter === 'complete') ? 'primary' : 'secondary'}>Complete</Button>
            <Button onClick={(e) => changeFilter('incomplete')} color={(filter === 'incomplete') ? 'primary' : 'secondary'}>Incomplete</Button>
          </ButtonGroup>
        </Col>
        <Col xs="12" className="mt-1 mb-1">
          <ul className="list-group">
            {toDos.filter(item => ((filter === 'all') || (filter === 'complete' && item.completed) || (filter === 'incomplete' && !item.completed))).map((item, index) => (
              <li className="list-group-item" key={item.id}>
                <Row>
                  <Col xs="7" sm="8" className={item.completed ? 'completed' : ''}>
                    {item.code}
                  </Col>
                  <Col xs="5" sm="4">
                    <Button data-index={index} data-item-id={item.id} onClick={(e) => deleteToDo(index, item.id)} color="danger" size="sm" className="float-right toDoButton" title="Delete ToDo">
                      <span className="oi oi-delete"></span>
                    </Button>
                    <Button data-index={index} data-item-id={item.id} onClick={(e) => completeToDo(item.id)} outline={!item.completed} disabled={item.completed} color="success" size="sm" className="float-right toDoButton" title="Complete ToDo">
                      <span className="oi oi-check"></span>
                    </Button>
                  </Col>
                </Row>
              </li>
            ))}
          </ul>
        </Col>
      </Row>
    </div >
  );
}


export default Home;
