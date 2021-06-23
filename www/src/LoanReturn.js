import React, { useState, useEffect } from 'react';
import { Button, ButtonGroup, Form, FormGroup, Input, Label, Row, Col } from 'reactstrap';
import { BrowserRouter, Link, Route, Switch, useHistory } from 'react-router-dom';


function LoanReturn({ toDos, instInventory }) {

  const curHires = toDos.filter(item => item.returned === "")

  const history = useHistory();

  const [qry, setQry] = useState("")

  function search() {
    if (qry !== "") {
      const hire = curHires.find(item => item.code === qry);
      const instrument = instInventory.find(item => item.code === qry);
      if (hire !== undefined) {
        history.push(`/hirerecord/${hire.code}`)
      } else if (instrument !== undefined) {
        history.push(`/instrumentrecord/${hire.code}`)
      } else {
        document.getElementById("yellowerror").innerHTML = "cannot find yellow bar code"
      }
    }
    else {
      document.getElementById("yellowerror").innerHTML = ""
    }
  }

  useEffect(() => {
    search()
  }, [qry]);

  return (
    <div className="ToDo">

      <div class="subheader">
        <h1 class="subheader-title">
          Find Instrument

        </h1>
      </div>
      <Row>
        <Col xs="12" className="mt-1 mb-1">

          <div class="row">
            <div class="col-md-9">
              <div id="panel-1" class="panel">
                <div class="panel-hdr-dsp    mb-3">
                  <h2>Find Instrument</h2>

                </div>
                <div class="panel-container show">
                  <div class="panel-content">
                    <div class="row mb-2 mt-n3 ">
                      <div class="col-md-3"> <input type="text" value={qry} onChange={(e) => setQry(e.target.value)} class="form-control mt-2" placeholder="enter yellow bar code..." />
                      </div>
                    </div>
                    <div id="yellowerror"></div>

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


export default LoanReturn;