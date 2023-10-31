import React, {useState} from 'react';
import './HomeHeader.css';
import { Link, useNavigate } from 'react-router-dom';
import SearchIcon from '@material-ui/icons/Search';
import {Avatar} from '@material-ui/core';
import GroupAddIcon from '@material-ui/icons/GroupAdd';
import Telegram from '@material-ui/icons/Telegram';
import NotificationsIcon from '@material-ui/icons/Notifications';
import AssignmentIndIcon from '@material-ui/icons/AssignmentInd';
import ArrowDropDownIcon from '@material-ui/icons/ArrowDropDown';
import { auth } from '../../firebase-config';

export const HomeHeader = ({ user }) => {

    const navigate = useNavigate('');

    // This is used for User Authentication, if user is not logged in, then redirect it to login page.
    if(user === false) {
        navigate("/login");
    }

    const logout = (e) => {
        e.preventDefault();
        // User Logout
        auth.signOut();
        navigate("/login");
    };

  return (
    <div className="homeHeader">
        <div className="homeHeader__left">
            <Link to="/" style={{textDecoration: "none"}}>
            <div className="facebooktext">
                facebook
            </div>
            </Link>
        </div>

        <div className="homeHeader__inputSearch">
            <input type="text" placeholder='Search' />
            <SearchIcon className="homeHeader__inputButton" />
        </div>
        <div className="homeHeader__icons">
            <section>
                <Avatar className='homeHeader_avatar' alt="" src='' />
                <h3 className="homeHeader__name">{user?.displayName}</h3>
            </section>

            <h3 className="homeHeader__dash">|</h3>
            <section>
                <h3 className="homeHeader__name">Home</h3>
            </section>

            <h3 className="homeHeader__dash">|</h3>
            
            <section>
                <h3 className="homeHeader__name">Find Friends</h3>
            </section>

            <h3 className="homeHeader__dash">|</h3>
            <section>
                <h3 className="homeHeader__name">Create</h3>
            </section>

            <h3 className="homeHeader__dash">|</h3>
            <section>
                <GroupAddIcon />
            </section>

            <h3 className="homeHeader__dash">|</h3>
            <section>
                <Telegram />
            </section>

            <h3 className="homeHeader__dash">|</h3>
            <section>
                <NotificationsIcon />
            </section>

            <h3 className="homeHeader__dash">|</h3>

            <section>
                <AssignmentIndIcon />
            </section>

            <h3 className="homeHeader__dash">|</h3>

            <section>
                <div className="dropdown">
                    < ArrowDropDownIcon className="dropdown" />
                    <div className="dropdown-content">
                        <a onClick={logout}><p>Logout</p></a>
                    </div>
                </div>
            </section>

            <h3 className="homeHeader__dash">|</h3>



        </div>
    </div>
  )
}
