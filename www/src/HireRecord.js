import React, { useState } from 'react';
import { BrowserRouter, Link, Route, Switch, useHistory } from 'react-router-dom';
import { Button, ButtonGroup, Form, FormGroup, Input, Label, Row, Col, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';

function HireRecord({ deleteToDo, updateToDo, returnToDo, toDos, instOptionsList }) {
    const history = useHistory();
    const id = /[^/]*$/.exec(window.location.href)[0];
    const hireRecord = toDos.find(item => item.id === id);

    const [studName, setStudName] = useState(hireRecord.name)
    const [studEmail, setStudEmail] = useState(hireRecord.email)
    const [code, setCode] = useState(hireRecord.code)
    const [instrument, setInstrument] = useState(hireRecord.instrument)
    const [brand, setBrand] = useState(hireRecord.brand)
    const [size, setSize] = useState(hireRecord.size)
    const [rate, setRate] = useState(hireRecord.rate)
    const [serialNum, setSerialNum] = useState(hireRecord.serialNum)
    const [owner, setOwner] = useState(hireRecord.owner)
    const [dueDate, setDue] = useState(hireRecord.due)
    const [notes, setNotes] = useState(hireRecord.notes)
    let addOns = hireRecord.addOns
    /*for(let k in addOnsList) {
        for(let ado in addOnsList[k]) {
            var a = {}
            a[ado] = addOnsList[k][ado]
            addOns.push(a)
        }
    }*/

    function search(records) {
        if(instrument != hireRecord.instrument) {
            const filtAddOns = instOptionsList.filter(item => item.instrumentTypeName === instrument).map(item => item.addOns)
            if(filtAddOns.length > 0) {
                var newAddons = []
                for(let k in filtAddOns) {
                    for(let ado in filtAddOns[k]) {
                        var a = {}
                        a['name'] = ado
                        a['rate'] = filtAddOns[k][ado]
                        a['qty'] = ""
                        newAddons.push(a)
                    }
                }
                addOns = newAddons
                return addOns
            }
        }
        addOns = hireRecord.addOns
        return addOns
    }


    const editToggle = async (event) => {
        if(hireRecord.returned === "") {
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
            var c = document.getElementsByClassName('input-group-text-white')
            for (var i = 0; i < c.length; i++) {
                // Remove the class 'active' if it exists
                c[i].classList.add('input-group-text');
                c[i].classList.remove('input-group-text-white');         
            }
        }
        else {
            var a1 = document.getElementsByTagName('textarea');
            a1[0].classList.remove('nox');
            var b = document.getElementsByTagName('div');
            // loop through all 'a' elements
            for (var i = 0; i < b.length; i++) {
                // Remove the class 'active' if it exists
                b[i].classList.remove('btn-div');

            }
        }
    }

    const deletion = async (itemId, instrumentId, event) => {
        var deleting = document.getElementsByClassName("disp")[0]
        deleting.innerHTML = '<div class="spinner-border spinner-border-sm mr-2" role="status" aria-hidden="true"></div><strong>Deleting...</strong>'
        const result = await deleteToDo(itemId, instrumentId);
        if (result.status === 200) {
            history.push('/');
        }
    }

    const update = async (itemId, event) => {
        var sendAddons = []
        for(var index = 0; index < addOns.length; index++) {
            var newado = {}
            var adoname = document.getElementById("editAddOnName"+index).innerHTML
            var adoqty = document.getElementById("editAddOnQty"+index).value
            var adorate = document.getElementById("editAddOnRate"+index).value
            newado['name'] = adoname
            newado['rate'] = adorate
            newado['qty'] = adoqty
            sendAddons.push(newado)
        }
        console.log(sendAddons)
        var saving = document.getElementsByClassName("updt")[0]
        saving.innerHTML = '<div class="spinner-border spinner-border-sm mr-2" role="status" aria-hidden="true"></div><strong>Saving...</strong>'
        const result = await updateToDo(itemId,sendAddons);
        if (result.status === 200) {
            history.push('/');
        }
    }

    const returned = async (itemId, instrumentId, event) => {
        var returning = document.getElementsByClassName("rtnd")[0]
        returning.innerHTML = '<div class="spinner-border spinner-border-sm mr-2" role="status" aria-hidden="true"></div><strong>Returning...</strong>'
        const result = await returnToDo(itemId, instrumentId);
        if (result.status === 200) {
            history.push('/');
        }
    }

    const [deleteModal, setDelModal] = useState(false);
    const toggleDel = () => setDelModal(!deleteModal);

    const [updateModal, setUpModal] = useState(false);
    const toggleUp = () => setUpModal(!updateModal);

    const [returnModal, setRetModal] = useState(false);
    const toggleRet = () => setRetModal(!returnModal);

    return (
        <div>
            <div class="row">
                <div class="col-lg-7 col-md-10">
                    <div id="panel-1" class="panel">
                    <div class="panel-hdr-dsp">
                            <span onClick={() => history.goBack()}><i class="fal fn-icon fa-arrow-circle-left hand mr-2"></i></span>
                            <h2>Hire Description</h2>
                            <div>  {hireRecord.returned === "" && (<Button onClick={toggleRet} type="button" class="btn btn-sm btn-outline-default waves-effect waves-themed ml-2 mr-2">
                                <span class="fal fa-hand-holding-box mr-1"></span>  Return </Button>)}</div>
                        </div>
                      
                        <div class="panel-container show">
                            <div class="panel-content">

                                <form>
                                    <div class="form-group row">
                                        <label class="col-sm-3 col-form-label" for="simpleinput">Student Name </label>
                                        <div class="col-sm-9">
                                            <input type="text" class="form-control nox" name="name" id="editToDoName"
                                                value={studName} onChange={(e) => setStudName(e.target.value)} placeholder="name" />
                                        </div>
                                        <div class="col-sm-12 ">
                                            <div class=" hr"></div>
                                        </div>
                                    </div>

                                    <div class="form-group row">
                                        <label class="col-sm-3 col-form-label" for="simpleinput">Student Email </label>
                                        <div class="col-sm-9">
                                            <input type="text" class="form-control nox" name="name" id="editToDoEmail"
                                                value={studEmail} onChange={(e) => setStudEmail(e.target.value)} placeholder="email" />
                                        </div>
                                        <div class="col-sm-12 ">
                                            <div class=" hr"></div>
                                        </div>
                                    </div>

                                    <div class="form-group row">
                                        <label class="col-sm-3 col-form-label" for="simpleinput">Code</label>
                                        <div class="col-sm-9">
                                            <input type="text" class="form-control nox" name="code" id="editToDoCode" placeholder="code"
                                                value={code} onChange={(e) => setCode(e.target.value)} />
                                        </div>
                                        <div class="col-sm-12 ">
                                            <div class=" hr"></div>
                                        </div>
                                    </div>
                                    <div class="form-group row">
                                        <label class="col-sm-3 col-form-label" for="simpleinput">Serial Number</label>
                                        <div class="col-sm-9">
                                            <input type="text" class="form-control nox" name="code" id="editToDoSerialNum" placeholder="serial number"
                                                value={serialNum} onChange={(e) => setSerialNum(e.target.value)} />
                                        </div>
                                        <div class="col-sm-12 ">
                                            <div class=" hr"></div>
                                        </div>
                                    </div>

                                    <div class="form-group row">
                                        <label class="col-sm-3 col-form-label" for="simpleinput">Instrument</label>
                                        <div class="col-sm-9">
                                            <input class="form-control nox" type="text" name="code" id="editToDoInstrument" placeholder="instrument"
                                                value={instrument} onChange={(e) => setInstrument(e.target.value)} />
                                        </div>
                                        <div class="col-sm-12 ">
                                            <div class=" hr"></div>
                                        </div>
                                    </div>

                                    <div class="form-group row ">
                                        <label class="col-sm-3 col-form-label" for="simpleinput">Brand</label>
                                        <div class="col-sm-9">
                                            <input class="form-control nox" type="text" name="brand" id="editToDoBrand" placeholder="brand"
                                                value={brand} onChange={(e) => setBrand(e.target.value)} />
                                        </div>
                                        <div class="col-sm-12 ">
                                            <div class=" hr"></div>
                                        </div>
                                    </div>
                                    <div class="form-group row ">
                                        <label class="col-sm-3 col-form-label" for="simpleinput">Size</label>
                                        <div class="col-sm-9">
                                            <input class="form-control nox" type="text" name="size" id="editToDoSize" placeholder="size"
                                                value={size} onChange={(e) => setSize(e.target.value)} />
                                        </div>
                                        <div class="col-sm-12 ">
                                            <div class=" hr"></div>
                                        </div>
                                    </div>

                                    <div class="form-group row">
                                        <label class="col-sm-3 col-form-label" for="simpleinput">Rate</label>
                                        <div class="col-md-4">
                                            <div class="input-group">
                                                <div class="input-group-prepend">
                                                    <span class="input-group-text-white">$</span>
                                                </div>
                                                <input class="form-control nox" type="text" name="rate" id="editToDoRate" placeholder="rate"
                                                value={rate} onChange={(e) => setRate(e.target.value)} />
                                            </div>


                                        </div>
                                        <div class="col-sm-12 ">
                                            <div class=" hr"></div>
                                        </div>
                                    </div>

                                    <div class="form-group row">
                                        <label class="col-sm-3 col-form-label" for="simpleinput">Owner</label>
                                        <div class="col-sm-9">
                                            <input class="form-control nox" type="text" name="owner" id="editToDoOwner" placeholder="owner"
                                                value={owner} onChange={(e) => setOwner(e.target.value)} />
                                        </div>
                                        <div class="col-sm-12 ">
                                            <div class=" hr"></div>
                                        </div>
                                    </div>

                                    {hireRecord.returned == "" ? (
                                    <div class="form-group row">
                                        <label class="col-sm-3 col-form-label"  >Date Hired</label>
                                        <label class="col-sm-9 col-form-label"  >{new Date(hireRecord.creation_date).toLocaleDateString()}</label>
                                        <div class="col-sm-12 ">
                                            <div class=" hr"></div>
                                        </div>
                                    </div>) : (
                                        <div>
                                    <div class="form-group row">
                                        <label class="col-sm-3 col-form-label" for="simpleinput">Date Returned</label>
                                        <label class="col-sm-9 col-form-label"  >{new Date(hireRecord.returned).toLocaleDateString()}</label>
                                         <div class="col-sm-12 ">
                                            <div class=" hr"></div>
                                        </div>
                                    </div>
                                    <div class="form-group row">
                                    <label class="col-sm-3 col-form-label" for="simpleinput">Date Hired</label>
                                    <label class="col-sm-9 col-form-label"  >{new Date(hireRecord.creation_date).toLocaleDateString()}</label>
                                    <div class="col-sm-12 ">
                                        <div class=" hr"></div>
                                    </div>
                                </div>
                                </div>
                                    )}

                                    <div class="form-group row">
                                        <label class="col-sm-3 col-form-label" for="simpleinput">Due Date</label>
                                        <div class="col-md-4">
                                            <input class="form-control nox" id="editToDoDueDate" type="date" name="date"
                                                placeholder="dd/mm/yyyy" value={dueDate} onChange={(e) => setDue(e.target.value)} />
                                        </div>

                                        <div class="col-sm-12 ">
                                            <div class=" hr"></div>
                                        </div>
                                       
                                    </div>
                                    <div class="form-group row">
                                        <label class="col-sm-3 col-form-label" for="simpleinput">Notes</label>
                                        <div class="col-md-9">
                                            <textarea class="form-control nox" id="editToDoNotes" type="text"  
                                                placeholder=" "  rows="3" value={notes} onChange={(e) => setNotes(e.target.value)}> </textarea>
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

                                                                <label class="col-2 col-form-label fw-700 text-center" for="simpleinput">Rate</label>

                                                                <label class="col-2 col-form-label fw-700 text-center" for="simpleinput">Qty</label>

                                                                <div class="col-sm-12 ">
                                                                    <div class=" hr-2"></div>
                                                                </div>
                                                            </div>
                                                            {search(addOns).map((item, index) => (
                                                            <div class=" form-group row">
                                                                <label class="col-8 col-form-label" id={"editAddOnName"+index}>{item.name}</label>
                                                                <div class="col-2">
                                                                    <input class="form-control nox" type="text" value={item.rate} id={"editAddOnRate"+index} name="RateAddon" placeholder=" " />
                                                                </div>
                                                                <div class="col-2">
                                                                    <input class="form-control nox" type="text" defaultValue={item.qty} name="Qty" id={"editAddOnQty"+index} placeholder=" " />
                                                                </div>
                                                                <div class="col-sm-12 ">
                                                                    <div class=" hr"></div>
                                                                </div>
                                                            </div>))}
                                                           </div>
                                                  
                                                </div>
                                            </div>
                    


                                   
                                    <div class="btn-div text-center pt-2">
                                        <Button data-item-id={hireRecord.id} onClick={toggleUp} color="primary" className="mr-2" >Update</Button>
                                        <Link to="/"><Button class="btn btn-lg btn-secondary waves-effect waves-themed " color="secondary" >Cancel</Button></Link>
                                    </div>
                                </form>
                            </div>
                            <div class="panel-content py-2 rounded-bottom border-faded border-left-0 border-right-0 border-bottom-0   d-flex">
                                <Button onClick={editToggle} type="button" color="secondary"  >
                                    <span class="fal fa-pencil mr-1"></span>  Edit  </Button>

                                <span class="ml-auto  ">
                                    <Button data-item-id={hireRecord.id} color="danger" onClick={toggleDel} > <span class="fal fa-trash-alt mr-1"></span> Delete</Button>

                                </span>
                            </div>

                        </div>

                    </div>
                </div>
            </div>
            <Modal isOpen={deleteModal} toggle={toggleDel} >
                <ModalHeader toggle={toggleDel}> Delete</ModalHeader>
                <ModalBody>
                    Are you sure you want to delete {studName}'s {instrument + " " + brand} hire record?
        </ModalBody>
                <ModalFooter>
                    <Button color="primary" onClick={(e) => deletion(hireRecord.id, hireRecord.instrumentId)}><span class="disp"> Yes </span></Button>
                    <Button color="secondary" onClick={toggleDel}>No</Button>
                </ModalFooter>
            </Modal>
            <Modal isOpen={updateModal} toggle={toggleUp} >
                <ModalHeader toggle={toggleUp}> Update</ModalHeader>
                <ModalBody>
                    Are you sure you want to update {studName}'s {instrument + " " + brand} hire record?
        </ModalBody>
                <ModalFooter>
                    <Button color="primary" onClick={(e) => update(hireRecord.id)}><span class="disp updt"> Yes </span></Button>
                    <Button color="secondary" onClick={toggleUp}>No</Button>
                </ModalFooter>
            </Modal>
            <Modal isOpen={returnModal} toggle={toggleRet}>
                <ModalHeader toggle={toggleRet}>Return</ModalHeader>
                <ModalBody>
                    Are you sure that {studName} has returned {instrument + " " + brand} with code ({code})?
        </ModalBody>
                <ModalFooter>
                    <Button color="primary" onClick={(e) => returned(hireRecord.id, hireRecord.instrumentId)}><span class="disp rtnd"> Yes </span></Button>
                    <Button color="secondary" onClick={toggleRet}>No</Button>
                </ModalFooter>
            </Modal>
        </div>
    )
}



export default HireRecord;