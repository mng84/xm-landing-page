import { useState, useEffect } from "react"
// import Navigation from "./Components/Navigation"
import Form from "./Components/Form"
import Gallery from "./Components/Gallery"
import Footer from "./Components/Footer"

// XM logo
import xmLogo from "./assets/images/xm-logo.png"

// Crypto icons
import bitcoin from "./assets/images/bitcoin.png"

import { FaCalendarCheck, FaRegClock, FaLocationDot } from "react-icons/fa6"


// Icons
import fastExecutionIcon from "./assets/images/fast-execusion-icon.png"
import competitivePricingIcon from "./assets/images/competitive-pricing-icon.png"
import techIcon from "./assets/images/tech-icon.png"
import dolarIcon from "./assets/images/dollar-icon.png"
import authorisedAndRegulatedIcon from "./assets/images/authorised-and-regulated-icon.png"
import commitedAndFairIcon from "./assets/images/commited-and-fair.png"
import awardIcon from "./assets/images/award-icon.png"
import supportIcon from "./assets/images/support.png"


function App() {

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
    <div className="w-full h-full max-w-[1200px] m-auto">

      {/* <Navigation /> */}
      <nav className="w-full flex justify-center items-center lg:justify-between bg-[black] text-[white] p-[20px]">
        <a className="" href="https://www.xm.com/" target="_blank" rel="noopener noreferrer">
          <img src={xmLogo} width={130} alt="XM Logo" />
        </a>
        <div className="flex [&_a]:mr-[20px]">
          <a className="hidden lg:block text-[15px]" href="https://www.xm.com/" target="_blank" rel="noopener noreferrer">XM Homepage</a>
          <a className="hidden lg:block text-[15px]" href="https://www.xm.com/" target="_blank" rel="noopener noreferrer">Support</a>
        </div>
      </nav>

      <header className="flex flex-col items-center text-center pt-[80px]">
        <div className="max-w-[620px]">
          <p className="text-[16px] leading-[40px] text-[#DDDDDD]">TRADE WITH</p>
          <h2 className="text-[28px] leading-[38px] font-[400] text-[#FFFFFF] md:leading-[35px] md:font-[700] lg:text-[35px] lg:leading-[42px] mb-[30px]">Zero Swaps on All XM Ultra Low Accounts for more than 25 instruments! </h2>
          <p className="text-[14px] leading-[22px] font-[400] text-[#DDDDDD] mb-[30px]">enjoy spreads as low as 0.6 Dios and leverade uo to 1000:1 on instruments like EURUSD, USDJPY, EURJPY, GBPUSD, and Gold</p>
          <button className="w-[90%] mx-auto block p-[20px] text-[#FFFFFF] text-[24px] text-center font-[700] mb-[30px] bg-[#29A643]">OPEN ACCOUNT</button>
          <p className="text-[14px] leading-[14px] font-[700] text-[#FFFFFF] mb-[15px]">New to trading? Try a <a href="wwww.google.com">Demo account</a></p>
          <p className="text-[12px] leading-[18px] font-[400] text-[#FFFFFF] lg:leading-[14px]">Terms and Conditions apply<span className="text-[#D51820]">*</span>. To read the full TCs, <a className="text-[#D51820]" href="https://www.xm.com/register/profile-account?lang=en" target="_blank" rel="noopener noreferrer">click here</a></p>
        </div>
      </header>

      <section className="mt-[50px] mb-[50px] max-w-[1200px]">
        <div className="grid grid-cols-1 w-[80%] mx-auto gap-2 md:grid-cols-3 md:item-center lg:grid-cols-5">
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

      {/* Section 1 */}
      <section className="p-[20px]">
        <h2 className="text-center text-[32px] leading-[43px] font-[300] lg:text-[35px] lg:leading-[42px] lg:font-[300]">Why <span className="font-[700]">Trade</span> with XM?</h2>
        <div className="bg-[#29A643] w-[70px] h-[2px] mx-auto my-[30px]"></div>
        <p className="text-center text-[14px] leading-[20px] font-[700] lg:text-[14px] lg:leading-[22px] lg:font-[400] lg:max-w-[650px] mx-auto">We have been providing traders around the world with the same <strong>premium experience</strong> for over a decade. As an <strong>industry-leader</strong>, we know what the modern trader needs to be <strong>successful</strong> in the markets.</p>
        <div className="py-[20px] px-[15px] grid grid-cols-12 gap-x-6 gap-y-5">
          <div className="col-span-12 row-span-3 bg-[#0B0819] px-[40px] py-[60px] rounded-[10px] flex md:justify-between md:items-center lg:flex-col lg:col-span-4 lg:row-span-12">
            <div>
              <h2 className="text-[20px] leading-[25px] font-[700] lg:text-[25px] lg:leading-[30px] lg:font-[500] max-w-[230px]">Superior Trade Execution</h2>
              <div className="w-[50px] h-[2px] bg-[#29A643] my-[30px]"></div>
              <p className="text-[12px] lg:text-[16px] lg:leading-[22px] lg:font-[700] mb-[50px]">99% of trades are executed in less than a second, with no requotes or rejections.</p>
            </div>
            <img src={fastExecutionIcon} className="green-icons" alt="Superior Trade Execution" />
          </div>
          <div className="col-span-12 row-span-3 bg-[#0B0819] px-[40px] py-[60px] rounded-[10px] lg:col-span-8 lg:row-span-6">
            <div className="flex justify-between items-center">
              <div><h2 className="title-underscore-green text-[20px] leading-[25px] font-[700] lg:text-[25px] lg:leading-[30px] lg:font-[500] max-w-[200px]">Competitive Pricing</h2>
                <div className="w-[50px] h-[2px] bg-[#29A643] my-[30px]"></div>
                <p>We offer some of the <strong>lowest spreads</strong> and we don’t charge commissions.</p></div>
              <img src={competitivePricingIcon} width={90} height={90} alt="Competitive Trade Execution" />
            </div>
          </div>
          <div className="col-span-12 row-span-3 bg-[#0B0819] px-[40px] py-[60px] rounded-[10px] lg:col-span-4 lg:row-span-6">
            <div className="flex justify-between items-center">
              <div>
                <h2 className="title-underscore-green text-[20px] leading-[25px] font-[700] lg:text-[25px] lg:leading-[30px] lg:font-[500] max-w-[200px]">Advanced Technology</h2>
                <div className="w-[50px] h-[2px] bg-[#29A643] my-[30px]"></div>
              </div>
              <img src={techIcon} width={70} height={70} alt="Advance Technology" />
            </div>
            <p>Trade on <strong>MT4</strong> or <strong>MT5</strong>, with expert tools, across desktop, web and mobile.</p>
          </div>
          <div className="col-span-12 row-span-3 bg-[#0B0819] px-[40px] py-[60px] rounded-[10px] lg:col-span-4 lg:row-span-6">
            <div className="flex justify-between items-center">
              <div>
                <h2 className="title-underscore-green text-[20px] leading-[25px] font-[700] lg:text-[25px] lg:leading-[30px] lg:font-[500]">Start with $5</h2>
                <div className="w-[50px] h-[2px] bg-[#29A643] my-[30px]"></div>
              </div>
              <img src={dolarIcon} width={70} height={70} alt="Start with $5" />
            </div>
            <p>Start trading your preferred instruments with as little as a <strong>$5 minimum deposit</strong>.</p>
          </div>
        </div>
      </section>

      {/* Section 2 */}
      <section className="bg-[#201D27] my-[50px]">
        <h2 className="text-center text-[24px] leading-[26px] font-[700] mb-[30px] lg:text-[34px] lg:leading-[38px]">- Register Here -</h2>
        <p className="text-[16px] leading-[21px] font-[400] text-center mb-[30px]">Join us to celebrate our biggest night of the year.</p>
        
        <div className="grid grid-cols-1 md:grid-cols-3 text-center border-0 md:border-b-[1px] md:border-t-[1px] min-h-[150px] max-w-[650px] m-auto">
         
          <div className="flex flex-col justify-center items-center py-[30px] md:border-r-[2px]">
            <FaCalendarCheck size={26} />
            <p className="text-[16px] leading-[18px] font-[500] mt-[15px]">12 NOVEMBER 2022</p>
          </div>
         
          <div className="flex flex-col justify-center items-center border-0 md:border-r-[2px]">
            <FaRegClock size={26} />
            <p className="text-[16px] leading-[18px] font-[500] mt-[15px]">16:00 – 23:00</p>
          </div>
          <div className="flex flex-col justify-center items-center px-[12px]">
            <FaLocationDot size={26} />
            <p className="text-[16px] leading-[18px] font-[500] mt-[15px] text-center">Centara Grand & Bangkok Convention Centre, Bangkok</p>
          </div>
        </div>

      </section>

      {/* Form */}
      <Form />

      {/* Gallery */}
      <Gallery />

      {/* Section 3 */}
      <section className="bg-[#FFFFFF] text-[#000000] px-[30px] py-[50px]">
        <div className="py-[20px] px-[15px] grid grid-cols-12 gap-x-10 gap-y-10">
          <div className="col-span-12 row-span-3 lg:text-left text-center lg:col-span-4 lg:row-span-6">
            <h2 className="text-[#444444] text-[40px] leading-[46px] mb-[40px] font-[900] md:text-[60px] md:mb-[20px] md:leading-[66px] lg:text-[80px] lg:leading-[90px]">Big <span className="text-[#D51820]">. </span> <span className="lg:block inline-block">Fair<span className="text-[#D51820]">.</span></span> <span className="lg:block inline-block">Human<span className="text-[#D51820]">.</span></span></h2>
            <p className="text-[#444444] max-w-[100%] lg:text-[17px] lg:leading-[23px] lg:font-[700] lg:max-w-[300px]">Learn why over 5 million clients choose XM as their trusted online broker.</p>
          </div>
          <div className="col-span-12 row-span-3 text-center md:text-left md:col-span-6 lg:col-span-4 lg:row-span-3">
            <img className="mx-auto md:mx-0" src={authorisedAndRegulatedIcon} width={50} height={55} alt="Fast Execution" />
            <h2 className="text-[20px] text-[#444444] leading-[24px] font-[700] lg:text-[19px] lg:leading-[25px] my-[20px]">Authorised and Regulated</h2>
            <p className="text-[14px] leading-[20px] font-[400] lg:text-[14px] lg:leading-[21px]">At XM, we adhere to all regulatory standards and are fully authorised and regulated by FSC.</p>
          </div>
          <div className="col-span-12 row-span-3 text-center md:text-left md:col-span-6 lg:col-span-4 lg:row-span-3">
            <img className="mx-auto md:mx-0" src={awardIcon} width={50} height={55} alt="Competitive Pricing" />
            <h2 className="text-[20px] text-[#444444] leading-[24px] font-[700] lg:text-[19px] lg:leading-[25px] my-[20px]">Multi-Award-Winning</h2>
            <p className="text-[14px] leading-[20px] font-[400] lg:text-[14px] lg:leading-[21px]">Over the years we have received over 40 awards for the quality of our products and services.</p>
          </div>
          <div className="col-span-12 row-span-3 text-center md:text-left md:col-span-6 lg:col-span-4 lg:row-span-3">
            <img className="mx-auto md:mx-0" src={commitedAndFairIcon} width={50} height={55} alt="Advance Technology" />
            <h2 className="text-[20px] text-[#444444] leading-[24px] font-[700] lg:text-[19px] lg:leading-[25px] my-[20px]">Committed and Fair</h2>
            <p className="text-[14px] leading-[20px] font-[400] lg:text-[14px] lg:leading-[21px]">We operate with complete transparency and adhere to the highest professional and ethical standards.</p>
          </div>
          <div className="col-span-12 row-span-3 text-center md:text-left md:col-span-6 lg:col-span-4 lg:row-span-3">
            <img className="mx-auto md:mx-0" src={supportIcon} width={50} height={55} alt="Dollar" />
            <h2 className="text-[20px] text-[#444444] leading-[24px] font-[700] lg:text-[19px] lg:leading-[25px] my-[20px]">24/7 Support</h2>
            <p className="text-[14px] leading-[20px] font-[400] lg:text-[14px] lg:leading-[21px]">Our support agents are on hand 24/7 to answer your questions or assist you with any issues.</p>
          </div>
        </div>
      </section>

      {/* Footer */}
      <Footer />

    </div>
    // End of wrapper
  )
}

export default App
