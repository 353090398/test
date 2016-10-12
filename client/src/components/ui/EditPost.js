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
  render () {
    return(
      <div>
        { ! isEmpty(this.state.post) ? <EditForm PblishPost={this.PblishPost.bind(this)} post={this.state.post}/> :""}
      </div>
    )
  }
}
EditPost.contextTypes = {
  router: React.PropTypes.object.isRequired
};
export default EditPost;
