import React from 'react';
import { Container, Card, Row, Col } from 'react-bootstrap';
import './Event.css'; // 确保CSS样式文件被正确引入
import CustomFooter from '../Footer/CustomFooter';

const Event = () => (
  <div>
    <Container>
      {/* 活动安排 */}
      <Row>
        <Col md={6} className="mb-4">
          <Card className="h-100 hover-card">
            <Card.Body>
              <Card.Title>值班工作指南</Card.Title>
              <Card.Text>
                <strong>主题：</strong>观音菩萨法会<br />
                <strong>地点：</strong>福增佛堂 TH-9 3200 Corvette Way, Richmond<br />
                <strong>时间：</strong>2024年5月26日（周日）11:00 AM - 3:00 PM<br />
                <br />
                <strong>萨嘎达瓦月：</strong>从5月9日开始，萨嘎达瓦月为佛陀一生中三大殊胜日（降生、成道、涅槃）所在之月。在此月修行的善业功德将不可思议地增长，是一年中最快速累积福德资粮的月份。福增佛学按传统绵延至今，在佛堂天天荟供，共同成就「万灯、万水、万花、万果」供佛功德，并举办观音法会，授菩萨戒及皈依法会。<br />
                <strong>观音心咒：</strong>唵嘛呢叭咪吽<br />
                <strong>回向：</strong>积净三门诸善法，回向三界有情者，消除三毒及諸煩惱，成就三身圆满。<br />
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>

        <Col md={6} className="mb-4">
          <Card className="h-100 hover-card">
            <Card.Body>
              <Card.Title>值班工作指南</Card.Title>
              <Card.Text>
                福增佛堂值班工作指南包括：按时到达、通风、供养、整理佛台、打扫保持整洁、接待访客、修行等任务。详细责任清单和注意事项如下：
                <ul>
                  <li>穿着整洁庄严，保持佛堂清净。</li>
                  <li>值班期间调制手机为静音或震动。</li>
                  <li>佛堂内只接受素食。</li>
                  <li>保持庄严和清净的佛堂环境。</li>
                </ul>
                <b>随喜感恩！</b>
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
    <CustomFooter />
  </div>

);

export default Event;
