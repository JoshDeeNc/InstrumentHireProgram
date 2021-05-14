import React, { useState } from 'react';
import { BrowserRouter, Link, Route, Switch, useHistory } from 'react-router-dom';
import { Button, ButtonGroup, Form, FormGroup, Input, Label, Row, Col, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
function NewInstrument({ addInstrument, ownerList }) {

    const history = useHistory();

    const unique = (value, index, self) => {
        return self.indexOf(value) === index
    }

    const owners = ownerList.map(item => item.name).filter(unique)

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
                                        <label class="col-sm-3 col-form-label" for="simpleinput"> Serial Number </label>
                                        <div class="col-sm-9">
                                            <Input type="text" class="  form-control " name="serialNumber" id="newSerialNum" placeholder=" " />
                                        </div>
                                        <div class="col-sm-12 ">
                                            <div class=" hr"></div>
                                        </div>
                                    </div>

                                    <div class=" form-group row">
                                        <label class="col-sm-3 col-form-label" for="simpleinput">Instrument Type </label>
                                        <div class="col-sm-9">
                                            <Input type="text" class="  form-control " name="name" id="newInstType" placeholder=" " />
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
                                            <select class="form-control" id="newInstOwner">
                                                    {owners.map((item, index) => (
                                                        <option>{item}</option>))}
                                            </select>
                                        </div> <div class="col-sm-12 ">
                                            <div class=" hr"></div>
                                        </div>
                                        
                                    </div>
                                    <div class="form-group row mb-3">
                                        <label class="col-sm-3 col-form-label" for="simpleinput">Notes</label>
                                        <div class="col-md-9">
                                            <textarea class="form-control    " id="newInstNotes" type="text"  
                                                placeholder=" "  rows="3"   > </textarea>
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