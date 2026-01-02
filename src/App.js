import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Row, Col, Card } from 'react-bootstrap';
import Name from './components/Name';
import Price from './components/Price';
import Description from './components/Description';
import Image from './components/Image';
import './App.css';

// Fournissez votre prénom ici (laisser vide pour tester "Bonjour, là !")
const prenom = 'Cheikh';
const avatar = 'img10.jpg';

export default function App() {
  return (
    <div className="app-root">
      <Container className="py-5">
        <Row className="justify-content-center">
          <Col md={6} lg={5}>
            <Card className="product-card shadow-lg">
              <Card.Body>
                <Image />
                <Name />
                <Price />
                <Description />
              </Card.Body>
            </Card>
            <div className="greeting mt-3 text-center">
              <p className="mb-1">Bonjour, {prenom ? prenom : 'là'} !</p>
              {prenom && <img src={avatar} alt="avatar" className="avatar" />}
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
} 