import {Component} from 'react'
import './index.css'

class DenominationItem extends Component {
  render() {
    const {listItem, buttonFunction} = this.props
    const {value} = listItem
    const pressFunction = () => {
      buttonFunction(value)
    }
    return (
      <li>
        <div>
          <button type="submit" className="btn" onClick={pressFunction}>
            {value}
          </button>
        </div>
      </li>
    )
  }
}
export default DenominationItem
