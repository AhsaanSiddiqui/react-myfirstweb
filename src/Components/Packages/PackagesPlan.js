import React from 'react';
import { Row, Col } from 'react-bootstrap'

/**
* @author
* @function PackagePlan
**/

const PackagePlan = (props) => {
  return(
    <div className="packagePlan">
        <Row>
            <Col md={{span: 6}}>
                <div className="pkg_box">
                    <div className="head_pkg">
                      <h4>Bronze Plan</h4>
                    </div>
                    <div className="pkg_box_content">
                      <h4>$32</h4>
                      <img src={require('../../images/user_pkg.png')} className="img-fluid" />
                      <p>Silides Framework will help you to web presentation,</p>
                      <a href="#" className="pkg_btn">Subscribe</a>
                    </div>
                </div>
            </Col>
            <Col md={{span: 6}}>
                <div className="pkg_box">
                    <div className="head_pkg">
                      <h4>Bronze Plan</h4>
                    </div>
                    <div className="pkg_box_content">
                      <h4>$32</h4>
                      <img src={require('../../images/user_pkg.png')} className="img-fluid" />
                      <img src={require('../../images/user_pkg.png')} className="img-fluid" />
                      <p>Silides Framework will help you to web presentation,</p>
                      <a href="#" className="btn_default">Subscribe</a>
                    </div>
                </div>
            </Col>
        </Row>
    </div>
   )

 }

export default PackagePlan;