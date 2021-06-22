import React, { useState, useEffect } from 'react';
import { Button, ButtonGroup, Form, FormGroup, Input, Label, Row, Col, image } from 'reactstrap';
import { BrowserRouter, Link, Route, Switch } from 'react-router-dom';

import history from './history';



function Home({ toDos, deleteToDo }) {

  toDos = toDos.map(item => Object.assign({}, item, { creation_date: new Date(item.creation_date).toLocaleDateString(),
                                                      due: new Date(item.due).toLocaleDateString(),
                                                      returned: (item.returned === "" ? "" : new Date(item.due).toLocaleDateString())
                                                      }))

  const curHires = toDos.filter(item => item.returned === "")
  const overDues = toDos.filter(item => item.returned === "" && new Date(item.due) < new Date())
  const returnedHires = toDos.filter(item => item.returned != "")

  const [qry, setQry] = useState("")
  const [filtDates, setFiltDates] = useState([])
  const [filtOvDates, setFiltOvDates] = useState([])
  const [filtRetDates, setFiltRetDates] = useState([])

  const [searchColumns, setSearchColumns] = useState([])
  const columns = instInventory[0] && Object.keys(instInventory[0]);

  function search(records) {
    if (qry != "") {
      records = records.filter((row) =>
        columns.some((column) => (row[column] && row[column].length > 0) && row[column].toString().toLowerCase().indexOf(qry.toLowerCase()) > -1)
      )
    }
    if (filtDates.length > 0 && dtRange) {
      console.log(filtDates)
      records = records.filter(function(item) {
        var parts = item.creation_date.split("/")
        var created = new Date(parts[2], parts[1]-1, parts[0])
        return created >= new Date(filtDates[0]) && created <= new Date(filtDates[1])
      })
    }
    if (filtOvDates.length > 0 && ovDtRange) {
      console.log(filtOvDates)
      records = records.filter(function(item) {
        var parts = item.creation_date.split("/")
        var created = new Date(parts[2], parts[1]-1, parts[0])
        return created >= new Date(filtOvDates[0]) && created <= new Date(filtOvDates[1])
      })
    }
    if (filtRetDates.length > 0 && retDtRange) {
      console.log(filtRetDates)
      records = records.filter(function(item) {
        var parts = item.creation_date.split("/")
        var created = new Date(parts[2], parts[1]-1, parts[0])
        return created >= new Date(filtRetDates[0]) && created <= new Date(filtRetDates[1])
      })
    }
    console.log(records)
    return records
  }

  const [dtRange, setDtRange] = useState(false);
  useEffect(() => {
    setDateRange(dtRange)
  }, [dtRange]);

  const [ovDtRange, setOvDtRange] = useState(false);
  useEffect(() => {
    setDateRangeOv(ovDtRange)
  }, [ovDtRange]);

  const [retDtRange, setRetDtRange] = useState(false);
  useEffect(() => {
    setDateRangeRet(retDtRange)
  }, [retDtRange]);

  const setDateRange = (dtRange) => {
    var a = document.getElementById('dt-range');
    if (dtRange == true) {
      a.classList.remove('dt-range');
    }
    else {
      a.classList.add('dt-range');
    }
  }

  const setDateRangeOv = (ovDtRange) => {
    var a = document.getElementById('dt-rangeOv');
    if (ovDtRange == true) {
      a.classList.remove('dt-range');
    }
    else {
      a.classList.add('dt-range');
    }
  }

  const setDateRangeRet = (retDtRange) => {
    var a = document.getElementById('dt-rangeRet');
    if (retDtRange == true) {
      a.classList.remove('dt-range');
    }
    else {
      a.classList.add('dt-range');
    }
  }

  const filterDates = () => {
    setFiltDates([document.getElementById("startDate").value, document.getElementById("endDate").value])
    search(curHires)
  }

  const filterDates2 = () => {
    setFiltOvDates([document.getElementById("startDateOv").value, document.getElementById("endDateOv").value])
    search(overDues)
  }

  const filterDates3 = () => {
    setFiltRetDates([document.getElementById("startDateRet").value, document.getElementById("endDateRet").value])
    search(returnedHires)
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
              <a class="nav-link h2 active " data-toggle="tab" href="#tab_borders_icons-1" role="tab" aria-selected="true"><i class="fal fa-guitar mr-1"></i> Current Hires</a>
            </li>
            <li class="nav-item">
              <a class="nav-link h2" data-toggle="tab" href="#tab_borders_icons-2" role="tab" aria-selected="false"><i class="fal fa-bell-on mr-1"></i> Overdue Hires<span class="badge badge-icon bg-red pos-top ml-1 mt-2">{overDues.length}</span> </a>
            </li>
            <li class="nav-item">
              <a class="nav-link h2" data-toggle="tab" href="#tab_borders_icons-3" role="tab" aria-selected="false"><i class="fal fa-hand-holding-box mr-1"></i> Returned Hires</a>
            </li>
              

          </ul>

          <div class="tab-content border border-top-0  ">
            <div class="tab-pane fade active show" id="tab_borders_icons-1" role="tabpanel">
              <div class="row">
                <div class="col-xl-12">
                  <div id="panel-1" class="panel mb-0">
                    <div class="panel-hdr">
                      <h2> Instrument Hires</h2>
                      <Link to="/newhire"><Button className="btn-sm  "> Add Hire </Button></Link>

                    </div>
                    <div class="panel-container show">
                      <div class="panel-content">
                        <div class="row mb-2 mt-n3 ">

                          <div class="col-md-4"> <input type="text" value={qry} onChange={(e) => setQry(e.target.value)} class="form-control mt-2" placeholder="search..." />
                          </div>

                          <div class="col-md-1   text-right">
                            <Button onClick={(e) => setDtRange(!dtRange)} className="btn-sm mt-2 "> Dates</Button>
                          </div>
                          <div class="col-lg-5  col-md-7     ">
                            <div class="row dt-range " id="dt-range">
                              <div class="col-12">

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

                        </div>
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
            <div class="tab-pane fade" id="tab_borders_icons-2" role="tabpanel">
              <div class="row">
                <div class="col-xl-12">
                  <div id="panel-1" class="panel mb-0">
                    <div class="panel-hdr">
                      <h2>Overdue Hires</h2>
                    </div>
                    <div class="panel-container show">
                      <div class="panel-content">
                        <div class="row mb-2 mt-n3 ">

                          <div class="col-md-4"> <input type="text" value={qry} onChange={(e) => setQry(e.target.value)} class="form-control mt-2" placeholder="search..." />
                          </div>

                          <div class="col-md-1 mt-2 text-right"> <Button onClick={(e) => setOvDtRange(!ovDtRange)} className="btn-sm "> Dates</Button>
                          </div>
                          <div class="col-lg-5 col-md-7   ">
                            <div class="row dt-range " id="dt-rangeOv">
                              <div class="col-12">

                                <div class="form-group row">
                                  <div class="col-md-5  ">
                                    <div class="input-group">
                                      <input type="date" class="form-control mt-2 " placeholder="Select date" id="startDateOv" />
                                    </div>
                                  </div>
                                  <div class="col-md-5  ">
                                    <div class="input-group">
                                      <input type="date" class="form-control mt-2 " placeholder="Select date" id="endDateOv" />
                                    </div>
                                  </div>

                                  <div class="col-md-2  "> <Button onClick={filterDates2} color="primary" className=" btn-sm mt-2  ">Go</Button>
                                  </div>
                                </div>
                              </div>
                            </div>

                          </div>




                        </div>

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
                                  <td class="al-ctr"> <span class="txt-red">{Math.floor((new Date().getTime() - new Date(item.due).getTime()) / (1000 * 60 * 60 * 24))}</span></td>
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
            <div class="tab-pane fade" id="tab_borders_icons-3" role="tabpanel">
              <div class="row">
                <div class="col-xl-12">
                  <div id="panel-1" class="panel mb-0">
                    <div class="panel-hdr">
                      <h2>Returned Hires</h2>
                    </div>
                    <div class="panel-container show">
                      <div class="panel-content">
                        <div class="row mb-2 mt-n3 ">

                          <div class="col-md-4"> <input type="text" value={qry} onChange={(e) => setQry(e.target.value)} class="form-control mt-2" placeholder="search..." />
                          </div>

                          <div class="col-md-1 mt-2 text-right"> <Button onClick={(e) => setRetDtRange(!retDtRange)} className="btn-sm "> Dates</Button>
                          </div>
                          <div class="col-lg-5 col-md-7    ">
                            <div class="row dt-range " id="dt-rangeRet">
                              <div class="col-12">

                                <div class="form-group row">
                                  <div class="col-md-5  ">
                                    <div class="input-group">
                                      <input type="date" class="form-control mt-2 " placeholder="Select date" id="startDateRet" />
                                    </div>
                                  </div>
                                  <div class="col-md-5  ">
                                    <div class="input-group">
                                      <input type="date" class="form-control mt-2 " placeholder="Select date" id="endDateRet" />
                                    </div>
                                  </div>

                                  <div class="col-md-2  "> <Button onClick={filterDates3} color="primary" className=" btn-sm mt-2  ">Go</Button>
                                  </div>
                                </div>
                              </div>
                            </div>

                          </div>




                        </div>



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