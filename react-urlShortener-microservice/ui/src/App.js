import React from 'react';
import axios from 'axios'
import './App.css'

class App extends React.Component{
  state = {
    id: '',
    url: '',
    post: []
  };
  handleChange = (e)=>{
    const target = e.target;
    const url = target.url
    const value = target.value
    this.setState({
      [url]: value
    })
  };

submit = (e)=>{
  e.preventDefault();

  const payload = {
    id: this.state.id,
    url: this.state.url
  }

  axios ({
    url: '/api/new',
    method: 'POST',
    data: payload
  })
  .then(()=>{
    console.log('Data has been sent to the Server');
    this.resetUserInputs();
  })
  .catch(()=>{
    console.log('Internal Server Error');
  })

};

// resetUserInputs = ()=>{
//   this.setState({
//     id: '',
//     url: ''
//   });
// }

  render(){
    console.log('State: ', this.state)
    return(
      <div>
        <h3>URL shortner Micoroservices</h3>
        <h4>
          <a href="https:UUwww.freecodecamp.com" target= "blank">
            Free code camp: APIs and Microservices
          </a>
        </h4>
        <form action="api/shorturl/new" method="POST" onSubmit={this.submit}>
          <label for="url_input">URL to be shortened: </label>
          <input
            id="url_input"
            onchange={this.handleChange}
            type="text"
            name="url"
            value={this.state.url}
          />
          <input type="submit" value="POST URL" />
        </form>
      </div>
    )
  }
}

export default App