import React from 'react';
import axios from 'axios';
import Settings from '../../Settings';
import { Link } from 'react-router';

class PostList extends React.Component {
  constructor(){
    super();
    this.state={
      posts:[]
    }
  }
  componentDidMount(){
    // console.log("hello will mount");
    axios.get(`${Settings.host}/posts`).then(res => {
      this.setState({
        posts:res.data.posts
      })
      // console.log(this.state.posts);
    })
    //在此处发ajax请求，请求服务器端的json数据
  }
  handleClick(id){
    // alert(id)
    axios.delete(`${Settings.host}/posts/${id}`).then(res =>{
      console.log('delete');
      // console.log(res);
    })
  }
  getstyles(){
    return{
      content: {
        position: 'relative',
        width: '100%',
        height: '60px',
        maxWidth: '600px',
        margin: '20px auto',
        backgroundColor: '#fff',
        borderRadius: '5px',
        padding: '16px',
        boxShadow: 'rgba(0, 0, 0, 0.12) 0px 1px 6px, rgba(0, 0, 0, 0.12) 0px 1px 4px'
     },
     btn:{
       textDecoration:'none',
       width:'90px',
       height:'30px',
       display:'block',
       backgroundColor: 'rgb(255, 64, 129)',
       lineHeight:'30px',
       textAlign:'center',
       margin:'20px auto',
       borderRadius:'20px',
       fontSize: '1em',
       color: 'rgb(255, 255, 255)'
     },
     a:{
       textDecoration:'none',
       float:'right',
       fontSize: '1em',
       color: 'rgb(255, 64, 129)',
       textAlign:'center',
       marginRight:'10px'
     }
    }
  }
  render () {
    let styles = this.getstyles();
    let posts = this.state.posts.map( (item,i) =>
      <div style={styles.content} key={i}>
        <p>
          {item.title}
          <Link to={``} style={styles.a} onClick={this.handleClick.bind(this,item._id)}>删除</Link>
          <Link to={`/posts/${item._id}/edit`} style={styles.a}>修改</Link>
          <Link to={`/post/${item._id}`} style={styles.a}>查看</Link>
        </p>
      </div>
    )
    return(
      <div>
        <Link to='/write' style={styles.btn}>写文章</Link>
        { posts }
      </div>
    )
  }
}

export default PostList;
