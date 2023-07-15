import {Component} from 'react'
import './index.css'

class EvenOddApp extends Component {
  state = {count: 0}

  countOf = () => {
    this.setState({count: Math.ceil(Math.random() * 100)})
  }

  render() {
    const {count} = this.state
    return (
      <div className="con">
        <div className="con1">
          <h1 className="head">Count {count}</h1>
          {count % 2 === 0 ? (
            <p className="para">Count is Even</p>
          ) : (
            <p className="para">Count is Odd</p>
          )}
          <button type="button" className="btn" onClick={this.countOf}>
            Increment
          </button>
          <p className="para1">*Increase By Random Number Between 0 To 100</p>
        </div>
      </div>
    )
  }
}
export default EvenOddApp
