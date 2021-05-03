import React from 'react';

function Breadcrumb() {
    return (

        <ol class="breadcrumb page-breadcrumb">
            <li class="breadcrumb-item"><a href="javascript:void(0);">Dashboard</a></li>

            <li class="breadcrumb-item active">Basic</li>
            <li class="position-absolute  pos-right d-none d-sm-block mr-2"><span
                class="js-get-date"></span></li>
        </ol>
    )
}

export default Breadcrumb;