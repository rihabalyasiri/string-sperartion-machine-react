import React from 'react';
import './App.css';





class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      string: '',
      position: '',
      frontPart: false,
      backPart: false,
      frontPartResult: '',
      backPartResult: ''
    }
  }

  seperateString = (e) => {
    console.log(this.state.string)
    console.log(this.state.position)
    console.log(this.state.frontPart)
    console.log(this.state.backPart)
    let posOfSeperate = this.state.string.indexOf(this.state.position);
    let lengthOfSeperate = this.state.position.length;

    if (this.state.frontPart) {
      const frontPartResult = this.state.string.substr(0, posOfSeperate);
      this.setState({ frontPartResult: frontPartResult })
    } else if (this.state.backPart) {
      const backPartResult = this.state.string.substr(posOfSeperate + lengthOfSeperate, this.state.string.length)
      this.setState({ backPartResult: backPartResult })
    }
    this.setState({ frontPart: false })
    this.setState({ backPart: false })
    console.log(this.state.frontPartResult)
    console.log(this.state.backPartResult)
  }

  // setString = (e) => {
  //   this.setState({ string: e.target.value })
  // }

  // setPosition = (e) => {
  //   this.setState({ position: e.target.value })
  // }

  changeHandler = (e) => {
    const { name, value } = e.target
    this.setState({ [name]: value })
  }

  setPart = (e) => {
    if (e.target.id === 'frontPart') {
      this.setState({ frontPart: true })
    } else {
      this.setState({ backPart: true })
    }
  }



  render() {
    return (<div className="App">
      <h1>String seperation machine</h1>

      <form action="" >
        <label htmlFor="">Enter a String:</label>
        <input type="text" name="string" value={this.state.string} id="inputString" onChange={this.changeHandler} />

        <label htmlFor="">Enter a position of seperation</label>
        <input type="text" name="position" value={this.state.position} id="str" onChange={this.changeHandler} />

        <div>
          <input type="radio" name="radio" id="frontPart" onChange={this.setPart} />
          <label htmlFor="">show front part</label>
        </div>

        <div>
          <input type="radio" name="radio" id="backPart" onChange={this.setPart} />
          <label htmlFor="">show back part</label>
        </div>


        <input type="button" value="Seperate" onClick={this.seperateString} />

        <div>
          <p>Front part</p>
          <p>{this.state.frontPartResult}</p>
        </div>
        <div>
          <p>Back part</p>
          <p>{this.state.backPartResult}</p>
        </div>

      </form>

    </div>);
  }
}

export default App;

