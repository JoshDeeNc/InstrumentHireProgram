import React, { useState } from 'react';
import { BrowserRouter, Link, Route, Switch, useHistory } from 'react-router-dom';
import { Button, ButtonGroup, Form, FormGroup, Input, Label, Row, Col, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
function NewSchool({ addSchool }) {

    const history = useHistory();

    const add = async () => {
        var forms = document.getElementsByClassName('needs-validation')[0];
        forms.classList.add('was-validated');
        if (forms.checkValidity() === false) {
            return
        }
        var saving = document.getElementsByClassName("disp")[0]
        saving.innerHTML = '<div class="spinner-border spinner-border-sm mr-2" role="status" aria-hidden="true"></div><strong>Saving...</strong>'
        const result = await addSchool();
        if(result.status === 200 ) {
            history.push('/schoollist');
        }
    }


    return (
        <div>

            <div class="subheader">
                <h1 class="subheader-title">
                    Add School

                    </h1>
            </div>
            <div class="row">
                <div class="col-lg-7 col-md-10">
                    <div id="panel-1" class="panel">
                        <div class="panel-hdr-dsp">
                        <span onClick={() => history.goBack()}><i class="fal fn-icon fa-arrow-circle-left hand mr-2"></i></span>
                            <h2>New School</h2>
                            <div></div>
                        </div>
                        <div class="panel-container show">
                            <div class="panel-content">

                                <form class="needs-validation" novalidate>
                                    <div class=" form-group row">
                                        <label class="col-sm-3 col-form-label" for="simpleinput">School Name </label>
                                        <div class="col-sm-9">
                                            <input type="text" class="form-control no-edit" name="name" id="newSchoolName"   required />
                                        </div>
                                        <div class="col-sm-12 ">
                                            <div class=" hr"></div>
                                        </div>
                                    </div>

                                    <div class=" form-group row">
                                        <label class="col-sm-3 col-form-label" for="simpleinput">Phone</label>
                                        <div class="col-sm-9">
                                            <input type="text" class="form-control no-edit" name="code" id="newSchoolNumber" required />
                                        </div>
                                        <div class="col-sm-12 ">
                                            <div class=" hr"></div>
                                        </div>
                                    </div>

                                    <div class=" form-group row">
                                        <label class="col-sm-3 col-form-label" for="simpleinput">Email</label>
                                        <div class="col-sm-9">
                                            <input type="text" class="form-control no-edit" name="code" id="newSchoolEmail" required/>
                                        </div>
                                        <div class="col-sm-12 ">
                                            <div class=" hr"></div>
                                        </div>
                                    </div>

                                    <div class="form-group row mb-3">
                                        <label class="col-sm-3 col-form-label" for="simpleinput">Notes</label>
                                        <div class="col-md-9">
                                            <textarea class="form-control    " id="newSchoolNotes" type="text"  
                                                placeholder=" "  rows="3"   > </textarea>
                                        </div>
                                    </div>

                                    <div class="btn-divS">
                                        <Button onClick={add}  color="primary" className="mr-2" ><span class="disp"> Add </span></Button>
                                        <Link to="/schoollist"><Button color="secondary" >Cancel</Button></Link>
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

export default NewSchool;