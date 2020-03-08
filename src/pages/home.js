import React, { Component } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import {Link} from 'react-router-dom';
import bannerImage from '../images/banner_img.png';
import Hero from '../Components/Hero';
import Banner from '../Components/Banner';
import Pillar from '../Components/Pilars';
import AboutSecs from '../Components/AboutSec';
import Package from '../Components/Packages/Packages';



class Homepage extends Component {
    render() {

        return (

            <div>
                <Hero hero="banner_sec">
                    <Container>
                        <Row className="align-items-center">
                            <Col md={{span:6}}>
                                <Banner childrenTwo="Welcome To" title="Quran's Master Academy" subtitle="Proin gravida nibh vel velit auctor aliquet. Aenean sollicitudin. This is Phoshop's version of Lorem Ipsum.">
                                    <Link to="/about" className="btn btn_default">About Us</Link>
                                </Banner>
                            </Col>
                            <Col md={{span:6}}>
                                <div className="banner_img">
                                    <img src={bannerImage} />
                                </div>
                            </Col>
                        </Row>
                    </Container>
                </Hero>
                <Pillar />
                <AboutSecs />
                <Package />

            </div>

        )

    }
}

export default Homepage;