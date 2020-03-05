import React, { Component } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import salat_img from '../images/salat_img.png';
import kalma_img from '../images/kalma_img.png';
import zakat_img from '../images/zakat_img.png';
import fasting_img from '../images/fasting_img.png';
import hajj_img from '../images/hajj_img.png';
import pillar_img from '../images/about_img.png';
import masjid_img from '../images/masjid_img.png';


class Pillar extends Component {
    render () {
        return (

            <section className="pillar_sec">
                <Container>
                    <div className="regular_heading">
                        <h5>In The Name Of Allah The Beneficent The Merciful</h5>
                        <h1>Pillars of Islam</h1>
                    </div>
                    <Row className="justify-content-center">
                        <Col md={{span:10}}>
                            <div className="pillar_inner">
                                <div className="div_pos">
                                    <Row>
                                        <Col md={{span:5}}>
                                            <div className="left_pos">
                                                <div className="salat_div pos">
                                                    <img src={salat_img} className="img-fluid" />
                                                    <h5>Salat</h5>
                                                </div>
                                                <div className="kalma_div pos">
                                                    <img src={kalma_img} className="img-fluid" />
                                                    <h5>Kalma</h5>
                                                </div>
                                            </div>
                                        </Col>
                                        <Col md={{span:2}}>
                                            <div className="center_pos">
                                                <div className="zakat_div pos">
                                                    <img src={zakat_img} className="img-fluid" />
                                                    <h5>Zakat</h5>
                                                </div>
                                            </div>
                                        </Col>
                                        <Col md={{span:5}}>
                                            <div className="right_pos">
                                                <div className="fastin_div pos">
                                                    <img src={fasting_img} className="img-fluid" />
                                                    <h5>Fasting</h5>
                                                </div>
                                                <div className="hajj_div pos">
                                                    <img src={hajj_img} className="img-fluid" />
                                                    <h5>Hajj</h5>
                                                </div>
                                            </div>
                                        </Col>
                                    </Row>
                                </div>
                                <img src={pillar_img} className="img-fluid" />
                                <Row className="justify-content-center">
                                    <Col md={{span: 6}}>
                                        <div className="text_about">
                                            <img src={masjid_img} className="img-fluid" />
                                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Hic voluptatum, atque maiores doloribus vero doloremque.</p>
                                        </div>
                                    </Col>
                                </Row>
                            </div>
                        </Col>
                    </Row>
                </Container>
                </section>

        )
    }
}

export default Pillar