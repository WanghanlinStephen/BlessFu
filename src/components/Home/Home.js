
import 'bootstrap/dist/css/bootstrap.min.css';
import React, { useState, useEffect } from 'react';
import { Container, Carousel, Row, Col } from 'react-bootstrap';
import './Home.css'
import CustomFooter from '../Footer/CustomFooter';

const Home = () => {
  //heading 部分的图片
  const imageCount = 3;
  const images = [];

  for (let i = 1; i <= imageCount; i++) {
    images.push({
      src: `https://blessfuweb.s3.ca-central-1.amazonaws.com/images/home/image${i}.jpg`,
      alt: `Image ${i}`
    });
  }

  //往期精彩活动图片
  const activityImageCount = 9;
  const activityImages = [];

  for (let i = 1; i <= activityImageCount; i++) {
    activityImages.push({
      src: `https://blessfuweb.s3.ca-central-1.amazonaws.com/images/home/activityImage${i}.jpeg`,
      alt: `Image ${i}`
    });
  }




  // 获取当前日期
  const currentDate = new Date();
  const currentMonth = currentDate.getMonth() + 1; // 月份是从0开始的，所以加1
  const currentDay = currentDate.getDate();

  const [activeIndex, setActiveIndex] = useState(currentDay - 1);
  const [monthImages, setMonthImages] = useState([]);

  const handleSelect = (selectedIndex, e) => {
    setActiveIndex(selectedIndex);
  };

  useEffect(() => {
    const loadImagesForMonth = () => {
      const images = [];
      const daysInMonth = new Date(currentDate.getFullYear(), currentMonth, 0).getDate(); // 获取当前月的天数
      for (let i = 1; i <= daysInMonth; i++) {
        images.push({
          src: `https://blessfuweb.s3.ca-central-1.amazonaws.com/images/365/${currentMonth}/${i}.png`,
          alt: `Day ${i} of Month ${currentMonth}`
        });
      }
      setMonthImages(images);
    };

    loadImagesForMonth();
  }, [currentMonth]);


  return (
    <div>
      <div className="carousel-container">
        {/* 头部图片介绍 */}
        <Carousel >
          {images.map((image, index) => (
            <Carousel.Item key={index}>
              <img
                className="d-block w-100 hover-effect "
                src={image.src}
                alt={image.alt}
              />
            </Carousel.Item>
          ))}
        </Carousel>
      </div>


      {/* 佛庙简介 ， 风格为 好看的方式进行展示*/}
      <Container className="my-5">
        <h2 className="text-center mb-4">福增佛堂</h2>
        <div className="text-section">
          <p className="chinese">
            希望向全世界传播佛教和宏扬佛法；福增佛学会专注于传扬和推广藏传佛法的教义。学生们在上师阿旺格西的指导下学习和修行，跟随着大乘菩萨的道路，帮助忧虑、悲伤、痛苦的众生，逐渐地从利他主义的过程中获益，以及得到非凡的快乐。
          </p>
          <p className="english">
            In hopes to propagate Buddhism and spread Dharma all over the world; DBMS focuses on transmitting and promoting the doctrine of Tibetan Dharma. Students come to study and practice under the Guru's direction and to follow Mahayana Bodhisattva's path and help worried, sorrowful, painful, and vexatious sentient beings, and gradually one can receive benefit from the process of altruism along with the extraordinary joys.
          </p>
        </div>
      </Container>


      {/* 佛庙 藏传佛教 + 格鲁派 + 主持 */}
      <Container className="scale-container">
        <Row className="justify-content-center">
          <Col md={6} className="mb-3">
            <img
              className="d-block w-100 hover-effect "
              src={`https://blessfuweb.s3.ca-central-1.amazonaws.com/images/home/image4.jpg`}
              alt="Image 4"
            />
          </Col>
          <Col md={6} className="mb-3">
            <img
              className="d-block w-100 hover-effect "
              src={`https://blessfuweb.s3.ca-central-1.amazonaws.com/images/home/image5.jpg`}
              alt="Image 5"
            />
          </Col>
        </Row>
        <Row className="justify-content-center">
          <Col md={12}>
            <img
              className="d-block w-100 hover-effect "
              src={`https://blessfuweb.s3.ca-central-1.amazonaws.com/images/home/image6.jpg`}
              alt="Image 6"
            />
          </Col>
        </Row>
      </Container>

      {/* 365福语 */}
      <div className="custom-carousel-size">
        <Container>
          <h3 className="text-center my-4">365福语</h3>
          <Carousel activeIndex={activeIndex} interval={null} controls={true} indicators={true} onSelect={handleSelect}>
            {monthImages.map((image, index) => (
              <Carousel.Item key={index}>
                <img
                  className="d-block w-100"
                  src={image.src}
                  alt={image.alt}
                />
              </Carousel.Item>
            ))}
          </Carousel>
        </Container>
      </div>

      <div className="carousel-container">
        <Container>
          <h3 className="text-center my-4">往期精彩活动图片</h3>
          <Carousel >
            {activityImages.map((image, index) => (
              <Carousel.Item key={index}>
                <img
                  className="d-block w-100 hover-effect "
                  src={image.src}
                  alt={image.alt}
                />
              </Carousel.Item>
            ))}
          </Carousel>
        </Container>
      </div>

      <CustomFooter />
    </div >

  );
};

export default Home;
