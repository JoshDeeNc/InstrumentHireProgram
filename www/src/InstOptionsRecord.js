import React, { useState } from 'react';
import { BrowserRouter, Link, Route, Switch, useHistory } from 'react-router-dom';
import { Button, ButtonGroup, Form, FormGroup, Input, Label, Row, Col, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';

function InstOptionsRecord({ deleteInstOptions, updateInstOptions, instOptionsList }) {
    const history = useHistory();
    const id = /[^/]*$/.exec(window.location.href)[0];
    const instOptionsRecord = instOptionsList.find(item => item.id === id);

    const [instTypeName, setInstTypeName] = useState(instOptionsRecord.instrumentTypeName)
    const [sizes, setSizes] = useState(instOptionsRecord.sizes.toString())
    for(let key in instOptionsRecord.addOns) {
        let value = instOptionsRecord.addOns[key]
        console.log(value)
        console.log(key)
    }
    const [addOns, setAddOns] = useState(JSON.stringify(instOptionsRecord.addOns))

    const editToggle = (event) => {
        var a = document.getElementsByTagName('input');
        // loop through all 'a' elements
        for (var i = 0; i < a.length; i++) {
            // Remove the class 'active' if it exists
            a[i].classList.remove('nox');
        }
        var b = document.getElementsByTagName('div');
        // loop through all 'a' elements
        for (var i = 0; i < b.length; i++) {
            // Remove the class 'active' if it exists
            b[i].classList.remove('btn-div');

        }
    }

    const deletion = async (itemId, event) => {
        const result = await deleteInstOptions(itemId);
        if (result.status === 200) {
            history.push('/instoptionslist');
        }
    }

    const update = async (itemId, event) => {
        const inst = instTypeName == "" ? "" : instTypeName;
        const szs = sizes == "" ? ["N/A"] : sizes.split(",");
        const ado = addOns == "" ? ["N/A"] : addOns.split(",");
        const result = await updateInstOptions(itemId, inst, szs, ado);
        if (result.status === 200) {
            history.push('/instoptionslist');
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
                        <div class="panel-hdr-dsp">
                        <span onClick={() => history.goBack()}><i class="fal fn-icon fa-arrow-circle-left hand mr-2"></i></span>
                            <h2>Instrument Type Details</h2>
                            <div></div>

                        </div>
                        <div class="panel-container show">
                            <div class="panel-content">
                                <form>
                                    <div class="form-group row" >
                                        <label class="col-sm-3 col-form-label" for=" ">Name </label>
                                        <div class="col-sm-9">
                                            <input type="text" class="form-control nox" name="name" id="editInstTypeName"
                                                value={instTypeName} onChange={(e) => setInstTypeName(e.target.value)} placeholder="Name" />
                                        </div>
                                        <div class="col-sm-12 ">
                                            <div class=" hr"></div>
                                        </div>

                                    </div>
                                    <div class="row form-group" >
                                        <label class="col-sm-3 col-form-label" for=" ">Sizes</label>

                                        <div class="col-sm-9">
                                            <input type="text" class="form-control nox" name="name" id="editSizesList"
                                                value={sizes} onChange={(e) => setSizes(e.target.value)} placeholder="Sizes" />
                                        </div>
                                        <div class="col-sm-12 ">
                                            <div class=" hr"></div>
                                        </div>
                                    </div>
                                    <div class="row form-group" >
                                        <label class="col-sm-3 col-form-label" for=" ">Add-Ons</label>

                                        <div class="col-sm-9">
                                            <input type="text" class="form-control nox" name="name" id="editAddOnsList"
                                                value={addOns} onChange={(e) => setAddOns(e.target.value)} placeholder="Add-Ons" />
                                        </div>
                                        <div class="col-sm-12 ">
                                            <div class=" hr"></div>
                                        </div>
                                      
                                    </div>

                                    <div class="btn-div text-center pt-2">
                                        <Button data-item-id={instOptionsRecord.id} onClick={toggleUp} color="primary" className="mr-2"  >Update</Button>
                                        <Link to="/instoptionslist"><Button color="secondary"  >Cancel</Button></Link>
                                    </div>
                                </form>
                            </div>


                            <div class="panel-content py-2 rounded-bottom border-faded border-left-0 border-right-0 border-bottom-0   d-flex">

                                <Button onClick={editToggle} type="button"  ><span class="fal fa-pencil mr-1"></span> Edit</Button>

                                <span class="ml-auto  ">

                                    <Button data-item-id={instOptionsRecord.id} color="danger" onClick={toggleDel} > <span class="fal fa-trash-alt mr-1"></span>  Delete</Button>

                                </span>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
            <Modal isOpen={deleteModal} toggle={toggleDel} >
                <ModalHeader toggle={toggleDel}> Delete</ModalHeader>
                <ModalBody>
                    Are you sure you want to delete {instTypeName}'s record?
        </ModalBody>
                <ModalFooter>
                    <Button color="primary" onClick={(e) => deletion(instOptionsRecord.id)}>Yes</Button>
                    <Button color="secondary" onClick={toggleDel}>No</Button>
                </ModalFooter>
            </Modal>
            <Modal isOpen={updateModal} toggle={toggleUp} >
                <ModalHeader toggle={toggleUp}> Update</ModalHeader>
                <ModalBody>
                    Are you sure you want to update {instTypeName}'s record?
        </ModalBody>
                <ModalFooter>
                    <Button color="primary" onClick={(e) => update(instOptionsRecord.id)}>Yes</Button>
                    <Button color="secondary" onClick={toggleUp}>No</Button>
                </ModalFooter>
            </Modal>
        </div>
    )
}
export default InstOptionsRecord;