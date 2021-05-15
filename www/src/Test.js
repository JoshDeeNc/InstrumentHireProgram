import React from 'react';
import { Button, ButtonGroup, Row, Col, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import { Form, FormGroup, Label, Input, FormFeedback, FormText } from 'reactstrap';

function Test() {
    return (
        <div>
            <h1>Test</h1>

            <div class="row">
                <div class="col-lg-7 col-md-10">
                    <div id="panel-1" class="panel">
                        <div class="panel-hdr-dsp">
                            <h2>New Instrument</h2>
                            <div></div>
                        </div>
                        <div class="panel-container show">
                            <div class="panel-content">

                                <form>
                                    <div class=" form-group row">
                                        <label class="col-sm-3 col-form-label" for="simpleinput">Instrument Name </label>
                                        <div class="col-sm-9">
                                            <Input type="text" class="form-control no-edit" name="name" id="newSchoolName"  />
                                        </div>
                                        <div class="col-sm-12 ">
                                            <div class=" hr"></div>
                                        </div>
                                    </div>

                                    <div class=" form-group row ">
                                        <label class="col-sm-3 col-form-label" for="simpleinput">Size</label>
                                        <div class="col-sm-9">
                                            <Input type="text" class="form-control no-edit" value="Half, Three Quarter, Full " name="code" id="newSchoolNumber" />
                                        </div>
                                        <div class="col-sm-12 ">
                                            <div class=" hr"></div>
                                        </div>
                                         
                                         
                                        <div class="col-sm-12 mb-2 mt-2 ">
                                            <div class=" hr"></div>
                                        </div>
                                    </div>

                                    <div class=" form-group row">
                                        <label class="col-sm-3 col-form-label" for="simpleinput"> Add-On </label>
                                        <div class="col-sm-9">
                                            <Input type="text" class="form-control no-edit" value="Metronome, Strings, Stand" name="code" id="newSchoolNumber" />
                                        </div>
                                        <div class="col-sm-12 ">
                                            <div class=" hr"></div>
                                        </div>
              
                                        <div class="col-sm-12 mb-2 mt-2 ">
                                            <div class=" hr"></div>
                                        </div>
                                    </div>


                                    <div class="btn-divS">
                                        <Button color="primary" className="mr-2" >Add</Button>

                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>



        </div>
    );
}


export default Test;