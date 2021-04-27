import React, { useState } from 'react';
import { Button, ButtonGroup, Form, FormGroup, Input, Label, Row, Col } from 'reactstrap';
import { BrowserRouter, Link, Route, Switch } from 'react-router-dom';


function StudentList({ studentList, deleteToDo, completeToDo }) {
  const [filter, setFilter] = useState('all');

  const changeFilter = (newFilter) => {
    setFilter(newFilter);
  };

  return (
    <div className="ToDo">

<div class="subheader">
                    <h1 class="subheader-title">
                    Student List

                    </h1>
                </div>
      <Row>
        <Col xs="12" className="mt-1 mb-1">

          <div class="row">
            <div class="col-xl-12">
              <div id="panel-1" class="panel">
                <div class="panel-hdr">
                  <h2>Student List</h2>
                    <Link to="/newstudent"><Button color="primary" className="ml-1">New Student</Button></Link>

                </div>
                <div class="panel-container show">
                  <div class="panel-content">
                    <table class="dt-basic-example table table-bordered table-hover table-striped w-100">
                      <thead>
                        <tr>
                          <th>First Name</th>
                          <th>Last Name</th>
                          <th>Phone Number</th>
                          <th>Email</th>
                          <th>Details</th>
                        </tr>
                      </thead>
                      <tbody>
                        {studentList.map((item, index) => (
                          <tr role="row" key={item.id}>
                            <td>{item.firstName}</td>
                            <td>{item.lastName}</td>
                            <td>{item.phone}</td>
                            <td>{item.email}</td>
                            <td><Link to={`/studentrecord/${item.id}`}><i class="fal fa-2x fa-arrow-circle-right float-right"></i></Link></td>
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


export default StudentList;