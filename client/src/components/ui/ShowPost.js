import React from 'react'
import axios from 'axios';
import Settings from '../../Settings';

class ShowPost extends React.Component {
  constructor(){
    super();
    this.state={
      data:{}
    }
  }
  componentDidMount(){
    let id = this.props.params.id;
    let address = `${Settings.host}/posts/${id}`
    axios.get(address).then(res => {
      this.setState({
        data:res.data.post
      })
      // console.log(this.state.data);
    })
  }
  getStyles() {
    return {
      content: {
        position: 'relative',
        width: '100%',
        minHeight: '200px',
        maxWidth: '600px',
        margin: '30px auto',
        backgroundColor: '#fff',
        borderRadius: '5px',
        padding: '16px',
        boxShadow: 'rgba(0, 0, 0, 0.12) 0px 1px 6px, rgba(0, 0, 0, 0.12) 0px 1px 4px'
      },
      category: {
        position: 'absolute',
        top: '0',
        right: '0',
        padding: '4px 6px',
        color: '#fff',
        fontSize: '.8em',
        backgroundColor: '#ed5a5a'
      },
      title: {
        fontSize: '1.3em',
        paddingTop: '10px',
        paddingBottom: '20px',
        textAlign: 'center'
      },
      text: {
        fontSize: '1em',
        color: 'rgba(0,0,0,.8)'
      }
    }
  }
  render () {
    let styles = this.getStyles();
    return(
      <div style={styles.content}>
        <div style={styles.title}>{this.state.data.title}</div>
        <div style={styles.category}>{this.state.data.category}</div>
        <div style={styles.text}>{this.state.data.content}</div>
      </div>
    )
  }
}


export default ShowPost;
