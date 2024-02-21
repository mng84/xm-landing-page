import fastExecutionIcon from "./assets/images/fast-execusion-icon.png"
import competitivePricingIcon from "./assets/images/competitive-pricing-icon.png"
import techIcon from "./assets/images/tech-icon.png"
import dolarIcon from "./assets/images/dollar-icon.png"

const WhyTradeWidthXM = () => {
    return (
        <section className="p-[20px]">
            <h2 className="text-center text-[32px] leading-[43px] font-[300] lg:text-[35px] lg:leading-[42px] lg:font-[300]">Why <span className="font-[700]">Trade</span> with XM?</h2>
            <div className="bg-[--xm-green] w-[70px] h-[2px] mx-auto my-[30px]"></div>
            <p className="text-center text-[14px] leading-[20px] font-[700] lg:text-[14px] lg:leading-[22px] lg:font-[400] lg:max-w-[650px] mx-auto">We have been providing traders around the world with the same <strong>premium experience</strong> for over a decade. As an <strong>industry-leader</strong>, we know what the modern trader needs to be <strong>successful</strong> in the markets.</p>
            <div className="py-[20px] px-[15px] grid grid-cols-12 gap-x-6 gap-y-5">
                <div className="col-span-12 row-span-3 bg-[#0B0819] px-[40px] py-[60px] rounded-[10px] flex md:justify-between md:items-center lg:flex-col lg:col-span-4 lg:row-span-12">
                    <div>
                        <h2 className="text-[20px] leading-[25px] font-[700] lg:text-[25px] lg:leading-[30px] lg:font-[500] max-w-[230px]">Superior Trade Execution</h2>
                        <div className="w-[50px] h-[2px] bg-[--xm-green] my-[30px]"></div>
                        <p className="text-[12px] lg:text-[16px] lg:leading-[22px] lg:font-[700] mb-[50px]">99% of trades are executed in less than a second, with no requotes or rejections.</p>
                    </div>
                    <img src={fastExecutionIcon} className="green-icons" alt="Superior Trade Execution" />
                </div>
                <div className="col-span-12 row-span-3 bg-[#0B0819] px-[40px] py-[60px] rounded-[10px] lg:col-span-8 lg:row-span-6">
                    <div className="flex justify-between items-center">
                        <div><h2 className="title-underscore-green text-[20px] leading-[25px] font-[700] lg:text-[25px] lg:leading-[30px] lg:font-[500] max-w-[200px]">Competitive Pricing</h2>
                            <div className="w-[50px] h-[2px] bg-[--xm-green] my-[30px]"></div>
                            <p>We offer some of the <strong>lowest spreads</strong> and we don’t charge commissions.</p></div>
                        <img src={competitivePricingIcon} width={90} height={90} alt="Competitive Trade Execution" />
                    </div>
                </div>
                <div className="col-span-12 row-span-3 bg-[#0B0819] px-[40px] py-[60px] rounded-[10px] lg:col-span-4 lg:row-span-6">
                    <div className="flex justify-between items-center">
                        <div>
                            <h2 className="title-underscore-green text-[20px] leading-[25px] font-[700] lg:text-[25px] lg:leading-[30px] lg:font-[500] max-w-[200px]">Advanced Technology</h2>
                            <div className="w-[50px] h-[2px] bg-[--xm-green] my-[30px]"></div>
                        </div>
                        <img src={techIcon} width={70} height={70} alt="Advance Technology" />
                    </div>
                    <p>Trade on <strong>MT4</strong> or <strong>MT5</strong>, with expert tools, across desktop, web and mobile.</p>
                </div>
                <div className="col-span-12 row-span-3 bg-[#0B0819] px-[40px] py-[60px] rounded-[10px] lg:col-span-4 lg:row-span-6">
                    <div className="flex justify-between items-center">
                        <div>
                            <h2 className="title-underscore-green text-[20px] leading-[25px] font-[700] lg:text-[25px] lg:leading-[30px] lg:font-[500]">Start with $5</h2>
                            <div className="w-[50px] h-[2px] bg-[--xm-green] my-[30px]"></div>
                        </div>
                        <img src={dolarIcon} width={70} height={70} alt="Start with $5" />
                    </div>
                    <p>Start trading your preferred instruments with as little as a <strong>$5 minimum deposit</strong>.</p>
                </div>
            </div>
        </section>
    )
}

export default WhyTradeWidthXM