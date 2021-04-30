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
                            <form>
                                <div class="form-group row" >
                                <label class="col-sm-2 col-form-label" for=" ">First Name </label>
                                <div class="col-sm-10">
                                        <Input type="text" class="form-control" name="name" id=" "
                                        value={studentRecord.firstName} onChange={ } placeholder="Name" />
                                </div>
                                   
                                </div>
                                <div class="row form-group" >
                                <label class="col-sm-2 col-form-label" for=" ">Last Name </label>
                                   
                                    <div class="col-sm-10">
                                        <Input type="text" class="form-control" name="name" id=" "
                                        value={studentRecord.lastName} onChange={ } placeholder="Last Name " />
                                    </div>
                                </div>
                                <div class="row form-group" >
                                <label class="col-sm-2 col-form-label" for=" "> Phone Number  </label>   
                                    
                                    <div class="col-sm-10">
                                        <Input type="text" class="form-control" name="name" id=" "
                                        value={studentRecord.phone} onChange={ } placeholder="Phone Number" />
                                </div>
                                </div>
                                <div class="row form-group" >
                                <label class="col-sm-2 col-form-label" for=" ">Email</label> 
                                    
                                    <div class="col-sm-10">
                                        <Input type="text" class="form-control" name="name" id=" "
                                        value={studentRecord.email} onChange={ } placeholder="Email" />
                                </div>
                                </div>
                                <div class="row form-group" >
                                <label class="col-sm-2 col-form-label" for=" ">Date Added </label>
                                     <div class="col-sm-10">
                                        <Input type="text" class="form-control" name="name" id=" "
                                        value={studentRecord.creation_date} onChange={ } placeholder="Date Added" />
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
export default StudentRecord;