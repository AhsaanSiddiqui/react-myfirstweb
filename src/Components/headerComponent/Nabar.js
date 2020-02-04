import React, { Component } from 'react';
import { Container, Row, Col, NavItem } from 'react-bootstrap';
import logo from '../../images/logo.png'
import cart_ic from '../../images/cart_ic.png'
import { FaAlignRight } from 'react-icons/fa'
import {Link} from 'react-router-dom'



class NavBar extends Component {
    state = {
        isOpen:false
    }
    handleToggle = () => {
        this.setState({isOpen:!this.state.isOpen})
    }
    render() {
        return ( 
            
            <Container>
                    <nav className="navbar">
                        <Row>
                            <Col md={{span:2}}>
                                <div className = "logo_div" >
                                    <Link to="/" className="navbar-brand">
                                        <img src = { logo } alt="Logo" />
                                    </Link> 
                                    <button type="button" className="nav-btn" onClick={this.handleToggle}>
                                        <FaAlignRight className="nav-icon" />
                                    </button>
                                </div> 
                            </Col> 
                            <Col md={{span:8, offset:1}}>
                                <div className="d-flex align-items-center">
                                    <ul className={this.state.isOpen ? "navbar-nav show-nav" : "navbar-nav"} >
                                        <li>
                                            <Link to="/">Home</Link>
                                        </li>
                                        <li> 
                                            <Link to="/about">About Us</Link>
                                        </li>
                                        <li> 
                                            <Link to="/company">Company Profile</Link>
                                        </li>
                                        <li> 
                                            <Link to="/blog">Blogs</Link>
                                        </li>
                                        <li> 
                                            <Link to="/contact">Contact Us</Link>
                                        </li>
                                    </ul>
                                    <div className="cart_div">
                                        <Link to="">
                                            <img src={cart_ic} className="img-fluid" /> <span>0.00 items</span>
                                        </Link>
                                    </div>
                                </div>
                            </Col>
                        </Row> 
                    </nav> 
                </Container> 
            
        )

    }
}

export default NavBar;