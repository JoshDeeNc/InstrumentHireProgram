import React from 'react';
import { BrowserRouter, Link, Route, Switch } from 'react-router-dom';
import { Button, ButtonGroup, Form, FormGroup, Input, Label, Row, Col } from 'reactstrap';
function NewStudent({ addStudent }) {

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
                                        <label class="col-sm-2 col-form-label" for="simpleinput">Student First Name </label>
                                        <div class="col-sm-10">
                                            <Input type="text" class="form-control no-edit" name="name" id="newFirstName" placeholder="First name" />
                                        </div>
                                    </div>

                                    <div class=" form-group row">
                                        <label class="col-sm-2 col-form-label" for="simpleinput">Student Last Name </label>
                                        <div class="col-sm-10">
                                            <Input type="text" class="form-control no-edit" name="name" id="newLastName" placeholder="Last name" />
                                        </div>
                                    </div>

                                    <div class=" form-group row">
                                        <label class="col-sm-2 col-form-label" for="simpleinput">Phone</label>
                                        <div class="col-sm-10">
                                            <Input type="text" class="form-control no-edit" name="code" id="newPhoneNumber" placeholder="Phone number" />
                                        </div>
                                    </div>

                                    <div class=" form-group row">
                                        <label class="col-sm-2 col-form-label" for="simpleinput">Email</label>
                                        <div class="col-sm-10">
                                            <Input type="text" class="form-control no-edit" name="code" id="newEmail" placeholder="Email" />
                                        </div>
                                    </div>
                                    <div class="btn-div">
                                        <Button onClick={addStudent} class="btn btn-lg btn-primary waves-effect waves-themed mr-2 " className="ml-1">Add</Button>
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