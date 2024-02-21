// XM logo
import xmLogo from "../assets/images/xm-logo.png"

const Navigation = () => {
  return (
    <nav className="w-full flex justify-center items-center lg:justify-between bg-[black] text-[white] p-[20px]">
      <a className="" href="https://www.xm.com/" target="_blank" rel="noopener noreferrer">
        <img src={xmLogo} width={130} alt="XM Logo" />
      </a>
      <div className="flex [&_a]:mr-[20px]">
        <a className="hidden lg:block text-[15px]" href="https://www.xm.com/" target="_blank" rel="noopener noreferrer">XM Homepage</a>
        <a className="hidden lg:block text-[15px]" href="https://www.xm.com/" target="_blank" rel="noopener noreferrer">Support</a>
      </div>
    </nav>
  )
}

export default Navigation