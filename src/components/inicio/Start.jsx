import Container from 'react-bootstrap/Container';
import React from 'react';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import barcoImage from '../../../public/img/barco.png';
import envioImage from '../../../public/img/envio.png';
import carteroImage from '../../../public/img/cartero.png';
import monedasImage from '../../../public/img/monedas.png';
import reunionImage from '../../../public/img/reunion.png';
import globallyImage from '../../../public/img/globally.png';
import './start.css'

function Start  () {
    return (
      <Container fluid>
        
        <Row>
          <Col md={6} className="d-flex flex-column justify-content-center text-start ">
            <h1 className="text-primary">Experts in Charting Global Routes</h1>
            <h5 className="">
              We bring merchandise from all over the world and we specialize in
              SMEs. We do it in a simple way so that you make the least effort
              and have it in your hands quickly.
            </h5>
            <br />
            <p className="fw-light text-start">
              We take it to every corner of the country
            </p>
            <div className="d-flex flex-start">
              <Button as="input" type="button" value="Contact" />
            </div>
          </Col>
          <Col md={6} className="d-flex justify-content-center align-items-center">
            <img
              src={barcoImage}
              alt="Imagen del barco"
              className="img-fluid"
            />
          </Col>
        </Row>
       
        <Row className="d-flex flex-column justify-content-center text-center mb-5">
          <Col md={12} className="">
            <h1 className="text-center text-primary">¿How do we work?</h1>
            <h5 className="text-center w-50 mx-auto">
              Send us a link or tell us what product you want to bring by
              WhatsApp or email. We will give you a quote, you buy it and we
              will send it to our warehouses in Miami or China, then we will
              take it to your home.
              <br /> <br />
              It’s that simple! What are you waiting for to work with us and
              have your products ready to sell quickly and safely?
            </h5>
          </Col>
          <Col
            md={12}
            className="d-flex justify-content-between align-items-center gap-3"
          >
            <img
              src={envioImage}
              alt="Imagen de envío"
              className="img-fluid"
            />
            <img
              src={carteroImage}
              alt="Imagen del cartero"
              className="img-fluid"
            />
            <img
              src={monedasImage}
              alt="Imagen de las monedas"
              className="img-fluid"
            />
          </Col>
        </Row>
        <Row className="mb-5">
            <Col md={6} className="d-flex justify-content-center align-items-center">
            <img
              src={reunionImage}
              alt="Imagen de la reunión"
              className="img-fluid"/>
            </Col>
          <Col md={6} className="d-flex flex-column justify-content-center text-start">
            <h1 className="text-center text-primary">¿Who are we?</h1>
            <h5 className="">
            The Importer is a company founded in 2009 for the personalized import of products, either for personal consumption or to meet the needs of different types of companies. <br /><br />
            Generating value for our clients is the objective of our company. We have a young and dynamic structure , within a professional vision that allows us to apply our knowledge to the most diverse projects. <br /><br />
            The experience we have gained drives us to constant growth, supported by the endorsement of all our clients.
            </h5>
            <div className="d-flex justify-content-center ">
              <Button as="input" type="button" class="btn btn-outline-primary w-25" value="See more" />
            </div>
          </Col>
        </Row>
        <Row className="mt-5">
          <Col md={6} className="d-flex flex-column justify-content-center ">
            <h1 className="text-center text-primary">Globally Connected</h1>
            <h5 className="">
              We bring merchandise from all over the world and we specialize in
              SMEs. We do it in a simple way so that you make the least effort
              and have it in your hands quickly. <br />
            </h5>
            <br />
            <div className="d-flex justify-content-center">
              <Button as="input" type="button" value="Contact" />
            </div>
          </Col>
          <Col md={6} className="d-flex justify-content-center align-items-center">
            <img
              src={globallyImage}
              alt="Imagen conecciób global"
              className="img-fluid"
            />
          </Col>

          
        </Row>
      </Container>
    );
}

export default Start;

