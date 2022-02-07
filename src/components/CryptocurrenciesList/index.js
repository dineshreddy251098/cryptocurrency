import CryptocurrencyItem from '../CryptocurrencyItem'
import './index.css'

const CryptocurrenciesList = props => {
  const {cryptocurrencyList} = props
  return (
    <div className="crypto-container">
      <h1 className="heading">Cryptocurrency tracker</h1>
      <img
        className="crypto-image"
        src="https://assets.ccbp.in/frontend/react-js/cryptocurrency-bg.png"
        alt="cryptocurrency"
      />
      <div className="crypto-card-container">
        <div className="crypto-heading-container">
          <p className="coin-type">Coin Type</p>
          <div className="currency-value-heading-container">
            <p className="coin-type coin-value">USD</p>
            <p className="coin-type coin-value">EURO</p>
          </div>
        </div>

        <ul className="crypto-list-container">
          {cryptocurrencyList.map(eachItem => (
            <CryptocurrencyItem
              key={eachItem.id}
              eachCryptocurrencyDetails={eachItem}
            />
          ))}
        </ul>
      </div>
    </div>
  )
}

export default CryptocurrenciesList
