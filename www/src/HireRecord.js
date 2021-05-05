import React, { useState } from 'react';
import { BrowserRouter, Link, Route, Switch, useHistory } from 'react-router-dom';
import { Button, ButtonGroup, Form, FormGroup, Input, Label, Row, Col, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';

function HireRecord({ deleteToDo, updateToDo, toDos }) {
    const history = useHistory();
    const id = /[^/]*$/.exec(window.location.href)[0];
    const hireRecord = toDos.find(item => item.id === id);

    const [studName, setStudName] = useState(hireRecord.name)
    const [code, setCode] = useState(hireRecord.code)
    const [instrument, setInstrument] = useState(hireRecord.instrument)
    const [brand, setBrand] = useState(hireRecord.brand)
    const [rate, setRate] = useState(hireRecord.rate)
    const [owner, setOwner] = useState(hireRecord.owner)
    const [dueDate, setDue] = useState(hireRecord.due)

    const onChangeStud = (event) => {
        setStudName(event.target.value);
    }
    const onChangeCode = (event) => {
        setCode(event.target.value);
    }
    const onChangeInstr = (event) => {
        setInstrument(event.target.value);
    }
    const onChangeBrand = (event) => {
        setBrand(event.target.value);
    }
    const onChangeRate = (event) => {
        setRate(event.target.value);
    }
    const onChangeOwner = (event) => {
        setOwner(event.target.value);
    }
    const onChangeDue = (event) => {
        setDue(event.target.value);
    }


    const editToggle = (event) => {
        var a = document.getElementsByTagName('input');
        // loop through all 'a' elements
        for (var i = 0; i < a.length; i++) {
            // Remove the class 'active' if it exists
            a[i].classList.remove('nox', 'nov');

        }

        var b = document.getElementsByTagName('div');
        // loop through all 'a' elements
        for (var i = 0; i < b.length; i++) {
            // Remove the class 'active' if it exists
            b[i].classList.remove('btn-div');

        }

    }

    const deletion = async (itemId, event) => {
        const result = await deleteToDo(itemId);
        if (result.status === 200) {
            history.push('/');
        }
    }

    const update = async (itemId, event) => {
        const result = await updateToDo(itemId);
        if (result.status === 200) {
            history.push('/');
        }
    }

    const [deleteModal, setDelModal] = useState(false);
    const toggleDel = () => setDelModal(!deleteModal);

    const [updateModal, setUpModal] = useState(false);
    const toggleUp = () => setUpModal(!updateModal);

    return (
        <div>
            <div class="row">
                <div class="col-md-10">
                    <div id="panel-1" class="panel">
                        <div class="panel-hdr">
                            <h2>Hire Details </h2>

                        </div>

                        <div class="panel-container show">
                            <div class="panel-content">

                                <form>
                                    <div class="form-group row">
                                        <label class="col-sm-3 col-form-label" for="simpleinput">Student Name </label>
                                        <div class="col-sm-9">
                                            <input type="text" class="form-control nox" name="name" id="editToDoName"
                                                value={studName} onChange={onChangeStud} placeholder="name" />
                                        </div>
                                        <div class="col-sm-12 ">
                                            <div class=" hr"></div>
                                        </div>
                                    </div>

                                    <div class="form-group row">
                                        <label class="col-sm-3 col-form-label" for="simpleinput">Code</label>
                                        <div class="col-sm-9">
                                            <input type="text" class="form-control nox" name="code" id="editToDoCode" placeholder="code"
                                                value={code} onChange={onChangeCode} />
                                        </div>
                                        <div class="col-sm-12 ">
                                            <div class=" hr"></div>
                                        </div>
                                    </div>

                                    <div class="form-group row">
                                        <label class="col-sm-3 col-form-label" for="simpleinput">Instrument</label>
                                        <div class="col-sm-9">
                                            <input class="form-control nox" type="text" name="code" id="editToDoInstrument" placeholder="instrument"
                                                value={instrument} onChange={onChangeInstr} />
                                        </div>
                                        <div class="col-sm-12 ">
                                            <div class=" hr"></div>
                                        </div>
                                    </div>

                                    <div class="form-group row ">
                                        <label class="col-sm-3 col-form-label" for="simpleinput">Brand</label>
                                        <div class="col-sm-9">
                                            <input class="form-control nox" type="text" name="brand" id="editToDoBrand" placeholder="brand"
                                                value={brand} onChange={onChangeBrand} />
                                        </div>
                                        <div class="col-sm-12 ">
                                            <div class=" hr"></div>
                                        </div>
                                    </div>

                                    <div class="form-group row">
                                        <label class="col-sm-3 col-form-label" for="simpleinput">Rate</label>
                                        <div class="col-sm-9">
                                            <input class="form-control nox" type="text" name="rate" id="editToDoRate" placeholder="rate"
                                                value={rate} onChange={onChangeRate} />
                                        </div>
                                        <div class="col-sm-12 ">
                                            <div class=" hr"></div>
                                        </div>
                                    </div>

                                    <div class="form-group row">
                                        <label class="col-sm-3 col-form-label" for="simpleinput">Owner</label>
                                        <div class="col-sm-9">
                                            <input class="form-control nox" type="text" name="owner" id="editToDoOwner" placeholder="owner"
                                                value={owner} onChange={onChangeOwner} />
                                        </div>
                                        <div class="col-sm-12 ">
                                            <div class=" hr"></div>
                                        </div>
                                    </div>

                                    <div class="form-group row">
                                        <label class="col-sm-3 col-form-label" for="simpleinput">Due Date</label>
                                        <div class="col-sm-9">
                                            <input class="form-control nox" id="editToDoDueDate" type="date" name="date"
                                                placeholder="dd/mm/yyyy" value={dueDate} onChange={onChangeDue} />
                                        </div>
                                        <div class="col-sm-12 ">
                                            <div class=" hr"></div>
                                        </div>
                                    </div>
                                    <div class="btn-div text-center">
                                        <Button data-item-id={hireRecord.id} onClick={toggleUp} class="btn btn-lg btn-primary waves-effect waves-themed mr-2  " >Update</Button>
                                        <Link to="/"><Button class="btn btn-lg btn-secondary waves-effect waves-themed " className="ml-1 " >Cancel</Button></Link>
                                    </div>
                                </form>
                            </div>
                            <div class="panel-content py-2 rounded-bottom border-faded border-left-0 border-right-0 border-bottom-0   d-flex">
                                <Button onClick={editToggle} type="button" class="btn btn-sm btn-outline-default waves-effect waves-themed mr-2">
                                    <span class="fal fa-pencil mr-1"></span>  Edit  </Button>

                                <span class="ml-auto  ">
                                    <Button data-item-id={hireRecord.id} color="danger" onClick={toggleDel} class="btn btn-lg btn-primary waves-effect waves-themed mr-2">Delete</Button>

                                </span>
                            </div>

                        </div>

                    </div>
                </div>
            </div>
            <Modal isOpen={deleteModal} toggle={toggleDel} >
                <ModalHeader toggle={toggleDel}> Delete</ModalHeader>
                <ModalBody>
                    Are you sure you want to delete {studName}'s {instrument + " " + brand} hire record?
        </ModalBody>
                <ModalFooter>
                    <Button color="primary" onClick={(e) => deletion(hireRecord.id)}>Yes</Button>
                    <Button color="secondary" onClick={toggleDel}>No</Button>
                </ModalFooter>
            </Modal>
            <Modal isOpen={updateModal} toggle={toggleUp} >
                <ModalHeader toggle={toggleUp}> Update</ModalHeader>
                <ModalBody>
                    Are you sure you want to update {studName}'s {instrument + " " + brand} hire record?
        </ModalBody>
                <ModalFooter>
                    <Button color="primary" onClick={(e) => update(hireRecord.id)}>Yes</Button>
                    <Button color="secondary" onClick={toggleUp}>No</Button>
                </ModalFooter>
            </Modal>
        </div>
    )
}



export default HireRecord;