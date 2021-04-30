import React from 'react';

function InstrumentRecord({ instInventory }) {
    const id = /[^/]*$/.exec(window.location.href)[0];
    const instrumentRecord = instInventory.find(item => item.id === id);

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
                                            <Input type="text" class="form-control" name=" " id=" "
                                                value={instrumentRecord.code} onChange={ } placeholder=" Code" />
                                        </div>
                                    </div>
                                    <div class=" form-group row" >
                                        <label class="col-sm-2 col-form-label" for=" "> Instrument Type </label>
                                        <div class="col-sm-10">
                                            <Input type="text" class="form-control" name=" " id=" "
                                                value={instrumentRecord.type} onChange={ } placeholder="Instrument Type " />
                                        </div>
                                    </div>
                                    <div class=" form-group row" >
                                        <label class="col-sm-2 col-form-label" for=" "> Instrument Name </label>
                                        <div class="col-sm-10">
                                            <Input type="text" class="form-control" name=" " id=" "
                                                value={instrumentRecord.object} onChange={ } placeholder="Instrument Name " />
                                        </div>
                                    </div>
                                    <div class=" form-group row" >
                                        <label class="col-sm-2 col-form-label" for=" ">Brand </label>
                                        <div class="col-sm-10">
                                            <Input type="text" class="form-control" name=" " id=" "
                                                value={instrumentRecord.brand} onChange={ } placeholder="Brand " />
                                        </div>
                                    </div>
                                    <div class=" form-group row" >
                                        <label class="col-sm-2 col-form-label" for=" "> Rate </label>
                                        <div class="col-sm-10">
                                            <Input type="text" class="form-control" name=" " id=" "
                                                value={instrumentRecord.rate} onChange={ } placeholder="Rate " />
                                        </div>
                                    </div>
                                    <div class=" form-group row" >
                                        <label class="col-sm-2 col-form-label" for=" "> Purchase Value </label>
                                        <div class="col-sm-10">
                                            <Input type="text" class="form-control" name=" " id=" "
                                                value={instrumentRecord.purchVal} onChange={ } placeholder="Purchase Value  " />
                                        </div>
                                    </div>
                                    <div class=" form-group row" >
                                        <label class="col-sm-2 col-form-label" for=" ">Depreciation </label>
                                        <div class="col-sm-10">
                                            <Input type="text" class="form-control" name=" " id=" "
                                                value={instrumentRecord.depreciation} onChange={ } placeholder=" Depreciation" />
                                        </div>
                                    </div>
                                    <div class=" form-group row" >
                                        <label class="col-sm-2 col-form-label" for=" "> Owner </label>
                                        <div class="col-sm-10">
                                            <Input type="text" class="form-control" name=" " id=" "
                                                value={instrumentRecord.owner} onChange={ } placeholder="Owner " />
                                        </div>
                                    </div>
                                    <div class=" form-group row" >
                                        <label class="col-sm-2 col-form-label" for=" "> Available </label>
                                        <div class="col-sm-10">
                                            <Input type="text" class="form-control" name=" " id=" "
                                                value={instrumentRecord.available} onChange={ } placeholder="Available " />
                                        </div>
                                    </div>
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