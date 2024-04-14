import { useEffect, useState } from "react";
import { Menu } from 'antd'
import axios from 'axios'
import { CurrencyContext } from '../App'
import { useContext } from 'react';


function Navigation() {

    const [currencies, setCurrencies] = useState([])
    const [currencyId, setCurrencyId] = useState(1)
    const { setCurrencyData } = useContext(CurrencyContext)

    const fetchCurrencies = () => {
        axios.get('http://localhost:8000/currencies').then(response => {
            const responseData = response.data
            const menuItems = [{
                label: 'Валюты',
                type: 'group',
                children: responseData.map(item => {
                    return {key: item.id, label: item.name}
                })
            }]
            
            setCurrencies(menuItems)
        })
    }

    const fetchCurrency = () => {
        axios.get(`http://localhost:8000/currencies/${currencyId}`).then(response => {
            setCurrencyData(response.data)
        })
    }

    useEffect( () => {
        fetchCurrencies()
    }, [])

    useEffect( () => {
        setCurrencyData(null)
        fetchCurrency()
    }, [currencyId])

    const onClick = (e) => {
        setCurrencyId(e.key)
    };
    return <Menu onClick={onClick} style={{width: 256}} mode="inline" items={currencies} className="h-screen overflow-scroll" />;
}

export default Navigation