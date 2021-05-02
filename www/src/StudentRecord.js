import React, { useState } from 'react';
import { BrowserRouter, Link, Route, Switch, useHistory } from 'react-router-dom';
import { Button, ButtonGroup, Form, FormGroup, Input, Label, Row, Col, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';

function StudentRecord({ deleteStudent, updateStudent, studentList }) {
    const history = useHistory();
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

    const editToggle = (event) => {
        var a = document.getElementsByTagName('input');
        // loop through all 'a' elements
        for (var i = 0; i < a.length; i++) {
            // Remove the class 'active' if it exists
            a[i].classList.remove('nox');
        }
        // add 'active' classs to the element that was clicked
        //elem.classList.add('active');
    }

    const deletion = async (itemId, event) => {
        const result = await deleteStudent(itemId);
        if (result.status === 200) {
            history.push('/studentlist');
        }
    }

    const update = async (itemId, event) => {
        const result = await updateStudent(itemId);
        if(result.status === 200 ) {
            history.push('/studentlist');
        }
    }

    const [modal, setModal] = useState(false);
    const toggle = () => setModal(!modal);

    return (
        <div>
            <div class="row">
                <div class="col-md-10">
                    <div id="panel-1" class="panel">
                        <div class="panel-hdr">
                            <h2>
                                Student Details
                                        </h2>
                            <Button onClick={editToggle} type="button" class="btn btn-sm btn-outline-default waves-effect waves-themed mr-2">
                                <span class="fal fa-pencil mr-2"></span>
                                                    Edit
                                                </Button>
                        </div>
                        <div class="panel-container show">
                            <div class="panel-content">
                                <form>
                                    <div class="form-group row" >
                                        <label class="col-sm-3 col-form-label" for=" ">First Name </label>
                                        <div class="col-sm-9">
                                            <input type="text" class="form-control nox" name="name" id="editFirstName"
                                                value={studFirst} onChange={onChangeFirst} placeholder="Name" />
                                        </div>
                                        <div class="col-sm-12 ">
                                            <div class=" hr"></div>
                                        </div>

                                    </div>
                                    <div class="row form-group" >
                                        <label class="col-sm-3 col-form-label" for=" ">Last Name </label>

                                        <div class="col-sm-9">
                                            <input type="text" class="form-control nox" name="name" id="editLastName"
                                                value={studLast} onChange={onChangeLast} placeholder="Last Name " />
                                        </div>
                                        <div class="col-sm-12 ">
                                            <div class=" hr"></div>
                                        </div>
                                    </div>
                                    <div class="row form-group" >
                                        <label class="col-sm-3 col-form-label" for=" "> Phone Number  </label>

                                        <div class="col-sm-9">
                                            <input type="text" class="form-control nox" name="name" id="editPhoneNumber"
                                                value={phone} onChange={onChangePhone} placeholder="Phone Number" />
                                        </div>
                                        <div class="col-sm-12 ">
                                            <div class=" hr"></div>
                                        </div>
                                    </div>
                                    <div class="row form-group" >
                                        <label class="col-sm-3 col-form-label" for=" ">Email</label>

                                        <div class="col-sm-9">
                                            <input type="text" class="form-control nox" name="name" id="editEmail"
                                                value={email} onChange={onChangeEmail} placeholder="Email" />
                                        </div>
                                        <div class="col-sm-12 ">
                                            <div class=" hr"></div>
                                        </div>
                                    </div>
                                    <div class="btn-div">
                                        <Button data-item-id={studentRecord.id} onClick={toggle} class="btn btn-lg btn-primary waves-effect waves-themed mr-2 ">Update</Button>
                                        <Link to="/studentlist"><button class="btn btn-lg btn-secondary waves-effect waves-themed ">Cancel</button></Link>
                                        <Button data-item-id={studentRecord.id} color="danger" onClick={toggle} class="btn btn-lg btn-primary waves-effect waves-themed mr-2">Delete</Button>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Modal isOpen={modal} toggle={toggle} >
                <ModalHeader toggle={toggle}> Delete</ModalHeader>
                <ModalBody>
                    Are you sure you want to delete {studFirst + " " + studLast}'s record?
        </ModalBody>
                <ModalFooter>
                    <Button color="primary" onClick={(e) => deletion(studentRecord.id)}>Yes</Button>
                    <Button color="secondary" onClick={toggle}>No</Button>
                </ModalFooter>
            </Modal>
            <Modal isOpen={modal} toggle={toggle} >
                <ModalHeader toggle={toggle}> Update</ModalHeader>
                <ModalBody>
                    Are you sure you want to update {studFirst + " " + studLast}'s record?
        </ModalBody>
                <ModalFooter>
                    <Button color="primary" onClick={(e) => update(studentRecord.id)}>Yes</Button>
                    <Button color="secondary" onClick={toggle}>No</Button>
                </ModalFooter>
            </Modal>
        </div>
    )
}
export default StudentRecord;