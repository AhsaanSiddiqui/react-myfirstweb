import React from 'react'
import { Container, Row, Col } from 'react-bootstrap';
import Carousel from 'nuka-carousel';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faLongArrowAltLeft, faLongArrowAltRight, faPlayCircle } from '@fortawesome/free-solid-svg-icons';
// import { fal } from '@fortawesome/free-brands-svg-icons';



/**
* @author
* @function LatestBayan
**/

const LatestBayan = (props) => {
    
  return(
    <section className="latest_bayan">
        <Container>
            <Row className="justify-content-center">
                <Col md={{span:6}}>
                    <h1>Latest Bayan</h1>

                    <Carousel className="latest-carousel"
                        autoplay
                        renderCenterLeftControls={({ previousSlide }) => (
                            <button className="angleSlider left-arrow" onClick={previousSlide}>
                                < FontAwesomeIcon icon= { faLongArrowAltLeft } />
                            </button>
                        )}
                        renderCenterRightControls={({ nextSlide }) => (
                            <button className="angleSlider right-arrow" onClick={nextSlide}>
                                < FontAwesomeIcon icon= { faLongArrowAltRight } />
                            </button>
                        )}
                    >
                    

                        <div className="item">
                            <a href="#">< FontAwesomeIcon className="icon" icon= {faPlayCircle} /></a>
                            <p>The Possibility of Perfection By Mufti Taqi Usmani 1</p>
                            
                        </div>
                        <div className="item">
                            <a href="#">< FontAwesomeIcon className="icon" icon= {faPlayCircle} /></a>
                            <p>The Possibility of Perfection By Mufti Taqi Usmani 2</p>
                        </div>
                        <div className="item">
                            <a href="#">< FontAwesomeIcon className="icon" icon= {faPlayCircle} /></a>
                            <p>The Possibility of Perfection By Mufti Taqi Usmani 3</p>
                        </div>
                    </Carousel>

                </Col>
                
            </Row>
        </Container>
    </section>
   )

 }

export default LatestBayan