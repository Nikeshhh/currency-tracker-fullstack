/* eslint-disable react/prop-types */
import { Card } from 'antd';


function CurrencyCard(props) {

    const { currency } = props

    const currentPrice = Math.round(currency.quote.USD.price * 100) / 100
    const priceChange = Math.round(currency.quote.USD.percent_change_24h * 100) / 100
    const capitaliztion = Math.round(currency.quote.USD.market_cap / 1000000000 * 100) / 100

    return (
        <>
            <Card
                title={
                    <div className='flex items-center gap-3'>
                        <img width='100' height='80' className='object-scale-down' src={`https://s2.coinmarketcap.com/static/img/coins/64x64/${currency.id}.png`} />
                        <span>{currency.name}</span>
                    </div>
                }
                className='mx-auto my-auto'
            >
                <p>Текущая цена: {currentPrice}$</p>
                <p>Изменение цены за 24 часа: <span className={priceChange > 0 ? 'text-green-600' : 'text-red-600'}>{priceChange}%</span></p>
                <p>Текущая капитализация: ${capitaliztion}B</p>
            </Card>
        </>
    )
}

export default CurrencyCard;