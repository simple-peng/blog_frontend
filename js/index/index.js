/*
*首页
*@author pingtingpeng
 */
require('./less/index.less');
import React, {Component} from 'react';
import {render} from 'react-dom';//从react-dom加载render方法，其他不加载
import Widget from './widget';
class Index extends Component{
  render(){
    return (
         <div className='container clearfix'>
           <div className='blog-list'>hello</div>
           <div className='widgets'>
             <Widget />
           </div>
         </div>
      )
  }
}


render(<Index />, document.getElementById('mod-index'))
