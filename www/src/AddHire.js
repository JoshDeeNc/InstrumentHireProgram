import React from 'react';
import { BrowserRouter, Link, Route, Switch } from 'react-router-dom';
import { Button, ButtonGroup, Form, FormGroup, Input, Label, Row, Col } from 'reactstrap';
function AddHire({ addToDo }) {
    return (
        <div>
            
            <div class="subheader">
                    <h1 class="subheader-title">
                       Add Hire

                    </h1>
                </div>
            <div class="row">
                <div class="col-md-6">
                    <div id="panel-1" class="panel">
                        <div class="panel-hdr">
                            <h2>New Hire</h2>

                        </div>

                        <div class="panel-container show">
                            <div class="panel-content">

                                <form>
                                    <div class="form-group">
                                        <label class="form-label" for="simpleinput">Student Name </label>
                                        <Input type="text" class="form-control" name="name" id="newToDoName" placeholder="new name" />
                                    </div>

                                    <div class="form-group">
                                        <label class="form-label" for="simpleinput">Code</label>
                                        <Input type="text" name="code" id="newToDoCode" placeholder="new code" />
                                    </div>

                                    <div class="form-group">
                                        <label class="form-label" for="simpleinput">Instrument</label>
                                        <Input type="text" name="instrument" id="newToDoInstrument" placeholder="new instrument" />
                                    </div>

                                    <div class="form-group">
                                        <label class="form-label" for="simpleinput">Brand</label>
                                        <Input type="text" name="brand" id="newToDoBrand" placeholder="new brand" />
                                    </div>

                                    <div class="form-group">
                                        <label class="form-label" for="simpleinput">Rate</label>
                                        <Input type="text" name="rate" id="newToDoRate" placeholder="new rate" />
                                    </div>

                                    <div class="form-group">
                                        <label class="form-label" for="simpleinput">Owner</label>
                                        <Input type="text" name="owner" id="newToDoOwner" placeholder="new owner" />
                                    </div>

                                    <div class="form-group">
                                        <label class="form-label" for="simpleinput">Due Date</label>
                                        <Input type="text" name="date" id="newToDoDueDate" placeholder="new date" />
                                    </div>

                                    <Button onClick={addToDo} class="btn btn-lg btn-primary waves-effect waves-themed mr-2 " className="ml-1">Add</Button>
                                    <Button class="btn btn-lg btn-default waves-effect waves-themed " className="ml-1"><Link to="/">Cancel</Link></Button>




                                </form>
                            </div>
                        </div>
                    </div>
                </div>




            </div>
        </div>
    );
}

export default AddHire;