import React, { useState } from 'react';
import { BrowserRouter, Link, Route, Switch, useHistory } from 'react-router-dom';
import { Button, ButtonGroup, Form, FormGroup, Input, Label, Row, Col, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';



function InstrumentRecord({ deleteInstrument, updateInstrument, instInventory }) {
    const history = useHistory();
    const id = /[^/]*$/.exec(window.location.href)[0];
    const instrumentRecord = instInventory.find(item => item.id === id);

    const [code, setCode] = useState(instrumentRecord.code)
    const [type, setType] = useState(instrumentRecord.type)
    const [object, setObject] = useState(instrumentRecord.object)
    const [brand, setBrand] = useState(instrumentRecord.brand)
    const [rate, setRate] = useState(instrumentRecord.rate)
    const [purchVal, setPurchVal] = useState(instrumentRecord.purchaseValue)
    const [depr, setDepreciation] = useState(instrumentRecord.depreciation)
    const [owner, setOwner] = useState(instrumentRecord.owner)

    const onChangeCode = (event) => {
        setCode(event.target.value);
    }
    const onChangeType = (event) => {
        setType(event.target.value);
    }
    const onChangeObject = (event) => {
        setObject(event.target.value);
    }
    const onChangeBrand = (event) => {
        setBrand(event.target.value);
    }
    const onChangeRate = (event) => {
        setRate(event.target.value);
    }
    const onChangePurch = (event) => {
        setPurchVal(event.target.value);
    }
    const onChangeDepreciation = (event) => {
        setDepreciation(event.target.value);
    }
    const onChangeOwner = (event) => {
        setOwner(event.target.value);
    }

    const editToggle = (event) => {
        var a = document.getElementsByTagName('input');
        // loop through all 'a' elements
        for (var i = 0; i < a.length; i++) {
            // Remove the class 'active' if it exists
            a[i].classList.remove('nox','nov');
            
        }

        var b = document.getElementsByTagName('span');
        // loop through all 'a' elements
        for (var i = 0; i < b.length; i++) {
            // Remove the class 'active' if it exists
            b[i].classList.remove('nov');
            
        }
        // add 'active' classs to the element that was clicked
        //elem.classList.add('active');
    }

    const deletion = async (itemId, event) => {
        const result = await deleteInstrument(itemId);
        if (result.status === 200) {
            history.push('/instrumentlist');
        }
    }

    const update = async (itemId, event) => {
        const result = await updateInstrument(itemId);
        if (result.status === 200) {
            history.push('/instrumentlist');
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
                            <h2>
                                Hire Details
                                        </h2>
                            <Button onClick={editToggle} type="button" class="btn btn-sm btn-outline-default waves-effect waves-themed mr-2">
                                <span class="fal fa-pencil mr-1"></span>
                                                    Edit
                                                </Button>

                            <Link to={`/newhire/${instrumentRecord.id}`}><Button type="button" class="btn btn-sm btn-outline-default waves-effect waves-themed ml-2 mr-2">
                                <span class="fal fa-pencil mr-1"></span>
                                                    Book Now
                                                </Button></Link>
                        </div>
                        <div class="panel-container show">
                            <div class="panel-content  ">

                                <div class="row" >

                                    <div class="col-md-12  ">
                                        <form>
                                            <div class=" form-group row" >
                                                <label class="col-sm-3 col-form-label" for=" ">Code </label>
                                                <div class="col-sm-9">
                                                    <input type="text" class="form-control nox" name=" " id="editInstCode"
                                                        value={code} onChange={onChangeCode} placeholder=" Code" />
                                                </div>
                                                <div class="col-sm-12 ">
                                                <div class=" hr"></div>
                                            </div>
                                            </div>
                                            
                                            <div class=" form-group row" >
                                                <label class="col-sm-3 col-form-label" for=" "> Instrument Type </label>
                                                <div class="col-sm-9">
                                                    <input type="text" class="form-control nox" name=" " id="editInstType"
                                                        value={type} onChange={onChangeType} placeholder="Instrument Type " />
                                                </div>
                                                <div class="col-sm-12 ">
                                                <div class=" hr"></div>
                                            </div>
                                            </div>
                                            
                                            <div class=" form-group row" >
                                                <label class="col-sm-3 col-form-label" for=" "> Instrument Name </label>
                                                <div class="col-sm-9">
                                                    <input type="text" class="form-control nox" name=" " id="editInstName"
                                                        value={object} onChange={onChangeObject} placeholder="Instrument Name " />
                                                </div>
                                                <div class="col-sm-12 ">
                                                    <div class=" hr"></div>
                                                </div>
                                            </div>
                                            <div class=" form-group row" >
                                                <label class="col-sm-3 col-form-label" for=" ">Brand </label>
                                                <div class="col-sm-9">
                                                    <input type="text" class="form-control nox" name=" " id="editInstBrand"
                                                        value={brand} onChange={onChangeBrand} placeholder="Brand " />
                                                </div>
                                                <div class="col-sm-12 ">
                                                    <div class=" hr"></div>
                                                </div>
                                            </div>
                                            <div class=" form-group row" >
                                                <label class="col-sm-3 col-form-label" for=" "> Rate </label>
                                                <div class="col-sm-9">
                                                    <input type="text" class="form-control nox" name=" " id="editInstRate"
                                                        value={rate} onChange={onChangeRate} placeholder="Rate " />
                                                </div>
                                                <div class="col-sm-12 ">
                                                    <div class=" hr"></div>
                                                </div>
                                            </div>
                                            <div class=" form-group row" >
                                                <label class="col-sm-3 col-form-label" for=" "> Purchase Value </label>
                                                <div class="col-sm-9">
                                                    <input type="text" class="form-control nox" name=" " id="editInstPurchVal"
                                                        value={purchVal} onChange={onChangePurch} placeholder="Purchase Value  " />
                                                </div>
                                                <div class="col-sm-12 ">
                                                    <div class=" hr"></div>
                                                </div>
                                            </div>
                                            <div class=" form-group row" >
                                                <label class="col-sm-3 col-form-label" for=" ">Depreciation </label>
                                                <div class="col-sm-9">
                                                    <input type="text" class="form-control nox" name=" " id="editInstDepr"
                                                        value={depr} onChange={onChangeDepreciation} placeholder=" Depreciation" />
                                                </div>
                                                <div class="col-sm-12 ">
                                                    <div class=" hr"></div>
                                                </div>
                                            </div>
                                            <div class=" form-group row" >
                                                <label class="col-sm-3 col-form-label" for=" "> Owner </label>
                                                <div class="col-sm-9">
                                                    <input type="text" class="form-control nox" name=" " id="editInstOwner"
                                                        value={owner} onChange={onChangeOwner} placeholder="Owner " />
                                                </div>
                                                <div class="col-sm-12 ">
                                                    <div class=" hr"></div>
                                                </div>
                                            </div>
                                            <div class="btn-div">
                                                <span class="nov">  
                                                <Button data-item-id={instrumentRecord.id} onClick={toggleUp} class="btn btn-lg btn-primary waves-effect waves-themed mr-2  "  >Update</Button>
                                                <Link to="/instrumentlist"><Button class="btn btn-lg btn-secondary waves-effect waves-themed " className="ml-1 ">Cancel</Button></Link>
                                                </span>
                                                <Button data-item-id={instrumentRecord.id} color="danger" onClick={toggleDel} class="btn btn-lg btn-primary waves-effect waves-themed mr-2">Delete</Button>
                                            </div>
                                        </form>

                                    </div>

                                </div>

                            </div>
                       
                            <div class="panel-content py-2 rounded-bottom border-faded border-left-0 border-right-0 border-bottom-0   d-flex">
                                            
                                            
                                            <span class="badge badge-pill badge-success fw-400">
                                            <Button onClick={editToggle} type="button" class="btn btn-sm btn-outline-default waves-effect waves-themed mr-2">
                                <span class="fal fa-pencil mr-1"></span>
                                                    Edit
                                                </Button>
                                            </span>
                                            <span class="badge badge-pill rounded-circle badge-secondary fw-400 ml-auto mr-2">
                                            <Button data-item-id={instrumentRecord.id} color="danger" onClick={toggleDel} class="btn btn-lg btn-primary waves-effect waves-themed mr-2">Delete</Button>
                                           
                                            </span>
                                         
                                        </div>
                        </div>
                    </div>
                </div>
            </div>
            <Modal isOpen={deleteModal} toggle={toggleDel} >
                <ModalHeader toggle={toggleDel}> Delete</ModalHeader>
                <ModalBody>
                    Are you sure you want to delete {object + " " + brand}?
        </ModalBody>
                <ModalFooter>
                    <Button color="primary" onClick={(e) => deletion(instrumentRecord.id)}>Yes</Button>
                    <Button color="secondary" onClick={toggleDel}>No</Button>
                </ModalFooter>
            </Modal>
            <Modal isOpen={updateModal} toggle={toggleUp} >
                <ModalHeader toggle={toggleUp}> Update</ModalHeader>
                <ModalBody>
                    Are you sure you want to update {object + " " + brand}?
        </ModalBody>
                <ModalFooter>
                    <Button color="primary" onClick={(e) => update(instrumentRecord.id)}>Yes</Button>
                    <Button color="secondary" onClick={toggleUp}>No</Button>
                </ModalFooter>
            </Modal>
        </div>
    )
}
export default InstrumentRecord;