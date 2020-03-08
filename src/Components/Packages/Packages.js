import React from 'react'
import { Container, Row, Col } from 'react-bootstrap';
import PackagePlan from '../Packages/PackagesPlan'

/**
* @author
* @function Package
**/

const Package = (props) => {
  return(
    <section class="package_sec">
        <Container>
            <Row>
                <Col md={{span:5}}>
                    <div className="pkg_div">
                        <img src={require ('../../images/pkg_inner.png')} class="img-fluid" />
                    </div>
                </Col>
                <Col md={{span:7}}>
                    <div className="package_content">
                        <div className="content_div">
                            <h1>Our Packages</h1>
                            <p>Proin condimentum fermentum nunc. Etiam erat sed f erm entum feugiat velit mauris egestas quam ut aliquam Proin condimentum fermentum nunc. Etiam erat sed fermen  tum feugiat velit mauris egestas quam ut aliquam.</p>
                        </div>
                        <PackagePlan />
                    </div>
                </Col>
            </Row>
        </Container>
    </section>
   )

 }

export default Package;