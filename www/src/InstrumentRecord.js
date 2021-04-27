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
                            <div class="panel-content">
                                <div class="row" >
                                    <div class="col-md-3 fw-700"> Code </div>
                                    <div class="col-md-9">{hireRecord.code}</div>
                                </div>
                                <div class="row" >
                                    <div class="col-md-3 fw-700"> Type </div>
                                    <div class="col-md-9">{hireRecord.type}</div>
                                </div>
                                <div class="row" >
                                    <div class="col-md-3 fw-700"> Object Name </div>
                                    <div class="col-md-9">{hireRecord.object}</div>
                                </div>
                                <div class="row" >
                                    <div class="col-md-3 fw-700"> Brand </div>
                                    <div class="col-md-9">{hireRecord.brand}</div>
                                </div>
                                <div class="row" >
                                    <div class="col-md-3 fw-700"> Rate </div>
                                    <div class="col-md-9">{hireRecord.rate}</div>
                                </div>
                                <div class="row" >
                                    <div class="col-md-3 fw-700"> Value at Purchase </div>
                                    <div class="col-md-9">{hireRecord.purchVal}</div>
                                </div>
                                <div class="row" >
                                    <div class="col-md-3 fw-700"> Depreciation </div>
                                    <div class="col-md-9">{hireRecord.depreciation}</div>
                                </div>
                                <div class="row" >
                                    <div class="col-md-3 fw-700"> Owner </div>
                                    <div class="col-md-9">{hireRecord.owner}</div>
                                </div>
                                <div class="row" >
                                    <div class="col-md-3 fw-700"> Available </div>
                                    <div class="col-md-9">{hireRecord.available}</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default InstrumentRecord;