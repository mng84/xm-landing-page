import { useState, useEffect } from "react"
// Crypto icons
import bitcoin from "./assets/images/bitcoin.png"

const Cryptos = () => {

    const [mainData, setMainData] = useState([])

    const fetchCryptos = async () => {
        const res = await fetch("https://api.coinlore.net/api/tickers/")
        const results = await res.json()
        setMainData(results.data.slice(0, 5))
    }

    useEffect(() => {
        fetchCryptos()
    }, [])

    return (
        <section className="mt-[150px] mb-[50px] max-w-[1200px]">
            <div className="grid grid-cols-1 w-[80%] mx-auto gap-2 md:grid-cols-3 lg:grid-cols-5">
                {mainData && mainData.map((crypto, index) => (
                    <div key={index} className="rounded-[15px] border-[#A7A7A733] border-[4px] bg-[#8C8C8C1A] text-[#FFFFFF] p-[20px] my-[10px]">
                        <div className="flex items-center">
                            <img src={bitcoin} width={20} height={20} alt="Bitcoin" />
                            <p className="text-[12px] leading-[14px] font-[500] lg:text-[16px] lg:leading-[18px] ml-[10px]">{crypto.symbol}</p>
                            <p className="bg-[#FFF8D6] text-[8px] leading-[9px] text-[#000000] font-[500] rounded-[20px] flex justify-center items-center min-w-[72px] h-[15px] ml-[10px]">{crypto.name}</p>
                        </div>
                        <div className="w-full h-[2px] bg-[#FFFFFF] my-[15px]"></div>
                        <div className="bottom">
                            <p className="text-[17px] leading-[21px] font-[700] mb-[10px] lg:text-[19px] lg:leading-[23px]">${crypto.price_usd}</p>
                            <p className="text-[#FFA3A6] text-[12px] leading-[14px] lg:text-[13px] lg:leading-[16px]">{crypto.percent_change_24h}</p>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    )
}

export default Cryptos