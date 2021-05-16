import React from 'react';
import { Button, ButtonGroup, Row, Col, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import { Form, FormGroup, Label, Input, FormFeedback, FormText } from 'reactstrap';

function Test() {
    return (
        <div>
            <h1>Test</h1>

            <ul id="js-nav-menu" class="nav-menu">
        <li>
            <a href="#" title="Application Intel" data-filter-tags="application intel">
                <i class="fal fa-info-circle"></i>
                <span class="nav-link-text" data-i18n="nav.application_intel">Application Intel</span>
            </a>
            <ul>
                <li>
                    <a href="intel_analytics_dashboard.html" title="Analytics Dashboard"
                        data-filter-tags="application intel analytics dashboard">
                        <span class="nav-link-text" data-i18n="nav.application_intel_analytics_dashboard">Analytics
                            Dashboard</span>
                    </a>
                </li>
                <li>
                    <a href="intel_marketing_dashboard.html" title="Marketing Dashboard"
                        data-filter-tags="application intel marketing dashboard">
                        <span class="nav-link-text" data-i18n="nav.application_intel_marketing_dashboard">Marketing
                            Dashboard</span>
                    </a>
                </li>
                <li>
                    <a href="intel_introduction.html" title="Introduction"
                        data-filter-tags="application intel introduction">
                        <span class="nav-link-text" data-i18n="nav.application_intel_introduction">Introduction</span>
                    </a>
                </li>
                <li>
                    <a href="intel_privacy.html" title="Privacy" data-filter-tags="application intel privacy">
                        <span class="nav-link-text" data-i18n="nav.application_intel_privacy">Privacy</span>
                    </a>
                </li>
            </ul>
        </li>

    </ul>
    

        </div>
    );
}


export default Test;