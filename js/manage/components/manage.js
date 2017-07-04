/*
 * 文章管理
 */
 import React,{Component} from 'react'
 import {Row,Col} from 'antd'
 import { Button,Table,Modal,notification } from 'antd';
 import { blogListApi,deleteBlogApi } from '../ajax/'
 export default
 class Category extends Component{
    state={
      blogList:[],
      operateData:null,
      isOperating:false
    }
    componentDidMount(){
       blogListApi().then(blogList=>{
            this.setState({blogList:blogList})
        })
    }
    genColumn(){
      return [{
        title: '博客名称',
        dataIndex: 'title',
        key: 'title',
        render: title => <span key={title}>{ title }</span>
      }, {
        title: '博客分类',
        dataIndex: 'id',
        key: 'id',
        render:id=> <span key={id}>{id }</span>
      },
      {
        title: '更新时间',
        dataIndex: 'date',
        key: 'date',
        render:id=> <span key={id}>{id }</span>
      },
      {
        title: '字数',
        dataIndex: 'content',
        key: 'count',
        render:content=> <span key={content&&content.length}>{content&&content.length}</span>
      },
       {
        title: '操作',
        dataIndex:'',
        key: '_id',
        render:data=> {
          let { _id } = data
          return (
            <div>
              <Button>
                <a href={`/manage?type=edit&blogId=${_id}`}>
                  编辑
                </a>
              </Button>
              <Button onClick={e=>this.showDialog(data)}>
                删除
              </Button>
            </div>
          )
        }
      }]
    }
    showDialog=data=>{
      this.setState({
        isOperating:true,
        operateData:data
      })
    }
    cancelDelete=()=>{
      this.setState({
          isOperating:false,
          operateData:null
        })
    }
    deleteBlog=_id=>{
      deleteBlogApi(_id).then(data=>{
        notification.open({
              message: '通知',
              description: JSON.stringify(data),
        });
        this.cancelDelete()
      })
    }
    popDialog(isOperating,operateData){
      if(!isOperating){
        return null
      }
      let { title,_id }= operateData
      return  <Modal title='是否删除博客'
                     visible
                     okText = '删除博客'
                     onOk={()=>this.deleteBlog(_id)}
                     onCancel={this.cancelDelete}>
                  <a href={`/blog?id=${_id}`}
                     target="_blank">
                  您即将删除博客{title}
                  </a>
              </Modal>
    }
    render(){
        let { blogList,isOperating,operateData } =this.state
        return (
            <div className='content'>
              <Table columns={this.genColumn()}
                     dataSource={blogList} />
              {this.popDialog(isOperating,operateData)}
            </div>
        )
    }
 }

