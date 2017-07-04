/*
*首页
*@author pingtingpeng
 */
require('./scss/index.scss')


import React,{ Component }  from 'react'
import { render } from 'react-dom'
import Widget from './widget';

class Index extends Component{
    render(){
        return (
            <div className='container clearfix'>
           <div className='blog-list'>
            <div className='description'>
            <p>项目简述：纯nodejs处理中间件，不依赖第三方框架打造的个人博客系统,分为后端、前端、数据库三部分</p>
            <h5><strong>一.后端部分</strong></h5>
            <p>1.采用promise解决异步回调地狱问题，用数组的形式构建由Promise组成的中间件链条</p>
            <p>2.中间件有cookieparser、urlparser、apiServer、staticServer、viewServer，其中cookieparser用来处理用户登录问题，
            urlparser用stream处理post请求，apiServer处理get请求，mongodb的crud，staticServer处理静态资源，viewServer将ejs模板引擎动态渲染的结果返回给前
            端</p>
            <p>3.对http request、response的处理是将request、response和要改造的内容封装在ctx对象中</p>
            <h5><strong>二.前端部分</strong></h5>
            <p>1.采用react框架</p>
            <p>2.采用webpack打包前端代码</p>
            <p>3.样式由less/scss编译，用媒体查询实现响应式</p>
            <h5><strong>三.数据库部分</strong></h5>
            <p>1.用mongodb存储数据</p>
            <p>2.mongoose数据管理博客</p>
            </div>
            <div className='steps'>
            <p>项目steps:</p>
            <p>1.创建基本的http服务器</p>
            <p>2.加静态资源html,css,js放在public下</p>
            <p>3.处理ajax请求</p>
            <p>4.用stream处理post请求</p>
            <p>5.建立viewServer：模板引擎ejs</p>
            <p>6.增加mongoose数据存储</p>
            <p>7.用react写前端js代码</p>
            <p>8.用less/scss写前端样式部分</p>
            <p>9.引入webpack构建前端代码</p>
            <p>10.用heroku部署应用至https://powerful-coast-55784.herokuapp.com/</p>
            </div>
           </div>
           <div className='widgets'>
             <Widget />
             <a href={window.location.href+'pingtingpeng'} target="_blank">开始写博客戳这里~~</a>
           </div>
         </div>
        )
    }
}
render(<Index />,document.getElementById('mod-index'))






