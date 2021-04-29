import React, { useState } from 'react';
import { BrowserRouter, Link, Route, Switch } from 'react-router-dom';
import { Button, ButtonGroup, Form, FormGroup, Input, Label, Row, Col } from 'reactstrap';
function NewHire({ addToDo, toDos }) {
    const unique = (value, index, self) => {
        return self.indexOf(value) === index
    }
    const availInstruments = toDos.map(item => item.instrument).filter(unique)
    const [availBrands, setAvailBrands] = useState(toDos.map(item => item.brand).filter(unique))

    const [instr, setInstrument] = useState('')
    const [brand, setBrand] = useState('')

    const onChangeInstrument = (event) => {
        setInstrument(event.target.value);
        getBrands()
    }

    const getBrands = (event) => {
        setAvailBrands(toDos.filter(item => item.instrument === instr).map(item => item.brand).filter(unique))
        console.log(availBrands)

    }

    const onChangeBrand = (event) => {
        setBrand(event.target.value);
    }

    return (
        <div>
            
            <div class="subheader">
                    <h1 class="subheader-title">
                       Add Hire

                    </h1>
                </div>
            <div class="row">
                <div class="col-md-6">
                    <div id="panel-1" class="panel">
                        <div class="panel-hdr">
                            <h2>New Hire</h2>

                        </div>

                        <div class="panel-container show">
                            <div class="panel-content">

                                <form>
                                    <div class="form-group">
                                        <label class="form-label" for="simpleinput">Student Name </label>
                                        <Input type="text" class="form-control" name="name" id="newToDoName" placeholder="name" />
                                    </div>

                                    <div class="form-group">
                                        <label class="form-label" for="simpleinput">Code</label>
                                        <Input type="text" name="code" id="newToDoCode" placeholder="code" />
                                    </div>

                                    <div class="form-group">
                                        <label class="form-label" for="simpleinput">Instrument</label>
                                        <select class="form-control" id="newToDoInstrument" value={instr} onChange={onChangeInstrument}>
                                        {availInstruments.map((item, index) => (
                                                        <option>{item}</option>))}
                                                        </select>
                                    </div>

                                    <div class="form-group">
                                        <label class="form-label" for="simpleinput">Brand</label>
                                        <select class="form-control" id="newToDoBrand">
                                        {availBrands.map((item, index) => (
                                                        <option>{item}</option>))}
                                                        </select>
                                    </div>

                                    <div class="form-group">
                                        <label class="form-label" for="simpleinput">Rate</label>
                                        <Input type="text" name="rate" id="newToDoRate" placeholder="rate" />
                                    </div>

                                    <div class="form-group">
                                        <label class="form-label" for="simpleinput">Owner</label>
                                        <Input type="text" name="owner" id="newToDoOwner" placeholder="owner" />
                                    </div>

                                    <div class="form-group">
                                        <label class="form-label" for="simpleinput">Due Date</label>
                                        <Input class="form-control" id="newToDoDueDate" type="date" name="date" placeholder="dd/mm/yyyy"/>
                                    </div>

                                    <Button onClick={addToDo} class="btn btn-lg btn-primary waves-effect waves-themed mr-2 " className="ml-1">Add</Button>
                                    <Link to="/"><Button class="btn btn-lg btn-default waves-effect waves-themed " className="ml-1">Cancel</Button></Link>




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