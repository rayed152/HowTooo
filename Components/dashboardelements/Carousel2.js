import Image from "next/image";
import React from "react";
import Carousel from "react-bootstrap/Carousel";

function Carousel2() {
  return (
    <div>
      <Carousel fade>
        <Carousel.Item>
          <Image src="/carousel/python.png" width={2000} height={100} />
          <Carousel.Caption>
            {/* <h3>First slide label</h3>
            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p> */}
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <Image src="/carousel/HTMLCSS.png" width={2000} height={100} />
          <Carousel.Caption>
            {/* <h3>Second slide label</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p> */}
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <Image src="/carousel/Accounting.png" width={2000} height={100} />
          <Carousel.Caption>
            {/* <h3>Third slide label</h3>
            <p>
              Praesent commodo cursus magna, vel scelerisque nisl consectetur.
            </p> */}
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </div>
  );
}

export default Carousel2;
