import React from 'react'
import axios from 'axios';

class ShowPost extends React.Component {
  constructor(){
    super();
    this.state={
      data:{}
    }
  }
  componentDidMount(){
    let id = this.props.params.id;
    let address = `http://localhost:3000/post/${id}`
    axios.get(address).then(res => {
      this.setState({
        data:res.data.post
      })
      // console.log(this.state.data);
    })
  }
  render () {
    let styles={
      content:{
        width:'70vw',
        margin:'0 auto',
        border:'1px solid #000',
        padding:'30px'
      },
      h2:{
        textAlign:'center'
      },
      h6:{
        textAlign:'right'
      }
    }
    return(
      <div style={styles.content}>
        <h2 style={styles.h2}>{this.state.data.title}</h2>
        <h6 style={styles.h6}>{this.state.data.category}</h6>
        {this.state.data.content}
      </div>
    )
  }
}


export default ShowPost;
