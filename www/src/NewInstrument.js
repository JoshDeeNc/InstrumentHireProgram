import React, { useState } from 'react';
import { BrowserRouter, Link, Route, Switch, useHistory } from 'react-router-dom';
import { Button, ButtonGroup, Form, FormGroup, Input, Label, Row, Col, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
function NewInstrument({ addInstrument }) {

    const history = useHistory();

    const add = async (event) => {
        const result = await addInstrument();
        if (result.status === 200) {
            history.push('/instrumentlist');
        }
    }

    const [modal, setModal] = useState(false);
    const toggle = () => setModal(!modal);

    return (
        <div>
            <div class="subheader">
                <h1 class="subheader-title"> Add Instrument </h1>
            </div>
            <div class="row">
                <div class="col-lg-7 col-md-10">
                    <div id="panel-1" class="panel">
                        <div class="panel-hdr-dsp">
                            <span onClick={() => history.goBack()}><i class="fal fn-icon fa-arrow-circle-left hand mr-2"></i></span>
                            <h2>New Instrument</h2>
                            <div>
                            </div>
                        </div>

                        <div class="panel-container show">
                            <div class="panel-content">
                                <form>
                                    <div class=" form-group row">
                                        <label class="col-sm-3 col-form-label" for="simpleinput">Code</label>
                                        <div class="col-sm-9">
                                            <Input type="text" class="  form-control " name="code" id="newInstCode" placeholder=" " />
                                        </div>
                                        <div class="col-sm-12 ">
                                            <div class=" hr"></div>
                                        </div>
                                    </div>

                                    <div class=" form-group row">
                                        <label class="col-sm-3 col-form-label" for="simpleinput"> Type </label>
                                        <div class="col-sm-9">
                                            <Input type="text" class="  form-control " name="name" id="newInstType" placeholder=" " />
                                        </div>
                                        <div class="col-sm-12 ">
                                            <div class=" hr"></div>
                                        </div>
                                    </div>

                                    <div class=" form-group row">
                                        <label class="col-sm-3 col-form-label" for="simpleinput">Instrument Name </label>
                                        <div class="col-sm-9">
                                            <Input type="text" class="  form-control " name="name" id="newInstName" placeholder=" " />
                                        </div>
                                        <div class="col-sm-12 ">
                                            <div class=" hr"></div>
                                        </div>
                                    </div>

                                    <div class=" form-group row">
                                        <label class="col-sm-3 col-form-label" for="simpleinput">Brand</label>
                                        <div class="col-sm-9">
                                            <Input type="text" class="  form-control " name="brand" id="newInstBrand" placeholder=" " />
                                        </div>
                                        <div class="col-sm-12 ">
                                            <div class=" hr"></div>
                                        </div>
                                    </div>

                                    <div class=" form-group row">
                                        <label class="col-sm-3 col-form-label" for="simpleinput">Rate</label>
                                        <div class="col-md-4">
                                            <div class="input-group">
                                                <div class="input-group-prepend">
                                                    <span class="input-group-text">$</span>
                                                </div>
                                                <Input type="text" class="  form-control " name="rate" id="newInstRate" placeholder=" " />
                                            </div>
                                        </div>
                                        <div class="col-sm-12 ">
                                            <div class=" hr"></div>
                                        </div>
                                    </div>

                                    <div class=" form-group row">
                                        <label class="col-sm-3 col-form-label" for="simpleinput">Purchase Cost</label>
                                        <div class="col-md-4">
                                            <div class="input-group">
                                                <div class="input-group-prepend">
                                                    <span class="input-group-text">$</span>
                                                </div>
                                                <Input type="text" class="  form-control " name="rate" id="newInstPurchVal" placeholder=" " />
                                            </div>
                                        </div>
                                        <div class="col-sm-12 ">
                                            <div class=" hr"></div>
                                        </div>
                                    </div>

                                    <div class=" form-group row">
                                        <label class="col-sm-3 col-form-label" for="simpleinput">Depreciation </label>
                                        <div class="col-md-2">
                                            <div class="input-group   sm-inpt-width-edt">
                                                <Input type="text" class="  form-control " name="rate" id="newInstDepr" placeholder=" " />
                                                <div class="input-group-append">
                                                    <span class="input-group-text">%</span>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="col-sm-12 ">
                                            <div class=" hr"></div>
                                        </div>
                                    </div>

                                    <div class=" form-group row">
                                        <label class="col-sm-3 col-form-label" for="simpleinput">Owner</label>
                                        <div class="col-sm-9">
                                            <Input type="text" name="owner" id="newInstOwner" placeholder="owner" />
                                        </div>
                                        
                                    </div>

                                    <div class="frame-wrap w-100">
                                                <div class="accordion" id="accordionExample">
         
                                                    <div class="card">
                                                        <div class="card-header" id="headingTwo">
                                                            
                                                            <a href="javascript:void(0);" class="card-title collapsed" data-toggle="collapse" data-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                                                            <i class="fal fa-plus-circle width-2 fs-xl"></i> Add-ons
                                                                <span class="ml-auto">
                                                                    <span class="collapsed-reveal">
                                                                        <i class="fal fa-angle-up fa-2x"></i>
                                                                    </span>
                                                                    <span class="collapsed-hidden">
                                                                        <i class="fal fa-angle-down fa-2x"></i>
                                                                    </span>
                                                                </span>
                                                            </a>
                                                        </div>
                                                        <div id="collapseTwo" class="collapse" aria-labelledby="headingTwo" data-parent="#accordionExample">
                                                        <div class="card-body">
                                                            <div class=" form-group row">
                                                                <label class="col-8 col-form-label fw-700" for="simpleinput">Description</label>

                                                                <label class="col-2 col-form-label fw-700 text-center" for="simpleinput">Qty</label>

                                                                <label class="col-2 col-form-label fw-700 text-center" for="simpleinput">Rate</label>

                                                                <div class="col-sm-12 ">
                                                                    <div class=" hr-2"></div>
                                                                </div>
                                                            </div>
                                                            <div class=" form-group row">
                                                                <label class="col-8 col-form-label" for="simpleinput">Wire leads 6mt</label>
                                                                <div class="col-2">
                                                                    <Input type="text" name="owner" id="newInstOwner" placeholder=" " />
                                                                </div><div class="col-2">
                                                                    <Input type="text" name="owner" id="newInstOwner" placeholder=" " />
                                                                </div>
                                                                <div class="col-sm-12 ">
                                                                    <div class=" hr"></div>
                                                                </div>
                                                            </div>
                                                            <div class=" form-group row">
                                                                <label class="col-8 col-form-label" for="simpleinput">Strings</label>
                                                                <div class="col-2">
                                                                    <Input type="text" name="owner" id="newInstOwner" placeholder=" " />
                                                                </div><div class="col-2">
                                                                    <Input type="text" name="owner" id="newInstOwner" placeholder=" " />
                                                                </div>
                                                                <div class="col-sm-12 ">
                                                                    <div class=" hr"></div>
                                                                </div>
                                                            </div>
                                                            <div class=" form-group row">
                                                                <label class="col-8 col-form-label" for="simpleinput">Stands</label>
                                                                <div class="col-2">
                                                                    <Input type="text" name="owner" id="newInstOwner" placeholder=" " />
                                                                </div><div class="col-2">
                                                                    <Input type="text" name="owner" id="newInstOwner" placeholder=" " />
                                                                </div>
                                                                <div class="col-sm-12 ">
                                                                    <div class=" hr"></div>
                                                                </div>
                                                            </div>
                                                            <div class=" form-group row">
                                                                <label class="col-8 col-form-label" for="simpleinput">Picks</label>
                                                                <div class="col-2">
                                                                    <Input type="text" name="owner" id="newInstOwner" placeholder=" " />
                                                                </div><div class="col-2">
                                                                    <Input type="text" name="owner" id="newInstOwner" placeholder=" " />
                                                                </div>
                                                                <div class="col-sm-12 ">
                                                                    <div class=" hr"></div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                  
                                                        </div>
                                                    </div>
                                                       </div>
                                            </div>
 

                                    <div class="btn-divS">
                                        <Button onClick={add} color="primary" className="mr-2"  >Add</Button>
                                        <Link to="/instrumentlist"><Button color="secondary"  >Cancel</Button></Link>
                                    </div>

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