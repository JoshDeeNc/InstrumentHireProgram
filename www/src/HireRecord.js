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
            a[i].classList.remove('nox');
        }
        // add 'active' classs to the element that was clicked
        //elem.classList.add('active');
    }

    const deletion = async (itemId, event) => {
        const result = await deleteToDo(itemId);
        if(result.status === 200 ) {
            history.push('/');
        }
    }

    const update = async (itemId, event) => {
        const result = await updateToDo(itemId);
        if(result.status === 200 ) {
            history.push('/');
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
                            <h2>Hire Details </h2>
                            <Button onClick={editToggle} type="button" class="btn btn-sm btn-outline-default waves-effect waves-themed mr-2">
                                <span class="fal fa-pencil mr-1"></span>  Edit  </Button>
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
                                    <div class="btn-div">
                                        <Button data-item-id={hireRecord.id} onClick={toggle} class="btn btn-lg btn-primary waves-effect waves-themed mr-2">Update</Button>
                                        <Link to="/"><button class="btn btn-lg btn-secondary waves-effect waves-themed">Cancel</button></Link>
                                        <Button data-item-id={hireRecord.id} color="danger" onClick={toggle} class="btn btn-lg btn-primary waves-effect waves-themed mr-2">Delete</Button>
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
                    Are you sure you want to delete {studName}'s {instrument + " " + brand} hire record?
        </ModalBody>
                <ModalFooter>
                    <Button color="primary" onClick={(e) => deletion(hireRecord.id)}>Yes</Button>
                    <Button color="secondary" onClick={toggle}>No</Button>
                </ModalFooter>
            </Modal>
            <Modal isOpen={modal} toggle={toggle} >
                <ModalHeader toggle={toggle}> Update</ModalHeader>
                <ModalBody>
                    Are you sure you want to update {studName}'s {instrument + " " + brand} hire record?
        </ModalBody>
                <ModalFooter>
                    <Button color="primary" onClick={(e) => update(hireRecord.id)}>Yes</Button>
                    <Button color="secondary" onClick={toggle}>No</Button>
                </ModalFooter>
            </Modal>
        </div>
    )
}



export default HireRecord;