import React, { useState } from 'react';
import { BrowserRouter, Link, Route, Switch, useHistory } from 'react-router-dom';
import { Button, ButtonGroup, Form, FormGroup, Input, Label, Row, Col, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';

function NewInstOptions({ addInstOptions }) {

    const history = useHistory();

    const add = async () => {
        var forms = document.getElementsByClassName('needs-validation')[0];
        forms.classList.add('was-validated');
        if (forms.checkValidity() === false) {
            return
        }
        const instTypeName = document.getElementById("newInstTypeName").value === null ? "" : document.getElementById('newInstTypeName').value;
        const sizes = document.getElementById("newSizesList").value === "" ? ["N/A"] : document.getElementById('newSizesList').value.split(",");
        let ado = document.getElementById('newAddOnsList').value.split(";");
        console.log(ado)
        let addOns = {};
        if (ado != "") {
            for (var i = 0; i < ado.length; i++) {
                let attr = ado[i].split(",");
                console.log(attr)
                addOns[attr[0]] = attr[1]
            }
            console.log(addOns)
        }
        var saving = document.getElementsByClassName("disp")[0]
        saving.innerHTML = '<div class="spinner-border spinner-border-sm mr-2" role="status" aria-hidden="true"></div><strong>Saving...</strong>'
        const result = await addInstOptions(instTypeName, sizes, addOns);
        if (result.status === 200) {
            history.push('/instoptionslist');
        }
    }

    return (
        <div>

<div class="subheader"><h1 class="subheader-title">New Instrument Type</h1></div>
            <div class="row">
                <div class="col-lg-7 col-md-10">
                    <div id="panel-1" class="panel">
                        <div class="panel-hdr-dsp">
                        <span onClick={() => history.goBack()}><i class="fal fn-icon fa-arrow-circle-left hand mr-2"></i></span>
                            <h2>New Instrument Type</h2>
                            <div></div>
                        </div>


                        <div class="panel-container show">
                            <div class="panel-content">

                                <form class="needs-validation" novalidate >
                                    <div class=" form-group row">
                                        <label class="col-sm-3 col-form-label" for="simpleinput">Instrument Type Name </label>
                                        <div class="col-sm-9">
                                            <input type="text" class="form-control no-edit"   id="newInstTypeName" required />
                                            <div class="invalid-feedback">  Please enter instrument type name </div>
                                        </div>
                                        <div class="col-sm-12 ">
                                            <div class=" hr"></div>
                                        </div>
                                    </div>

                                    <div class=" form-group row ">
                                        <label class="col-sm-3 col-form-label" for="simpleinput">Sizes</label>
                                        <div class="col-sm-9">
                                            <input type="text" class="form-control no-edit"   id="newSizesList"   />
                                            
                                        </div>
                                        <div class="col-sm-12 ">
                                            <div class=" hr"></div>
                                        </div>


                                        
                                    </div>

                                    <div class=" form-group row">
                                        <label class="col-sm-3 col-form-label" for="simpleinput"> Add-Ons </label>
                                        <div class="col-sm-9">
                                            <input type="text" class="form-control no-edit" name="code" id="newAddOnsList" />
                                        </div>
                                       

                                       
                                    </div>


                                    <div class="btn-divS mt-3">
                                        <Button onClick={add} color="primary" className="mr-2" ><span class="disp"> Add </span></Button>
                                        <Link to="/instoptionslist"><Button color="secondary"  >Cancel</Button></Link>

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