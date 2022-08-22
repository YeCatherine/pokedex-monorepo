import React, { useState } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { Col, Container, Row } from 'react-bootstrap';
import { MyGlobalContext } from '../../../services/Context';
import Header from '../Header/Header';
import RightSidebar from '../RightSidebar/RightSidebar';
import Footer from '../Footer/Footer';

/**
 * Main Layout component.
 *
 * @param children
 *
 * @constructor
 */
const Layout: React.FC<{ className: string }> = ({ className, children }) => {
  const [language, setLanguage] = useState<string>('en');

  return (
    <Container className={className}>
      <MyGlobalContext.Provider
        value={{ language, setLanguage }}>
        <Router basename={'/pokedex'}>
          <Row>
            <Header/>
          </Row>
          <Row>
            <Col md={{ span: 10, order: 0 }}
                 xs={{ span: 12, order: 1 }}>
              <main>{children}</main>
            </Col>
            <Col md={{ span: 2, order: 1 }} xs={{ span: 12, order: 0 }}>
              <RightSidebar/>
            </Col>
          </Row>
          <Row>
            <Footer/>
          </Row>
        </Router>
      </MyGlobalContext.Provider>
    </Container>
  );
};

export default Layout;
