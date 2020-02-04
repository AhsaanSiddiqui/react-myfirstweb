import React, { Component } from 'react';
import Topbar from './topbar';
import NavBar from './Nabar';

// import {Mailto} from 'react-mailto';

class Header extends Component {
    render() {

        return (

            <header>
                <Topbar /> 
                <NavBar />
            </header>

        )

    }
}

export default Header;