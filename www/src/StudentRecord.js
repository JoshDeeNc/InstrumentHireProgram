import React from 'react';

function StudentRecord({ studentList }) {
    const id = /[^/]*$/.exec(window.location.href)[0];
    const studentRecord = studentList.find(item => item.id === id);

    return (
        <div>
            <div class="row">
                <div class="col-md-10">
                    <div id="panel-1" class="panel">
                        <div class="panel-hdr">
                            <h2>
                                Student Details
                                        </h2>
                            <button type="button" class="btn btn-sm btn-outline-default waves-effect waves-themed mr-2">
                                <span class="fal fa-pencil mr-1"></span>
                                                    Edit
                                                </button>
                        </div>
                        <div class="panel-container show">
                            <div class="panel-content">
                                <div class="row" >
                                    <div class="col-md-3 fw-700"> First Name </div>
                                    <div class="col-md-9">{studentRecord.firstName}</div>
                                </div>
                                <div class="row" >
                                    <div class="col-md-3 fw-700"> Last Name </div>
                                    <div class="col-md-9">{studentRecord.lastName}</div>
                                </div>
                                <div class="row" >
                                    <div class="col-md-3 fw-700"> Phone Number </div>
                                    <div class="col-md-9">{studentRecord.phone}</div>
                                </div>
                                <div class="row" >
                                    <div class="col-md-3 fw-700"> Email </div>
                                    <div class="col-md-9">{studentRecord.email}</div>
                                </div>
                                <div class="row" >
                                    <div class="col-md-3 fw-700"> Date Added </div>
                                    <div class="col-md-9">{new Date(studentRecord.creation_date).toLocaleDateString()}</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default StudentRecord;