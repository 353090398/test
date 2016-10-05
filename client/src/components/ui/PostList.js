import React from 'react';
import axios from 'axios';

class PostList extends React.Component {
  constructor(){
    super();
    this.state={
      posts:[]
    }
  }
  componentWillMount(){
    console.log("hello will mount");
    axios.get('http://localhost:3000/posts').then(res => {
      this.setState({
        posts:res.data.posts
      })
      console.log(this.state.posts);
    })
    //在此处发ajax请求，请求服务器端的json数据
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
    title: {
      fontSize: '1.2em'
    }
  }
}
  render () {
    let styles = this.getstyles();
    let posts = this.state.posts.map( (item,i) =><div style={styles.content}><p key={i}>{item.title}</p></div> )
    return(
      <div style={styles.title}>{ posts }</div>
    )
  }
}

export default PostList;
