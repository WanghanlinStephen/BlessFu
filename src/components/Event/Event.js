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
              {/* <Card.Subtitle className="mb-2 text-muted">时间：4月28日周日 11am——3pm</Card.Subtitle> */}
              <Card.Text>
                吉日吉时在佛堂做《阿弥陀佛修法仪轨》，欢迎师兄们请前来佛堂接受加持，并且邀请亲朋好友前来
                2024年5月9日開始是薩嘎達瓦月：佛陀一生中三大殊勝日，降生、成道、涅槃均在此月，稱為「薩嘎達瓦月」，所修一切善業功德都將不可思議地增長，為一年中最快速累積福德資糧的月分。福增佛學按傳統綿延至今，在佛堂天天薈供 ，共同成就「萬燈、萬水、萬花、萬果」供佛功德，並舉辦觀音法會，授菩薩戒及皈依法會。
                本月23，欣逢億倍功德日，但佛學會秉持學員時間調整上難度，法會改為26日（周日）在殊勝億倍功德之日，邀請您在一年中最快速累積福德資糧的月，淨罪積資。連續一整個月，我們每日以清淨心、恭敬心、在此殊勝的功德月中廣修供養、懺悔業障、戒殺護生、請轉法輪、誦經修法、護持正法住世等諸種善行，日日皆是億倍功德，是行者淨障積資的大好良機。
                本月主題，綠度母心咒改為觀音心咒：敬请师兄在萨嘎达瓦月殊胜日子里，我们一起恭诵观音心咒，直至7月6日，爭取累计到一千万遍，希望大家努力。随喜功德无量🙏歡迎善信法友把握難得的機會，皆將累積無量的福慧資糧
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
