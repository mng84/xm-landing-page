import { FaCalendarCheck, FaRegClock, FaLocationDot } from "react-icons/fa6"

const RegistrationSection = () => {
    return (
        <section className="bg-[#201D27] my-[50px]">
            <h2 className="text-center text-[24px] leading-[26px] font-[700] mb-[30px] lg:text-[34px] lg:leading-[38px]">- Register Here -</h2>
            <p className="text-[16px] leading-[21px] font-[400] text-center mb-[30px]">Join us to celebrate our biggest night of the year.</p>

            <div className="grid grid-cols-1 md:grid-cols-3 text-center border-0 md:border-b-[1px] md:border-t-[1px] min-h-[150px] max-w-[80%] mx-auto md:max-w-[650px]">

                <div className="flex flex-col justify-center items-center py-[30px] border-b-[2px] md:border-r-[2px] md:border-b-[0px] md:py-[0]">
                    <FaCalendarCheck size={26} />
                    <p className="text-[16px] leading-[18px] font-[500] mt-[15px]">12 NOVEMBER 2022</p>
                </div>

                <div className="flex flex-col justify-center items-center py-[30px] border-b-[2px] md:border-r-[2px] md:border-b-[0px] md:py-[0]">
                    <FaRegClock size={26} />
                    <p className="text-[16px] leading-[18px] font-[500] mt-[15px]">16:00 – 23:00</p>
                </div>
                <div className="flex flex-col justify-center items-center px-[12px] py-[30px] md:py-[0]">
                    <FaLocationDot size={26} />
                    <p className="text-[16px] leading-[18px] font-[500] mt-[15px] text-center">Centara Grand & Bangkok Convention Centre, Bangkok</p>
                </div>
            </div>
        </section>
    )
}

export default RegistrationSection