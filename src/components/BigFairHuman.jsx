import authorisedAndRegulatedIcon from "./assets/images/authorised-and-regulated-icon.png"
import commitedAndFairIcon from "./assets/images/commited-and-fair.png"
import awardIcon from "./assets/images/award-icon.png"
import supportIcon from "./assets/images/support.png"

const BigFairHuman = () => {
    return (
        <section className="bg-[#FFFFFF] text-[#000000] px-[30px] py-[50px]">
            <div className="py-[20px] px-[15px] grid grid-cols-12 lg:gap-x-10 gap-y-10">
                <div className="col-span-12 row-span-3 lg:text-left text-center lg:col-span-4 lg:row-span-6">
                    <h2 className="text-[#444444] text-[40px] leading-[46px] mb-[40px] font-[900] md:text-[60px] md:mb-[20px] md:leading-[66px] lg:text-[80px] lg:leading-[90px]">Big <span className="text-[--xm-red]">. </span> <span className="lg:block inline-block">Fair<span className="text-[--xm-red]">.</span></span> <span className="lg:block inline-block">Human<span className="text-[--xm-red]">.</span></span></h2>
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
    )
}

export default BigFairHuman