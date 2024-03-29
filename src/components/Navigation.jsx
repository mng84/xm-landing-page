// XM logo
import xmLogo from "../assets/images/xm-logo.png"

const Navigation = () => {
  return (
    <nav className="w-full bg-[#000000]">
      <div className="w-full flex justify-center items-center lg:justify-between bg-[#000000] text-[#FFFFFF] p-[20px] max-w-[1200px] mx-auto">
      <a className="" href="https://www.xm.com/" target="_blank" rel="noopener noreferrer">
        <img src={xmLogo} width={130} alt="XM Logo" />
      </a>
      <div className="flex [&_a]:mr-[20px]">
        <a className="hidden lg:block text-[15px]" href="https://www.xm.com/" target="_blank" rel="noopener noreferrer">XM Homepage</a>
        <a className="hidden lg:block text-[15px]" href="https://www.xm.com/" target="_blank" rel="noopener noreferrer">Support</a>
      </div>




      </div>
    </nav>
  )
}

export default Navigation