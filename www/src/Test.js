import React from 'react';
import { Button, ButtonGroup, Row, Col, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import { Form, FormGroup, Label, Input, FormFeedback, FormText } from 'reactstrap';

function Test() {

    function vals() {
            // Fetch all the forms we want to apply custom Bootstrap validation styles to
            var forms = document.getElementsByClassName('needs-validation')[0];
            
            forms.classList.add('was-validated');
    }
    return (
        <div>
            <h1>Test</h1>

            <div class="panel-container show">
                                        <div class="panel-content">
                                            <div class="panel-tag">
                                                <p>For custom Bootstrap form validation messages, you’ll need to add the <code>novalidate</code> boolean attribute to your <code>&lt;form&gt;</code>. This disables the browser default feedback tooltips, but still provides access to the form validation APIs in JavaScript. Try to submit the form below; our JavaScript will intercept the submit button and relay feedback to you. When attempting to submit, you’ll see the <code>:invalid</code> and <code>:valid</code> styles applied to your form controls.</p>
                                                <p>Custom feedback styles apply custom colors, borders, focus styles, and background icons to better communicate feedback. Background icons for <code>&lt;select&gt;</code>s are only available with <code>.custom-select</code>, and not <code>.form-control</code>.</p>
                                            </div>
                                        </div>
                                        <div class="panel-content p-0">
                                            <form class="needs-validation" novalidate>
                                                <div class="panel-content">
                                                    <div class="form-row">
                                                        <div class="col-md-4 mb-3">
                                                            <label class="form-label" for="validationCustom01">First name <span class="text-danger">*</span> </label>
                                                            <input type="text" class="form-control" id="validationCustom01" placeholder="First name" required />
                                                            <div class="invalid-feedback">
                                                                Looks good!
                                                            </div>
                                                        </div>
                                                        <div class="col-md-4 mb-3">
                                                            <label class="form-label" for="validationCustom02">Last name <span class="text-danger">*</span></label>
                                                            <input type="text" class="form-control" id="validationCustom02" placeholder="Last name" required />
                                                            <div class="invalid-feedback">
                                                                Looks good!
                                                            </div>
                                                        </div>
                                                        <div class="col-md-4 mb-3">
                                                            <label class="form-label" for="validationCustomUsername">Username <span class="text-danger">*</span></label>
                                                            <div class="input-group">
                                                                <div class="input-group-prepend">
                                                                    <span class="input-group-text" id="inputGroupPrepend">@</span>
                                                                </div>
                                                                <input type="text" class="form-control" id="validationCustomUsername" placeholder="Username" aria-describedby="inputGroupPrepend" required />
                                                                <div class="invalid-feedback">
                                                                    Please choose a username.
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div class="form-row form-group">
                                                        <div class="col-md-6 mb-3">
                                                            <label class="form-label" for="validationCustom03">City <span class="text-danger">*</span></label>
                                                            <input type="text" class="form-control" id="validationCustom03" placeholder="City" required />
                                                            <div class="invalid-feedback">
                                                                Please provide a valid city.
                                                            </div>
                                                        </div>
                                                        <div class="col-md-3 mb-3">
                                                            <label class="form-label" for="validationCustom03">State <span class="text-danger">*</span></label>
                                                            <select class="custom-select" required="" >
                                                                <option value="">State</option>
                                                                <option value="1">Michigan</option>
                                                                <option value="2">New York</option>
                                                                <option value="3">Oklahoma</option>
                                                            </select>
                                                            <div class="invalid-feedback">
                                                                Please provide a valid state.
                                                            </div>
                                                        </div>
                                                        <div class="col-md-3 mb-3">
                                                            <label class="form-label" for="validationCustom05">Zip <span class="text-danger">*</span></label>
                                                            <input type="text" class="form-control" id="validationCustom05" placeholder="Zip" required />
                                                            <div class="invalid-feedback">
                                                                Please provide a valid zip.
                                                            </div>
                                                        </div>
                                                        <div class="col-12 mb-3">
                                                            <label class="form-label" for="validationTextarea2">Comment <span class="text-danger">*</span></label>
                                                            <textarea class="form-control" id="validationTextarea2" placeholder="Required example textarea" required="" ></textarea>
                                                            <div class="invalid-feedback">
                                                                Please enter a message in the textarea.
                                                            </div>
                                                        </div>
                                                        <div class="col-12">
                                                            <label class="form-label mb-2">Please disclose your gender profile <span class="text-danger">*</span></label>
                                                            <div class="custom-control custom-radio mb-2">
                                                                <input type="radio" class="custom-control-input" id="GenderMale" name="radio-stacked" required="" />
                                                                <label class="custom-control-label" for="GenderMale">Male</label>
                                                            </div>
                                                            <div class="custom-control custom-radio mb-2">
                                                                <input type="radio" class="custom-control-input" id="GenderFemale" name="radio-stacked" required="" />
                                                                <label class="custom-control-label" for="GenderFemale">Female</label>
                                                            </div>
                                                            <div class="custom-control custom-radio">
                                                                <input type="radio" class="custom-control-input" id="genderPrivate" name="radio-stacked" required="" />
                                                                <label class="custom-control-label" for="genderPrivate">Prefer not to say</label>
                                                                <div class="invalid-feedback">Please select at least one</div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div class="panel-content border-faded border-left-0 border-right-0 border-bottom-0 d-flex flex-row align-items-center">
                                                    <div class="custom-control custom-checkbox">
                                                        <input type="checkbox" class="custom-control-input" id="invalidCheck" required />
                                                        <label class="custom-control-label" for="invalidCheck">Agree to terms and conditions <span class="text-danger">*</span></label>
                                                        <div class="invalid-feedback">
                                                            You must agree before submitting.
                                                        </div>
                                                    </div>
                                                    <button class="btn btn-primary ml-auto" onClick={vals}>Submit form</button>
                                                </div>
                                            </form>
                                        
                                        </div>
                                    </div>
    

        </div>
    );
}


export default Test;