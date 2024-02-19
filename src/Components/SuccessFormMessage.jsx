import { FaCheck, FaCaretRight } from "react-icons/fa6";

const SuccessFormMessage = () => {
  return (
    <div className="p-[50px] bg-[#F3FEF4]">
        <div className="flex items-center">
            <FaCheck className="w-[60px] h-[60px] text-[white] bg-[#31B63B] p-[3px] rounded-full" size={200} />
            <p className="text-[24px] leading-[28px] text-[#3C763D] ml-[30px]">Registration Successful</p>
        </div>
        <div className="flex items-center mt-[30px]">
        <FaCaretRight className="w-[30px] h-[30px] text-[#31B63B]" />
        <p className="text-[14px] leading-[16px] font-[400] text-[#3C763D]">Thank you for registering for our event with XM. You will receive an email shortly with confirmation of your registration.</p>
        </div>
    </div>
  )
}

export default SuccessFormMessage