import React, { PropTypes } from 'react';
import axios from 'axios';
import Settings from '../../Settings';
import EditForm from './EditForm';
import isEmpty from 'lodash/fp/isEmpty';

class EditPost extends React.Component {
  constructor(){
    super();
    this.state={
      post: {}
    }
  }
  componentDidMount(){
    var id = this.props.params.id
    // console.log(id);
    axios.get(`${Settings.host}/posts/${id}`).then(res =>{
      // console.log(res);
      this.setState({
        post:res.data.post
      })
    })
  }
  PblishPost(data){
    var id = this.props.params.id;
    // console.log(id);
    axios.put(`${Settings.host}/posts/${id}`,data).then ( res => {
      console.log(res);
      this.context.router.push('/')
    })
  }
  getStyles() {
    return {
      content: {
        width: '100%',
        maxWidth: '600px',
        margin: '30px auto',
        backgroundColor: '#fff',
        borderRadius: '10px',
        boxShadow: 'rgba(0, 0, 0, 0.12) 0px 1px 6px, rgba(0, 0, 0, 0.12) 0px 1px 4px'
      },
      title: {
        fontSize: '1.2em',
        textAlign: 'center',
        paddingTop: '20px'
      }
    }
  }
  render () {
    const styles = this.getStyles();
    return(
      <div style={styles.content}>
        { ! isEmpty(this.state.post) ? <EditForm PblishPost={this.PblishPost.bind(this)} post={this.state.post}/> :""}
      </div>
    )
  }
}
EditPost.contextTypes = {
  router: React.PropTypes.object.isRequired
};
export default EditPost;
