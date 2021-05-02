import React, { useState, useEffect } from 'react';
import { BrowserRouter, Link, Route, Switch } from 'react-router-dom';
import { Button, ButtonGroup, Form, FormGroup, Input, Label, Row, Col } from 'reactstrap';
function NewHire({ toDos, studentList, instInventory, addToDo }) {
    const unique = (value, index, self) => {
        return self.indexOf(value) === index
    }

    const availInstruments = instInventory.filter(item => item.type === "Instrument").map(item => item.object).filter(unique)
    const [availBrands, setAvailBrands] = useState([])
    const [instr, setInstrument] = useState('')

    useEffect(() => {
        console.log(instr); // add whatever functions use new `college` value here.
        setAvailBrands(instInventory.filter(item => item.object === instr && item.type === "Instrument").map(item => item.brand).filter(unique))
    }, [instr])

    const onChangeInstrument = (event) => {
        setInstrument(event.target.value);
    }

    const studentConcat = studentList.map(item => item.firstName + " " + item.lastName)
    const [student, setStudent] = useState('')

    const onChangeStudent = (event) => {
        setStudent(event.target.value);
    }

    return (
        <div>

            <div class="subheader">
                <h1 class="subheader-title">
                    Add Hire

                    </h1>
            </div>
            <div class="row">
                <div class="col-md-10">
                    <div id="panel-1" class="panel">
                        <div class="panel-hdr">
                            <h2>New Hire</h2>

                        </div>

                        <div class="panel-container show">
                            <div class="panel-content">

                                <form>
                                    <div class=" form-group row">
                                        <label class="col-sm-3 col-form-label" for="simpleinput">Student Name </label>
                                        <div class="col-sm-9">
                                        <select class="form-control" id="newToDoName" value={student} onChange={onChangeStudent}>
                                                {studentConcat.map((item, index) => (
                                                    <option>{item}</option>))}
                                            </select>
                                        </div>
                                    </div>

                                    <div class=" form-group row">
                                        <label class="col-sm-3 col-form-label" for="simpleinput">Code</label>
                                        <div class="col-sm-9">
                                            <Input type="text" name="code" id="newToDoCode" placeholder="code" />
                                        </div>
                                    </div>

                                    <div class=" form-group row">
                                        <label class="col-sm-3 col-form-label" for="simpleinput">Instrument</label>
                                        <div class="col-sm-9">
                                            <select class="form-control" id="newToDoInstrument" value={instr} onChange={onChangeInstrument}>
                                                {availInstruments.map((item, index) => (
                                                    <option>{item}</option>))}
                                            </select>
                                        </div>
                                    </div>

                                    <div class=" form-group row">
                                        <label class="col-sm-3 col-form-label" for="simpleinput">Brand</label>
                                        <div class="col-sm-9">
                                            <select class="form-control" id="newToDoBrand">
                                                {availBrands.map((item, index) => (
                                                    <option>{item}</option>))}
                                            </select>
                                        </div>
                                    </div>

                                    <div class=" form-group row">
                                        <label class="col-sm-3 col-form-label" for="simpleinput">Rate</label>
                                        <div class="col-sm-9">
                                            <Input type="text" name="rate" id="newToDoRate" placeholder="rate" />
                                        </div>
                                    </div>

                                    <div class=" form-group row">
                                        <label class="col-sm-3 col-form-label" for="simpleinput">Owner</label>
                                        <div class="col-sm-9">
                                            <select class="form-control" id="newToDoOwner">
                                                    <option>OMA</option>
                                                    <option>Polygon</option>
                                            </select>
                                        </div>
                                    </div>

                                    <div class=" form-group row">
                                        <label class="col-sm-3 col-form-label" for="simpleinput">Due Date</label>
                                        <div class="col-sm-9">
                                            <Input class="  form-control " id="newToDoDueDate" type="date" name="date" placeholder="dd/mm/yyyy" />
                                        </div>
                                    </div>
                                    <div class="btn-div">
                                        <Button onClick={addToDo} class="btn btn-lg btn-primary waves-effect waves-themed mr-2 " className="ml-1">Add</Button>
                                        <Link to="/"><Button class="btn btn-lg btn-secondary waves-effect waves-themed " className="ml-1">Cancel</Button></Link>
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

export default NewHire;