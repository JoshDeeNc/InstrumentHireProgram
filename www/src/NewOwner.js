import React, { useState } from 'react';
import { BrowserRouter, Link, Route, Switch, useHistory } from 'react-router-dom';
import { Button, ButtonGroup, Form, FormGroup, Input, Label, Row, Col, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
function NewOwner({ addOwner }) {

    const history = useHistory();

    const add = async () => {
        const result = await addOwner();
        if(result.status === 200 ) {
            history.push('/ownerlist');
        }
    }


    return (
        <div>

            <div class="subheader">
                <h1 class="subheader-title">
                    Add Owner

                    </h1>
            </div>
            <div class="row">
                <div class="col-lg-7 col-md-10">
                    <div id="panel-1" class="panel">
                        <div class="panel-hdr-dsp">
                        <span onClick={() => history.goBack()}><i class="fal fn-icon fa-arrow-circle-left hand mr-2"></i></span>
                            <h2>New Owner</h2>
                            <div></div>
                        </div>
                        <div class="panel-container show">
                            <div class="panel-content">

                                <form>
                                    <div class=" form-group row">
                                        <label class="col-sm-3 col-form-label" for="simpleinput">Owner Name </label>
                                        <div class="col-sm-9">
                                            <Input type="text" class="form-control no-edit" name="name" id="newOwnerName" placeholder="Name" />
                                        </div>
                                        <div class="col-sm-12 ">
                                            <div class=" hr"></div>
                                        </div>
                                    </div>

                                    <div class=" form-group row">
                                        <label class="col-sm-3 col-form-label" for="simpleinput">Phone</label>
                                        <div class="col-sm-9">
                                            <Input type="text" class="form-control no-edit" name="code" id="newOwnerNumber" placeholder="Phone number" />
                                        </div>
                                        <div class="col-sm-12 ">
                                            <div class=" hr"></div>
                                        </div>
                                    </div>

                                    <div class=" form-group row">
                                        <label class="col-sm-3 col-form-label" for="simpleinput">Email</label>
                                        <div class="col-sm-9">
                                            <Input type="text" class="form-control no-edit" name="code" id="newOwnerEmail" placeholder="Email" />
                                        </div>
                                        <div class="col-sm-12 ">
                                            <div class=" hr"></div>
                                        </div>
                                    </div>

                                    <div class="form-group row mb-3">
                                        <label class="col-sm-3 col-form-label" for="simpleinput">Notes</label>
                                        <div class="col-md-9">
                                            <textarea class="form-control    " id="newOwnerNotes" type="text"  
                                                placeholder=" "  rows="3"   > </textarea>
                                        </div>
                                    </div>

                                    <div class="btn-divS">
                                        <Button onClick={add}  color="primary" className="mr-2" >Add</Button>
                                        <Link to="/ownerlist"><Button color="secondary" >Cancel</Button></Link>
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

export default NewOwner;