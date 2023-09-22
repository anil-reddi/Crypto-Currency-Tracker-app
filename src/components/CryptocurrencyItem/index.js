import './index.css'

const CryptocurrencyItem = props => {
  const {cryptoCurrencyData} = props
  const {logoUrl, name, usdValue, euroValue} = cryptoCurrencyData

  return (
    <li className="item-container">
      <div className="logo-and-title-container">
        <img src={logoUrl} alt={name} className="currency-logo" />
        <p className="currency-name">{name}</p>
      </div>
      <div className="usd-and-euro-container">
        <p className="currency-value">{usdValue}</p>
        <p className="currency-value">{euroValue}</p>
      </div>
    </li>
  )
}
export default CryptocurrencyItem
