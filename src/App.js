import React, { Component } from 'react';
import axios from 'axios'
class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      data: []
    };
  }

  componentDidMount() {
    axios.get('https://randomuser.me/api/?results=50')
      .then(response => {
          const data = response.data.results;
           this.setState({data})
      })
      .catch(error => {
        console.log(error);
      })
  }

  render() {

    return (
      <div className="App">
              { this.state.data.map((item, index) => <UserList key={index} {...item} />) }
      </div>
    );
  }
}

const UserList = (props) => (         
    <p><strong>name : </strong> {props.name.first}</p>
)

export default App;