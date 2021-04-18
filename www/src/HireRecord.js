import React from 'react';

const id = /[^/]*$/.exec(window.location.href);

function HireRecord({ toDos, getTodo }) {
    console.log(id)
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
                        {toDos.map((item, index) => (
                            <div class="panel-content" key={item.id}>
                                
                                <div class="row" >
                                    <div class="col-md-3 fw-700"> Name </div>
                                    <div class="col-md-9">{item.name}</div>
                                </div>
                                <div class="row" >
                                    <div class="col-md-3 fw-700"> Code </div>
                                    <div class="col-md-9">{item.code}</div>
                                </div>
                                <div class="row" >
                                    <div class="col-md-3 fw-700"> Instrument </div>
                                    <div class="col-md-9">{item.instrument}</div>
                                </div>
                                <div class="row" >
                                    <div class="col-md-3 fw-700"> Brand </div>
                                    <div class="col-md-9">{item.brand}</div>
                                </div>
                                <div class="row" >
                                    <div class="col-md-3 fw-700"> Rate </div>
                                    <div class="col-md-9">{item.rate}</div>
                                </div>
                                <div class="row" >
                                    <div class="col-md-3 fw-700"> Owner </div>
                                    <div class="col-md-9">{item.owner}</div>
                                </div>
                                <div class="row" >
                                    <div class="col-md-3 fw-700"> Due Date </div>
                                    <div class="col-md-9">{item.due}</div>
                                </div>
                            </div>))}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default HireRecord;