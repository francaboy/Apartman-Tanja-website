import mainSliderTwo from "@/data/mainSliderTwo";
import Link from "next/link";
import React, { useState } from "react";
import { Col, Container, Image, Row } from "react-bootstrap";
import Tilt from "react-tilt";
import VideoModal from "../VideoModal/VideoModal";

const { bg, socials, image, badge, videoId, name } = mainSliderTwo;

const MainSliderTwo = () => {
  const [isOpen, setOpen] = useState(false);

  const handleOpen = (e) => {
    e.preventDefault();
    setOpen(true);
  };

  return (
    <>
      <section className="main-slider-two">
        <div className="main-slider-two__wrapper">
          <div
            className="image-layer"
            style={{ backgroundImage: `url(${bg.src})` }}
          ></div>
          {Array.from(Array(10)).map((_, i) => (
            <div key={i} className={`main-slider-two-box-${i + 1}`}></div>
          ))}
          <div className="main-slider__social">
            {socials.map(({ title, href }, i) => (
              <a key={i} href={href}>
                {title}
              </a>
            ))}
          </div>
          <Container>
            <Row>
              <Col lg={7}>
                <div className="main-slider-two__content">
                  <h2 className="animated fadeInUp">
                    Apartman <br /> Tanja. <br />
                    Vaša Oaza <br /> Luksuza.
                  </h2>
                  <div className="main-slider-two__btn-video animated fadeInUp">
                    <div className="main-slider-two__btn">
                      <Link href="/o-nama">
                        <a className="thm-btn">Više o Nama</a>
                      </Link>
                    </div>
                  </div>
                  <div className="main-slider-two__img">
                    <Tilt options={{ scale: 1 }}>
                      <Image
                        src={image.src}
                        alt=""
                        className="animated fadeInRight"
                      />
                    </Tilt>
                  </div>
                </div>
              </Col>
            </Row>
          </Container>
        </div>
      </section>
      <VideoModal isOpen={isOpen} setOpen={setOpen} id={videoId} />
    </>
  );
};

export default MainSliderTwo;
