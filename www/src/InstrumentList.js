import React, { useState } from 'react';
import { Button, ButtonGroup, Form, FormGroup, Input, Label, Row, Col } from 'reactstrap';
import { BrowserRouter, Link, Route, Switch } from 'react-router-dom';


function InstrumentList({ toDos, deleteToDo, completeToDo }) {
  const [filter, setFilter] = useState('all');

  const changeFilter = (newFilter) => {
    setFilter(newFilter);
  };

  return (
    <div className="ToDo">

<div class="subheader">
                    <h1 class="subheader-title">
                        One Maker Academy

                    </h1>
                </div>
      <Row>
        <Col xs="12" className="mt-1 mb-1">

          <div class="row">
            <div class="col-xl-12">
              <div id="panel-1" class="panel">
                <div class="panel-hdr">
                  <h2>
                    Instrument Inventory
                          </h2><Button color="primary" className="ml-1"><Link to="/addhire">Add Hire</Link></Button>

                </div>
                <div class="panel-container show">
                  <div class="panel-content">
                    <table class="dt-basic-example table table-bordered table-hover table-striped w-100">
                      <thead>
                        <tr>
                          <th>Code</th>
                          <th>Instrument</th>
                          <th>Brand</th>
                          <th>Rate</th>
                          <th>Owner</th>
                          <th>Details</th>
                        </tr>
                      </thead>
                      <tbody>
                        {toDos.map((item, index) => (
                          <tr role="row" key={item.id}>
                            <td>{item.code}</td>
                            <td>{item.instrument}</td>
                            <td>{item.brand}</td>
                            <td>{item.rate}</td>
                            <td>{item.owner}</td>
                            <td><Link to={`/instrumentrecord/${item.id}`}><i class="fal fa-2x fa-arrow-circle-right float-right"></i></Link></td>
                          </tr>
                        ))}

                      </tbody>

                    </table>

                  </div>
                </div>
              </div>
            </div>
          </div>
        </Col>
      </Row>
    </div >
  );
}


export default InstrumentList;