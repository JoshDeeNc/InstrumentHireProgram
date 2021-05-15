import React from 'react';
import StudentList from '../StudentList';
import { BrowserRouter, Link, Route, Switch, Redirect } from 'react-router-dom';
function Sidebar({ clearCredentials, toDos, instInventory, studentList, schoolList, ownerList, instOptionsList }) {
  return (
    <aside class="page-sidebar">
      <div class="page-logo">
        <a href="#" class="page-logo-link press-scale-down d-flex align-items-center position-relative" data-toggle="modal" data-target="#modal-shortcut">
          <img src="dist/img/omalogo.png" alt=" " aria-roledescription="logo" />
          <span class="page-logo-text mr-1"><span> ONEMAKER</span> ACADEMY</span>
          <span class="position-absolute text-white opacity-50 small pos-top pos-right mr-2 mt-n2"></span>
          <i class="fal fa-angle-down d-inline-block ml-1 fs-lg color-primary-300"></i>
        </a>
      </div>
      <nav id="js-primary-nav" class="primary-nav js-list-filter" role="navigation">
        <div class="nav-filter">
          <div class="position-relative">
            <input type="text" id="nav_filter_input" placeholder="Filter menu" class="form-control" tabindex="0" />
            <a href="#" onclick="return false;" class="btn-primary btn-search-close js-waves-off" data-action="toggle" data-class="list-filter-active" data-target=".page-sidebar">
              <i class="fal fa-chevron-up"></i>
            </a>
          </div>
        </div>
        <div class="info-card">
          <img src="dist/img/demo/avatars/avatar-admin.png" class="profile-image rounded-circle" alt="Lucinda Jackson" />
          <div class="info-card-text">
            <a href="#" class="d-flex align-items-center text-white">
              <span class="text-truncate text-truncate-sm d-inline-block">Lucinda Jackson</span>
            </a>
            <span class="d-inline-block text-truncate text-truncate-sm">Administrator</span>
          </div>
          <img src="dist/img/menubg.jpeg" class="cover" alt="cover" />
          <a href="#" onclick="return false;" class="pull-trigger-btn" data-action="toggle" data-class="list-filter-active" data-target=".page-sidebar" data-focus="nav_filter_input">
            <i class="fal fa-angle-down"></i>
          </a>
        </div>

      
       
        <ul id="js-nav-menu" class="nav-menu ">
      
          <li>
            <Link to="/" title="Flot" data-filter-tags="statistics chart graphs flot bar pie" class=" waves-effect waves-themed">
              <i class="fal fa-home"></i>
              <span class="nav-link-text" data-i18n="nav.statistics_flot">Home</span>
              <span class="dl-ref label bg-info-900 ml-2">{toDos.filter(item => item.returned === false).length}</span>
            </Link>
          </li>

          <li class="active ">
            <a href="#" title="Statistics" data-filter-tags="statistics chart graphs" aria-expanded="true" class=" waves-effect waves-themed">
              <i class="fal fa-guitars"></i>
              <span class="nav-link-text" data-i18n="nav.statistics">Hires</span>
              <b class="collapse-sign"><em class="fal fa-angle-down"></em></b></a>
            <ul>
              <li>
                <Link to="/newHire" title="Chartist.js" data-filter-tags="statistics chart graphs chartist.js" class=" waves-effect waves-themed">
                  <span class="nav-link-text" data-i18n="nav.statistics_chartist.js"> New Hire</span>
                </Link>
              </li>
            

            </ul>
          </li>
         

          <li class="active ">
            <a href="#" title="Statistics" data-filter-tags="statistics chart graphs" aria-expanded="true" class=" waves-effect waves-themed">
              <i class="fal fa-users"></i>
              <span class="nav-link-text" data-i18n="nav.statistics">Students</span>
              <b class="collapse-sign"><em class="fal fa-angle-down"></em></b></a>
            <ul>
               
              <li>
                <Link to="/studentlist" title="Flot" data-filter-tags="statistics chart graphs flot bar pie" class=" waves-effect waves-themed">
                  <span class="nav-link-text" data-i18n="nav.statistics_flot">Students List</span>
                  <span class="dl-ref label bg-info-900 ml-2">{studentList.length}</span>
                </Link>
              </li>
              <li>
                <Link to="/newStudent" title="Chartist.js" data-filter-tags="statistics chart graphs chartist.js" class=" waves-effect waves-themed">
                  <span class="nav-link-text" data-i18n="nav.statistics_chartist.js">Add Student</span>
                </Link>
              </li>
            </ul>
          </li>


          <li class="active ">
            <a href="#" title="Statistics" data-filter-tags="statistics chart graphs" aria-expanded="true" class=" waves-effect waves-themed">
              <i class="fal fa-guitar"></i>
              <span class="nav-link-text" data-i18n="nav.statistics">Instruments</span>
              <b class="collapse-sign"><em class="fal fa-angle-down"></em></b></a>
            <ul>
               
            <li class=" ">
                <Link to="/instrumentlist" title="Chart.js" data-filter-tags="statistics chart graphs chart.js bar pie" class=" waves-effect waves-themed">
                  <span class="nav-link-text" data-i18n="nav.statistics_chart.js">Instruments List</span>
                  <span class="dl-ref label bg-info-900 ml-2">{instInventory.length}</span>
                </Link>
              </li>

              <li>
                <Link to="/newinstrument" title="C3 Charts" data-filter-tags="statistics chart graphs c3 charts" class=" waves-effect waves-themed">
                  <span class="nav-link-text" data-i18n="nav.statistics_c3_charts">Add Instrument</span>
                </Link>
              </li>
        
            </ul>
          </li>




          <li class="active ">
            <a href="#" title="Statistics" data-filter-tags="statistics chart graphs" aria-expanded="true" class=" waves-effect waves-themed">
              <i class="fal fa-building"></i>
              <span class="nav-link-text" data-i18n="nav.statistics">Schools</span>
              <b class="collapse-sign"><em class="fal fa-angle-down"></em></b></a>
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
          </li>


          <li class="active ">
            <a href="#" title="Statistics" data-filter-tags="statistics chart graphs" aria-expanded="true" class=" waves-effect waves-themed">
              <i class="fal fa-warehouse"></i>
              <span class="nav-link-text" data-i18n="nav.statistics">Owners</span>
              <b class="collapse-sign"><em class="fal fa-angle-down"></em></b></a>
            <ul>
               
            <li class=" ">
                <Link to="/ownerlist" title="Chart.js" data-filter-tags="statistics chart graphs chart.js bar pie" class=" waves-effect waves-themed">
                  <span class="nav-link-text" data-i18n="nav.statistics_chart.js">Owner List</span>
                  <span class="dl-ref label bg-info-900 ml-2">{ownerList.length}</span>
                </Link>
              </li>
              <li>
                <Link to="/newowner" title="Chartist.js" data-filter-tags="statistics chart graphs chartist.js" class=" waves-effect waves-themed">
                  <span class="nav-link-text" data-i18n="nav.statistics_chartist.js"> New Owner</span>
                </Link>
              </li>
        
            </ul>
          </li>
         
          <li class="active ">
            <a href="#" title="Statistics" data-filter-tags="statistics chart graphs" aria-expanded="true" class=" waves-effect waves-themed">
              <i class="fal fa-cog"></i>
              <span class="nav-link-text" data-i18n="nav.statistics">Settings</span>
              <b class="collapse-sign"><em class="fal fa-angle-down"></em></b></a>
            <ul>
            <li class=" ">
                <Link to="/instoptionslist" title="Chart.js" data-filter-tags="statistics chart graphs chart.js bar pie" class=" waves-effect waves-themed">
                  <span class="nav-link-text" data-i18n="nav.statistics_chart.js">Instrument Types List</span>
                  <span class="dl-ref label bg-info-900 ml-2">{instOptionsList.length}</span>
                </Link>
              </li>
            <li>
                <Link to="/newinstoptions" title="Chartist.js" data-filter-tags="statistics chart graphs chartist.js" class=" waves-effect waves-themed">
                  <span class="nav-link-text" data-i18n="nav.statistics_chartist.js">New Instrument Type</span>
                </Link>
              </li>
              <li>
                <Link to="/test" title="C3 Charts" data-filter-tags="statistics chart graphs c3 charts" class=" waves-effect waves-themed">
                  <span class="nav-link-text" data-i18n="nav.statistics_c3_charts">My Account</span>
                </Link>
              </li>

            </ul>
          </li>
         
         
          <li>
            <Link onClick={clearCredentials} title="Flot" data-filter-tags="statistics chart graphs flot bar pie" class=" waves-effect waves-themed">
              <i class="fal fa-door-open"></i>
              <span class="nav-link-text" data-i18n="nav.statistics_flot">Logout</span>

            </Link>
          </li>
        </ul>
        <div class="filter-message js-filter-message bg-success-600"></div>
      </nav>
      <div class="nav-footer shadow-top">
        <a href="#" onclick="return false;" data-action="toggle" data-class="nav-function-minify" class="hidden-md-down">
          <i class="ni ni-chevron-right"></i>
          <i class="ni ni-chevron-right"></i>
        </a>
        <ul class="list-table m-auto nav-footer-buttons">
          <li>
            <a href="javascript:void(0);" data-toggle="tooltip" data-placement="top" title="" data-original-title="Chat logs">
              <i class="fal fa-comments"></i>
            </a>
          </li>
          <li>
            <a href="javascript:void(0);" data-toggle="tooltip" data-placement="top" title="" data-original-title="Support Chat">
              <i class="fal fa-life-ring"></i>
            </a>
          </li>
          <li>
            <a href="javascript:void(0);" data-toggle="tooltip" data-placement="top" title="" data-original-title="Make a call">
              <i class="fal fa-phone"></i>
            </a>
          </li>
        </ul>
      </div>
    </aside>
  );
}

export default Sidebar;