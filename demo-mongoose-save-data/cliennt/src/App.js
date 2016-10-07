import React from 'react';
import axios from 'axios';

class App extends React.Component {
  handleSubmit(e){
    e.preventDefault();
    let title = this.refs.title.value;
    let content = this.refs.content.value;
    let data = {title,content}
    console.log(data);
    axios.post('http://localhost:8000/posts', data)
  }
  render () {
    return(
      <div>
        <form onSubmit={this.handleSubmit.bind(this)}>
          <input type='text' ref='title'/>
          <input type='text' ref='content'/>
          <button type='submit'>submit</button>
        </form>
      </div>
    )
  }
}

export default App;
