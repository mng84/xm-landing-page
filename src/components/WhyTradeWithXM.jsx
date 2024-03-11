import fastExecutionIcon from "../assets/images/fast-execusion-icon.png"
import competitivePricingIcon from "../assets/images/competitive-pricing-icon.png"
import techIcon from "../assets/images/tech-icon.png"
import dollarIcon from "../assets/images/dollar-icon.png"

const WhyTradeWidthXM = () => {
    return (
        <section className="c-trade-container p-[20px] max-w-[1200px] mx-auto">
            <h2 className="text-center text-[32px] leading-[43px] font-[300] lg:text-[35px] lg:leading-[42px] lg:font-[300]">Why <span className="font-[700]">Trade</span> with XM?</h2>
            <div className="bg-[--xm-green] w-[70px] h-[2px] mx-auto my-[30px]"></div>
            <p className="text-center text-[14px] leading-[20px] font-[700] lg:text-[14px] lg:leading-[22px] lg:font-[400] lg:max-w-[650px] mx-auto">We have been providing traders around the world with the same <strong>premium experience</strong> for over a decade. As an <strong>industry-leader</strong>, we know what the modern trader needs to be <strong>successful</strong> in the markets.</p>
            <div className="py-[20px] px-[15px] grid grid-cols-12 gap-x-6 gap-y-5">
                <div className="col-span-12 row-span-3 bg-[#0B0819] pl-[40px] py-[60px] rounded-[10px] flex md:justify-between lg:flex-col lg:col-span-4 lg:row-span-12 relative">
                    <div>
                        <h2 className="text-[20px] leading-[25px] font-[700] lg:text-[25px] lg:leading-[30px] lg:font-[500] max-w-[230px]">Superior Trade <br />Execution</h2>
                        <div className="w-[50px] h-[2px] bg-[--xm-green] my-[30px]"></div>
                        <p className="text-[14px] leading-[20px] font-[400] max-w-[300px]"><span className="font-[700]">99</span>% of trades are executed in <span className="font-[700]">less than a second</span>, with no requotes or rejections.</p>
                    </div>
                    <img src={fastExecutionIcon} className="absolute top-[40px] right-[0px] w-[120px] md:w-[120px] lg:relative lg:w-[200px]" alt="Superior Trade Execution" />
                </div>
                <div className="col-span-12 row-span-3 bg-[#0B0819] px-[40px] py-[60px] rounded-[10px] lg:col-span-8 lg:row-span-6">
                    <div className="flex flex-col relative">
                        <div>
                            <h2 className="text-[20px] leading-[25px] font-[700] lg:text-[25px] lg:leading-[30px] lg:font-[500] max-w-[200px]">Competitive <br /> Pricing</h2>
                            <div className="w-[50px] h-[2px] bg-[--xm-green] my-[30px]"></div>
                            <img src={competitivePricingIcon} className="absolute top-[-20px] right-[0px] w-[90px]" alt="Competitive Trade Execution" />
                        </div>
                        <p className="text-[14px] leading-[20px] font-[400] max-w-[350px]">We offer some of the <span className="font-[700]">lowest spreads</span> and we don’t charge commissions.</p>
                    </div>
                </div>
                <div className="col-span-12 row-span-3 bg-[#0B0819] px-[40px] py-[60px] rounded-[10px] lg:col-span-4 lg:row-span-6">
                    <div className="flex justify-between items-start relative">
                        <div>
                            <h2 className="text-[20px] leading-[25px] font-[700] lg:text-[25px] lg:leading-[30px] lg:font-[500]">Advanced <br /> Technology</h2>
                            <div className="w-[50px] h-[2px] bg-[--xm-green] my-[30px]"></div>
                            <img src={techIcon} className="absolute top-[-30px] right-[0px] w-[80px]" alt="Advance Technology" />
                        </div>
                    </div>
                    <p className="text-[14px] leading-[20px] font-[400] max-w-[200px]">Trade on <span className="font-[700]">MT4</span> or <span className="font-[700]">MT5</span>, with expert tools, across desktop, web and mobile.</p>
                </div>
                <div className="col-span-12 row-span-3 bg-[#0B0819] px-[40px] py-[60px] rounded-[10px] lg:col-span-4 lg:row-span-6">
                    <div className="flex justify-between items-start relative">
                        <div>
                            <h2 className="text-[20px] leading-[25px] font-[700] lg:text-[25px] lg:leading-[30px] lg:font-[500]">Start with $5</h2>
                            <div className="w-[50px] h-[2px] bg-[--xm-green] my-[30px]"></div>
                            <img src={dollarIcon} className="absolute top-[-30px] right-[0px] w-[80px]" alt="Start with $5" />
                        </div>
                    </div>
                    <p className="text-[14px] leading-[20px] font-[400] max-w-[200px]">Start trading your preferred instruments with as little as a <span className="font-[700]">$5 minimum deposit</span>.</p>
                </div>
            </div>
        </section>
    )
}

export default WhyTradeWidthXM