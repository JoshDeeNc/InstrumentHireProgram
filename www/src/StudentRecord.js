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
    const [studSchool, setStudSchool] = useState(studentRecord.school)
    const [notes, setNotes] = useState(studentRecord.notes)

    const editToggle = (event) => {
        var a = document.getElementsByTagName('input');
        var a1 = document.getElementsByTagName('textarea');
        // loop through all 'a' elements
        for (var i = 0; i < a.length; i++) {
            // Remove the class 'active' if it exists
            a[i].classList.remove('nox');
        }
        a1[0].classList.remove('nox');
        var b = document.getElementsByTagName('div');
        // loop through all 'a' elements
        for (var i = 0; i < b.length; i++) {
            // Remove the class 'active' if it exists
            b[i].classList.remove('btn-div');

        }
    }

    const deletion = async (itemId, event) => {
        var deleting = document.getElementsByClassName("disp")[0]
        deleting.innerHTML = '<div class="spinner-border spinner-border-sm mr-2" role="status" aria-hidden="true"></div><strong>Deleting...</strong>'
        const result = await deleteStudent(itemId);
        if (result.status === 200) {
            history.push('/studentlist');
        }
    }

    const update = async (itemId, event) => {
        var saving = document.getElementsByClassName("disp")[1]
        saving.innerHTML = '<div class="spinner-border spinner-border-sm mr-2" role="status" aria-hidden="true"></div><strong>Saving...</strong>'
        const result = await updateStudent(itemId);
        if (result.status === 200) {
            history.push('/studentlist');
        }
    }

    const [deleteModal, setDelModal] = useState(false);
    const toggleDel = () => setDelModal(!deleteModal);

    const [updateModal, setUpModal] = useState(false);
    const toggleUp = () => setUpModal(!updateModal);

    return (
        <div>
            <div class="row">
                <div class="col-lg-7 col-md-10">
                    <div id="panel-1" class="panel">
                        <div class="panel-hdr-dsp">
                        <span onClick={() => history.goBack()}><i class="fal fn-icon fa-arrow-circle-left hand mr-2"></i></span>
                            <h2>Student Details</h2>
                            <div></div>

                        </div>
                        <div class="panel-container show">
                            <div class="panel-content">
                                <form>
                                    <div class="form-group row" >
                                        <label class="col-sm-3 col-form-label" for=" ">First Name </label>
                                        <div class="col-sm-9">
                                            <input type="text" class="form-control nox" name="name" id="editFirstName"
                                                value={studFirst} onChange={(e) => setStudFirst(e.target.value)} placeholder="Name" />
                                        </div>
                                        <div class="col-sm-12 ">
                                            <div class=" hr"></div>
                                        </div>

                                    </div>
                                    <div class="row form-group" >
                                        <label class="col-sm-3 col-form-label" for=" ">Last Name </label>

                                        <div class="col-sm-9">
                                            <input type="text" class="form-control nox" name="name" id="editLastName"
                                                value={studLast} onChange={(e) => setStudLast(e.target.value)} placeholder="Last Name " />
                                        </div>
                                        <div class="col-sm-12 ">
                                            <div class=" hr"></div>
                                        </div>
                                    </div>
                                    <div class="row form-group" >
                                        <label class="col-sm-3 col-form-label" for=" "> Phone Number  </label>

                                        <div class="col-sm-9">
                                            <input type="text" class="form-control nox" name="name" id="editPhoneNumber"
                                                value={phone} onChange={(e) => setPhone(e.target.value)} placeholder="Phone Number" />
                                        </div>
                                        <div class="col-sm-12 ">
                                            <div class=" hr"></div>
                                        </div>
                                    </div>
                                    <div class="row form-group" >
                                        <label class="col-sm-3 col-form-label" for=" ">Email</label>

                                        <div class="col-sm-9">
                                            <input type="text" class="form-control nox" name="name" id="editEmail"
                                                value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Email" />
                                        </div>
                                        <div class="col-sm-12 ">
                                            <div class=" hr"></div>
                                        </div>
                                      
                                    </div>
                                    <div class="row form-group" >
                                        <label class="col-sm-3 col-form-label" for=" ">School</label>

                                        <div class="col-sm-9">
                                            <input type="text" class="form-control nox" name="name" id="editStudentSchool"
                                                value={studSchool} onChange={(e) => setStudSchool(e.target.value)} placeholder="School" />
                                        </div>
                                        <div class="col-sm-12 ">
                                            <div class=" hr"></div>
                                        </div>
                                      
                                    </div>

                                    <div class="form-group row mb-3">
                                        <label class="col-sm-3 col-form-label" for="simpleinput">Notes</label>
                                        <div class="col-md-9">
                                            <textarea class="form-control nox" id="editNotes" type="text"  
                                                placeholder=" "  rows="3" value={notes} onChange={(e) => setNotes(e.target.value)}> </textarea>
                                        </div>
                                    </div>

                                    <div class="btn-div text-center pt-2">
                                        <Button data-item-id={studentRecord.id} onClick={toggleUp} color="primary" className="mr-2"  >Update</Button>
                                        <Link to="/studentlist"><Button color="secondary"  >Cancel</Button></Link>
                                    </div>
                                </form>
                            </div>


                            <div class="panel-content py-2 rounded-bottom border-faded border-left-0 border-right-0 border-bottom-0   d-flex">

                                <Button onClick={editToggle} type="button"  ><span class="fal fa-pencil mr-1"></span> Edit</Button>

                                <span class="ml-auto  ">

                                    <Button data-item-id={studentRecord.id} color="danger" onClick={toggleDel} > <span class="fal fa-trash-alt mr-1"></span>  Delete</Button>

                                </span>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
            <Modal isOpen={deleteModal} toggle={toggleDel} >
                <ModalHeader toggle={toggleDel}> Delete</ModalHeader>
                <ModalBody>
                    Are you sure you want to delete {studFirst + " " + studLast}'s record?
        </ModalBody>
                <ModalFooter>
                    <Button color="primary" onClick={(e) => deletion(studentRecord.id)}><span class="disp"> Yes </span></Button>
                    <Button color="secondary" onClick={toggleDel}>No</Button>
                </ModalFooter>
            </Modal>
            <Modal isOpen={updateModal} toggle={toggleUp} >
                <ModalHeader toggle={toggleUp}> Update</ModalHeader>
                <ModalBody>
                    Are you sure you want to update {studFirst + " " + studLast}'s record?
        </ModalBody>
                <ModalFooter>
                    <Button color="primary" onClick={(e) => update(studentRecord.id)}><span class="disp"> Yes </span></Button>
                    <Button color="secondary" onClick={toggleUp}>No</Button>
                </ModalFooter>
            </Modal>
        </div>
    )
}
export default StudentRecord;