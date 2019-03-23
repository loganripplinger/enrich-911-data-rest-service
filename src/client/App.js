import React, { Component } from 'react';
import './app.css';
import axios from 'axios';

export default class App extends Component {
  state = {
    incidentId: 'F01705150050',
    incidentData: null
  };

  componentDidMount() {
    this.doQuery()
  }

  textChange = (e) => {
    this.setState({ incidentId: e.target.value})
  }

  doQuery = () => {
   axios.get(`/api/incident/${this.state.incidentId}`)
      .then(data => this.setState({ incidentData: data })); 
  }

  render() {
    const { incidentId, incidentData } = this.state;
    return (
      <div>
        <input type="text" onChange={this.textChange} value={incidentId}/>
        <button onClick={this.doQuery} >Go!</button>
        {incidentData ? <pre>{JSON.stringify(incidentData, null, 2)}</pre> : <h1>No data yet...</h1>}
      </div>
    );
  }
}
