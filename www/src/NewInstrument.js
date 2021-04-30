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
                <div class="col-md-10">
                    <div id="panel-1" class="panel">
                        <div class="panel-hdr">
                            <h2>New Instrument</h2>

                        </div>

                        <div class="panel-container show">
                            <div class="panel-content">

                                <form>

                                    <div class=" form-group row">
                                        <label class="col-sm-2 col-form-label" for="simpleinput">Code</label>
                                        <div class="col-sm-10">
                                        <Input type="text" name="code" id="newInstCode" placeholder="code" />
                                        </div>
                                    </div>

                                    <div class=" form-group row">
                                        <label class="col-sm-2 col-form-label" for="simpleinput">Instrument/Add-on Type </label>
                                        <div class="col-sm-10">
                                        <Input type="text" class="form-control" name="name" id="newInstType" placeholder="type" />
                                        </div>
                                    </div>
                                    
                                    <div class=" form-group row">
                                        <label class="col-sm-2 col-form-label" for="simpleinput">Object Name </label>
                                        <div class="col-sm-10">
                                        <Input type="text" class="form-control" name="name" id="newInstName" placeholder="instrument/add-on" />
                                        </div>
                                    </div>

                                    <div class=" form-group row">
                                        <label class="col-sm-2 col-form-label" for="simpleinput">Brand</label>
                                        <div class="col-sm-10">
                                        <Input type="text" name="brand" id="newInstBrand" placeholder="brand" />
                                        </div>
                                    </div>

                                    <div class=" form-group row">
                                        <label class="col-sm-2 col-form-label" for="simpleinput">Rate</label>
                                        <div class="col-sm-10">
                                        <Input type="text" name="rate" id="newInstRate" placeholder="rate" />
                                        </div>
                                    </div>

                                    <div class=" form-group row">
                                        <label class="col-sm-2 col-form-label" for="simpleinput">Purchase Cost</label>
                                        <div class="col-sm-10">
                                        <Input type="text" name="rate" id="newInstPurchVal" placeholder="cost" />
                                        </div>
                                    </div>

                                    <div class=" form-group row">
                                        <label class="col-sm-2 col-form-label" for="simpleinput">Depreciation Rate</label>
                                        <div class="col-sm-10">
                                        <Input type="text" name="rate" id="newInstDepr" placeholder="depreciation" />
                                        </div>
                                    </div>

                                    <div class=" form-group row">
                                        <label class="col-sm-2 col-form-label" for="simpleinput">Owner</label>
                                        <div class="col-sm-10">
                                        <Input type="text" name="owner" id="newInstOwner" placeholder="owner" />
                                        </div> 
                                    </div>

                                    <Button onClick={addInstrument} class="btn btn-lg btn-primary waves-effect waves-themed mr-2 " className="ml-1">Add</Button>
                                    <Link to="/instrumentlist"><Button class="btn btn-lg btn-default waves-effect waves-themed " className="ml-1">Cancel</Button></Link>




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