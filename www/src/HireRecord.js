import React from 'react';
import { Button, ButtonGroup, Form, FormGroup, Input, Label, Row, Col } from 'reactstrap';

function HireRecord({ updateToDo, toDos }) {
    const id = /[^/]*$/.exec(window.location.href)[0];
    const hireRecord = toDos.find(item => item.id === id);
    const editField = async (event) => {
        document.getElementsByClassName('displayDiv').display = 'none';
        document.getElementsByClassName('editDiv').display = 'block';
    }

    return (
        <div>
            <div class="row">
                <div class="col-md-10">
                    <div id="panel-1" class="panel">
                        <div class="panel-hdr">
                            <h2>
                                Hire Details
                                        </h2>
                            <Button onClick={editField} type="button" class="btn btn-sm btn-outline-default waves-effect waves-themed mr-2">
                                <span class="fal fa-pencil mr-1"></span>
                                                    Edit
                                                </Button>
                        </div>
                        <div class="panel-container show">
                            <div class="panel-content">

                                <div class="row displayDiv" >
                                    <div class="col-md-3 fw-700 "> Date hired </div>
                                    <div class="col-md-9">{new Date(hireRecord.creation_date).toLocaleDateString()}</div>
                                </div>

                                <div class="form-group editDiv">
                                        <label class="form-label" for="simpleinput">  Date hired  </label>
                                        <Input type="text" class="form-control" name="name" id="newToDoName" placeholder="name" />
                                    </div>
                                
                                <div class="row" >
                                    <div class="col-md-3 fw-700"> Name </div>
                                    <div class="col-md-9">{hireRecord.name}</div>
                                </div>
                                <div class="row" >
                                    <div class="col-md-3 fw-700"> Code </div>
                                    <div class="col-md-9">{hireRecord.code}</div>
                                </div>
                                <div class="row" >
                                    <div class="col-md-3 fw-700"> Instrument </div>
                                    <div class="col-md-9">{hireRecord.instrument}</div>
                                </div>
                                <div class="row" >
                                    <div class="col-md-3 fw-700"> Brand </div>
                                    <div class="col-md-9">{hireRecord.brand}</div>
                                </div>
                                <div class="row" >
                                    <div class="col-md-3 fw-700"> Rate </div>
                                    <div class="col-md-9">{hireRecord.rate}</div>
                                </div>
                                <div class="row" >
                                    <div class="col-md-3 fw-700"> Owner </div>
                                    <div class="col-md-9">{hireRecord.owner}</div>
                                </div>
                                <div class="row" >
                                    <div class="col-md-3 fw-700"> Due Date </div>
                                    <div class="col-md-9">{new Date(hireRecord.due).toLocaleDateString()}</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default HireRecord;