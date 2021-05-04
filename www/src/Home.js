import React, { useState, useEffect } from 'react';
import { Button, ButtonGroup, Form, FormGroup, Input, Label, Row, Col, image } from 'reactstrap';
import { BrowserRouter, Link, Route, Switch } from 'react-router-dom';
import chart1 from './img/chart1.png';
import chart2 from './img/chart2.png';

import history from './history';



function Home({ toDos, deleteToDo, completeToDo }) {

  const [filter, setFilter] = useState('all');
  const changeFilter = (newFilter) => {
    setFilter(newFilter);
  };

  const hireRecords = toDos

  const overDues = hireRecords.filter(item => new Date(item.due) < new Date())

  const [qry, setQry] = useState("")

  function search(records) {
    if (qry != "") {
      console.log(qry)
      return records.filter((row) => new Date(row.creation_date).toLocaleDateString().indexOf(qry.toLowerCase()) > -1 ||
        row.code.toString().toLowerCase().indexOf(qry.toLowerCase()) > -1 ||
        row.name.toLowerCase().indexOf(qry.toLowerCase()) > -1 ||
        row.instrument.toLowerCase().indexOf(qry.toLowerCase()) > -1 ||
        row.brand.toLowerCase().indexOf(qry.toLowerCase()) > -1 ||
        row.rate.toString().toLowerCase().indexOf(qry.toLowerCase()) > -1 ||
        row.owner.toLowerCase().indexOf(qry.toLowerCase()) > -1 ||
        new Date(row.due).toLocaleDateString().toLowerCase().indexOf(qry.toLowerCase()) > -1)
    }
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
    var dates = document.getElementById("datepicker-1").value;
    var startEnd = dates.split(" - ")
    console.log(startEnd)
    setRecords(toDos.filter(item => new Date(item.creation_date) >= new Date(startEnd[0]) && new Date(item.creation_date) <= new Date(startEnd[1])))
    console.log(hireRecords)
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
              <a class="nav-link h2 active " data-toggle="tab" href="#tab_borders_icons-1" role="tab" aria-selected="true"><i class="fal fa-guitar mr-1"></i>  Instrument Hires</a>
            </li>
            <li class="nav-item">
              <a class="nav-link h2" data-toggle="tab" href="#tab_borders_icons-2" role="tab" aria-selected="false"><i class="fal fa-bell-on mr-1"></i> Overdue Hires<span class="badge badge-icon bg-red pos-top ml-1 mt-2">{toDos.filter(item => new Date(item.due) < new Date()).length}</span> </a>
            </li>
            <li class="nav-item">
              <a class="nav-link h2" data-toggle="tab" href="#tab_borders_icons-3" role="tab" aria-selected="false"><i class="fal fa-chart-bar mr-1"></i> Insights </a>
            </li>

          </ul>

          <div class="tab-content border border-top-0  ">
            <div class="tab-pane fade active show" id="tab_borders_icons-1" role="tabpanel">
              <div class="row">
                <div class="col-xl-12">
                  <div id="panel-1" class="panel mb-0">
                    <div class="panel-hdr">
                      <h2> Hired Instrument List</h2>
                    </div>
                    <div class="panel-container show">
                      <div class="panel-content">
                        <div class="row mb-2 mt-n3 ">

                          <div class="col-md-4"> <input type="text" value={qry} onChange={(e) => setQry(e.target.value)} class="form-control mt-2" placeholder="search..." />
                          </div>

                          <div class="col-md-2 mt-2 text-right"><div class="custom-control custom-checkbox  ">
                            <input type="checkbox" onChange={(e) => setDtRange(e.target.checked)} class="custom-control-input" id="defaultUnchecked" />
                            <label class="custom-control-label mt-2" for="defaultUnchecked">Date Range</label>
                          </div> </div>
                          <div class="col-md-6 mt-2   ">
                            <div class="row dt-range " id="dt-range">
                              <div class="col-12">

                                <div class="form-group row">
                                  <div class="col-md-7  ">
                                    <div class="input-group">
                                      <input type="text" class="form-control" placeholder="Select date" id="datepicker-1" />
                                      <div class="input-group-append">
                                        <span class="input-group-text fs-xl">
                                          <i class="fal fa-calendar"></i>
                                        </span>
                                      </div>
                                    </div>
                                  </div>

                                  <div class="col-md-1  "> <button onClick={filterDates} class="btn btn-sm btn-primary waves-effect waves-themed mr-2">Go</button>
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
                              {search(hireRecords).map((item, index) => (
                                <tr role="row" key={item.id}>
                                  <td>{new Date(item.creation_date).toLocaleDateString()}</td>
                                  <td> {item.name}</td>
                                  <td>{item.code}</td>
                                  <td>{item.instrument}</td>
                                  <td>{item.brand}</td>
                                  <td>{item.rate}</td>
                                  <td>{item.owner}</td>
                                  <td>{new Date(item.due).toLocaleDateString()}</td>
                                  <td class="al-ctr"><Link to={`/hirerecord/${item.id}`}><i class="fal fa-2x fa-arrow-circle-right float-right"></i></Link></td>
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
                      <h2>Overdue Hire Instrument List</h2>
                    </div>
                    <div class="panel-container show">
                      <div class="panel-content">
                        <div class="row mb-2 mt-n3 ">
                          <div class="col-md-3"> <input type="text" value={qry} onChange={(e) => setQry(e.target.value)} class="form-control mt-2" placeholder="search..." />
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
                                  <td>{new Date(item.due).toLocaleDateString()}</td>
                                  <td class="al-ctr"> <span class="txt-red">{Math.floor((new Date().getTime() - new Date(item.due).getTime()) / (1000 * 60 * 60 * 24))}</span></td>
                                  <td>{item.name}</td>
                                  <td>{item.code}</td>
                                  <td>{item.instrument}</td>
                                  <td>{item.brand}</td>
                                  <td>{item.rate}</td>
                                  <td>{new Date(item.creation_date).toLocaleDateString()}</td>
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
                      <h2>Insights </h2>
                    </div>
                    <div class="panel-container show">
                      <div class="panel-content">

                        <div class="row">
                          <div class="col-md-6">
                            <div class="panel">
                              <div class="panel-hdr">
                                <h2> Instrument Hires  </h2>

                              </div>
                              <div class="panel-container show">
                                <div class="panel-content">
                                  <div class="panel-tag">
                                    This chart depicts the instrument hires over time.
                                       </div>

                                  <div>
                                    <div id="lineChart">
                                      <canvas class="chart-div bdr "></canvas>
                                    </div> </div>

                                </div>
                              </div>
                            </div>
                          </div>
                          <div class="col-md-6">
                            <div class="panel">
                              <div class="panel-hdr">
                                <h2> Instrument Availability </h2>

                              </div>
                              <div class="panel-container show">
                                <div class="panel-content">
                                  <div class="panel-tag">
                                    This chart depicts the instrument inventory available for hire over time.
                                                    </div>
                                  <div>   <div>
                                    <div id="areaChart">
                                      <canvas class="chart-div bdr "></canvas>
                                    </div> </div>     </div>
                                </div>
                              </div>
                            </div>
                          </div>




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