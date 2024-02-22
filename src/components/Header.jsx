const Header = () => {
  return (
    <header className="flex flex-col items-center text-center pt-[80px] max-w-[1200px]">
      <div className="max-w-[650px]">
        <p className="text-[16px] leading-[40px] text-[#DDDDDD]">TRADE WITH</p>
        <h1 className="text-[28px] leading-[38px] font-[400] text-[#FFFFFF] md:leading-[35px] lg:text-[35px] lg:leading-[42px] mb-[30px]"><span className="font-[700]">Zero Swaps</span> on All XM Ultra Low Accounts for more than 25 instruments! </h1>
        <p className="text-[14px] leading-[22px] font-[400] text-[#DDDDDD] mb-[30px] lg:text-[16px] lg:leading[24px] max-w-[80%] mx-auto">enjoy spreads <span className="font-[700]">as low as 0.6 Pips</span> and <span className="[font-700]">leverade uo to 1000:1</span> on instruments like <span className="font-[700]">EURUSD, USDJPY, EURJPY, GBPUSD,</span> and <span>Gold</span></p>
        <a href="https://www.xm.com/register/profile-account?lang=en" target="_blank" rel="noopener noreferrer" className="w-[90%] mx-auto block p-[20px] text-[#FFFFFF] text-[24px] text-center font-[700] mb-[30px] bg-[--xm-green]">OPEN ACCOUNT</a>
        <p className="text-[14px] leading-[14px] font-[700] text-[#FFFFFF] mb-[15px]">New to trading? Try a <a href="wwww.google.com">Demo account</a></p>
        <p className="text-[12px] leading-[14px] font-[400] text-[#FFFFFF]">Terms and Conditions apply<span className="text-[--xm-red]">*</span>. To read the full TCs, <a className="text-[--xm-red]" href="https://www.xm.com/register/profile-account?lang=en" target="_blank" rel="noopener noreferrer">click here</a></p>
      </div>
    </header>
  )
}

export default Header