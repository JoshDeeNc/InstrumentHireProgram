import React, { useState, useEffect } from 'react';
import { BrowserRouter, Link, Route, Switch, useHistory } from 'react-router-dom';
import { Button, ButtonGroup, Form, FormGroup, Input, Label, Row, Col, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
function NewInstrument({ addInstrument, ownerList, instOptionsList }) {

    const history = useHistory();

    const unique = (value, index, self) => {
        return self.indexOf(value) === index
    }

    const owners = ownerList.map(item => item.name).filter(unique)
    const [instr, setInstType] = useState('')
    const [instSizes, setInstSizes] = useState([])
    const instTypes = instOptionsList.map(item => item.instrumentTypeName).filter(unique)

    useEffect(() => {
        console.log(instr); // add whatever functions use new `college` value here.
        if(instr != '') {
            let a = instOptionsList.filter(item => item.instrumentTypeName === instr).map(item => item.sizes)
            if(a.length > 0)
                setInstSizes(a[0])
        }
    }, [instr])

    const add = async (event) => {
        var forms = document.getElementsByClassName('needs-validation')[0];
        forms.classList.add('was-validated');
        if (forms.checkValidity() === false) {
            return
        }
        var saving = document.getElementsByClassName("disp")[0]
        saving.innerHTML = '<div class="spinner-border spinner-border-sm mr-2" role="status" aria-hidden="true"></div><strong>Saving...</strong>'
        const result = await addInstrument();
        if (result.status === 200) {
            history.push('/instrumentlist');
        }
    }

    const [modal, setModal] = useState(false);
    const toggle = () => setModal(!modal);
    console.log(instSizes)

    return (
        <div>
            <div class="subheader">
                <h1 class="subheader-title"> Add Instrument </h1>
            </div>
            <div class="row">
                <div class="col-lg-7 col-md-10">
                    <div id="panel-1" class="panel">
                        <div class="panel-hdr-dsp">
                            <span onClick={() => history.goBack()}><i class="fal fn-icon fa-arrow-circle-left hand mr-2"></i></span>
                            <h2>New Instrument</h2>
                            <div>
                            </div>
                        </div>

                        <div class="panel-container show">
                            <div class="panel-content">
                                <form class="needs-validation" novalidate>
                                    <div class=" form-group row">
                                        <label class="col-sm-3 col-form-label" for="simpleinput">Code</label>
                                        <div class="col-sm-9">
                                            <input type="text" class="  form-control " name="code" id="newInstCode" required />
                                            <div class="invalid-feedback">  Please enter the code </div>
                                        </div>
                                        <div class="col-sm-12 ">
                                            <div class=" hr"></div>
                                        </div>
                                    </div>

                                    <div class=" form-group row">
                                        <label class="col-sm-3 col-form-label" for="simpleinput"> Serial Number </label>
                                        <div class="col-sm-9">
                                            <Input type="text" class="  form-control " name="serialNumber" id="newSerialNum" required />
                                            <div class="invalid-feedback">  Please enter the serial number </div>
                                        </div>
                                        <div class="col-sm-12 ">
                                            <div class=" hr"></div>
                                        </div>
                                    </div>

                                    <div class=" form-group row">
                                        <label class="col-sm-3 col-form-label" for="simpleinput">Instrument Type </label>
                                        <div class="col-sm-9">
                                            <input list="type" name="type" id="newInstType" class="form-control" value={instr} onChange={(e) => setInstType(e.target.value)}  required/>
                                            <datalist id="type">
                                            {instTypes.map((item, index) => (
                                                    <option>{item}</option>))}
                                            </datalist>
                                            <div class="invalid-feedback">  Please enter the instrument type </div>
                                        </div>
                                        <div class="col-sm-12 ">
                                            <div class=" hr"></div>
                                        </div>
                                    </div>
                                    <div class=" form-group row">
                                        <label class="col-sm-3 col-form-label" for="simpleinput">Size</label>
                                        <div class="col-sm-9">
                                        <input list="size" name="size" id="newInstSize" class="form-control"  required/>
                                            <datalist id="size">
                                            {instSizes.map((item, index) => (
                                                    <option>{item}</option>))}
                                            </datalist>
                                            <div class="invalid-feedback">  Please enter the instrument size </div>
                                        </div> <div class="col-sm-12 ">
                                            <div class=" hr"></div>
                                        </div>    
                                    </div>
                                    <div class=" form-group row">
                                        <label class="col-sm-3 col-form-label" for="simpleinput">Brand</label>
                                        <div class="col-sm-9">
                                            <input type="text" class="  form-control " name="brand" id="newInstBrand" required />
                                            <div class="invalid-feedback">  Please enter the brand </div>
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
                                                <input type="number" step="0.01" class="  form-control " name="rate" id="newInstRate" required />
                                                <div class="invalid-feedback">  Please enter the rate </div>
                                            </div>
                                        </div>
                                        <div class="col-sm-12 ">
                                            <div class=" hr"></div>
                                        </div>
                                    </div>

                                    <div class=" form-group row">
                                        <label class="col-sm-3 col-form-label" for="simpleinput">Purchase Cost</label>
                                        <div class="col-md-4">
                                            <div class="input-group">
                                                <div class="input-group-prepend">
                                                    <span class="input-group-text">$</span>
                                                </div>
                                                <input type="number" step="0.01" class="  form-control " name="rate" id="newInstPurchVal" required />
                                                <div class="invalid-feedback">  Please enter the purchase cost </div>
                                            </div>
                                        </div>
                                        <div class="col-sm-12 ">
                                            <div class=" hr"></div>
                                        </div>
                                    </div>

                                    <div class=" form-group row">
                                        <label class="col-sm-3 col-form-label" for="simpleinput">Depreciation %</label>
                                        <div class="col-md-4">
                                        <input type="number" step="0.01" class="  form-control " name="rate" id="newInstDepr" required />
                                                <div class="invalid-feedback">  Please enter the depreciation % </div>
                                        </div>
                                        <div class="col-sm-12 ">
                                            <div class=" hr"></div>
                                        </div>
                                    </div>

                                    <div class=" form-group row">
                                        <label class="col-sm-3 col-form-label" for="simpleinput">Owner</label>
                                        <div class="col-sm-9">
                                            <select class="form-control" id="newInstOwner" required>
                                            <option selected disabled hidden></option>
                                                    {owners.map((item, index) => (
                                                        <option>{item}</option>))}
                                            </select>
                                            <div class="invalid-feedback">  Please select the owner</div>
                                        </div> <div class="col-sm-12 ">
                                            <div class=" hr"></div>
                                        </div>
                                        
                                    </div>
                                    <div class="form-group row mb-3">
                                        <label class="col-sm-3 col-form-label" for="simpleinput">Notes</label>
                                        <div class="col-md-9">
                                            <textarea class="form-control    " id="newInstNotes" type="text"  
                                                placeholder=" "  rows="3"   > </textarea>
                                        </div>
                                    </div>

                                    <div class="btn-divS">
                                        <Button onClick={add} color="primary" className="mr-2"  ><span class="disp"> Add </span></Button>
                                        <Link to="/instrumentlist"><Button color="secondary"  >Cancel</Button></Link>
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

export default NewInstrument;