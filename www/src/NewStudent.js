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
                <div class="col-md-6">
                    <div id="panel-1" class="panel">
                        <div class="panel-hdr">
                            <h2>New Student</h2>

                        </div>

                        <div class="panel-container show">
                            <div class="panel-content">

                                <form>
                                    <div class="form-group">
                                        <label class="form-label" for="simpleinput">Student First Name </label>
                                        <Input type="text" class="form-control" name="name" id="newFirstName" placeholder="new name" />
                                    </div>

                                    <div class="form-group">
                                        <label class="form-label" for="simpleinput">Student Last Name </label>
                                        <Input type="text" class="form-control" name="name" id="newLastName" placeholder="new name" />
                                    </div>

                                    <div class="form-group">
                                        <label class="form-label" for="simpleinput">Phone</label>
                                        <Input type="text" name="code" id="newPhoneNumber" placeholder="new code" />
                                    </div>

                                    <div class="form-group">
                                        <label class="form-label" for="simpleinput">Email</label>
                                        <Input type="text" name="code" id="newEmail" placeholder="new code" />
                                    </div>

                                    <Link to="/studentlist"><Button onClick={addStudent} class="btn btn-lg btn-primary waves-effect waves-themed mr-2 " className="ml-1">Add</Button></Link>
                                    <Link to="/studentlist"><Button class="btn btn-lg btn-default waves-effect waves-themed " className="ml-1">Cancel</Button></Link>

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