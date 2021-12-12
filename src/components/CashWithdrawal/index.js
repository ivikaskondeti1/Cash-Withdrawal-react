import {Component} from 'react'
import DenominationItem from '../DenominationItem'
import './index.css'

class CashWithdrawal extends Component {
  state = {
    count: 2000,
  }

  buttonFunction = value => {
    this.setState(prevValue => ({
      count: prevValue.count - value,
    }))
  }

  render() {
    const {count} = this.state
    const {denominationsList} = this.props
    console.log(denominationsList)

    return (
      <div className="mainarea">
        <div className="mainPage">
          <div className="headingBlock">
            <h4 className="headingIcon">s</h4>
            <h4 className="name">Sarah Williams</h4>
          </div>
          <div className="yourBalanceBlock">
            <p className="balancePara">Your Balance</p>
            <div className="resultBlock">
              <p className="ResultMoney">{count}</p>
              <p className="rupeeName">In Rupees</p>
            </div>
          </div>
          <p className="ResultMoney">Withdraw</p>
          <p className="balancePara">CHOOSE SUM (IN RUPEES)</p>
          <ul className="BtnCard">
            {denominationsList.map(eachList => (
              <DenominationItem
                listItem={eachList}
                key={eachList.id}
                buttonFunction={this.buttonFunction}
              />
            ))}
          </ul>
        </div>
      </div>
    )
  }
}

export default CashWithdrawal
