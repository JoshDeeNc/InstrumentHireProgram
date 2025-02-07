import React, { useState } from 'react';
import { Button, ButtonGroup, Form, FormGroup, Input, Label, Row, Col } from 'reactstrap';
import { BrowserRouter, Link, Route, Switch } from 'react-router-dom';


function OwnerList({ ownerList }) {

  const [qry, setQry] = useState("")

  function search() {
    const columns = ownerList[0] && Object.keys(ownerList[0]);
    if (qry != "") {
      return ownerList.filter((row) => 
      columns.some((column) => (row[column] && row[column].length > 0) && row[column].toString().toLowerCase().indexOf(qry.toLowerCase()) > -1)
      )
    }
    else return ownerList
  }

  return (
    <div className="ToDo">

<div class="subheader">
                    <h1 class="subheader-title">
                    Owners List

                    </h1>
                </div>
      <Row>
        <Col xs="12" className="mt-1 mb-1">

          <div class="row">
            <div class="col-md-10">
              <div id="panel-1" class="panel">
                <div class="panel-hdr-dsp    mb-3">
                  <h2>Owners List</h2>
                    <Link to="/newowner"><Button color="primary" className="ml-1">New Owner</Button></Link>

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
                          <th>Owner Name</th>
                          <th>Phone Number</th>
                          <th>Email</th>
                          <th class="dtl-cel">Details</th>
                        </tr>
                      </thead>
                      <tbody>
                        {search().map((item, index) => (
                          <tr role="row" key={item.id}>
                            <td>{item.name}</td>
                            <td>{item.phone}</td>
                            <td>{item.email}</td>
                            <td class="al-ctr"><Link to={`/ownerrecord/${item.id}`}><i class="fal fa-2x fa-arrow-circle-right float-right"></i></Link></td>
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


export default OwnerList;