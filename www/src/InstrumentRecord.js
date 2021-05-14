import React, { useState } from 'react';
import { BrowserRouter, Link, Route, Switch, useHistory } from 'react-router-dom';
import { Button, ButtonGroup, Form, FormGroup, Input, Label, Row, Col, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';



function InstrumentRecord({ deleteInstrument, updateInstrument, instInventory }) {
    const history = useHistory();
    const id = /[^/]*$/.exec(window.location.href)[0];
    const instrumentRecord = instInventory.find(item => item.id === id);

    const [code, setCode] = useState(instrumentRecord.code)
    const [serialNum, setSerialNum] = useState(instrumentRecord.serialNum)
    const [type, setType] = useState(instrumentRecord.type)
    const [brand, setBrand] = useState(instrumentRecord.brand)
    const [rate, setRate] = useState(instrumentRecord.rate)
    const [purchVal, setPurchVal] = useState(instrumentRecord.purchaseValue)
    const [depr, setDepreciation] = useState(instrumentRecord.depreciation)
    const [owner, setOwner] = useState(instrumentRecord.owner)
    const [notes, setNotes] = useState(instrumentRecord.notes)

    const onChangeCode = (event) => {
        setCode(event.target.value);
    }
    const onChangeSerialNum = (event) => {
        setSerialNum(event.target.value);
    }
    const onChangeType = (event) => {
        setType(event.target.value);
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
    const onChangeNotes = (event) => {
        setNotes(event.target.value);
    }

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
        var c = document.getElementById('ratelabel')
        c.classList.remove('input-group-text-white');
        c.classList.add('input-group-text');
        var d = document.getElementById('purchaselabel')
        d.classList.remove('input-group-text-white');
        d.classList.add('input-group-text');
        var e = document.getElementById('deprlabel')
        e.classList.remove('input-group-text-white');
        e.classList.add('input-group-text-lbl');
        e.classList.add('input-group-text');
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
                <div class="col-lg-7 col-md-10">
                    <div id="panel-1" class="panel">
                        <div class="panel-hdr">
                            <h2>Instrument Details </h2>
                        </div>
                        <div class="panel-hdr-dsp">
                            <span onClick={() => history.goBack()}><i class="fal fn-icon fa-arrow-circle-left hand mr-2"></i></span>
                            <h2> Instrument Description </h2>
                            <div></div>
                            <Link to={`/newhire/${instrumentRecord.id}`}>
                                <Button type="button" class="btn btn-sm btn-outline-default waves-effect waves-themed ml-2 mr-2">
                                    <i class="fal fa-address-book mr-1"></i>  Book Now  </Button></Link>
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
                                                <label class="col-sm-3 col-form-label" for=" "> Serial Number </label>
                                                <div class="col-sm-9">
                                                    <input type="text" class="form-control nox" name=" " id="editInstSerialNum"
                                                        value={serialNum} onChange={onChangeSerialNum} placeholder="Serial Number " />
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
                                                <div class="col-md-4">

                                                    <div class="input-group">
                                                        <div class="input-group-prepend">
                                                            <span class="input-group-text-white" id="ratelabel">$</span>
                                                        </div>
                                                        <input type="text" class="form-control nox" name=" " id="editInstRate"
                                                            value={rate} onChange={onChangeRate} placeholder="Rate " />
                                                    </div>


                                                </div>
                                                <div class="col-sm-12 ">
                                                    <div class=" hr"></div>
                                                </div>
                                            </div>
                                            <div class=" form-group row" >
                                                <label class="col-sm-3 col-form-label" for=" "> Purchase Value </label>
                                                <div class="col-md-4">

                                                    <div class="input-group">
                                                        <div class="input-group-prepend">
                                                            <span class="input-group-text-white" id="purchaselabel">$</span>
                                                        </div>
                                                        <input type="text" class="form-control nox" name=" " id="editInstPurchVal"
                                                            value={purchVal} onChange={onChangePurch} placeholder="Purchase Value " />
                                                    </div>


                                                </div>
                                                <div class="col-sm-12 ">
                                                    <div class=" hr"></div>
                                                </div>
                                            </div>
                                            <div class=" form-group row" >
                                                <label class="col-sm-3 col-form-label" for=" ">Depreciation </label>
                                                <div class="col-md-2">
                                                    <div class="input-group sm-inpt-width">
                                                        <input type="text" class="form-control nox  " id="editInstDepr"
                                                            value={depr} onChange={onChangeDepreciation} placeholder="Depreciation " />

                                                        <div class="input-group-append">
                                                            <span class="input-group-text-white" id="deprlabel">%</span>
                                                        </div>
                                                    </div>
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
                                            <div class="form-group row mb-3">
                                                <label class="col-sm-3 col-form-label" for="simpleinput">Notes</label>
                                                <div class="col-md-9">
                                                    <textarea class="form-control nox" id="editInstNotes" type="text"
                                                        placeholder=" " rows="3" value={notes} onChange={onChangeNotes}> </textarea>
                                                </div>
                                            </div>



                                            <div class="btn-div text-center pt-2">
                                                <Button data-item-id={instrumentRecord.id} onClick={toggleUp} color="primary" className="mr-2" >Update</Button>
                                                <Link to="/instrumentlist"><Button color="secondary"  >Cancel</Button></Link>
                                            </div>
                                        </form>

                                    </div>

                                </div>

                            </div>

                            <div class="panel-content py-2 rounded-bottom border-faded border-left-0 border-right-0 border-bottom-0   d-flex">
                                <Button onClick={editToggle} type="button" color="secondary">  <span class="fal fa-pencil mr-1"></span>  Edit</Button>
                                <span class="ml-auto  ">
                                    <Button data-item-id={instrumentRecord.id} color="danger" onClick={toggleDel} > <span class="fal fa-trash-alt mr-1"></span>  Delete</Button>
                                </span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Modal isOpen={deleteModal} toggle={toggleDel} >
                <ModalHeader toggle={toggleDel}> Delete</ModalHeader>
                <ModalBody>
                    Are you sure you want to delete {type + " " + brand}?
        </ModalBody>
                <ModalFooter>
                    <Button color="primary" onClick={(e) => deletion(instrumentRecord.id)}>Yes</Button>
                    <Button color="secondary" onClick={toggleDel}>No</Button>
                </ModalFooter>
            </Modal>
            <Modal isOpen={updateModal} toggle={toggleUp} >
                <ModalHeader toggle={toggleUp}> Update</ModalHeader>
                <ModalBody>
                    Are you sure you want to update {type + " " + brand}?
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