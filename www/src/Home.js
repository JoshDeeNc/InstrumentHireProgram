import React, { useState } from 'react';
import { Button, ButtonGroup, Form, FormGroup, Input, Label, Row, Col } from 'reactstrap';
import { BrowserRouter, Link, Route, Switch } from 'react-router-dom';
import history from './history';

function Home({ toDos, deleteToDo, completeToDo }) {

  const [filter, setFilter] = useState('all');
  const changeFilter = (newFilter) => {
    setFilter(newFilter);
  };

  return (
    <div className="ToDo">

      <div class="subheader">
        <h1 class="subheader-title">
          OneMaker Academy

                    </h1>
      </div>
      <Row>
        <Col xs="12" className="mt-1 mb-1">


          <ul class="nav nav-tabs nav-justified" role="tablist">
            <li class="nav-item ">
              <a class="nav-link h2 active " data-toggle="tab" href="#tab_borders_icons-1" role="tab" aria-selected="true"><i class="fal fa-guitar mr-1"></i>  Instrument Hires</a>
            </li>
            <li class="nav-item">
              <a class="nav-link h2" data-toggle="tab" href="#tab_borders_icons-2" role="tab" aria-selected="false"><i class="fal fa-bell-on mr-1"></i> Overdue Hires </a>
            </li>

          </ul>

          <div class="tab-content border border-top-0  ">
            <div class="tab-pane fade active show" id="tab_borders_icons-1" role="tabpanel">
            <div class="row">
            <div class="col-xl-12">
              <div id="panel-1" class="panel">
                <div class="panel-hdr">
                  <h2> Hired Instrument List</h2>
                  <Link to="/newhire"><Button color="primary" className="ml-1">New Hire</Button></Link>
                  <Link to="/studentlist"><Button color="primary" className="ml-1">Students</Button></Link>
                  <Link to="/instrumentlist"><Button color="primary" className="ml-1">Instruments</Button></Link>

                </div>
                <div class="panel-container show">
                  <div class="panel-content">
                    <table class="dt-basic-example table table-bordered table-hover table-striped w-100">
                      <thead>
                        <tr>
                          <th>Date Hired</th>
                          <th>Name</th>
                          <th>Code</th>
                          <th>Instrument</th>
                          <th>Brand</th>
                          <th>Rate</th>
                          <th>Owner</th>
                          <th>Due Date</th>
                          <th>Details</th>
                        </tr>
                      </thead>
                      <tbody>
                        {toDos.map((item, index) => (
                          <tr role="row" key={item.id}>
                            <td>{new Date(item.creation_date).toLocaleDateString()}</td>
                            <td>{item.name}</td>
                            <td>{item.code}</td>
                            <td>{item.instrument}</td>
                            <td>{item.brand}</td>
                            <td>{item.rate}</td>
                            <td>{item.owner}</td>
                            <td>{new Date(item.due).toLocaleDateString()}</td>
                            <td><Link to={`/hirerecord/${item.id}`}><i class="fal fa-2x fa-arrow-circle-right float-right"></i></Link></td>
                          </tr>
                        ))}

                      </tbody>

                    </table>

                  </div>
                </div>
              </div>
            </div>
          </div>
                          </div>
            <div class="tab-pane fade" id="tab_borders_icons-2" role="tabpanel">
            <div class="row">
            <div class="col-xl-12">
              <div id="panel-1" class="panel">
                <div class="panel-hdr">
                  <h2>Overdue Hire Instrument List</h2>

                </div>
                <div class="panel-container show">
                  <div class="panel-content">
                    <table class="dt-basic-example table table-bordered table-hover table-striped w-100">
                      <thead>
                        <tr>
                          <th>Due Date </th>
                          <th>No. of Days</th>
                          <th>Name</th>
                          <th>Code</th>
                          <th>Instrument</th>
                          <th>Brand</th>
                          <th>Rate</th>
                          <th>Date Hired</th>
                          <th>Owner</th>
                          <th>Details</th>
                        </tr>
                      </thead>
                      <tbody>
                        {toDos.filter(item => new Date(item.due) < new Date()).map((item, index) => (
                          <tr role="row" key={item.id}>
                            <td>{new Date(item.due).toLocaleDateString()}</td>
                            <td> <span class="txt-red">{Math.floor((new Date().getTime() - new Date(item.due).getTime())/(1000 * 60 * 60 * 24))}</span></td>
                            <td>{item.name}</td>
                            <td>{item.code}</td>
                            <td>{item.instrument}</td>
                            <td>{item.brand}</td>
                            <td>{item.rate}</td>
                            <td>{new Date(item.creation_date).toLocaleDateString()}</td>
                            <td>{item.owner}</td>
                            <td><Link to={`/hirerecord/${item.id}`}><i class="fal fa-2x fa-arrow-circle-right float-right"></i></Link></td>
                          </tr>
                        ))}

                      </tbody>

                    </table>

                  </div>
                </div>
              </div>
            </div>
          </div>
                     </div>

          </div>

      
        </Col>
      </Row>
      <Row>
        <Col xs="12" className="mt-1 mb-1">

         
        </Col>
      </Row>
    </div >
  );
}


export default Home;