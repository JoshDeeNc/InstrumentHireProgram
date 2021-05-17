import React, { useState } from 'react';
import { Button, ButtonGroup, Form, FormGroup, Input, Label, Row, Col } from 'reactstrap';
import { BrowserRouter, Link, Route, Switch } from 'react-router-dom';


function InstrumentList({ instInventory, toDos }) {
  const [filter, setFilter] = useState('all');

  const changeFilter = (newFilter) => {
    setFilter(newFilter);
  };

  const [qry, setQry] = useState("")

  function search() {
    if (qry != "") {
      return instInventory.filter((row) => 
      row.code.toString().toLowerCase().indexOf(qry.toLowerCase()) > -1 ||
      row.type.toString().toLowerCase().indexOf(qry.toLowerCase()) > -1 ||
      row.serialNum.toString().toLowerCase().indexOf(qry.toLowerCase()) > -1 ||
      row.brand.toString().toLowerCase().indexOf(qry.toLowerCase()) > -1 ||
      row.rate.toString().toLowerCase().indexOf(qry.toLowerCase()) > -1 ||
      row.owner.toString().toLowerCase().indexOf(qry.toLowerCase()) > -1 ||
      row.available.toString().toLowerCase().indexOf(qry.toLowerCase()) > -1)
    }
    else return instInventory
  }

  return (
    <div className="ToDo">

<div class="subheader">
                    <h1 class="subheader-title">
                    Instrument Inventory

                    </h1>
                </div>
      <Row>
        <Col xs="12" className="mt-1 mb-1">

          <div class="row">
            <div class="col-xl-12">
              <div id="panel-1" class="panel">
                <div class="panel-hdr">
                  <h2>
                    Instrument List
                          </h2><Link to="/newinstrument"><Button color="primary" className="ml-1">New instrument</Button></Link>

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
                          <th>Code</th>
                          <th>Type</th>
                          <th>Serial Number</th>
                          <th>Brand</th>
                          <th>Rate</th>
                          <th>Owner</th>
                          <th>Status</th>
                          <th class="dtl-cel">Details</th>
                        </tr>
                      </thead>
                      <tbody>
                        {search().map((item, index) => (
                          <tr role="row" key={item.id}>
                            <td>{item.code}</td>
                            <td>{item.type}</td>
                            <td>{item.serialNum}</td>
                            <td>{item.brand}</td>
                            <td>{item.rate}</td>
                            <td>{item.owner}</td>
                            {item.available ? (<td>Available</td>) : (<td>Hired to {toDos.filter(hire => hire.returned === "" && hire.instrumentId === item.id)[0].name}</td>)}
                            <td class="al-ctr"><Link to={`/instrumentrecord/${item.id}`}><i class="fal fa-2x fa-arrow-circle-right float-right"></i></Link></td>
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