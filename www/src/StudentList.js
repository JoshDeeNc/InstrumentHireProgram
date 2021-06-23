import React, { useState, useEffect } from 'react';
import { Button, ButtonGroup, Form, FormGroup, Input, Label, Row, Col } from 'reactstrap';
import { BrowserRouter, Link, Route, Switch } from 'react-router-dom';


function StudentList({ studentList, deleteToDo, completeToDo }) {

  const [qry, setQry] = useState("")
  const [searchColumns, setSearchColumns] = useState(["firstName","lastName","email","phone"])
  const columns = ["firstName","lastName","school","email","phone"]

  const [dtRange, setDtRange] = useState(false);
  useEffect(() => {
    setDateRange(dtRange)
  }, [dtRange]);

  const setDateRange = (dtRange) => {
    var a = document.getElementById('dt-range');
    if (dtRange == true) {
      a.classList.remove('dt-range');
    }
    else {
      a.classList.add('dt-range');
    }
  }

  function search() {
    if (qry != "") {
      return studentList.filter((row) =>
        searchColumns.some((column) => (row[column] && row[column].length > 0) && row[column].toString().toLowerCase().indexOf(qry.toLowerCase()) > -1)
      )
    }
    else return studentList
  }

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
                <div class="panel-hdr-dsp    ">
                  <h2>Student List</h2>
                  <Link to="/newstudent"><Button color="primary" className="ml-1">New Student</Button></Link>

                </div>
                <div class="panel-container show">
                  <div class="panel-content">
                    <div class="row mb-2 mt-n3 ">
                      <div class="col-md-5"> <input type="text" value={qry} onChange={(e) => setQry(e.target.value)} class="form-control mt-2" placeholder="search..." />
                      </div>
                      <div class="col-md-7   text-right">
                  <Button onClick={(e) => setDtRange(!dtRange)} className="btn-sm btn-transparent mt-2 "> Advanced Search</Button>
                </div>
                <div class="  dt-range p-3 " id="dt-range">
                      {columns && columns.map((column, index) => (
                      <div class="custom-control custom-checkbox custom-control-inline">
                        <input type="checkbox" class="custom-control-input" id={"checkBox"+index} checked={searchColumns.includes(column)}
                          onChange={(e) => {
                            const checked = searchColumns.includes(column);
                            setSearchColumns(prev => checked ? prev.filter(sc => sc !== column) : [...prev, column])
                          }
                          } /><label class="custom-control-label" for={"checkBox"+index}>{column}</label>
                        </div>))}
                        </div>
                    </div>
                    <table class="dt-basic-example table table-bordered table-hover table-striped w-100">
                      <thead>
                        <tr>
                          <th>First Name</th>
                          <th>Last Name</th>
                          <th>Phone Number</th>
                          <th>Email</th>
                          <th class="dtl-cel">Details</th>
                        </tr>
                      </thead>
                      <tbody>
                        {search().map((item, index) => (
                          <tr role="row" key={item.id}>
                            <td>{item.firstName}</td>
                            <td>{item.lastName}</td>
                            <td>{item.phone}</td>
                            <td>{item.email}</td>
                            <td class="al-ctr"><Link to={`/studentrecord/${item.id}`}><i class="fal fa-2x fa-arrow-circle-right float-right"></i></Link></td>
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