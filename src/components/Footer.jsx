import metaQuotesLogo from "../assets/images/metaquotes-logo.png"
import verisingLogo from "../assets/images/verisign-logo.png"
import unicefLogo from "../assets/images/unicef-logo.png"
import investorsLogo from "../assets/images/investors-in-people-logo.png"
import tradingLogo from "../assets/images/trading-point-logo.png"
import { FaFacebookF, FaTwitter, FaYoutube, FaInstagram, FaLinkedinIn } from "react-icons/fa6"

const Footer = () => {
  return (
    <footer className="text-[#ececec] bg-[#000000] py-[50px] px-[20px]">
      <div className="max-w-[1200px] mx-auto">
        <div className="flex justify-between items-center">
          <div className="hidden lg:flex justify-center items-center [&_img]:mr-[20px]">
            <img src={metaQuotesLogo} width={130} alt="MetaQuotes" />
            <img src={verisingLogo} width={130} alt="Verising" />
            <img src={unicefLogo} width={130} alt="Unicef" />
            <img src={investorsLogo} width={130} alt="Investors" />
          </div>
          <div className="hidden lg:flex justify-center items-center [&_a]:ml-[20px]">
            <p className="text-[12px] text-[#888888]">Follow us on</p>
            <a className="text-[#BDBDBD]" href="https://www.xm.com/goto/facebook" target="_blank" rel="noopener noreferrer">
              <FaFacebookF size={18} />
            </a>
            <a className="text-[#BDBDBD]" href="https://www.xm.com/goto/twitter" target="_blank" rel="noopener noreferrer">
              <FaTwitter size={18} />
            </a>
            <a className="text-[#BDBDBD]" href="https://www.xm.com/goto/youtube" target="_blank" rel="noopener noreferrer">
              <FaYoutube size={18} />
            </a>
            <a className="text-[#BDBDBD]" href="https://www.xm.com/goto/instagram" target="_blank" rel="noopener noreferrer">
              <FaInstagram size={18} />
            </a>
            <a className="text-[#BDBDBD]" href="https://www.xm.com/goto/linkedin" target="_blank" rel="noopener noreferrer">
              <FaLinkedinIn size={18} />
            </a>
          </div>
        </div>

        <div className="hidden lg:block w-full h-[1px] bg-[white] mt-[20px] mb-[20px]"></div>
        <div className="flex flex-col justify-center items-center lg:flex-row lg:justify-between">
          <div className="mb-[20px] [&_a]:mr-[10px]">
            <a className="text-[#888888] text-[12px] font-[400] leading-[17px]" href="https://www.xm.com/privacy-policy" target="_blank" rel="noopener noreferrer">Privacy Policy <span className="text-[#888888] relative left-[3px]">|</span></a>
            <a className="text-[#888888] text-[12px] font-[400] leading-[17px]" href="https://www.xm.com/cookie-policy" target="_blank" rel="noopener noreferrer">Cookie Policy <span className="text-[#888888] relative left-[3px]">|</span></a>
            <a className="text-[#888888] text-[12px] font-[400] leading-[17px]" href="https://cloud.xm-cdn.com/static/pdf/System-PDFs/XM-Client-Agreement-Terms-and-Conditions-of-Business.pdf?v=d99969f4f1ec1523a654a99dfe95544e" target="_blank" rel="noopener noreferrer">Terms and Conditions</a>
          </div>
          <a href="https://www.xm.com/" target="_blank" rel="noopener noreferrer"><img className="flex justify-center" src={tradingLogo} width={130} alt="Trading Point" /></a>
        </div>
      </div>
    </footer>
  )
}

export default Footer