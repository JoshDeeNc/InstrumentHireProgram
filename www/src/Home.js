import React, { useState, useEffect } from 'react';
import { Button, ButtonGroup, Form, FormGroup, Input, Label, Row, Col, image } from 'reactstrap';
import { BrowserRouter, Link, Route, Switch } from 'react-router-dom';

import history from './history';



function Home({ toDos, deleteToDo }) {

  toDos = toDos.map(item => Object.assign({}, item, {
    creation_date: new Date(item.creation_date).toLocaleDateString(),
    due: new Date(item.due).toLocaleDateString(),
    returned: (item.returned === "" ? "" : new Date(item.due).toLocaleDateString())
  }))

  const curHires = toDos.filter(item => item.returned === "")
  const overDues = curHires.filter(function (item) {
    var parts = item.due.split("/")
    var created = new Date(parts[2], parts[1] - 1, parts[0])
    return new Date(created) < new Date()
  })
  const returnedHires = toDos.filter(item => item.returned !== "")

  const [qry, setQry] = useState("")
  const [filtDates, setFiltDates] = useState([])

  const [searchColumns, setSearchColumns] = useState(["name", "code", "instrument", "brand", "rate", "owner"])
  const columns = ["name", "code", "instrument", "brand", "size", "serialNum", "rate", "owner"];

  function search(records) {
    if (qry != "") {
      records = records.filter((row) =>
        searchColumns.some((column) => (row[column] && row[column].length > 0) && row[column].toString().toLowerCase().indexOf(qry.toLowerCase()) > -1)
      )
    }

    if (filtDates.length > 0 && dtRange) {
      console.log(filtDates)
      records = records.filter(function (item) {
        var parts = []
        if(document.getElementById("dueBox").checked) {
          parts = item.due.split("/")
        }
        else if(document.getElementById("returnedBox").checked) {
          parts = item.returned.split("/")
        }
        else {
          parts = item.creation_date.split("/")
        }
        var created = new Date(parts[2], parts[1] - 1, parts[0])
        return created >= new Date(filtDates[0]) && created <= new Date(filtDates[1])
      })
    }
    console.log(records)
    return records
  }

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

  const filterDates = () => {
    setFiltDates([document.getElementById("startDate").value, document.getElementById("endDate").value])
    //search(curHires)
  }

  const calcOv = (dt) => {
    var parts = dt.split("/")
    return new Date(parts[2], parts[1] - 1, parts[0]).getTime()
  }


  return (
    <div className="ToDo">

      <div class="subheader">
        <h1 class="subheader-title">OneMaker Academy</h1>
      </div>
      <Row>
        <Col xs="12" className="mt-1 mb-1">
          <ul class="nav nav-tabs nav-justified" role="tablist">
            <li class="nav-item ">
              <a class="nav-link h2 active " data-toggle="tab" href="#currentHires" role="tab" aria-selected="true"><i class="fal fa-guitar mr-1"></i> Current Hires</a>
            </li>
            <li class="nav-item">
              <a class="nav-link h2" data-toggle="tab" href="#ovderdueHires" role="tab" aria-selected="false"><i class="fal fa-bell-on mr-1"></i> Overdue Hires<span class="badge badge-icon bg-red pos-top ml-1 mt-2">{overDues.length}</span> </a>
            </li>
            <li class="nav-item">
              <a class="nav-link h2" data-toggle="tab" href="#returnedHires" role="tab" aria-selected="false"><i class="fal fa-hand-holding-box mr-1"></i> Returned Hires</a>
            </li>
          </ul>
              
          <div class="tab-content border border-top-0  ">
          <div class="row filter-tab p-0 pb-2  ">
             
                <div class="col-md-5"> <input type="text" value={qry} onChange={(e) => setQry(e.target.value)} class="form-control mt-2" placeholder="search..." />
                </div>
                <div class="col-md-7   text-right">
                  <Button onClick={(e) => setDtRange(!dtRange)} className="btn-sm mt-2 "> Advanced Search</Button>
                </div>
                <div class="  dt-range " id="dt-range">
                <div class="  col-12   mt-3   ">
                           
                              
                    {columns && columns.map((column, index) => (
                      <div class="custom-control custom-checkbox custom-control-inline">
                        <input type="checkbox" class="custom-control-input" id={"checkBox"+index} checked={searchColumns.includes(column)}
                          onChange={(e) => {
                            const checked = searchColumns.includes(column);
                            setSearchColumns(prev => checked ? prev.filter(sc => sc !== column) : [...prev, column])
                          }
                          } /><label class="custom-control-label" for={"checkBox"+index}>{column}</label>
                        </div>))}

                        <div class="mt-2 mb-2">

                                <div class="custom-control custom-radio custom-control-inline">
                                  <input type="radio" class="custom-control-input" id="hiredBox" name="inlineDefaultRadiosExample"  checked     />
                                  <label class="custom-control-label" for="hiredBox">Hired date</label>
                                  </div>
                                  <div class="custom-control custom-radio custom-control-inline">
                                  <input type="radio" class="custom-control-input" id="dueBox" name="inlineDefaultRadiosExample"  />
                                  <label class="custom-control-label" for="dueBox">Due date</label>
                                  </div>
                                  <div class="custom-control custom-radio custom-control-inline">

                                  <input type="radio" class="custom-control-input" id="returnedBox" name="inlineDefaultRadiosExample"   />
                                  <label class="custom-control-label" for="returnedBox">Returned date</label>
                                  </div>
                                  </div>

                                <div class="form-group row">
                                  <div class="col-md-5  ">
                                    <div class="input-group">
                                      <input type="date" class="form-control mt-2" placeholder="Select date" id="startDate" />
                                    </div>
                                  </div>
                                  <div class="col-md-5  ">
                                    <div class="input-group">
                                      <input type="date" class="form-control mt-2" placeholder="Select date" id="endDate" />
                                    </div>
                                  </div>
                                  <div class="col-md-2  "> <Button onClick={filterDates} color="primary" className="btn-sm mt-2">Go</Button>
                                  </div>
                                </div>
                              
                            </div>

                          </div>
              
            </div>

            <div class="tab-pane fade active show" id="currentHires" role="tabpanel">
              <div class="row">
                <div class="col-xl-12">
                  <div id="panel-1" class="panel mb-0">
                    <div class="panel-hdr">
                      <h2> Instrument Hires</h2>
                      <Link to="/newhire"><Button className="btn-sm  "> Add Hire </Button></Link>

                    </div>
                    <div class="panel-container show">
                      <div class="panel-content">
                    
                        <div class="table-responsive">
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
                                <th >Details</th>
                              </tr>
                            </thead>
                            <tbody>
                              {search(curHires).map((item, index) => (
                                <tr role="row" key={item.id}>
                                  <td>{item.creation_date}</td>
                                  <td> {item.name}</td>
                                  <td>{item.code}</td>
                                  <td>{item.instrument}</td>
                                  <td>{item.brand}</td>
                                  <td>${item.rate}</td>
                                  <td>{item.owner}</td>
                                  <td>{item.due}</td>
                                  <td class="al-ctr">
                                    <Link to={`/hirerecord/${item.id}`}><i class="fal fa-2x fa-arrow-circle-right float-right"></i></Link>
                                  </td>
                                </tr >
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
            <div class="tab-pane fade" id="ovderdueHires" role="tabpanel">
              <div class="row">
                <div class="col-xl-12">
                  <div id="panel-1" class="panel mb-0">
                    <div class="panel-hdr">
                      <h2>Overdue Hires</h2>
                    </div>
                    <div class="panel-container show">
                      <div class="panel-content">

                        <div class="table-responsive">
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
                                <th class="dtl-cel">Details</th>
                              </tr>
                            </thead>
                            <tbody>
                              {search(overDues).map((item, index) => (
                                <tr role="row" key={item.id}>
                                  <td>{item.due}</td>
                                  <td class="al-ctr"> <span class="txt-red">{Math.floor((new Date().getTime() - calcOv(item.due)) / (1000 * 60 * 60 * 24))}</span></td>
                                  <td>{item.name}</td>
                                  <td>{item.code}</td>
                                  <td>{item.instrument}</td>
                                  <td>{item.brand}</td>
                                  <td>${item.rate}</td>
                                  <td>{item.creation_date}</td>
                                  <td>{item.owner}</td>
                                  <td class="al-ctr"><Link to={`/hirerecord/${item.id}`}><i class="fal fa-2x fa-arrow-circle-right float-right"></i></Link></td>
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
            <div class="tab-pane fade" id="returnedHires" role="tabpanel">
              <div class="row">
                <div class="col-xl-12">
                  <div id="panel-1" class="panel mb-0">
                    <div class="panel-hdr">
                      <h2>Returned Hires</h2>
                    </div>
                    <div class="panel-container show">
                      <div class="panel-content">
                        <div class="table-responsive">
                          <table class="dt-basic-example table table-bordered table-hover table-striped w-100">
                            <thead>
                              <tr>
                                <th>Date Returned</th>
                                <th>Date Hired</th>
                                <th>Name</th>
                                <th>Code</th>
                                <th>Instrument</th>
                                <th>Brand</th>
                                <th>Rate</th>
                                <th>Owner</th>
                                <th>Due Date </th>
                                <th class="dtl-cel">Details</th>
                              </tr>
                            </thead>
                            <tbody>
                              {search(returnedHires).map((item, index) => (
                                <tr role="row" key={item.id}>
                                  <td>{item.returned}</td>
                                  <td>{item.creation_date}</td>
                                  <td>{item.name}</td>
                                  <td>{item.code}</td>
                                  <td>{item.instrument}</td>
                                  <td>{item.brand}</td>
                                  <td>${item.rate}</td>
                                  <td>{item.owner}</td>
                                  <td>{item.due}</td>
                                  <td class="al-ctr"><Link to={`/hirerecord/${item.id}`}><i class="fal fa-2x fa-arrow-circle-right float-right"></i></Link></td>
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


          </div>

        </Col>
      </Row>
    </div >
  );
}

export default Home;