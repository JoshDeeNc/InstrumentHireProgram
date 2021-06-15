import React from 'react';
import StudentList from '../StudentList';
import { BrowserRouter, Link, Route, Switch, Redirect } from 'react-router-dom';
function Sidebar({ clearCredentials, toDos, instInventory, studentList, schoolList, ownerList, instOptionsList }) {
  return (
    <aside class="page-sidebar">
      <div class="page-logo">
        <a href="#" class="page-logo-link press-scale-down d-flex align-items-center position-relative" data-toggle="modal" data-target="#modal-shortcut">
          <img src="dist/img/omalogo.png" alt=" " aria-roledescription="logo" />
          <span class="page-logo-text mr-1"><span> MUSIC</span>  EMPORIUM </span>
          <span class="position-absolute text-white opacity-50 small pos-top pos-right mr-2 mt-n2"></span>
          <i class="fal fa-angle-down d-inline-block ml-1 fs-lg color-primary-300"></i>
        </a>
      </div>
      <nav id="js-primary-nav" class="primary-nav js-list-filter" role="navigation">
       
        <div class="info-card">
          <img src="dist/img/demo/avatars/avatar-admin.png" class="profile-image rounded-circle" alt="Lucinda Jackson" />
          <div class="info-card-text">
            <a href="#" class="d-flex align-items-center text-white">
              <span class="text-truncate text-truncate-sm d-inline-block">Michell Zendovik<br /> <small class="fc-900">ADMINISTRATOR</small></span>
            </a>
            
          </div>
          <img src="dist/img/menubg.jpeg" class="cover" alt="cover" />
          
        </div>

        <div class="accordion accordion-hover" id="js_demo_accordion-5">
          <div class="card">
            <div class="card-header-nl">
              <a href="javascript:void(0);" class="card-title" data-toggle="collapse" data-target="#js_demo_accordion-5a" aria-expanded="true">

                <Link to="/" title="Flot" data-filter-tags="statistics chart graphs flot bar pie" class=" waves-effect waves-themed">

                  <span class="nav-link-text" data-i18n="nav.statistics_flot"><i class="fal fa-home width-2 fs-xl"></i>Home</span>
                </Link>

              </a>
            </div>

          </div>

          <div class="card">
            <div class="card-header">
              <a href="javascript:void(0);" class="card-title collapsed" data-toggle="collapse" data-target="#left-nav1" aria-expanded="false">
                <i class="fal fa-guitars width-2 fs-xl"></i>Hires
                 <span class="dl-ref label bg-info-900 ml-auto ">{toDos.filter(item => item.returned === "").length}</span>

                <span class="ml-3">
                  <span class="collapsed-reveal">
                    <i class="fal fa-chevron-up fs-xl"></i>
                  </span>
                  <span class="collapsed-hidden">
                    <i class="fal fa-chevron-down fs-xl"></i>
                  </span>
                </span>
              </a>
            </div>
            <div id="left-nav1" class="collapse" data-parent="#js_demo_accordion-5">
              <div class="card-body">
                <ul>
                  <li>
                    <Link to="/newhire" title="Chartist.js" data-filter-tags="statistics chart graphs chartist.js" class=" waves-effect waves-themed">
                      <span class="nav-link-text" data-i18n="nav.statistics_chartist.js"> New Hire</span>
                    </Link>
                  </li>


                </ul>

              </div>
            </div>
          </div>
          <div class="card">
            <div class="card-header">
              <a href="javascript:void(0);" class="card-title collapsed" data-toggle="collapse" data-target="#left-nav2" aria-expanded="false">
                <i class="fal fa-users width-2 fs-xl"></i>
                                                            Students
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
            <div id="left-nav2" class="collapse" data-parent="#js_demo_accordion-5">
              <div class="card-body">
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
              </div>
            </div>
          </div>
          <div class="card">
            <div class="card-header">
              <a href="javascript:void(0);" class="card-title collapsed" data-toggle="collapse" data-target="#left-nav3" aria-expanded="false">
                <i class="fal fa-guitars width-2 fs-xl"></i>
                                                            Instruments
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
            <div id="left-nav3" class="collapse" data-parent="#js_demo_accordion-5">
              <div class="card-body">
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
              </div>
            </div>
          </div> 

          <div class="card">
            <div class="card-header-nl">
              <a href="javascript:void(0);" class="card-title" data-toggle="collapse" data-target="#js_demo_accordion-5a" aria-expanded="true">


                <Link onClick={clearCredentials} title="Flot" data-filter-tags="statistics chart graphs flot bar pie" class=" waves-effect waves-themed">
                  <span class="nav-link-text" data-i18n="nav.statistics_flot"> <i class="fal fa-door-open width-2 fs-xl"></i>Logout</span>
                </Link>

              </a>
            </div>

          </div>



        </div>



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