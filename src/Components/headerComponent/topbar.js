import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Container, Row, Col } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope, faPhone } from '@fortawesome/free-solid-svg-icons'
import { faTwitterSquare, faFacebookSquare, faGooglePlusSquare } from "@fortawesome/free-brands-svg-icons"
import { FacebookShareButton, TwitterShareButton, } from 'react-share';


class Topbar extends Component {
    render() {
        return ( <
            div className = "top_bar" >
            <
            Container >
            <
            Row >
            <
            Col md = {
                { span: 7, offset: 4 } } >
            <
            div className = "wrap_topbar" >
            <
            div className = "reach_us" > { /* <Mailto email="support@domain.com" obfuscate={true}><FontAwesomeIcon icon={faEnvelope} /> support@domain.com</Mailto> */ } <
            a href = "mailto:support@domain.com" > < FontAwesomeIcon icon = { faEnvelope }
            /> support@domain.com</a >
            <
            a href = "tel:123-456-7899" > < FontAwesomeIcon icon = { faPhone }
            /> 1234567899</a >
            <
            /div> <
            div className = "social_ic" >
            <
            a href = "#" > < FontAwesomeIcon icon = { faTwitterSquare }
            /></a >
            <
            a href = "#" > < FontAwesomeIcon icon = { faGooglePlusSquare }
            /> </a >
            <
            a href = "#" > < FontAwesomeIcon icon = { faFacebookSquare }
            /> </a >
            <
            /div> <
            /div> <
            /Col> <
            /Row> <
            /Container> <
            /div>
        )

    }
}

export default Topbar;