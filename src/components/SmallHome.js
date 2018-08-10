import React,{Component} from 'react';
import {Link} from 'react-router-dom'
import {Carousel ,WhiteSpace,Card  } from 'antd-mobile';
import "./SmallHome.less"
class SmallHome extends Component{
    // 首页列表内容的一个小示范
    constructor(){
        super()
        this.state={
            data: ['AiyWuByWklrrUDlFignR', 'TekJlZRVCjLFexlOCuWn', 'IJOtIlfsYdTyaDTRVrLI'],
            imgHeight: 176,
        }
    }
    render(){
   
        return(
        <div style={{paddingTop:"45px"}}>
                  <Carousel
                    autoplay={false}
                    infinite
                    beforeChange={(from, to) => console.log(`slide from ${from} to ${to}`)}
                    afterChange={index => console.log('slide to', index)}
                  >
                    {this.state.data.map(val => (
                      <a
                        key={val}
                        href="http://www.alipay.com"
                        style={{ display: 'inline-block', width: '100%', height: this.state.imgHeight }}
                      >
                        <img
                          src={`https://zos.alipayobjects.com/rmsportal/${val}.png`}
                          style={{ width: '100%', verticalAlign: 'top' }}
                          onLoad={() => {
                            this.setState({ imgHeight: 'auto' });
                          }}
                        />
                      </a>
                    ))}
                  </Carousel>
            {/* 公司简介 */}
            <WhiteSpace size="sm" />
            <div className="aboutUs">
                <div className="aboutTitle">
                    <h2>关于我们<img width="20" src={require('../assets/png/zuobiao.png')} /><span>详细地址</span></h2>
                </div>
                <div className="aboutInfo">
                十年磨一剑， 十年磨一剑， 十年磨一剑， 十年磨一剑， 十年磨一剑， 十年磨一剑， 十年磨一剑，
                </div>
            </div>
            {/* 环境展示 */}
            <WhiteSpace size="sm" />
            <div className="OurHome">
                <div className="aboutTitle">
                    <h2>我们的环境</h2>
                </div>
                <div>
                    <div style={{height:"30vw",background:"#c00"}}></div>
                <WhiteSpace size="sm" />

                    <div style={{height:"30vw",background:"#c00"}}></div>
                <WhiteSpace size="sm" />

                    <div style={{height:"30vw",background:"#c00"}}></div>
                <WhiteSpace size="sm" />

                    <div style={{height:"30vw",background:"#c00"}}></div>
                </div>
            </div>
            {/* 明星教师 */}
            <WhiteSpace size="sm" />
            <div className="StarTeacher">
                <div className="aboutTitle">
                    <h2>明星教师<img width="20" src={require('../assets/png/zuobiao.png')} /><span>查看全部教师</span></h2>
                </div>
                <div>
                    <div className="Header">
                        <img src={require("../assets/teacher/teacher.jpg")} />
                    </div>
                </div>
                <div className="teacherInfo">
                    毕业院校：青岛农业大学<br />
                    教育经历：************<br />
                    进修经历：**********<br />
                    个人特长：************<br />
                </div>
            </div>
            {/* 舞蹈辅文 */}
             <WhiteSpace size="sm" />
            <div className="DancerText">
                <div className="aboutTitle">
                    <h2>舞蹈辅文<img width="20" src={require('../assets/png/zuobiao.png')} /><span>查看更多</span></h2>
                </div>
                <Card full>
                    <Card.Header
                        title="如何跳好爵士舞"
                    />
                    <Card.Body style={{display:"flex",}}>
                        <img className="titImg" src={require("../assets/teacher/teacher.jpg")} />
                        <div className="titText">跳舞才可以保持优秀的身材，让你身体更加完美跳舞才可以保持优秀的身材</div>
                    </Card.Body>
                    <Card.Footer extra={<div>进入详情 ></div>} />
                </Card>
                <Card full>
                    <Card.Header
                        title="如何跳好爵士舞"
                    />
                    <Card.Body style={{display:"flex",}}>
                        <img className="titImg" src={require("../assets/teacher/teacher.jpg")} />
                        <div className="titText">跳舞才可以保持优秀的身材，让你身体更加完美跳舞才可以保持优秀的身材</div>
                    </Card.Body>
                    <Card.Footer extra={<div>进入详情 ></div>} />
                </Card>
                <Card full>
                    <Card.Header
                        title="如何跳好爵士舞"
                    />
                    <Card.Body style={{display:"flex",}}>
                        <img className="titImg" src={require("../assets/teacher/teacher.jpg")} />
                        <div className="titText">跳舞才可以保持优秀的身材，让你身体更加完美跳舞才可以保持优秀的身材</div>
                    </Card.Body>
                    <Card.Footer extra={<div>进入详情 ></div>} />
                </Card>
                <Card full>
                    <Card.Header
                        title="如何跳好爵士舞"
                    />
                    <Card.Body style={{display:"flex",}}>
                        <img className="titImg" src={require("../assets/teacher/teacher.jpg")} />
                        <div className="titText">跳舞才可以保持优秀的身材，让你身体更加完美跳舞才可以保持优秀的身材</div>
                    </Card.Body>
                    <Card.Footer extra={<div>进入详情 ></div>} />
                </Card>
            </div>
            <WhiteSpace size="lg" />  
        </div>
        )
    }
}

export default SmallHome