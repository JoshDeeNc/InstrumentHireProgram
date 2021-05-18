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
                               
                                <h2 class="sprd-txt"><strong>Music  </strong> Emporium</h2>
                                <div class="underln" >   </div>
                                <h1 class="txt-green   " >Instrument Hire Management System</h1>

                                <p class="mb-5  mt-4 op-7 ">Music Emporium is a store for all your musical instrumenetal needs.
We aim to build and nurture a creative community that is inspired in all aspects of the arts with a strong emphasis on excellence in teaching and performing.</p>
                                <Button
                                    href={`https://${config.cognito_hosted_domain}/login?response_type=token&client_id=${config.aws_user_pools_web_client_id}&redirect_uri=${config.redirect_url}`}
                                    color="primary" >
                                    Log In </Button>
                            </div>

                            
                        </div>
                       


                    </div>
                </main>
            </div>
        </div>
    )
}

export default Login;