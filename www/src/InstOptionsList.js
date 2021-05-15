import React, { useState } from 'react';
import { Button, ButtonGroup, Form, FormGroup, Input, Label, Row, Col } from 'reactstrap';
import { BrowserRouter, Link, Route, Switch } from 'react-router-dom';


function InstOptionsList({ instOptionsList }) {
  const [filter, setFilter] = useState('all');

  const changeFilter = (newFilter) => {
    setFilter(newFilter);
  };

  const [qry, setQry] = useState("")

  function search() {
    if (qry != "") {
      return instOptionsList.filter((row) => 
      row.instrumentTypeName.toString().toLowerCase().indexOf(qry.toLowerCase()) > -1)
    }
    else return instOptionsList
  }

  return (
    <div className="ToDo">

<div class="subheader">
                    <h1 class="subheader-title">
                    Instrument Types List

                    </h1>
                </div>
      <Row>
        <Col xs="12" className="mt-1 mb-1">

          <div class="row">
            <div class="col-xl-12">
              <div id="panel-1" class="panel">
                <div class="panel-hdr-dsp    mb-3">
                  <h2>Instrument Types List</h2>
                    <Link to="/newinstoptions"><Button color="primary" className="ml-1">New Instrument Type</Button></Link>

                </div>
                <div class="panel-container show">
                  <div class="panel-content">
                  <div class="row mb-2 mt-n3 ">  
                          <div class="col-md-3"> <input type="text" value={qry} onChange={(e) => setQry(e.target.value)} class="form-control mt-2" placeholder="search..." />
                         </div> 
                    </div>
                    <table class="dt-basic-example table table-bordered table-hover table-striped w-100">
                      <thead>
                        <tr>
                          <th>Instrument Type Name</th>
                          <th class="dtl-cel">Details</th>
                        </tr>
                      </thead>
                      <tbody>
                        {search().map((item, index) => (
                          <tr role="row" key={item.id}>
                            <td>{item.instrumentTypeName}</td>
                            <td class="al-ctr"><Link to={`/instOptionsRecord/${item.id}`}><i class="fal fa-2x fa-arrow-circle-right float-right"></i></Link></td>
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


export default InstOptionsList;