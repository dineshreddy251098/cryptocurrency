import {Component} from 'react'
import Loader from 'react-loader-spinner'

import CryptocurrenciesList from '../CryptocurrenciesList'
import './index.css'

class CryptocurrencyTracker extends Component {
  state = {cryptocurrencyList: [], isLoading: true}

  componentDidMount() {
    this.getCryptocurrencyList()
  }

  getCryptocurrencyList = async () => {
    const response = await fetch(
      'https://apis.ccbp.in/crypto-currency-converter',
    )

    const cryptocurrencyListData = await response.json()

    const updatedCryptocurrency = cryptocurrencyListData.map(eachItem => ({
      currencyName: eachItem.currency_name,
      usdValue: eachItem.usd_value,
      euroValue: eachItem.euro_value,
      id: eachItem.id,
      currencyLogo: eachItem.currency_logo,
    }))
    this.setState({cryptocurrencyList: updatedCryptocurrency, isLoading: false})
  }

  renderLoader = () => (
    <div className="loader" testid="loader">
      <Loader type="Rings" color="#ffffff" height={80} width={80} />
    </div>
  )

  renderCryptoCurrency = () => {
    const {cryptocurrencyList} = this.state
    return <CryptocurrenciesList cryptocurrencyList={cryptocurrencyList} />
  }

  render() {
    const {isLoading} = this.state
    return (
      <div className="bg-container">
        {isLoading ? this.renderLoader() : this.renderCryptoCurrency()}
      </div>
    )
  }
}

export default CryptocurrencyTracker
