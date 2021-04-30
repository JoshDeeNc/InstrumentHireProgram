import React, { useState } from 'react';
import { BrowserRouter, Link, Route, Switch } from 'react-router-dom';
import { Button, ButtonGroup, Form, FormGroup, Input, Label, Row, Col } from 'reactstrap';

function StudentRecord({ updateStudent, studentList }) {
    const id = /[^/]*$/.exec(window.location.href)[0];
    const studentRecord = studentList.find(item => item.id === id);

    const [studFirst, setStudFirst] = useState(studentRecord.firstName)
    const [studLast, setStudLast] = useState(studentRecord.lastName)
    const [phone, setPhone] = useState(studentRecord.phone)
    const [email, setEmail] = useState(studentRecord.email)

    const onChangeFirst = (event) => {
        setStudFirst(event.target.value);
    }
    const onChangeLast = (event) => {
        setStudLast(event.target.value);
    }
    const onChangePhone = (event) => {
        setPhone(event.target.value);
    }
    const onChangeEmail = (event) => {
        setEmail(event.target.value);
    }

    return (
        <div>
            <div class="row">
                <div class="col-md-10">
                    <div id="panel-1" class="panel">
                        <div class="panel-hdr">
                            <h2>
                                Student Details
                                        </h2>
                            <button type="button" class="btn btn-sm btn-outline-default waves-effect waves-themed mr-2">
                                <span class="fal fa-pencil mr-1"></span>
                                                    Edit
                                                </button>
                        </div>
                        <div class="panel-container show">
                            <div class="panel-content">
                                <form>
                                    <div class="form-group row" >
                                        <label class="col-sm-2 col-form-label" for=" ">First Name </label>
                                        <div class="col-sm-10">
                                            <Input type="text" class="form-control no-edit" name="name" id="editFirstName"
                                                value={studFirst} onChange={onChangeFirst} placeholder="Name" />
                                        </div>

                                    </div>
                                    <div class="row form-group" >
                                        <label class="col-sm-2 col-form-label" for=" ">Last Name </label>

                                        <div class="col-sm-10">
                                            <Input type="text" class="form-control no-edit" name="name" id="editLastName"
                                                value={studLast} onChange={onChangeLast} placeholder="Last Name " />
                                        </div>
                                    </div>
                                    <div class="row form-group" >
                                        <label class="col-sm-2 col-form-label" for=" "> Phone Number  </label>

                                        <div class="col-sm-10">
                                            <Input type="text" class="form-control no-edit" name="name" id="editPhoneNumber"
                                                value={phone} onChange={onChangePhone} placeholder="Phone Number" />
                                        </div>
                                    </div>
                                    <div class="row form-group" >
                                        <label class="col-sm-2 col-form-label" for=" ">Email</label>

                                        <div class="col-sm-10">
                                            <Input type="text" class="form-control no-edit" name="name" id="editEmail"
                                                value={email} onChange={onChangeEmail} placeholder="Email" />
                                        </div>
                                    </div>

                                    <Button data-item-id={studentRecord.id} onClick={(e) => updateStudent(studentRecord.id)} class="btn btn-lg btn-primary waves-effect waves-themed mr-2 " className="ml-1">Update</Button>
                                    <Link to="/studentlist"><Button class="btn btn-lg btn-default waves-effect waves-themed " className="ml-1">Cancel</Button></Link>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default StudentRecord;