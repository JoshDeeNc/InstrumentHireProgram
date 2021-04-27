import React from 'react';
import { BrowserRouter, Link, Route, Switch } from 'react-router-dom';
import { Button, ButtonGroup, Form, FormGroup, Input, Label, Row, Col } from 'reactstrap';
function NewInstrument({ addInstrument }) {
    return (
        <div>
            
            <div class="subheader">
                    <h1 class="subheader-title">
                       Add Instrument

                    </h1>
                </div>
            <div class="row">
                <div class="col-md-6">
                    <div id="panel-1" class="panel">
                        <div class="panel-hdr">
                            <h2>New Instrument</h2>

                        </div>

                        <div class="panel-container show">
                            <div class="panel-content">

                                <form>

                                    <div class="form-group">
                                        <label class="form-label" for="simpleinput">Code</label>
                                        <Input type="text" name="code" id="newInstCode" placeholder="new code" />
                                    </div>

                                    <div class="form-group">
                                        <label class="form-label" for="simpleinput">Instrument/Add-on Type </label>
                                        <Input type="text" class="form-control" name="name" id="newInstType" placeholder="new name" />
                                    </div>
                                    
                                    <div class="form-group">
                                        <label class="form-label" for="simpleinput">Object Name </label>
                                        <Input type="text" class="form-control" name="name" id="newInstName" placeholder="new name" />
                                    </div>

                                    <div class="form-group">
                                        <label class="form-label" for="simpleinput">Brand</label>
                                        <Input type="text" name="brand" id="newInstBrand" placeholder="new brand" />
                                    </div>

                                    <div class="form-group">
                                        <label class="form-label" for="simpleinput">Rate</label>
                                        <Input type="text" name="rate" id="newInstRate" placeholder="new rate" />
                                    </div>

                                    <div class="form-group">
                                        <label class="form-label" for="simpleinput">Purchase Cost</label>
                                        <Input type="text" name="rate" id="newInstPurchVal" placeholder="new rate" />
                                    </div>

                                    <div class="form-group">
                                        <label class="form-label" for="simpleinput">Depreciation Rate</label>
                                        <Input type="text" name="rate" id="newInstDepr" placeholder="new rate" />
                                    </div>

                                    <div class="form-group">
                                        <label class="form-label" for="simpleinput">Owner</label>
                                        <Input type="text" name="owner" id="newInstOwner" placeholder="new owner" />
                                    </div>

                                    <Button onClick={addInstrument} class="btn btn-lg btn-primary waves-effect waves-themed mr-2 " className="ml-1">Add</Button>
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

export default NewInstrument;

/*<div class="form-group">
                                                    <label class="form-label" for="example-select">Instrument</label>
                                                    <select class="form-control" id="example-select">
                                                        <option>Electric Guitar</option>
														<option>Bass Guitar</option>
														<option>Accoustic Guitar</option>
                                                        <option>Flute</option>
                                                        <option>Violin</option>
                                                        <option>Trumpet</option>
                                                      
                                                    </select>
                                                </div>*/