import React from 'react';
import BootstrapHeader from "./components/BootstrapHeader";

import './bootstrap.min.css';

const BootstrapLearning = (props) => {
    return (
        <div>
            <BootstrapHeader/>
            <BootstrapInfo/>
        </div>
    );
}

const BootstrapInfo = (props) => {
    return (
        <div className="m-2">
            <h5>Continue learning React. React-bootstrap.</h5>
            <div className="pl-2">
                <h6>- page Home - Carousel on bootstrap</h6>
                <h6>- page About - Tabs on bootstrap</h6>
                <h6>- page Contacts - Form on bootstrap</h6>
                <h6>- page Blog - Card on bootstrap</h6>
            </div>
        </div>
    );
}

export default BootstrapLearning;
