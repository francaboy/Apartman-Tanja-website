import Link from "next/link";
import React from "react";
import { Col, Container, Row } from "react-bootstrap";

const CTAOne = () => {
  return (
    <section className="cta-one">
      <Container>
        <Row>
          <Col xl={12}>
            <div className="cta-one__inner">
              <div className="cta-one__box-1"></div>
              <div className="cta-one__box-2"></div>
              <div className="cta-one__left">
                <div className="cta-one__icon">
                  <span className="icon-consulting"></span>
                </div>
                <div className="cta-one__title-box">
                  <h2 className="cta-one__title">
                    Pošaljite Nam Upit Za <br /> Slobodne Termine
                  </h2>
                </div>
              </div>
              <div className="cta-one__right">
                <Link href="/kontakt">
                  <a className="thm-btn cta-one__btn">Kontaktirajte Nas</a>
                </Link>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default CTAOne;
