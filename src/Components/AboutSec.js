import React, { Component } from "react";
import { Container, Row, Col } from 'react-bootstrap';


class AboutSec extends Component {
    render() {
        return (

            <section className="about_sec">
                <Container>
                    <Row>
                        <Col md={{span: 5}}>
                            <div className="about_content">
                                <h1>About us</h1>
                                <p>Proin condimentum fermentum nunc. Etiam erat sed f erm entum feugiat velit mauris egestas quam ut aliquam Proin condimentum fermentum nunc. Etiam erat sed fermentum feugiat velit mauris egestas quam ut aliquam.</p>
                                <p>Proin condimentum fermentum nunc. Etiam erat sed f erm entum feugiat velit mauris egestas quam ut aliquam Proin condimentum fermentum nunc. Etiam erat sed fermentum feugiat velit mauris egestas quam ut aliquam.Proin ondimentum fermentum nunc. Etiam erat sed f erm entum feugiat velit mauris egestas quam ut aliquam Proin condi.</p>
                                <a href="#" className="btn btn_default">Contact us</a>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </section>

        )
    }
}

export default AboutSec