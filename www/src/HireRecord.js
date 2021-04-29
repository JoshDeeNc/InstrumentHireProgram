import React, { useState } from 'react';
import { BrowserRouter, Link, Route, Switch } from 'react-router-dom';
import { Button, ButtonGroup, Form, FormGroup, Input, Label, Row, Col } from 'reactstrap';

function HireRecord({ completeToDo, updateToDo, toDos }) {
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

    return (
        <div>
            <div class="row">
                <div class="col-md-10">
                    <div id="panel-1" class="panel">
                        <div class="panel-hdr">
                            <h2>
                                Hire Details
                                        </h2>
                            <Button onClick={editField} type="button" class="btn btn-sm btn-outline-default waves-effect waves-themed mr-2">
                                <span class="fal fa-pencil mr-1"></span>
                                                    Edit
                                                </Button>
                        </div>
                        
                        <div class="panel-container show">
                            <div class="panel-content">

                                <form>
                                    <div class="form-group row">
                                        <label class="form-label" for="simpleinput">Student Name </label>
                                        <Input type="text" class="form-control" name="name" id="editToDoName"
                                        value={studName} onChange={onChangeStud} placeholder="name" />
                                    </div>

                                    <div class="form-group row">
                                        <label class="form-label" for="simpleinput">Code</label>
                                        <Input type="text" name="code" id="editToDoCode" placeholder="code"
                                        value={code} onChange={onChangeCode}/>
                                    </div>

                                    <div class="form-group row">
                                        <label class="form-label" for="simpleinput">Instrument</label>
                                        <Input type="text" name="code" id="editToDoInstrument" placeholder="instrument"
                                        value={instrument} onChange={onChangeInstr}/>
                                    </div>

                                    <div class="form-group row ">
                                        <label class="form-label" for="simpleinput">Brand</label>
                                        <Input type="text" name="brand" id="editToDoBrand" placeholder="brand" 
                                        value={brand} onChange={onChangeBrand}/>
                                    </div>

                                    <div class="form-group row">
                                        <label class="form-label" for="simpleinput">Rate</label>
                                        <Input type="text" name="rate" id="editToDoRate" placeholder="rate"
                                        value={rate} onChange={onChangeRate}/>
                                    </div>

                                    <div class="form-group row">
                                        <label class="form-label" for="simpleinput">Owner</label>
                                        <Input type="text" name="owner" id="editToDoOwner" placeholder="owner" 
                                        value={owner} onChange={onChangeOwner}/>
                                    </div>

                                    <div class="form-group row">
                                        <label class="form-label" for="simpleinput">Due Date</label>
                                        <Input class="form-control" id="editToDoDueDate" type="date" name="date" 
                                        placeholder="dd/mm/yyyy" value={dueDate} onChange={onChangeDue}/>
                                    </div>

                                    <Button data-item-id={hireRecord.id} onClick={(e) => updateToDo(hireRecord.id)} class="btn btn-lg btn-primary waves-effect waves-themed mr-2 " className="ml-1">Update</Button>
                                    <Link to="/"><Button class="btn btn-lg btn-default waves-effect waves-themed " className="ml-1">Cancel</Button></Link>

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