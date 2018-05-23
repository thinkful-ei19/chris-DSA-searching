import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props)

    this.state = {
      input: 'none',
      count: 'none'
    }
  }


  render() {

    let string = '89 30 25 32 72 70 51 42 25 24 53 55 78 50 13 40 48 32 26 2 14 33 45 72 56 44 21 88 27 68 15 62 93 98 73 28 16 46 87 28 65 38 67 16 85 63 23 69 64 91 9 70 81 27 97 82 6 88 3 7 46 13 11 64 76 31 26 38 28 13 17 69 90 1 6 7 64 43 9 73 80 98 46 27 22 87 49 83 6 39 42 51 54 84 34 53 78 40 14 5'
    let arr = string.split(' ').sort((a,b) => {return a-b}).map((value) => Number(value))

    const bindThis = this;

    function linearSearch(arr, value) {
      console.log(value)
      for (let i=0; i<arr.length; i++) {
        if (arr[i] === Number(value)) {
          bindThis.setState({
            input: value,
            count: i
          })          
        }
      }
    }

    function binarySearch(arr, value, start = 0, end = arr.length-1, count = 0) {
      count++

      const index = Math.floor((start + end) / 2);

      if (start > end) {        
        bindThis.setState({
          input: 'not found',
          count: 'none'
        })
        return
      }

      console.log(count, value, index)

      if (Number(value) === arr[index]) {
        bindThis.setState({
          input: value,
          count: count
        })
        return
      } else if (value > arr[index]) {
        return binarySearch(arr, value, index+1, end, count)
      } else if (value < arr[index]) {
        return binarySearch(arr, value, start, index - 1, count)
      }
    }

    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
          <label>Linear Search</label>
          <input onChange={(event)=> (linearSearch(arr, event.target.value))}/>
          <br/>
          <label>Binary Search</label>
          <input onChange={(event)=> (binarySearch(arr, event.target.value))}/>
          <p>Number: {this.state.input}, <br/> Search Iterations: {this.state.count}</p>
          <h2>Explanation of Dewey Decimal Index</h2>
          <p>For a library using DD Index, it would be best to use binary search as this would lead to faster results with less
            iterations through the database.
            The algorithm logic would go as follows:
          </p>
          <ol>
            <li>Get the total number of books in the database</li>
            <li>Order the books numerically from lowest to highest by their index</li>
            <li>Start the search from the middle book (median)</li>
            <li>Depending on whether the book being searched for has a higher or lower index than that middle book, start from the center of the remaining books in the direction of the index of the book being sought.</li>
            <li>Repeat until found.</li>
          </ol>
      </div>
    );
  }
}

export default App;
