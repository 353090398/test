import React, { PropTypes } from 'react'
import Radium from 'radium';
import { Link } from 'react-router';

class EditForm extends React.Component {
  constructor(props){
    super(props);
    this.state={
      title:this.props.post.title,
      category:this.props.post.category,
      content:this.props.post.content
    }
  }
  handleSubmit(e){
    e.preventDefault();
    // console.log('ok');
    const title = this.refs.title.value;
    const category = this.refs.category.value;
    const content = this.refs.content.value;
    this.props.PblishPost({title,category,content});
  }
  getStyles() {
    return {
      form: {
        padding: '20px 40px',
      },
      div: {
        marginBottom: '10px'
      },
      label: {
        display: 'block',
        fontSize: '.9em',
        color: 'rgba(0,0,0,.6)',
        paddingBottom: '10px'
      },
      input: {
        width: '100%',
        height: '48px',
        border: '1px solid #ddd',
        borderRadius: '5px',
        fontSize: '1em',
        padding: '10px',
        boxSizing: 'border-box',
        ':focus': {
        border: '1px solid #00bcd4',
        outline: 'none'
        }
      },
      actions: {
        textAlign: 'center'
      },
      button: {
        width: '120px',
        height: '36px',
        border: 'none',
        backgroundColor: '#ff4081',
        fontSize: '1em',
        color: '#fff',
        display: 'inline-block',
        margin: '20px auto 0',
        borderRadius: '20px',
        ':hover': {
          cursor: 'pointer'
        },
        ':focus': {
          outline: 'none'
        }
      },
      link: {
        display: 'inline-block',
        marginLeft: '15px',
        fontSize: '1em',
        color: '#00bcd4',
        opacity: '.8',
        textDecoration: 'none'
      },
      textarea:{
        boxSizing: 'border-box',
        width:'100%',
        height:'200px',
        padding: '10px',
        border: '1px solid #ddd',
        borderRadius: '5px',
        resize: 'none',
        ':focus': {
        border: '1px solid #00bcd4',
        outline: 'none'
        }
      }
    };
  }
  render () {
    const styles = this.getStyles();
    return(
      <form style={styles.form} onSubmit={this.handleSubmit.bind(this)}>
        <div style={styles.div}>
          <label style={styles.label}>标题</label>
          <input style={styles.input} ref='title' defaultValue={this.state.title}/>
        </div>
        <div style={styles.div}>
          <label style={styles.label}>类别</label>
          <input style={styles.input} ref='category' defaultValue={this.state.category}/>
        </div>
        <div style={styles.div}>
          <label style={styles.label}>内容</label>
          <textarea style={styles.textarea} ref='content' defaultValue={this.state.content}/>
        </div>
        <div style={styles.actions}>
          <input style={styles.button} type='submit' value='submit'/>
          <Link to='/' style={styles.link}>取消</Link>
        </div>
      </form>
    )
  }
}

export default EditForm;
