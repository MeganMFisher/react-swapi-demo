import React, { Component } from 'react';
import axios from 'axios';
import Picker from './components/picker';


class App extends Component {
  state = {
    data: [],
    dataTypeOptions: [
      {
        url: 'http://swapi.co/api/people',
        label: 'People',
      }, {
        url: 'http://swapi.co/api/planets',
        label: 'Planets',
      }

    ], 
    dataTypeSelected: 0,
    // counter: 0
  }

    componentDidMount() {
      this.fetchData.call(this)
    }

    fetchData() {
      const dataTypeIndex = this.state.dataTypeSelected
      const dataType = this.state.dataTypeOptions[dataTypeIndex]
      axios.get(dataType.url)
        .then(response => {
          console.log(response)
          this.setState({ data: response.data.results})
        })
    }


    handleTypeChanged(index) {
      this.setState({dataTypeSelected: index})
    }

  // componentDidMount(){
  //   setInterval(this.increment.bind(this), 1000)
  // }

  // increment() {
  //   this.setState({counter: this.state.counter + 1})
  // }

  render() {



    console.log(this.state.data)

    return (
      <div className="App">
        <Picker typeChanged={this.handleTypeChanged.bind(this)} options={this.state.dataTypeOptions} selected={this.state.dataTypeSelected}/>




          {/*<span>{this.state.counter}</span>*/}
          {/*<button onClick={this.increment.bind(this)}>Morph Up!</button>*/}
      </div>
    );
  }
}

export default App;
