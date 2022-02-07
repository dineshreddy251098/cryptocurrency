import './index.css'

const CryptocurrencyItem = props => {
  const {eachCryptocurrencyDetails} = props
  const {
    currencyName,
    usdValue,
    euroValue,
    currencyLogo,
  } = eachCryptocurrencyDetails

  return (
    <li className="crypto-currency-container">
      <div className="coin-type-container">
        <img className="logo" src={currencyLogo} alt={currencyName} />
        <p className="currency-name">{currencyName}</p>
      </div>
      <div className="coin-type-container">
        <p className="currency-value">{usdValue}</p>
        <p className="currency-value">{euroValue}</p>
      </div>
    </li>
  )
}
export default CryptocurrencyItem
