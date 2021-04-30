import React, { useState } from 'react';
import { BrowserRouter, Link, Route, Switch } from 'react-router-dom';
import { Button, ButtonGroup, Form, FormGroup, Input, Label, Row, Col } from 'reactstrap';

function HireRecord({ updateToDo, toDos }) {
    const id = /[^/]*$/.exec(window.location.href)[0];
    const hireRecord = toDos.find(item => item.id === id);
    const editField = async (event) => {
        document.getElementById('displayDiv').display = 'none';
        document.getElementById('editDiv').display = 'block';
    }

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
        //var textFields = document.getElementsByClassName("no-edit"); 
        for (var i = 0; i < 5; i++) { 
            //textFields[i].disabled = true;
            console.log('disabled')
        }
    }

    return (
        <div>
            <div class="row">
                <div class="col-md-10">
                    <div id="panel-1" class="panel">
                        <div class="panel-hdr">
                            <h2>
                                Hire Details
                                        </h2>
                            <Button onClick={editToggle} type="button" class="btn btn-sm btn-outline-default waves-effect waves-themed mr-2">
                                <span class="fal fa-pencil mr-1"></span>
                                                    Edit
                                                </Button>
                        </div>

                        <div class="panel-container show">
                            <div class="panel-content">



                                <form>
                                    <div class="form-group row">
                                        <label class="col-sm-2 col-form-label" for="simpleinput">Student Name </label>
                                        <div class="col-sm-10">
                                            <Input type="text" class="form-control no-edit" name="name" id="editToDoName"
                                                value={studName} onChange={onChangeStud} placeholder="name" />
                                        </div>
                                    </div>

                                    <div class="form-group row">
                                        <label class="col-sm-2 col-form-label" for="simpleinput">Code</label>
                                        <div class="col-sm-10">
                                            <Input type="text" class="form-control no-edit" name="code" id="editToDoCode" placeholder="code"
                                                value={code} onChange={onChangeCode} />
                                        </div>
                                    </div>

                                    <div class="form-group row">
                                        <label class="col-sm-2 col-form-label" for="simpleinput">Instrument</label>
                                        <div class="col-sm-10">
                                            <Input class="form-control no-edit" type="text" name="code" id="editToDoInstrument" placeholder="instrument"
                                                value={instrument} onChange={onChangeInstr} />
                                        </div>
                                    </div>

                                    <div class="form-group row ">
                                        <label class="col-sm-2 col-form-label" for="simpleinput">Brand</label>
                                        <div class="col-sm-10">
                                            <Input class="form-control no-edit" type="text" name="brand" id="editToDoBrand" placeholder="brand"
                                                value={brand} onChange={onChangeBrand} />
                                        </div>
                                    </div>

                                    <div class="form-group row">
                                        <label class="col-sm-2 col-form-label" for="simpleinput">Rate</label>
                                        <div class="col-sm-10">
                                            <Input class="form-control no-edit" type="text" name="rate" id="editToDoRate" placeholder="rate"
                                                value={rate} onChange={onChangeRate} />
                                        </div>
                                    </div>

                                    <div class="form-group row">
                                        <label class="col-sm-2 col-form-label" for="simpleinput">Owner</label>
                                        <div class="col-sm-10">
                                            <Input class="form-control no-edit" type="text" name="owner" id="editToDoOwner" placeholder="owner"
                                                value={owner} onChange={onChangeOwner} />
                                        </div>
                                    </div>

                                    <div class="form-group row">
                                        <label class="col-sm-2 col-form-label" for="simpleinput">Due Date</label>
                                        <div class="col-sm-10">
                                            <Input class="form-control no-edit" class="form-control no-edit" id="editToDoDueDate" type="date" name="date"
                                                placeholder="dd/mm/yyyy" value={dueDate} onChange={onChangeDue} />
                                        </div>
                                    </div>
                                    <div class="btn-div">
                                        <Button data-item-id={hireRecord.id} onClick={(e) => updateToDo(hireRecord.id)} class="btn btn-lg btn-primary waves-effect waves-themed mr-2 " className="ml-1">Update</Button>
                                        <Link to="/"><Button class="btn btn-lg btn-secondary waves-effect waves-themed " className="ml-1">Cancel</Button></Link>
                                    </div>
                                </form>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    )
}
export default HireRecord;