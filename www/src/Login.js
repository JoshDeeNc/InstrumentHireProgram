import React from 'react';
import { Container, Jumbotron, Row, Col, Alert, Button } from 'reactstrap';
import config from './config';
function Login() {
    return (
        <Row>
            <Col md="12">
                <Button
                    href={`https://${config.cognito_hosted_domain}/login?response_type=token&client_id=${config.aws_user_pools_web_client_id}&redirect_uri=${config.redirect_url}`}
                    color="primary"
                    className="mt-5 float-center"
                >
                    Log In
            </Button>
            </Col>
        </Row>
    )
}

export default Login;