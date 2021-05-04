import React from 'react';
import { Container, Jumbotron, Row, Col, Alert, Button } from 'reactstrap';
import config from './config';
 
function Login() {
    return (

        <div>
            <div class="wrapper   ">
                <main class="page-main   d-flex justify-content-center  align-items-center  ">
                    <div class="d-flex justify-content-center    ">

                        <div class="row w-80 bdr bg-green-5 "  >
                            <div class="col-md-6 loginBG ">
                            
                        </div>

                            <div class="col-md-6 p-5 ">
                               
                                <h2 class="sprd-txt"><strong>OneMaker  </strong> Academy</h2>
                                <div class="underln" >   </div>
                                <h1 class="txt-green   " >Instrument Hire Management System</h1>

                                <p class="mb-5  mt-4 op-7 ">OneMaker Academy is a Performing Arts Academy for music and dance.
OMA aims to build and nurture a creative community that is inspired in all aspects of the arts with a strong emphasis on excellence in teaching and performing.</p>
                                <Button
                                    href={`https://${config.cognito_hosted_domain}/login?response_type=token&client_id=${config.aws_user_pools_web_client_id}&redirect_uri=${config.redirect_url}`}
                                    color="primary" >
                                    Log In </Button>
                            </div>

                            
                        </div>
                       
                        <div class="panel-content">
                                                    <div class="form-row">
                                                        <div class="col-md-4 mb-3">
                                                            <label class="form-label" for="validationCustom01">First name <span class="text-danger">*</span> </label>
                                                            <input type="text" class="form-control" id="validationCustom01" placeholder="First name" value="Codex" required="" />
                                                            <div class="valid-feedback">
                                                                Looks good!
                                                            </div>
                                                        </div>
                                                        <div class="col-md-4 mb-3">
                                                            <label class="form-label" for="validationCustom02">Last name <span class="text-danger">*</span></label>
                                                            <input type="text" class="form-control" id="validationCustom02" placeholder="Last name" value="Lantern" required="" />
                                                            <div class="valid-feedback">
                                                                Looks good!
                                                            </div>
                                                        </div>
                                                        <div class="col-md-4 mb-3">
                                                            <label class="form-label" for="validationCustomUsername">Username <span class="text-danger">*</span></label>
                                                            <div class="input-group">
                                                                <div class="input-group-prepend">
                                                                    <span class="input-group-text" id="inputGroupPrepend">@</span>
                                                                </div>
                                                                <input type="text" class="form-control" id="validationCustomUsername" placeholder="Username" aria-describedby="inputGroupPrepend" required="" />
                                                                <div class="invalid-feedback">
                                                                    Please choose a username.
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div class="form-row form-group">
                                                        <div class="col-md-6 mb-3">
                                                            <label class="form-label" for="validationCustom03">City <span class="text-danger">*</span></label>
                                                            <input type="text" class="form-control" id="validationCustom03" placeholder="City" required="" />
                                                            <div class="invalid-feedback">
                                                                Please provide a valid city.
                                                            </div>
                                                        </div>
                                                        <div class="col-md-3 mb-3">
                                                            <label class="form-label" for="validationCustom03">State <span class="text-danger">*</span></label>
                                                            <select class="custom-select" required="">
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
                                                            <input type="text" class="form-control" id="validationCustom05" placeholder="Zip" required="" />
                                                            <div class="invalid-feedback">
                                                                Please provide a valid zip.
                                                            </div>
                                                        </div>
                                                        <div class="col-12 mb-3">
                                                            <label class="form-label" for="validationTextarea2">Comment <span class="text-danger">*</span></label>
                                                            <textarea class="form-control" id="validationTextarea2" placeholder="Required example textarea" required=""></textarea>
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

                    </div>
                </main>
            </div>
        </div>
    )
}

export default Login;