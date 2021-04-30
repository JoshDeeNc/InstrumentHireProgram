import React, { useState } from 'react';
import { BrowserRouter, Link, Route, Switch } from 'react-router-dom';
import { Button, ButtonGroup, Form, FormGroup, Input, Label, Row, Col } from 'reactstrap';

function InstrumentRecord({ updateInstrument, instInventory }) {
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

    return (
        <div>
            <div class="row">
                <div class="col-md-10">
                    <div id="panel-1" class="panel">
                        <div class="panel-hdr">
                            <h2>
                                Hire Details
                                        </h2>
                            <button type="button" class="btn btn-sm btn-outline-default waves-effect waves-themed mr-2">
                                <span class="fal fa-pencil mr-1"></span>
                                                    Edit
                                                </button>
                        </div>
                        <div class="panel-container show">
                            <div class="panel-content  ">
                                <form>
                                    <div class=" form-group row" >
                                        <label class="col-sm-2 col-form-label" for=" ">Code </label>
                                        <div class="col-sm-10">
                                            <Input type="text" class="form-control" name=" " id="editInstCode"
                                                value={code} onChange={onChangeCode} placeholder=" Code" />
                                        </div>
                                    </div>
                                    <div class=" form-group row" >
                                        <label class="col-sm-2 col-form-label" for=" "> Instrument Type </label>
                                        <div class="col-sm-10">
                                            <Input type="text" class="form-control" name=" " id="editInstType"
                                                value={type} onChange={onChangeType} placeholder="Instrument Type " />
                                        </div>
                                    </div>
                                    <div class=" form-group row" >
                                        <label class="col-sm-2 col-form-label" for=" "> Instrument Name </label>
                                        <div class="col-sm-10">
                                            <Input type="text" class="form-control" name=" " id="editInstName"
                                                value={object} onChange={onChangeObject} placeholder="Instrument Name " />
                                        </div>
                                    </div>
                                    <div class=" form-group row" >
                                        <label class="col-sm-2 col-form-label" for=" ">Brand </label>
                                        <div class="col-sm-10">
                                            <Input type="text" class="form-control" name=" " id="editInstBrand"
                                                value={brand} onChange={onChangeBrand} placeholder="Brand " />
                                        </div>
                                    </div>
                                    <div class=" form-group row" >
                                        <label class="col-sm-2 col-form-label" for=" "> Rate </label>
                                        <div class="col-sm-10">
                                            <Input type="text" class="form-control" name=" " id="editInstRate"
                                                value={rate} onChange={onChangeRate} placeholder="Rate " />
                                        </div>
                                    </div>
                                    <div class=" form-group row" >
                                        <label class="col-sm-2 col-form-label" for=" "> Purchase Value </label>
                                        <div class="col-sm-10">
                                            <Input type="text" class="form-control" name=" " id="editInstPurchVal"
                                                value={purchVal} onChange={onChangePurch} placeholder="Purchase Value  " />
                                        </div>
                                    </div>
                                    <div class=" form-group row" >
                                        <label class="col-sm-2 col-form-label" for=" ">Depreciation </label>
                                        <div class="col-sm-10">
                                            <Input type="text" class="form-control" name=" " id="editInstDepr"
                                                value={depr} onChange={onChangeDepreciation} placeholder=" Depreciation" />
                                        </div>
                                    </div>
                                    <div class=" form-group row" >
                                        <label class="col-sm-2 col-form-label" for=" "> Owner </label>
                                        <div class="col-sm-10">
                                            <Input type="text" class="form-control" name=" " id="editInstOwner"
                                                value={owner} onChange={onChangeOwner} placeholder="Owner " />
                                        </div>
                                    </div>
                                    <Button data-item-id={instrumentRecord.id} onClick={(e) => updateInstrument(instrumentRecord.id)} class="btn btn-lg btn-primary waves-effect waves-themed mr-2 " className="ml-1">Update</Button>
                                    <Link to="/instrumentlist"><Button class="btn btn-lg btn-default waves-effect waves-themed " className="ml-1">Cancel</Button></Link>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default InstrumentRecord;