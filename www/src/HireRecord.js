import React from 'react';

function HireRecord({ toDos }) {
    const id = /[^/]*$/.exec(window.location.href)[0];
    const hireRecord = toDos.find(item => item.id === id);
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
                                    <div class="col-md-3 fw-700"> Date hired </div>
                                    <div class="col-md-9">{Convert.ToDateTime(hireRecord.creation_date).ToString("yyyy-MM-dd")}</div>
                                </div>
                                
                                <div class="row" >
                                    <div class="col-md-3 fw-700"> Name </div>
                                    <div class="col-md-9">{hireRecord.name}</div>
                                </div>
                                <div class="row" >
                                    <div class="col-md-3 fw-700"> Code </div>
                                    <div class="col-md-9">{hireRecord.code}</div>
                                </div>
                                <div class="row" >
                                    <div class="col-md-3 fw-700"> Instrument </div>
                                    <div class="col-md-9">{hireRecord.instrument}</div>
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
                                    <div class="col-md-3 fw-700"> Owner </div>
                                    <div class="col-md-9">{hireRecord.owner}</div>
                                </div>
                                <div class="row" >
                                    <div class="col-md-3 fw-700"> Due Date </div>
                                    <div class="col-md-9">{hireRecord.due}</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default HireRecord;