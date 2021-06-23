import React, { useState, useEffect } from 'react';
import { Button, ButtonGroup, Form, FormGroup, Input, Label, Row, Col } from 'reactstrap';
import { BrowserRouter, Link, Route, Switch } from 'react-router-dom';


function InstrumentList({ instInventory, toDos }) {

  instInventory = instInventory.map(item => Object.assign({}, item, { available: (item.available ? "Available" : "Hired to " + toDos.filter(hire => hire.returned === "" && hire.instrumentId === item.id)[0].name) }))

  const [qry, setQry] = useState("")
  const [searchColumns, setSearchColumns] = useState(["code", "type", "serialNum", "brand", "rate", "owner", "available"])
  const columns = ["code", "type", "serialNum", "brand", "size", "rate", "owner", "available", "depreciation", "purchaseValue"];

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
      return instInventory.filter((row) =>
        searchColumns.some((column) => (row[column] && row[column].length > 0) && row[column].toString().toLowerCase().indexOf(qry.toLowerCase()) > -1)
      )
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
                <div class="panel-hdr-dsp">
                  <h2>
                    Instrument List
                  </h2><Link to="/newinstrument"><Button color="primary" className="ml-1">New instrument</Button></Link>

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
                            <td>${item.rate}</td>
                            <td>{item.owner}</td>
                            <td>{item.available}</td>
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