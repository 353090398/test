import React from 'react';
import axios from 'axios';
import { Link } from 'react-router';

class PostList extends React.Component {
  constructor(){
    super();
    this.state={
      posts:[]
    }
  }
  componentWillMount(){
    // console.log("hello will mount");
    axios.get('http://localhost:3000/posts').then(res => {
      this.setState({
        posts:res.data.posts
      })
      // console.log(this.state.posts);
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
   btn:{
     textDecoration:'none',
     width:'60px',
     height:'24px',
     display:'block',
     backgroundColor: 'rgb(255, 64, 129)',
     lineHeight:'24px',
     textAlign:'center',
     margin:'20px auto',
     borderRadius:'20px',
     fontSize: '0.8em',
     color: 'rgb(255, 255, 255)'
    }
  }
}
  render () {
    let styles = this.getstyles();
    let posts = this.state.posts.map( (item,i) =><div style={styles.content} key={i}><p>{item.title}</p></div> )
    return(
      <div>
        <Link to='/write' style={styles.btn}>write</Link>
        { posts }
      </div>
    )
  }
}

export default PostList;
