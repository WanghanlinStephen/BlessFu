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
              <Card.Title>近期活动</Card.Title>
              <Card.Subtitle className="mb-2 text-muted">时间：4月28日周日 11am——3pm</Card.Subtitle>
              <Card.Text>
                地点：福增佛堂<br />
                内容：《阿弥陀佛修法》《百业经》<br />
                所有的佛的功德加起来，不如阿弥陀佛的功德殊胜，所有的净土加起来不如阿弥陀佛的净土殊胜。即便我们是带业力的身体，也可以去找阿弥陀佛。<br />
                吉日吉时在佛堂做《阿弥陀佛修法仪轨》，欢迎师兄们请前来佛堂接受加持，并且邀请亲朋好友前来。
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
