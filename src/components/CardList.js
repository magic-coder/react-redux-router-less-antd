import React,{Component} from 'react';
import {Link} from 'react-router-dom'
import {Carousel ,WhiteSpace,Tabs  } from 'antd-mobile';

class CardList extends Component{
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
        <WhiteSpace size="sm" />
                  
        </div>
        )
    }
}

export default CardList