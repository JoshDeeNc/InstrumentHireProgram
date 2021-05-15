import React, { useState } from 'react';
import { BrowserRouter, Link, Route, Switch, useHistory } from 'react-router-dom';
import { Button, ButtonGroup, Form, FormGroup, Input, Label, Row, Col, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';

function NewInstOptions( { addInstOptions } ) {

    const history = useHistory();

    const add = async () => {
        const instTypeName = document.getElementById("newInstTypeName").value === null ? "" : document.getElementById('newInstTypeName').value;
        const sizes = document.getElementById("newSizesList").value === null ? ["N/A"] : document.getElementById('newSizesList').value.split(",");
        const addOns = document.getElementById("newAddOnsList").value === null ? ["N/A"] : document.getElementById('newAddOnsList').value.split(",");
        const result = await addInstOptions(instTypeName, sizes, addOns);
        if(result.status === 200 ) {
            history.push('/instoptionslist');
        }
    }

    return (
        <div>
            <h1>New Instrument Type</h1>

            <div class="row">
                <div class="col-lg-7 col-md-10">
                    <div id="panel-1" class="panel">
                        <div class="panel-hdr-dsp">
                            <h2>New Instrument Type</h2>
                            <div></div>
                        </div>
                        <div class="panel-container show">
                            <div class="panel-content">

                                <form>
                                    <div class=" form-group row">
                                        <label class="col-sm-3 col-form-label" for="simpleinput">Instrument Type Name </label>
                                        <div class="col-sm-9">
                                            <Input type="text" class="form-control no-edit" name="name" id="newInstTypeName"  />
                                        </div>
                                        <div class="col-sm-12 ">
                                            <div class=" hr"></div>
                                        </div>
                                    </div>

                                    <div class=" form-group row ">
                                        <label class="col-sm-3 col-form-label" for="simpleinput">Sizes</label>
                                        <div class="col-sm-9">
                                            <Input type="text" class="form-control no-edit" name="code" id="newSizesList" />
                                        </div>
                                        <div class="col-sm-12 ">
                                            <div class=" hr"></div>
                                        </div>
                                         
                                         
                                        <div class="col-sm-12 mb-2 mt-2 ">
                                            <div class=" hr"></div>
                                        </div>
                                    </div>

                                    <div class=" form-group row">
                                        <label class="col-sm-3 col-form-label" for="simpleinput"> Add-Ons </label>
                                        <div class="col-sm-9">
                                            <Input type="text" class="form-control no-edit" name="code" id="newAddOnsList" />
                                        </div>
                                        <div class="col-sm-12 ">
                                            <div class=" hr"></div>
                                        </div>
              
                                        <div class="col-sm-12 mb-2 mt-2 ">
                                            <div class=" hr"></div>
                                        </div>
                                    </div>


                                    <div class="btn-divS">
                                        <Button onClick={add} color="primary" className="mr-2" >Add</Button>

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


export default NewInstOptions;