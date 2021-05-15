import React, { useState, useEffect } from 'react';
import { BrowserRouter, Link, Route, Switch, useHistory } from 'react-router-dom';
import { Button, ButtonGroup, Form, FormGroup, Input, Label, Row, Col, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
function NewHire({ toDos, studentList, instInventory, instOptionsList, addToDo }) {

    const inventory = instInventory.filter(item => item.available === true)

    const history = useHistory();

    const unique = (value, index, self) => {
        return self.indexOf(value) === index
    }

    const availInstruments = inventory.map(item => item.type).filter(unique)
    const addOnsList = instOptionsList.map(item => item.addOns)
    var addOns = []
    for(let k in addOnsList) {
        for(let ado in addOnsList[k]) {
            var a = {}
            a[ado] = addOnsList[k][ado]
            addOns.push(a)
        }
    }
    const [availBrands, setAvailBrands] = useState([])
    const [availCodes, setAvailCodes] = useState([])
    const [instr, setInstrument] = useState('')
    const [brand, setBrand] = useState('')
    const [size, setSize] = useState('')
    const [code, setCode] = useState('')
    const [serialNum, setSerialNum] = useState('')
    const [rate, setRate] = useState('')
    const [owner, setOwner] = useState('')
    //const [addOns,setAddOns] = useState({})
    /*function search(records) {
        if(instr != '') {
            let a = instOptionsList.filter(item => item.instrumentTypeName === instr).map(item => item.addOns)
            if(a.length > 0) {
                addOns = a[0]
                return addOns
            }
        }
        return records
    }*/

    useEffect(() => {
        console.log(instr); // add whatever functions use new `college` value here.
        setAvailBrands(inventory.filter(item => item.type === instr).map(item => item.brand).filter(unique))
        //search(addOns)
    }, [instr])

    useEffect(() => {
        console.log(brand); // add whatever functions use new `college` value here.
        setAvailCodes(inventory.filter(item => item.type === instr && item.brand === brand).map(item => item.code).filter(unique))
    }, [brand])

    useEffect(() => {
        console.log(code); // add whatever functions use new `college` value here.
        setRate(inventory.filter(item => item.type === instr && item.brand === brand && item.code === code).map(item => item.rate).filter(unique))
        setSerialNum(inventory.filter(item => item.type === instr && item.brand === brand && item.code === code).map(item => item.serialNum).filter(unique))
        setOwner(inventory.filter(item => item.type === instr && item.brand === brand && item.code === code).map(item => item.owner).filter(unique))
        setSize(inventory.filter(item => item.type === instr && item.brand === brand && item.code === code).map(item => item.size).filter(unique))
    }, [code])

    const studentConcat = studentList.map(item => item.firstName + " " + item.lastName)
    const [student, setStudent] = useState('')

    const add = async (event) => {
        const result = await addToDo();
        if (result.status === 200) {
            history.push('/');
        }
    }

    const [modal, setModal] = useState(false);
    const toggle = () => setModal(!modal);

    console.log(addOns)

    return (
        <div>

            <div class="subheader">
                <h1 class="subheader-title"> Add Hire</h1>
            </div>
            <div class="row">
                <div class="col-lg-7 col-md-10">
                    <div id="panel-1" class="panel">
                        <div class="panel-hdr-dsp">
                            <span onClick={() => history.goBack()}><i class="fal fn-icon fa-arrow-circle-left hand mr-2"></i></span>
                            <h2>New Hire</h2>
                            <div></div>
                        </div>

                        <div class="panel-container show">
                            <div class="panel-content">

                                <form class="needs-validation" novalidate>
                                    <div class=" form-group row">
                                        <label class="col-sm-3 col-form-label" for="simpleinput">Student Name </label>
                                        <div class="col-sm-9">
                                        <input list="student" name="student" id="newToDoName" class="form-control" value={student} onChange={(e) => setStudent(e.target.value)} />
                                            <datalist id="student">
                                            {studentConcat.map((item, index) => (
                                                    <option>{item}</option>))}
                                            </datalist>
                                            <div class="invalid-tooltip">  Please enter the student name </div>
                                        </div>
                                        <div class="col-sm-12 ">
                                            <div class=" hr"></div>
                                        </div>
                                    </div>

                                    <div class=" form-group row">
                                        <label class="col-sm-3 col-form-label" for="simpleinput">Instrument</label>
                                        <div class="col-sm-9">
                                        <input list="instrument" name="instrument" class="form-control" id="newToDoInstrument" value={instr} onChange={(e) => setInstrument(e.target.value)} />
                                            <datalist id="instrument">
                                            {availInstruments.map((item, index) => (
                                                    <option>{item}</option>))}
                                            </datalist>
                                            <div class="invalid-tooltip">  Please select an instrument </div>
                                        </div>
                                        <div class="col-sm-12 ">
                                            <div class=" hr"></div>
                                        </div>
                                    </div>

                                    <div class=" form-group row">
                                        <label class="col-sm-3 col-form-label" for="simpleinput">Brand</label>
                                        <div class="col-sm-9">
                                        <input list="brand" name="brand" class="form-control" id="newToDoBrand" value={brand} onChange={(e) => setBrand(e.target.value)} />
                                            <datalist id="brand">
                                            {availBrands.map((item, index) => (
                                                    <option>{item}</option>))}
                                            </datalist>
                                            <div class="invalid-tooltip">  Please select a brand </div>
                                        </div>
                                        <div class="col-sm-12 ">
                                            <div class=" hr"></div>
                                        </div>
                                    </div>

                                    <div class=" form-group row">
                                        <label class="col-sm-3 col-form-label" for="simpleinput">Code</label>
                                        <div class="col-md-4">
                                        <input list="code" name="code" class="form-control" id="newToDoCode" value={code} onChange={(e) => setCode(e.target.value)} />
                                            <datalist id="code">
                                            {availCodes.map((item, index) => (
                                                    <option>{item}</option>))}
                                            </datalist>
                                            <div class="invalid-tooltip">  Please enter the code </div>
                                        </div>
                                        <div class="col-sm-12 ">
                                            <div class=" hr"></div>
                                        </div>
                                    </div>
                                    <div class=" form-group row">
                                        <label class="col-sm-3 col-form-label" for="simpleinput">Size</label>
                                        <div class="col-md-4">
                                            <div class="input-group">
                                                <Input type="text" name="size" id="newToDoSize" placeholder="size" value={size} required />
                                             </div>
                                            
                                            <div class="invalid-tooltip">  Please enter Size </div>
                                        </div>
                                        <div class="col-sm-12 ">
                                            <div class=" hr"></div>
                                        </div>
                                    </div>
                                    <div class=" form-group row">
                                        <label class="col-sm-3 col-form-label" for="simpleinput">Serial Number</label>
                                        <div class="col-md-4">
                                             
                                            <div class="input-group">
                                                <Input type="text" name="serialNumber" id="newToDoSerialNum" placeholder="serial number" value={serialNum} required />
                                             </div>
                                            
                                            <div class="invalid-tooltip">  Please enter serial number </div>
                                        </div>
                                        <div class="col-sm-12 ">
                                            <div class=" hr"></div>
                                        </div>
                                    </div>

                                    <div class=" form-group row">
                                        <label class="col-sm-3 col-form-label" for="simpleinput">Rate</label>
                                        <div class="col-md-4">
                                             
                                            <div class="input-group">
                                                <div class="input-group-prepend">
                                                    <span class="input-group-text">$</span>
                                                </div>
                                                <Input type="text" name="rate" id="newToDoRate" placeholder="rate" value={rate} required />
                                             </div>
                                            
                                            <div class="invalid-tooltip">  Please enter rate </div>
                                        </div>
                                        <div class="col-sm-12 ">
                                            <div class=" hr"></div>
                                        </div>
                                    </div>

                                    <div class=" form-group row">
                                        <label class="col-sm-3 col-form-label" for="simpleinput">Owner</label>
                                        <div class="col-sm-9">
                                        <Input type="text" name="owner" id="newToDoOwner" placeholder="owner" value={owner} required />
                                            <div class="invalid-tooltip">  Please select owner </div>
                                        </div>
                                        <div class="col-sm-12 ">
                                            <div class=" hr"></div>
                                        </div>
                                    </div>

                                    <div class=" form-group row">
                                        <label class="col-sm-3 col-form-label" for="simpleinput">Due Date</label>
                                        <div class="col-md-4">
                                            <Input class="  form-control " id="newToDoDueDate" type="date" name="date" placeholder="dd/mm/yyyy" required />
                                            <div class="invalid-tooltip">  Please select the due date </div>
                                        </div>
                                        <div class="col-sm-12 ">
                                            <div class=" hr"></div>
                                        </div> 
                                    </div>

                     
                                    <div class="form-group row">
                                        <label class="col-sm-3 col-form-label" for="simpleinput">Notes</label>
                                        <div class="col-md-9">
                                            <textarea class="form-control    " id="newToDoNotes" type="text"  
                                                placeholder=" "  rows="3"   > </textarea>
                                        </div>
                                    </div>
                                    <div class="frame-wrap mt-4 mb-3  ">
                                                <div class="mt-3 mb-3">  
                                                    <a class="btn btn-secondary" data-toggle="collapse" href="#addOnDiv" role="button" aria-expanded="false" aria-controls="collapseExample">
                                                    <i class="fal fa-plus-circle  mr-1 fs-xl"></i>  Add-Ons
                                                    </a>
                                                    </div> 

                                                    <div class="clearfix" ></div>
                                               
                                                <div class="collapse" id="addOnDiv">
                                                <div class="card card-body">
                                                            <div class=" form-group row">
                                                                <label class="col-8 col-form-label fw-700" for="simpleinput">Description</label>

                                                                <label class="col-2 col-form-label fw-700 text-center" for="simpleinput">Qty</label>

                                                                <label class="col-2 col-form-label fw-700 text-center" for="simpleinput">Rate</label>

                                                                <div class="col-sm-12 ">
                                                                    <div class=" hr-2"></div>
                                                                </div>
                                                            </div>
                                                            
                                                            {addOns.map((item, index) => (
                                                            <div class=" form-group row">
                                                                <label class="col-8 col-form-label" for="simpleinput">{item}</label>
                                                                <div class="col-2">
                                                                    <Input type="text" name="owner" id=" " placeholder=" " />
                                                                </div><div class="col-2">
                                                                    <Input type="text" name="owner" id=" " placeholder=" " />
                                                                </div>
                                                                <div class="col-sm-12 ">
                                                                    <div class=" hr"></div>
                                                                </div>
                                                            </div>))}
                                                       
                                                       
                                                        </div>
                                                  
                                                </div>
                                            </div>
                    


                                    <div class="btn-divS">
                                        <Button onClick={add} color="primary" className="mr-2" >Add</Button>
                                        <Link to="/"><Button color="secondary">Cancel</Button></Link>
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