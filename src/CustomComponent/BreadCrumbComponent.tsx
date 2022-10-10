import React from 'react';
import { Breadcrumbs, Link, Typography } from '@mui/material';
import '../Component/HeaderComponent/Header.scss';
import { AiOutlineUser, AiOutlineHome } from 'react-icons/ai';
import { BiLeftArrowAlt } from 'react-icons/bi';
import '../Layout/MainLayout.scss';
import 'antd/dist/antd.css';
import { userContext } from '../Context/userContext';
import { UserContextType } from '../TypeFile/TypeScriptType';

const BreadCrumbComponent: React.FC<{ pathname: string }> = ({ pathname }) => {
  const breadCrumbsPath = () => {
    switch (pathname) {
      case '/dashboard/maindashboard': {
        return {
          path: 'Dashboard',
          route: ['dashboard']
        };
      }
      case '/dashboard/appointment': {
        return {
          path: 'Book Appointment',
          route: ['appointment']
        };
      }
      case '/dashboard/taskboard': {
        return {
          path: 'Taskboard',
          route: ['taskboard']
        };
      }
      case '/dashboard/AllDoctor': {
        return {
          path: 'All Doctor',
          route: ['Doctors', 'AllDoctor']
        };
      }
      case '/dashboard/AllPatients': {
        return {
          path: 'All Patients',
          route: ['All Patients', 'Patients']
        };
      }
      case '/dashboard/viewPatients': {
        return {
          path: 'View Patients',
          route: ['View Patients', 'Patients']
        };
      }
      case '/dashboard/ViewDoctor': {
        return {
          path: 'View Doctor',
          route: ['View Doctor', 'Doctor']
        };
      }
      default:
        return {
          path: '',
          route: ['', '']
        };
    }
  };
  const bread = breadCrumbsPath();

  const { MobileDrawer, hideSidebar } = React.useContext(userContext) as UserContextType;
  const handleSideBar = () => {
    MobileDrawer(!hideSidebar);
  };
  return (
    <div className="container-fluid">
      <div className="row">
        <div className="col-sm-12 col-md-6 col-lg-6 col-xl-6">
          <div className="d-flex align-items-center gap-2">
            <div className="breadcrumb-icon">
              <BiLeftArrowAlt onClick={handleSideBar} />
            </div>
            <div className="breadcrumb-name">{bread.path}</div>
          </div>
          <div className="d-flex flex-column">
            <div>
              <Breadcrumbs aria-label="breadcrumb">
                <Link href="/dashboard/maindashboard">
                  <AiOutlineHome className="bread-icon" />
                </Link>
                {bread?.route?.map((val: string, index: number) => {
                  return (
                    <div key={index}>
                      <Typography className="bread-name">{val}</Typography>
                    </div>
                  );
                })}
              </Breadcrumbs>
            </div>
          </div>
        </div>
        <div className="col-sm-12 col-md-6 col-lg-6 col-xl-6 hidden--mobile">
          <div className="d-flex justify-content-end gap-4">
            <div>
              <span className="chartBar">VISITORS</span>
              <div className="d-flex align-items-center gap-1">
                <span>
                  <AiOutlineUser className="chartBar-bar-icon" />
                </span>
                <span className="chartBar-bar-text">1,784</span>
              </div>
            </div>
            <div>
              <span className="chartBar">VISITS</span>
              <div className="d-flex align-items-center gap-1">
                <span>
                  <AiOutlineUser className="chartBar-bar-icon" />
                </span>
                <span className="chartBar-bar-text">1,784</span>
              </div>
            </div>
            <div>
              <span className="chartBar">CHATS</span>
              <div className="d-flex align-items-center gap-1">
                <span>
                  <AiOutlineUser className="chartBar-bar-icon" />
                </span>
                <span className="chartBar-bar-text">1,784</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BreadCrumbComponent;
