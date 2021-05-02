import React, { useState } from 'react';
import { BrowserRouter, Link, Route, Switch, useHistory } from 'react-router-dom';
import { Button, ButtonGroup, Form, FormGroup, Input, Label, Row, Col, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
function NewStudent({ addStudent }) {

    const history = useHistory();

    const add = async () => {
        const result = await addStudent;
        if(result.status === 200 ) {
            history.push('/studentlist');
        }
    }


    return (
        <div>

            <div class="subheader">
                <h1 class="subheader-title">
                    Add Student

                    </h1>
            </div>
            <div class="row">
                <div class="col-md-10">
                    <div id="panel-1" class="panel">
                        <div class="panel-hdr">
                            <h2>New Student</h2>
                        </div>
                        <div class="panel-container show">
                            <div class="panel-content">

                                <form>
                                    <div class=" form-group row">
                                        <label class="col-sm-3 col-form-label" for="simpleinput">Student First Name </label>
                                        <div class="col-sm-9">
                                            <Input type="text" class="form-control no-edit" name="name" id="newFirstName" placeholder="First name" />
                                        </div>
                                    </div>

                                    <div class=" form-group row">
                                        <label class="col-sm-3 col-form-label" for="simpleinput">Student Last Name </label>
                                        <div class="col-sm-9">
                                            <Input type="text" class="form-control no-edit" name="name" id="newLastName" placeholder="Last name" />
                                        </div>
                                        <div class="col-sm-12 ">
                                            <div class=" hr"></div>
                                        </div>
                                    </div>

                                    <div class=" form-group row">
                                        <label class="col-sm-3 col-form-label" for="simpleinput">Phone</label>
                                        <div class="col-sm-9">
                                            <Input type="text" class="form-control no-edit" name="code" id="newPhoneNumber" placeholder="Phone number" />
                                        </div>
                                        <div class="col-sm-12 ">
                                            <div class=" hr"></div>
                                        </div>
                                    </div>

                                    <div class=" form-group row">
                                        <label class="col-sm-3 col-form-label" for="simpleinput">Email</label>
                                        <div class="col-sm-9">
                                            <Input type="text" class="form-control no-edit" name="code" id="newEmail" placeholder="Email" />
                                        </div>
                                        <div class="col-sm-12 ">
                                            <div class=" hr"></div>
                                        </div>
                                    </div>
                                    <div class="btn-div">
                                        <Button onClick={add} class="btn btn-lg btn-primary waves-effect waves-themed mr-2 " className="ml-1">Add</Button>
                                        <Link to="/studentlist"><Button class="btn btn-lg btn-secondary waves-effect waves-themed " className="ml-1">Cancel</Button></Link>
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

export default NewStudent;