import React from 'react';
import { Container, Row, Col, Carousel } from 'react-bootstrap';
import './Donate.css';
import CustomFooter from '../Footer/CustomFooter';

const Donate = () => {
  const imageCount = 16;
  const images = [];

  for (let i = 1; i <= imageCount; i++) {
    images.push({
      src: `https://blessfuweb.s3.ca-central-1.amazonaws.com/images/donate/item${i}.jpg`,
      alt: `Image ${i}`
    });
  }

  return (
    <div>
      <Container>
        <h3 className="text-center my-4">发心365功德池</h3>
        <img
          src={`https://blessfuweb.s3.ca-central-1.amazonaws.com/images/donate/merit_pool.jpg`}
          alt="Merit Pool"
          className="merit-pool-image mb-1 hover-effect"
        />

        <div className="text-section">
          <p className="chinese">
            福增佛学会每天1块钱，首先供养佛法僧三宝，其次消除每天生活中遇到的困难及无法避免产生的逆缘，比如浪费粮食等。以年度为单位$365，作为慈善机构，福增佛学会将开具退税证明。
            <br />

          </p>
          <p className="english">
            As a charity, DBMS collects $1 a day, primarily to support the Triple Gem—Buddha, Dharma, Sangha—and secondarily to alleviate daily difficulties and inevitable adversities, such as wasting food.Annually, $365 will be collected, and as a charitable organization, DBMS will provide tax deduction receipts.
          </p>
        </div>

        <h3 className="text-center my-4">供灯礼佛</h3>
        <Row>
          <Col md={12}>
            <img
              src={`https://blessfuweb.s3.ca-central-1.amazonaws.com/images/donate/lamp_price.jpg`}
              alt="Lamp Price"
              className="merit-pool-image mb-1 hover-effect"
            />
          </Col>
          <Col md={12}>
            <img
              src={`https://blessfuweb.s3.ca-central-1.amazonaws.com/images/donate/lamp_activity.jpg`}
              alt="Lamp Activity"
              className="merit-pool-image mb-1 hover-effect"
            />
          </Col>
        </Row>
        <div className="text-section">
          <div style={{ textAlign: 'center' }}>
            <h5>佛前点灯 积聚功德</h5>
          </div>
          <p className="chinese">
            为自己、家人、企业点一盏慈悲智慧的心灯，让佛法的光明照亮人生的道路。
            2024的年度点灯将于每个季度之初，按比例调整，举例：1月年灯为$1200，4月年灯为$800，8月年灯为$400。2024年12月31日，为年灯最后一天。
            全年每日佛前供灯，为家族/企业祈福。扎西德勒🙏🙏🙏
            福增佛学会作为慈善机构，将开具退税证明。
          </p>
          <br />
          <p className="english">
            Light a lamp of compassion and wisdom in front of Buddha for yourself, your family, or your business, and let the light of Dharma brighten the path of life. The annual lighting fee adjusts quarterly: $1200 in January, $800 in April, and $400 in August. December 31, 2024, marks the last day for the annual lighting. Daily offerings of lights in front of Buddha throughout the year will bless families and businesses. Tashi Delek 🙏🙏🙏 As a charitable organization, the Fuzeng Buddhist Society will provide a tax deduction receipt.
          </p>
        </div>



        <h3 className="text-center my-4">佛像供养</h3>
        <Row>
          {Array.from({ length: 6 }, (_, i) => (
            <Col md={4} key={i}>
              <img
                src={`https://blessfuweb.s3.ca-central-1.amazonaws.com/images/donate/buddha${i + 1}.jpeg`}
                alt={`Buddha ${i + 1}`}
                className="w-100 mb-3 hover-effect"
              />
            </Col>
          ))}
        </Row>

        <h3 className="text-center my-4">香炉和香</h3>
        <div className="video-container">
          <div className="video-item">
            <video
              src={`https://blessfuweb.s3.ca-central-1.amazonaws.com/videos/incense_offering.mp4`}
              controls
              className="w-100"
            >
              Your browser does not support the video tag.
            </video>
          </div>
          <div className="video-item">
            <video
              src={`https://blessfuweb.s3.ca-central-1.amazonaws.com/videos/light.mp4`}
              controls
              className="w-100"
            >
              Your browser does not support the video tag.
            </video>
          </div>
        </div>




        <div className="text-content">
          <p className="chinese">
            上香以三支为宜，表示戒、定、慧，把香点燃后（用手挥灭，不可嘴吹）应插在香炉中间。表示虔诚恭敬供养三宝，以此示范接引众生。表示燃烧自身，普香十方，提醒佛门弟子无私奉献。表示点燃了佛教徒的戒定真香，含有默誓“勤修戒、定、慧，熄灭贪、嗔、痴”意。香代表清净之义，能清净一切染垢污秽，及燥热烦恼；而以香供佛，则代表灭除一切生死烦恼，得到清净自在。“香”以能通信，成为人佛沟通的最佳媒介，故经上称“香为佛使”。这也是佛教中以香敬佛的缘起。真正的敬香，是要唤醒自己沉睡的觉性，发菩提心，奉献人群。觉性与心香相融，正像《大势至菩萨念佛圆通章》所云：如染香人，身有香气，此则名曰香光庄严。
          </p>
          <p className="chinese">
            佛前供水，可以供一杯、三杯或者七杯，三杯代表供养佛法僧三宝。供水前，将杯子清洗干净，倒水时，不可倒的过满，也不可过少，七分满为宜。放置水杯时要注意，杯与杯之间不要挨得太紧，留有一拇指宽的距离最好。摆放整齐，搁置一排，盖上杯盖，以免落入灰尘杂物。供佛的水最好一天一换。不要将空杯放在佛前，要及时擦拭干净放归一处。佛前供水，究竟目的在于修持一个清净、平等、慈悲心，就像佛家说的“无缘大慈、同体大悲”，如观世音菩萨的“大慈大悲”之心，善待一切、离苦得乐。供水功德不可思议，阿弥陀佛所在的西方极乐世界便有七宝池、八功德水充满其中。“菩萨柳头甘露水，能令一滴遍十方”，观音菩萨的杨枝甘露水恩泽万物、救苦救难，因此说供水因缘十分吉祥。感恩大众随喜功德，愿众生法喜充满、六时吉祥。南无阿弥陀佛。
          </p>
          <p className="english">
            Instructions on how to offer incense and water: Offer incense in sets of three as a symbol of the virtues of discipline, concentration, and wisdom. After lighting the incense, extinguish the flame with your hand instead of blowing it out, and place it in the center of the incense burner. This act represents a sincere reverence in offering to the Three Treasures, using it as a model to attract sentient beings. It symbolizes the burning of oneself, spreading fragrance in all directions as a reminder to Buddhists of selfless dedication. It also represents igniting the true fragrance of a Buddhist’s discipline and concentration, with the silent vow to diligently cultivate discipline, concentration, and wisdom, and to extinguish greed, anger, and ignorance. Incense symbolizes purity and can purify all impurities and disturbances; offering incense to Buddha represents the elimination of all the troubles of life and death, achieving purity and freedom. "Incense," capable of carrying messages, becomes an ideal medium for communication between humans and Buddha, hence the scripture states "incense as the messenger of Buddha." True respect for incense involves awakening one’s dormant awareness, cultivating the mind of enlightenment, and dedicating oneself to the masses. This integration of awareness and the fragrance of the heart is like what is mentioned in the "Chapter on the Universal Sage Bodhisattva's Contemplation of Buddha": like a person perfumed, bearing the scent on their body, this is called the dignity of the fragrance of light.
          </p>
        </div>

        <h3 className="text-center my-4">加持品和佛书</h3>
        <Row>
          {Array.from({ length: 4 }, (_, i) => (
            <Col md={3} key={i}>
              <img
                src={`https://blessfuweb.s3.ca-central-1.amazonaws.com/images/donate/blessed_item${i + 1}.jpeg`}
                alt={`Blessed Item ${i + 1}`}
                className="w-100 mb-3 hover-effect"
              />
            </Col>
          ))}
        </Row>
        <div className="carousel-container">
          <Carousel>
            {images.map((image, index) => (
              <Carousel.Item key={index}>
                <img
                  className="d-block w-100 hover-effect"
                  src={image.src}
                  alt={image.alt}
                />
              </Carousel.Item>
            ))}
          </Carousel>
        </div>

        <h3 className="text-center my-4">一人寺庙发心</h3>

        <img
          src={`https://blessfuweb.s3.ca-central-1.amazonaws.com/images/donate/general_intro.jpg`}
          alt="General Introduction"
          className="merit-pool-image mb-4 hover-effect"
        />
      </Container>
      <CustomFooter />
    </div>
  )
};

export default Donate;
