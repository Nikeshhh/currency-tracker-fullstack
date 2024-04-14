import CurrencyCard from './components/CurrencyCard.jsx';
import Navigation from './components/Navigation.jsx';
import { createContext, useState } from 'react';
import { Spin } from 'antd'


export const CurrencyContext = createContext(null)

function App() {

  const [currencyData, setCurrencyData] = useState(null)

  return (
    <CurrencyContext.Provider value={{ currencyData, setCurrencyData }}>
    <div className='flex'>
      <Navigation />
      {currencyData ? <CurrencyCard currency={currencyData}/> : <Spin className='mx-auto my-auto'></Spin>}
    </div>
    </CurrencyContext.Provider>
  )
}

export default App;
