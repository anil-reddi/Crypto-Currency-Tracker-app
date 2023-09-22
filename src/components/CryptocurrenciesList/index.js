import {Component} from 'react'
import CryptocurrencyItem from '../CryptocurrencyItem'

import './index.css'

class CryptocurrenciesList extends Component {
  renderCryptoCurrenciesHeader = () => (
    <div className="list-header">
      <p className="coin-type">Coin Type</p>
      <div className="usd-and-euro-value-container">
        <p className="coin-value-heading">USD</p>
        <p className="coin-value-heading">EURO</p>
      </div>
    </div>
  )

  renderCryptoCurrenciesList = () => {
    const {cryptoCurrenciesData} = this.props

    return (
      <div className="crypto-currencies-list">
        {this.renderCryptoCurrenciesHeader()}
        <ul className="list-body">
          {cryptoCurrenciesData.map(eachData => (
            <CryptocurrencyItem
              key={eachData.id}
              cryptoCurrencyData={eachData}
            />
          ))}
        </ul>
      </div>
    )
  }

  render() {
    return (
      <div className="crypto-currencies-container">
        <h1 className="heading">Cryptocurrency Tracker</h1>
        <img
          src="https://assets.ccbp.in/frontend/react-js/cryptocurrency-bg.png"
          alt="cryptocurrency"
          className="crypto-currency-img"
        />
        {this.renderCryptoCurrenciesList()}
      </div>
    )
  }
}
export default CryptocurrenciesList
