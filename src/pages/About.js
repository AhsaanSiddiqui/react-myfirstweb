import React from 'react'
import { Container, Row, Col } from 'react-bootstrap';
import {Link} from 'react-router-dom'
import Hero from '../Components/Hero'
import Banner from '../Components/Banner'

export default function About() {
    return (
        <Hero hero="banner_sec innerpage_sec">
            <Container>
                <Row className="align-items-center">
                    <Col md={{span:6}}>
                        <Banner title="About Us">
                            <Link to="/" className="btn btn_default">Return Home</Link>
                        </Banner>
                    </Col>
                    
                </Row>
            </Container>
        </Hero>
    )
}
