import React from 'react';
import { BrowserRouter, Link, Route, Switch, Redirect } from 'react-router-dom';

function Header({ schoolList, ownerList, instOptionsList }) {
    return (
        <header class="page-header" role="banner">

            <div class="page-logo">
                <a href="#" class="page-logo-link press-scale-down d-flex align-items-center position-relative"
                    data-toggle="modal" data-target="#modal-shortcut">
                    <img src="dist/omalogo.png" alt="One Maker Academy " aria-roledescription="logo" />

                    <span
                        class="position-absolute text-white opacity-50 small pos-top pos-right mr-2 mt-n2"></span>
                    <i class="fal fa-angle-down d-inline-block ml-1 fs-lg color-primary-300"></i>
                </a>
            </div>

            <div class="hidden-md-down dropdown-icon-menu position-relative">
                <a href="#" class="header-btn btn js-waves-off" data-action="toggle"
                    data-class="nav-function-hidden" title="Hide Navigation">
                    <i class="ni ni-menu"></i>
                </a>
                
            </div>

            <div class="hidden-lg-up">
                <a href="#" class="header-btn btn press-scale-down" data-action="toggle"
                    data-class="mobile-nav-on">
                    <i class="ni ni-menu"></i>
                </a>
            </div>
            <div class="search">
                <div class="main-title "><span> Instrument Hire </span> Management System</div>
            </div>
            <div class="ml-auto d-flex">

                <div class="hidden-sm-up">
                    <a href="#" class="header-icon" data-action="toggle" data-class="mobile-search-on"
                        data-focus="search-field" title="Search">
                        <i class="fal fa-search"></i>
                    </a>
                </div>
                <div  >
                    <a href="#" class="header-icon" data-toggle="dropdown" title="You got 11 notifications">
                        <i class="fal fa-cog"></i>

                    </a>
                    <div class="dropdown-menu dropdown-menu-animated dropdown-xl">
                        <div
                            class="dropdown-header  bg-trans-gradient d-flex justify-content-center align-items-center rounded-top ">
                            <h4 class="m-0 text-center color-white  ">
                                Settings
                                <small class="mb-0 opacity-80">  Applications Settings</small>

                            </h4>

                        </div>

                        <div class="settings-mn" >

                            <div class="accordion accordion-hover " id="top-nav">

                                <div class="card">
                                    <div class="card-header">
                                        <a href="javascript:void(0);" class="card-title collapsed" data-toggle="collapse" data-target="#top-nav1" aria-expanded="false">
                                            <i class="fal fa-guitars width-2 fs-xl"></i>
                                                            Instrument/Add-ons Options
                                                            <span class="ml-auto">
                                                <span class="collapsed-reveal">
                                                    <i class="fal fa-chevron-up fs-xl"></i>
                                                </span>
                                                <span class="collapsed-hidden">
                                                    <i class="fal fa-chevron-down fs-xl"></i>
                                                </span>
                                            </span>
                                        </a>
                                    </div>
                                    <div id="top-nav1" class="collapse" data-parent="#top-nav">
                                        <div class="card-body">
                                            <ul>
                                                <li class=" ">
                                                    <Link to="/instoptionslist" title="Chart.js" data-filter-tags="statistics chart graphs chart.js bar pie" class=" waves-effect waves-themed">
                                                        <span class="nav-link-text" data-i18n="nav.statistics_chart.js">Instrument Types List</span>
                                                        <span class="dl-ref label bg-info-900 ml-2"> {instOptionsList.length}</span>
                                                    </Link>
                                                </li>
                                                <li>
                                                    <Link to="/newinstoptions" title="Chartist.js" data-filter-tags="statistics chart graphs chartist.js" class=" waves-effect waves-themed">
                                                        <span class="nav-link-text" data-i18n="nav.statistics_chartist.js">New Instrument Type/Add-on Options</span>
                                                    </Link>
                                                </li>


                                            </ul>
                                        </div>
                                    </div>
                                </div>

                                <div class="card">
                                    <div class="card-header">
                                        <a href="javascript:void(0);" class="card-title collapsed" data-toggle="collapse" data-target="#top-nav2" aria-expanded="false">
                                            <i class="fal fa-building width-2 fs-xl"></i>
                                                            Schools
                                                            <span class="ml-auto">
                                                <span class="collapsed-reveal">
                                                    <i class="fal fa-chevron-up fs-xl"></i>
                                                </span>
                                                <span class="collapsed-hidden">
                                                    <i class="fal fa-chevron-down fs-xl"></i>
                                                </span>
                                            </span>
                                        </a>
                                    </div>
                                    <div id="top-nav2" class="collapse" data-parent="#top-nav">
                                        <div class="card-body">

                                            <ul>

                                                <li class=" ">
                                                    <Link to="/schoollist" title="Chart.js" data-filter-tags="statistics chart graphs chart.js bar pie" class=" waves-effect waves-themed">
                                                        <span class="nav-link-text" data-i18n="nav.statistics_chart.js">Schools List</span>
                                                        <span class="dl-ref label bg-info-900 ml-2">{schoolList.length}</span>
                                                    </Link>
                                                </li>
                                                <li>
                                                    <Link to="/newschool" title="Chartist.js" data-filter-tags="statistics chart graphs chartist.js" class=" waves-effect waves-themed">
                                                        <span class="nav-link-text" data-i18n="nav.statistics_chartist.js"> New School</span>
                                                    </Link>
                                                </li>

                                            </ul>

                                        </div>
                                    </div>
                                </div>

                                <div class="card">
                                    <div class="card-header">
                                        <a href="javascript:void(0);" class="card-title collapsed" data-toggle="collapse" data-target="#top-nav3" aria-expanded="false">
                                            <i class="fal fa-warehouse width-2 fs-xl"></i>
                                                            Owners
                                                            <span class="ml-auto">
                                                <span class="collapsed-reveal">
                                                    <i class="fal fa-chevron-up fs-xl"></i>
                                                </span>
                                                <span class="collapsed-hidden">
                                                    <i class="fal fa-chevron-down fs-xl"></i>
                                                </span>
                                            </span>
                                        </a>
                                    </div>
                                    <div id="top-nav3" class="collapse" data-parent="#top-nav">
                                        <div class="card-body">

                                            <ul>

                                                <li class=" ">
                                                    <Link to="/ownerlist" title="Chart.js" data-filter-tags="statistics chart graphs chart.js bar pie" class=" waves-effect waves-themed">
                                                        <span class="nav-link-text" data-i18n="nav.statistics_chart.js">Owner List</span>
                                                        <span class="dl-ref label bg-info-900 ml-2">{ownerList.length} </span>
                                                    </Link>
                                                </li>
                                                <li>
                                                    <Link to="/newowner" title="Chartist.js" data-filter-tags="statistics chart graphs chartist.js" class=" waves-effect waves-themed">
                                                        <span class="nav-link-text" data-i18n="nav.statistics_chartist.js"> New Owner</span>
                                                    </Link>
                                                </li>

                                            </ul>

                                        </div>
                                    </div>
                                </div>

                                <div class="card">
                                    <div class="card-header">
                                        <a href="javascript:void(0);" class="card-title collapsed" data-toggle="collapse" data-target="#top-nav4" aria-expanded="false">
                                            <i class="fal fa-user width-2 fs-xl"></i>
                                                            My Account
                                                            <span class="ml-auto">
                                                <span class="collapsed-reveal">
                                                    <i class="fal fa-chevron-up fs-xl"></i>
                                                </span>
                                                <span class="collapsed-hidden">
                                                    <i class="fal fa-chevron-down fs-xl"></i>
                                                </span>
                                            </span>
                                        </a>
                                    </div>
                                    <div id="top-nav4" class="collapse" data-parent="#top-nav">
                                        <div class="card-body">

                                            <ul>
                                                <li>
                                                    <Link to="/test" title="C3 Charts" data-filter-tags="statistics chart graphs c3 charts" class=" waves-effect waves-themed">
                                                        <span class="nav-link-text" data-i18n="nav.statistics_c3_charts">My Profile</span>
                                                    </Link>
                                                </li>

                                            </ul>

                                        </div>
                                    </div>
                                </div>


                            </div>

                        </div>


                    </div>
                </div>

                <div>
                    <a href="#" class="header-icon" data-toggle="dropdown" title="My Apps">
                        <i class="fal fa-bolt"></i>
                    </a>
                    <div class="dropdown-menu dropdown-menu-animated w-auto h-auto">
                        <div
                            class="dropdown-header bg-trans-gradient d-flex justify-content-center align-items-center rounded-top">
                            <h4 class="m-0 text-center color-white">
                                Quick Shortcuts
                    <small class="mb-0 opacity-80">Handy links</small>
                            </h4>
                        </div>
                        <div class="custom-scroll h-100">
                            <ul class="app-list">
                                <li>
                                    <a href="https://www.pacifichills.nsw.edu.au/phcs/" target="_blank" class="app-list-item hover-white">
                                        <img src="dist/img/phcs.png" class="settings-logos" alt=" " aria-roledescription="logo" />

                                        <span class="app-list-name">
                                            PHCS
                            </span>
                                    </a>
                                </li>
                                <li>
                                    <a href="https://www.onemakeracademy.com.au/oma/" target="_blank" class="app-list-item hover-white">
                                        <img src="dist/img/omalogo.png" class="settings-logos" alt=" " aria-roledescription="logo" />

                                        <span class="app-list-name">
                                            OMA
                            </span>
                                    </a>
                                </li>
                                <li>
                                    <a href="https://www.pacifichills.nsw.edu.au/phcs/" target="_blank" class="app-list-item hover-white">
                                        <img src="dist/img/phcs.png" class="settings-logos" alt=" " aria-roledescription="logo" />

                                        <span class="app-list-name">
                                            Edumate
                            </span>
                                    </a>
                                </li>
                                <li>
                                    <a href="https://www.musicorp.com.au/" target="_blank" class="app-list-item hover-white">
                                        <img src="dist/img/polygon.png" class="settings-logos" alt=" " aria-roledescription="logo" />

                                        <span class="app-list-name">
                                            Polygon
                            </span>
                                    </a>
                                </li>
                                <li>
                                    <a href="https://www.duralmusic.com.au/" target="_blank" class="app-list-item hover-white">
                                        <img src="dist/img/duralmusic.png" class="settings-logos" alt=" " aria-roledescription="logo" />

                                        <span class="app-list-name">
                                            Dural Music
                            </span>
                                    </a>
                                </li>
                                <li>
                                    <a href="https://www.turramusic.com.au/" target="_blank" class="app-list-item hover-white">
                                        <img src="dist/img/tmusic.png" class="settings-logos" alt=" " aria-roledescription="logo" />

                                        <span class="app-list-name">
                                            Turramarra
                            </span>
                                    </a>
                                </li>


                            </ul>
                        </div>
                    </div>
                </div>

            </div>
        </header>
    )
}

export default Header;