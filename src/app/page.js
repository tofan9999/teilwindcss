
import Image from 'next/image';

export default function Home() {
  return (
    <>
    <div className=" max-md:overflow-hidden ">
      {/* header section start*/}
      <header className="bg-white max-md:max-w-full max-sm:max-w-full shadow-md">
        <div className="max-md:max-w-full mx-auto px-4 py-4 flex justify-between items-center">
          <h1 className="text-2xl font-bold">MyWebsite</h1>
          <button
            id="menu-btn"
            className="md:hidden text-gray-600 focus:outline-none"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </button>
          <nav id="menu" className="hidden md:flex space-x-6">
            <a href="#" className="hover:text-blue-600">
              Home
            </a>
            <a href="#" className="hover:text-blue-600">
              About
            </a>
            <a href="#" className="hover:text-blue-600">
              Contact
            </a>
          </nav>
        </div>
        {/* <!-- Mobile Menu --> */}
        <div id="mobile-menu" className="md:hidden hidden px-4 pb-4">
          <a href="#" className="block py-2 hover:text-blue-600">
            Home
          </a>
          <a href="#" className="block py-2 hover:text-blue-600">
            About
          </a>
          <a href="#" className="block py-2 hover:text-blue-600">
            Contact
          </a>
        </div>
      </header>

      {/* heading section end */}
      {/* first section start*/}
      <section className=" max-md:overflow-hidden max-md:max-w-[750px] ">
      <div className="self-stretch px-6 py-10 flex  flex-col justify-start items-center gap-6">
    <div className="self-stretch flex flex-col justify-start items-start gap-6">
        <div className="self-stretch flex flex-col justify-start items-start gap-3">
            <div className="inline-flex justify-start items-center gap-2.5">
                <div className="w-4 h-4 relative">
                    <div className="w-3.5 h-3.5 left-[0.67px] top-[1.33px] absolute">
                      <Image src="mdi_magic.svg" alt="magic" width={15} height={8}/>
                    </div>
                </div>
                <div className="justify-start text-lime-100 text-xs font-medium font-['Inter'] leading-none">Introducing AI Automation</div>
            </div>
            <div className="self-stretch justify-start"><span className="text-white text-4xl font-semibold font-['Sora']">From </span><span className="bg-gradient-to-r from-[#EDBF79] to-[#D95494] bg-clip-text text-transparent text-4xl font-semibold font-['Sora']">Concept</span><span className="text-white text-4xl font-semibold font-['Sora']"> to </span><span className="bg-gradient-to-r from-[#A5ED79] to-[#2680D3] bg-clip-text text-transparent text-4xl font-semibold font-['Sora']">Reality</span></div>
            <div className="self-stretch justify-start text-green-200 text-base font-normal font-['Sora'] leading-7">We Engineer your Software Success & Digital Transformation.</div>
        </div>
        <div className="self-stretch h-0  outline-offset-[-0.50px] outline-white/10"></div>
        <div className="self-stretch justify-start text-white/80 text-sm font-normal font-['Sora'] leading-normal">At Chromezy, we translate your ideas into market-ready solutions quickly and precisely. Leveraging the power of technology and prioritizing user needs, we deliver products that are both cutting-edge and user-centric.</div>
    </div>
    <div className="w-100 h-70 relative">
        <Image className=" top-[55px] absolute" src="/image 48.png" alt="magic" width={170} height={100}/>
        <Image className="left-[157.35px] top-[63.33px] absolute blur-[6.45px]" src="/image 49.png" alt="magic" width={250} height={100} />
        <Image className="left-[-5.59px] top-[152.32px] absolute" src="/image 50.png" alt="magic" width={270} height={100}/>
    </div>
</div>
</section>
      {/* first section end */}
      {/* second section start */}
      <section className="max-md:w-full max-md:flex max-md:justify-center max-md:pt-[90px] max-md:pb-[80px]">
     <div >
      <div className="max-md:flex max-md:flex-col px-6 max-md:gap-[16px]">
       <div className="text-white max-md:text-2xl font-semibold font-['Sora'] leading-normal">
        BRANDS <span className="bg-gradient-to-r from-[#87D8E3] via-[#EDBF79] to-[#D95494] bg-clip-text text-transparent">WORKED WITH</span>
       </div>
       <div className="text-white/80 text-sm font-normal font-['Sora'] leading-normal">
Dummy ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis.
       </div>
       </div>
       <div className="max-md:grid max-md:grid-cols-2 max-md:gap-2 max-md:px-6 max-md:pt-[90px] ">
        <div><Image src="/Group 20396.png" alt="magic" width={200} height={100}/></div>
        <div><Image src="/Group 20400.png" alt="magic" width={200} height={100}/></div>
        <div><Image src="/Group 20395.png" alt="magic" width={200} height={100}/></div>
        <div><Image src="/Group 20399.png" alt="magic" width={200} height={100}/></div>
        <div><Image src="/Group 20394.png" alt="magic" width={200} height={100}/></div>
        <div><Image src="/Group 20398.png" alt="magic" width={200} height={100}/></div>
        <div><Image src="/Group 20393.png" alt="magic" width={200} height={100}/></div>
        <div><Image src="/Group 20397.png" alt="magic" width={200} height={100}/></div>
       </div>
       <div>
        <div className="max-md:py-5">
          <div className="max-md:flex max-md:mx-6 max-md:px-3 ">
            <div className="text-white  max-md:p-5">
              <div className="text-2xl text-bold font-semibold font-['Sora'] bg-gradient-to-r from-[#87D8E3] via-[#EDBF79] to-[#D95494] bg-clip-text text-transparent">
                200%
              </div>
              <div>
                Revenue Growth

              </div>
            </div>
            <div className="text-white max-md:p-5 max-md:ml-5">
              <div className="text-2xl text-bold font-semibold font-['Sora'] bg-gradient-to-r from-[#87D8E3] via-[#EDBF79] to-[#D95494] bg-clip-text text-transparent">
                4X
              </div>
              <div>
                Speed to Market
              </div>
            </div>

          </div>

          <div className="max-md:flex max-md:mx-6 max-md:px-3 ">
            <div className="text-white max-md:p-5">
              <div className="text-2xl text-bold bg-gradient-to-r font-semibold font-['Sora'] from-[#87D8E3] via-[#EDBF79] to-[#D95494] bg-clip-text text-transparent">
                73%
              </div>
              <div>
                New Orders

              </div>
            </div>
            <div className="text-white max-md:p-5 max-md:ml-[52px]">
              <div className="text-2xl text-bold bg-gradient-to-r font-semibold font-['Sora'] from-[#87D8E3] via-[#EDBF79] to-[#D95494] bg-clip-text text-transparent">
                10K+
              </div>
              <div>
                Speed to Market
              </div>
            </div>

          </div>
          <div>
          <div className="max-md:p-6 bg-[#000000] max-md:rounded-[40px] max-md:flex max-md:justify-center max-md:mx-6 max-md:flex-row max-md:gap-1 border-red-700">
            <div className="max-md:mt-[1px] max-md:ml-2">
            <Image className="max-md:ml-[12px] max-md:w-[20px]" src="/arrow-up-right.svg" width={100} height={100} alt="magic"/>
            </div>
            <div className="text-white font-normal font-['sora'] ">
              See More Projects
            </div>
          </div>
          </div>

        </div>
        
        
       </div>
     </div>

      </section>
      {/* second section end */}
       {/* thard section start */}
       <section className="max-md:py-[64px] max-md:mx-6 ">
        <div className="max-md:flex max-md:flex-col max-md:gap-6">
          <div className="self-stretch justify-start text-white max-md:text-2xl font-semibold font-['sora'] uppercase">
            <span className="bg-gradient-to-r from-[#87D8E3] via-[#EDBF79] to-[#D95494] bg-clip-text text-transparent">Product</span> Engineering
          </div>
          <div className="text-white/80">
            Discover the impact of bespoke digital solutions tailored precisely to your business distinct requirements. Our experienced team of professionals ensures you receive outstanding results that consistently exceed your expectations.
          </div>
        </div>
        <div className="max-md:flex max-md:flex-col max-md:gap-5 max-md:py-[45px]">
        <div className="max-md:h-[100%]">
          <div className="max-md:bg-[#2F41A3] second-[#2F41A3] rounded-[15px] max-md:py-[30px] max-md:justify-center">
            <div className="max-md:px-4 max-md:flex max-md:flex-row max-md:gap-15">
              <div className="">
            <div className="max-md:w-full max-md:px-[15px] max-md:py-[8px] rounded-[50px] text-white outline-white/10 capitalize leading-7 outline-1 outline-offset-[-1px]">Our Services</div>
            </div>
            <div>
            <div className="max-md:w-full"><Image src="/Black and White Collection 18.svg" width={100} height={100} alt="magic"/></div>
            </div>
            </div>
            <div className="max-md:flex max-md:flex-col max-md:px-4 max-md:gap-[16px] max-md:pt-[45px]">
              <div className="text-2xl text-white leading-7 font-semibold font-['sora']">MVP</div>
              <div className="text-white font-['Sora']">We specialize in custom MVP development, focusing on tailored prototyping services to meet diverse client needs and ensure rapid market launch.</div>
              <div>
                <div className="max-md:p-6 bg-[#000000] max-md:rounded-[40px] max-md:flex max-md:justify-center max-md:mx-0 max-md:flex-row max-md:gap-1 border-red-700">
            
            <div className="text-white font-normal font-['sora'] ">
              See More Projects
            </div>
            <div className="max-md:mt-[1px] max-md:ml-2">
            <Image className="max-md:ml-[12px] max-md:w-[20px]" src="/arrow-up-right.svg" width={100} height={100} alt="magic"/>
            </div>
          </div>
              </div>
            </div>
          </div>
 
        </div>
        <div>
          <div className="bg-gradient-to-r  from-[#7E2148] to-[#7E2148] bg-clip-bg text-transparent rounded-[15px] max-md:py-[30px] max-md:justify-center">
            <div className="max-md:px-4 max-md:flex max-md:flex-row max-md:gap-15">
              <div className="">
            <div className="max-md:w-full max-md:px-[15px] max-md:py-[8px] rounded-[50px] text-white outline-white/10 capitalize leading-7 outline-1 outline-offset-[-1px]">Our Services</div>
            </div>
            <div>
            <div className="max-md:w-full"><Image src="/Black and White Collection 13.svg" width={100} height={100} alt="magic"/></div>
            </div>
            </div>
            <div className="max-md:flex max-md:flex-col max-md:px-4 max-md:gap-[16px] max-md:pt-[45px]">
              <div className="text-2xl text-white leading-7 font-semibold font-['sora']">SaaS</div>
              <div className="text-white font-['Sora']">Take your business to new heights with our all-inclusive SaaS development services, delivering seamless and digital experiences that are platform-agnostic and tailored to your customers needs.</div>
              <div>
                <div className="max-md:p-6 bg-[#000000] max-md:rounded-[40px] max-md:flex max-md:justify-center max-md:mx-0 max-md:flex-row max-md:gap-1 border-red-700">
            
            <div className="text-white font-normal font-['sora'] ">
              See More Projects
            </div>
            <div className="max-md:mt-[1px] max-md:ml-2">
            <Image className="max-md:ml-[12px] max-md:w-[20px]" src="/arrow-up-right.svg" width={100} height={100} alt="magic"/>
            </div>
          </div>
              </div>
            </div>
          </div>
 
        </div>
        <div>
          <div className="max-md:bg-[#AA7333] second-[#2F41A3] rounded-[15px] max-md:py-[30px] max-md:justify-center">
            <div className="max-md:px-4 max-md:flex max-md:flex-row max-md:gap-10">
              <div className="">
            <div className="max-md:max-w-full max-md:px-[15px] max-md:py-[8px] rounded-[50px] text-white outline-white/10 capitalize leading-7 outline-1 outline-offset-[-1px]">Our Services</div>
            </div>
            <div>
            <div className="max-md:w-full"><Image src="/ph_open-ai-logo-duotone.svg" width={100} height={100} alt="magic"/></div>
            </div>
            </div>
            <div className="max-md:flex max-md:flex-col max-md:px-4 max-md:gap-[16px] max-md:pt-[45px]">
              <div className="text-2xl text-white leading-7 font-semibold font-['sora']">AI</div>
              <div className="text-white font-['Sora']">We develop tailored AI solutions, leveraging machine learning, NLP, and computer vision to automate, optimize, and enhance decision-making processes</div>
              <div>
                <div className="max-md:p-6 bg-[#000000] max-md:rounded-[40px] max-md:flex max-md:justify-center max-md:mx-0 max-md:flex-row max-md:gap-1 border-red-700">
            
            <div className="text-white font-normal font-['sora'] ">
              See More Projects
            </div>
            <div className="max-md:mt-[1px] max-md:ml-2">
            <Image className="max-md:ml-[12px] max-md:w-[20px]" src="/arrow-up-right.svg" width={100} height={100} alt="magic"/>
            </div>
          </div>
              </div>
            </div>
          </div>
 
        </div>
        <div>
          <div className="max-md:bg-[#224A38] second-[#2F41A3] rounded-[15px] max-md:py-[30px] max-md:justify-center">
            <div className="max-md:px-4 max-md:flex max-md:flex-row max-md:gap-10">
              <div className="">
            <div className="max-md:max-w-full max-md:px-[15px] max-md:py-[8px] rounded-[50px] text-white outline-white/10 capitalize leading-7 outline-1 outline-offset-[-1px]">Our Services</div>
            </div>
            <div>
            <div className="max-md:w-full"><Image src="/Black and White Collection 10.svg" width={100} height={100} alt="magic"/></div>
            </div>
            </div>
            <div className="max-md:flex max-md:flex-col max-md:px-4 max-md:gap-[16px] max-md:pt-[45px]">
              <div className="text-2xl text-white leading-7 font-semibold font-['sora']">B2B & B2C Commerce Transformation</div>
              <div className="text-white font-['Sora']">We elevate B2B and B2C commerce, specializing in Shopify, Prestashop, Magento, and Woocommerce to boost online orders and enhance customer shopping experiences, keeping you competitive.</div>
              <div>
                <div className="max-md:p-6 bg-[#000000] max-md:rounded-[40px] max-md:flex max-md:justify-center max-md:mx-0 max-md:flex-row max-md:gap-1 border-red-700">
            
            <div className="text-white font-normal font-['sora'] ">
              See More Projects
            </div>
            <div className="max-md:mt-[1px] max-md:ml-2">
            <Image className="max-md:ml-[12px] max-md:w-[20px]" src="/arrow-up-right.svg" width={100} height={100} alt="magic"/>
            </div>
          </div>
              </div>
            </div>
          </div>
 
        </div>
        
        </div>
       </section>

       {/* thard section end */}
       {/* fourth section start */}
       <section className="max-md:mx-6 max-md:my-[64px] max-md:pb-[25px]">
       <div>
        <div className="max-md:flex max-md:flex-col max-md:gap-6">
          <div className="text-white text-2xl max-md:font-semibold font-['sora'] ">
Our <span className="bg-gradient-to-r font-semibold font-['Sora'] from-[#87D8E3] via-[#EDBF79] to-[#D95494] bg-clip-text text-transparent">Happy</span> Clients
          </div>
          <div className="text-white font-[sora]">
Dummy ipsum dolor sit amet, consectetur adipiscing elit
          </div>
        </div>
        <div className="max-md:p-[24px] max-md:my-10 outline-1 outline-white/90 rounded-[20px]">
<div className="max-md:flex max-md:flex-col max-md:gap-30">
  <div className="max-md:flex max-md:flex-col max-md:gap-2">
    <div className="justify-start"><Image src="/bi_quote.svg" width={60} height={50} alt="magic"/></div>
    <div className="text-[#8FD797] font-['sora']  max-md:font-[30px]">We are Campion Savings Club based in Zimbabwe, South Africa, UK, USA 
      and Australia. Chromezy is very professional, efficient, and reliable.</div>
  </div>
  <div className="max-md:flex max-md:flex-col max-md:gap-8">
  <div>
    <div className="text-white text-sx font-bold font-['sora'] ">JEFTA MUGWENI</div>
    <div className="text-white/60 font-['sora']">(CEO), Campion Savings Club</div>
  </div>
  <div> <hr className="bg-white/90"></hr>
  </div>
 
  
  <div className="max-md:flex max-md:flex-col max-md:gap-4">
    <div>
      <div><Image src="/logos_airflow.svg"  width={100} height={100} alt="magic"/> </div>
      
    </div>
    <div className="text-white/60 font-['sora'] text-xs max-md:flex max-md:flex-col max-md:gap-2">
<div>Star Rating  - 5 / 5</div>
<div>Project - Custom CRM MVP Development</div>
<div>Country - Zimbabwe</div>
    </div>
  </div>
  </div>
</div>
</div>
       </div>
       <div className="max-md:flex justify-center max-md:flex-row max-md:gap-2.5">
        <div className="w-2 h-2 bg-zinc-300"></div>
        <div className="w-2 h-2 border border-zinc-300/40"></div>
        <div className="w-2 h-2 border border-zinc-300/40"></div>
        <div className="w-2 h-2 border border-zinc-300/40"></div>
       </div>
       </section>
       {/* fourth section end */}
       {/* fifth section start */}
       <section className="max-md:my-[64px] max-md:mx-6">
        <div className="max-md:flex max-md:flex-col max-md:gap-5">
          <div>
            <div className="max-md:flex max-md:flex-col max-md:gap-4.5">
              <div className="text-white text-2xl font-semibold font-['sora']"><span className="bg-gradient-to-r font-semibold font-['Sora'] from-[#87D8E3] via-[#EDBF79] to-[#D95494] bg-clip-text text-transparent">Success</span> Stories</div>
              <div className="text-white/80 font-['sora']">Dummy ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis.</div>

            </div>

          </div>
          <div>
            
            <div className="max-md:flex max-md:flex-col max-md:gap-4">
              <div className="relative"><Image className="rounded-3xl" src="/Rectangle 3157.png"  height={100} alt="magic" width={500}/>
              <div className="">
              <div className="absolute max-md:m-[15px] max-md:py-1 max-md:px-2 rounded-full text-black max-md:top-0 max-md:left-0 bg-white shadow-lg outline-white shadow-white-500/50   outline-1 outline-offset-[-1px] font-xs font-['sora'] ">Success Stories</div>
              </div>
              <div className="absolute max-md:top-0 max-md:right-0 ">
                <div className="">
                  <Image className="max-md:m-[18px] rounded-full max-md:p-[10px] bg-black/60 max-md:top-0 max-md:right-0" src="/arrow-up-right.svg" height={50} alt="magic" width={50}/>

                </div>
                </div>
                <div className="text-black max-md:flex max-md:w-[100%] max-md:flex-col max-md:gap-2 bg-white absolute max-md:bottom-0 w-full max-md:px-[15px] max-md:py-[20px] rounded-tr-4xl rounded-br-2xl rounded-bl-2xl">
                  <div className="text-2xl font-semibold font-['sora']">FinConnect</div>
                  <div className="font-['sora']">Customer Relationship Management (CRM)</div>
                </div>
                </div>
<div className="max-md:flex max-md:flex-col max-md:gap-8">
  <div className="text-white/70">
    Chromezy enhanced customer profile management and streamlined
     the sales pipeline, boosting the bank teams efficiency and daily 
     performance significantly.
  </div>
  <div className="text-white/60 max-md:flex max-md:flex-col max-md:gap-2">
    <div className="max-md:flex max-md:col-row max-md:gap-2">
      <div className=""><Image src="ph_seal-check-fill.svg" width={20} height={20} alt="magic"/></div>
      <div>Upselling success rate</div>
    </div>
    <div className="max-md:flex max-md:col-row max-md:gap-2">
      <div className=""><Image src="ph_seal-check-fill.svg" width={20} height={20} alt="magic"/></div>
      <div>Real-time customer insights</div>
    </div>
    <div className="max-md:flex max-md:col-row max-md:gap-2">
      <div className=""><Image src="ph_seal-check-fill.svg" width={20} height={20} alt="magic"/></div>
      <div>Prompt Issue Resolution</div>
    </div>
    <div className="max-md:flex max-md:col-row max-md:gap-2"> 
      <div className=""><Image src="ph_seal-check-fill.svg" width={20} height={20} alt="magic"/></div>
      <div>Omnichannel support accessibility</div>
    </div>
    <div className="max-md:flex max-md:col-row max-md:gap-2">
    <div className=""><Image src="ph_seal-check-fill.svg" width={20} height={20} alt="magic"/></div>
    <div>Faster Communication</div>
    </div>
    <div className="max-md:flex max-md:col-row max-md:gap-2">
    <div className=""><Image src="ph_seal-check-fill.svg" width={20} height={20} alt="magic"/></div>
    <div>Swift Operations</div>
  </div>
  </div>
  <div className="max-md:flex max-md:flex-row max-md:gap-2.5 max-md:justify-center">
  <div className="w-2 h-2 bg-zinc-300"></div>
  <div className="w-2 h-2 border-2 border-white/60"></div>
  <div className="w-2 h-2 border-2 border-white/60"></div>
  <div className="w-2 h-2 border-2 border-white/60"></div>
  <div className="w-2 h-2 border-2 border-white/60"></div>
 </div>
</div>
 
<div>
 
</div>
              
            </div>

            

          </div>
          <div>
            <div className="max-md:w-full max-md:flex max-md:flex-row max-md:gap-2 max-md:justify-center max-md:p-6 bg-black rounded-full">
              
              <div className="max-md:lr-2"><Image src="arrow-up-right.svg" alt="magic" width={20} height={100}/></div>
              <div className="text-white font-['sora']">Read more success stories</div>
              
            </div>
          </div>
        </div>
       </section>
       {/* fifth section end */}
       {/* sixth section start */}
       <section className="max-md:overflow-hidden max-md:overflow-x bg-[#BDD5F4] max-md:py-[64px]">
        <div className="max-md:flex max-md:flex-col max-md:gap-5">
        <div>
          <div className="max-md:pt-6"><Image src="/1506.png" width={500} height={100} alt="magic" /></div>
        </div>
        <div className="max-md:px-6 max-md:flex max-md:flex-col max-md:gap-4">
          <div className=" text-neutral-900 text-3xl font-bold font-['Sora'] uppercase">Innovative Technologies Keeping Us Ahead</div>
          <div className="text-black font-['sora']">Discover the impact of bespoke digital solutions tailored precisely 
            to your businesss distinct requirements.</div>
        </div>
        {/* box-1 start */}
        <div className="max-md:px-3 max-md:mx-3 rounded-xl  bg-gradient-to-r  from-[#DBEBFF] to-[#DBEBFF] bg-clip-bg text-transparent" >
          <div className="max-md:px-[2px] max-md:py-[24px]">
          <div className="text-black max-md:flex max-md:flex-col max-md:gap-4">
            <div>
                  01
            </div>
            <div className="text-2xl font-semibold font-['Sora']">
              Web App Development
            </div>
            <div>
              <div className="grid max-md:grid-cols-3 max-md:grid-rows-3 max-md:overflow-hidden max-md:gap-3">
                <div className="max-md:flex max-md:flex-row max-md:gap-1 max-md:py-2 max-md:px-3 bg-white/40 shadow-lg max-md:w-[100px] rounded-full">
                  <div className=""><Image src="/react.svg" alt="magic" height={100} width={18}/></div>
                  <div>React</div>
                </div>
                <div className="max-md:flex max-md:flex-row max-md:gap-1 max-md:py-2 max-md:px-3 bg-white/40 shadow-lg max-md:w-[100px] rounded-full">
                  <div><Image src="/nodejs.svg" alt="magic" height={100} width={18}/></div>
                  <div>Node</div>
                </div>
                <div className="max-md:flex max-md:flex-row max-md:gap-1 max-md:py-2 max-md:px-3 bg-white/40 shadow-lg max-md:w-[100px] rounded-full">
                  <div><Image src="/Angular.svg" alt="magic" width={18} height={100}/></div>
                  <div>Angular</div>
                </div>
                <div className="max-md:flex max-md:flex-row max-md:gap-1 max-md:py-2 max-md:px-3 bg-white/40 shadow-lg max-md:w-[100px] rounded-full">
                  <div><Image src="/Angular.svg" alt="magic" width={18} height={100}/></div>
                  <div>Angular</div>
                </div>
                <div className="max-md:flex max-md:flex-row max-md:gap-1 max-md:py-2 max-md:px-3 bg-white/40 shadow-lg max-md:w-[100px] rounded-full">
                  <div><Image src="/Angular.svg" alt="magic" width={18} height={100}/></div>
                  <div>Angular</div>
                </div>
                <div className="max-md:flex max-md:flex-row max-md:gap-1 max-md:py-2 max-md:px-3 bg-white/40 shadow-lg max-md:w-[100px] rounded-full">
                  <div><Image src="/Angular.svg" alt="magic" width={18} height={100}/></div>
                  <div>Angular</div>
                </div>
                <div className="max-md:flex max-md:flex-row max-md:gap-1 max-md:py-2 max-md:px-3 bg-white/40 shadow-lg max-md:w-[100px] rounded-full">
                  <div><Image src="/Angular.svg" alt="magic" width={18} height={100}/></div>
                  <div>Angular</div>
                </div>
                <div className="max-md:flex max-md:flex-row max-md:gap-1 max-md:py-2 max-md:px-3 bg-white/40 shadow-lg max-md:w-[100px] rounded-full">
                  <div><Image src="/Angular.svg" alt="magic" width={18} height={100}/></div>
                  <div>Angular</div>
                </div>

              </div>
            </div>
          </div>
         </div>
        </div>  
        {/* box-1 end */}
        {/* box-2 start */}
        <div className="max-md:px-3 max-md:mx-3 rounded-xl  bg-gradient-to-r  from-[#DBEBFF] to-[#DBEBFF] bg-clip-bg text-transparent" >
          <div className="max-md:px-[2px] max-md:py-[24px]">
          <div className="text-black max-md:flex max-md:flex-col max-md:gap-4">
            <div>
                  02
            </div>
            <div className="text-2xl font-semibold font-['Sora']">
             Mobile App Development
            </div>
            <div>
              <div className="grid max-md:grid-cols-3 max-md:grid-rows-3 max-md:gap-3">
                <div className="max-md:flex max-md:flex-row max-md:gap-1 max-md:py-2 max-md:px-3 bg-white/40 shadow-lg max-md:w-[100px] rounded-full">
                  <div className=""><Image src="/react.svg" alt="magic" width={18} height={100}/></div>
                  <div>React</div>
                </div>
                <div className="max-md:flex max-md:flex-row max-md:gap-1 max-md:py-2 max-md:px-3 bg-white/40 shadow-lg max-md:w-[100px] rounded-full">
                  <div><Image src="/nodejs.svg" alt="magic" width={18} height={100}/></div>
                  <div>Node</div>
                </div>
                <div className="max-md:flex max-md:flex-row max-md:gap-1 max-md:py-2 max-md:px-3 bg-white/40 shadow-lg max-md:w-[100px] rounded-full">
                  <div><Image src="/Angular.svg" alt="magic" width={18} height={100}/></div>
                  <div>Angular</div>
                </div>
                <div className="max-md:flex max-md:flex-row max-md:gap-1 max-md:py-2 max-md:px-3 bg-white/40 shadow-lg max-md:w-[100px] rounded-full">
                  <div><Image src="/Angular.svg" alt="magic" width={18} height={100}/></div>
                  <div>Angular</div>
                </div>
                <div className="max-md:flex max-md:flex-row max-md:gap-1 max-md:py-2 max-md:px-3 bg-white/40 shadow-lg max-md:w-[100px] rounded-full">
                  <div><Image src="/Angular.svg" alt="magic" width={18} height={100}/></div>
                  <div>Angular</div>
                </div>
                <div className="max-md:flex max-md:flex-row max-md:gap-1 max-md:py-2 max-md:px-3 bg-white/40 shadow-lg max-md:w-[100px] rounded-full">
                  <div><Image src="/Angular.svg" alt="magic" width={18} height={100}/></div>
                  <div>Angular</div>
                </div>
                <div className="max-md:flex max-md:flex-row max-md:gap-1 max-md:py-2 max-md:px-3 bg-white/40 shadow-lg max-md:w-[100px] rounded-full">
                  <div><Image src="/Angular.svg" alt="magic" width={18} height={100}/></div>
                  <div>Angular</div>
                </div>
                <div className="max-md:flex max-md:flex-row max-md:gap-1 max-md:py-2 max-md:px-3 bg-white/40 shadow-lg max-md:w-[100px] rounded-full">
                  <div><Image src="/Angular.svg" alt="magic" width={18} height={100}/></div>
                  <div>Angular</div>
                </div>

              </div>
            </div>
          </div>
         </div>
        </div>
        {/* box-2 end */}
        {/* box-3 start */}
        <div className="max-md:px-3 max-md:mx-3 rounded-xl  bg-gradient-to-r  from-[#DBEBFF] to-[#DBEBFF] bg-clip-bg text-transparent" >
          <div className="max-md:px-[2px] max-md:py-[24px]">
          <div className="text-black max-md:flex max-md:flex-col max-md:gap-4">
            <div>
                  03
            </div>
            <div className="text-2xl font-semibold font-['Sora']">
              E-commerce
            </div>
            <div>
              <div className="grid max-md:grid-cols-3 max-md:grid-rows-3 max-md:gap-3">
                <div className="max-md:flex max-md:flex-row max-md:gap-1 max-md:py-2 max-md:px-3 bg-white/40 shadow-lg max-md:w-[100px] rounded-full">
                  <div className=""><Image src="/react.svg" alt="magic" width={18} height={"100"}/></div>
                  <div>React</div>
                </div>
                <div className="max-md:flex max-md:flex-row max-md:gap-1 max-md:py-2 max-md:px-3 bg-white/40 shadow-lg max-md:w-[100px] rounded-full">
                  <div><Image src="/nodejs.svg" alt="magic" width={18} height={"100"}/></div>
                  <div>Node</div>
                </div>
                <div className="max-md:flex max-md:flex-row max-md:gap-1 max-md:py-2 max-md:px-3 bg-white/40 shadow-lg max-md:w-[100px] rounded-full">
                  <div><Image src="Angular.svg" alt="magic" width={18} height={100}/></div>
                  <div>Angular</div>
                </div>
                <div className="max-md:flex max-md:flex-row max-md:gap-1 max-md:py-2 max-md:px-3 bg-white/40 shadow-lg max-md:w-[100px] rounded-full">
                  <div><Image src="Angular.svg" alt="magic" width={18} height={"100"}/></div>
                  <div>Angular</div>
                </div>
                <div className="max-md:flex max-md:flex-row max-md:gap-1 max-md:py-2 max-md:px-3 bg-white/40 shadow-lg max-md:w-[100px] rounded-full">
                  <div><Image src="Angular.svg" alt="magic" width={18} height={100}/></div>
                  <div>Angular</div>
                </div>
                <div className="max-md:flex max-md:flex-row max-md:gap-1 max-md:py-2 max-md:px-3 bg-white/40 shadow-lg max-md:w-[100px] rounded-full">
                  <div><Image src="Angular.svg" alt="magic" width={18} height={"100"}/></div>
                  <div>Angular</div>
                </div>
                <div className="max-md:flex max-md:flex-row max-md:gap-1 max-md:py-2 max-md:px-3 bg-white/40 shadow-lg max-md:w-[100px] rounded-full">
                  <div><Image src="Angular.svg" alt="magic" width={18} height={"100"}/></div>
                  <div>Angular</div>
                </div>
                <div className="max-md:flex max-md:flex-row max-md:gap-1 max-md:py-2 max-md:px-3 bg-white/40 shadow-lg max-md:w-[100px] rounded-full">
                  <div><Image src="Angular.svg" alt="magic" width={18} height={"100"}/></div>
                  <div>Angular</div>
                </div>

              </div>
            </div>
          </div>
         </div>
        </div>
        {/* box-3 end */}
        {/* box-4 start */}
        <div className="max-md:px-3 max-md:mx-3 rounded-xl  bg-gradient-to-r  from-[#DBEBFF] to-[#DBEBFF] bg-clip-bg text-transparent" >
          <div className="max-md:px-[2px] max-md:py-[24px]">
          <div className="text-black max-md:flex max-md:flex-col max-md:gap-4">
            <div>
                  04
            </div>
            <div className="text-2xl font-semibold font-['Sora']">
              Analytics
            </div>
            <div>
              <div className="grid max-md:grid-cols-3 max-md:grid-rows-3 max-md:gap-3">
                <div className="max-md:flex max-md:flex-row max-md:gap-1 max-md:py-2 max-md:px-3 bg-white/40 shadow-lg max-md:w-[100px] rounded-full">
                  <div className=""><Image src="react.svg" alt="magic" width={18} height={"100"}/></div>
                  <div>React</div>
                </div>
                <div className="max-md:flex max-md:flex-row max-md:gap-1 max-md:py-2 max-md:px-3 bg-white/40 shadow-lg max-md:w-[100px] rounded-full">
                  <div><Image src="nodejs.svg" alt="magic" width={18} height={"100"}/></div>
                  <div>Node</div>
                </div>
                <div className="max-md:flex max-md:flex-row max-md:gap-1 max-md:py-2 max-md:px-3 bg-white/40 shadow-lg max-md:w-[100px] rounded-full">
                  <div><Image src="Angular.svg" alt="magic" width={18} height={100}/></div>
                  <div>Angular</div>
                </div>
                <div className="max-md:flex max-md:flex-row max-md:gap-1 max-md:py-2 max-md:px-3 bg-white/40 shadow-lg max-md:w-[100px] rounded-full">
                  <div><Image src="Angular.svg" alt="magic" width={18} height={100}/></div>
                  <div>Angular</div>
                </div>
                <div className="max-md:flex max-md:flex-row max-md:gap-1 max-md:py-2 max-md:px-3 bg-white/40 shadow-lg max-md:w-[100px] rounded-full">
                  <div><Image src="Angular.svg" alt="magic" width={18} height={100}/></div>
                  <div>Angular</div>
                </div>
                <div className="max-md:flex max-md:flex-row max-md:gap-1 max-md:py-2 max-md:px-3 bg-white/40 shadow-lg max-md:w-[100px] rounded-full">
                  <div><Image src="Angular.svg" alt="magic" width={18} height={100}/></div>
                  <div>Angular</div>
                </div>
                <div className="max-md:flex max-md:flex-row max-md:gap-1 max-md:py-2 max-md:px-3 bg-white/40 shadow-lg max-md:w-[100px] rounded-full">
                  <div><Image src="Angular.svg" alt="magic" width={18} height={100}/></div>
                  <div>Angular</div>
                </div>
                <div className="max-md:flex max-md:flex-row max-md:gap-1 max-md:py-2 max-md:px-3 bg-white/40 shadow-lg max-md:w-[100px] rounded-full">
                  <div><Image src="Angular.svg" alt="magic" width={18} height={100}/></div>
                  <div>Angular</div>
                </div>

              </div>
            </div>
          </div>
         </div>
        </div>
       {/* box-4 end */}
       {/* box-5 start */}
        <div className="max-md:px-3 max-md:mx-3 rounded-xl  bg-gradient-to-r  from-[#DBEBFF] to-[#DBEBFF] bg-clip-bg text-transparent" >
          <div className="max-md:px-[2px] max-md:py-[24px]">
          <div className="text-black max-md:flex max-md:flex-col max-md:gap-4">
            <div>
                  05
            </div>
            <div className="text-2xl font-semibold font-['Sora']">
              Data & Cloud
            </div>
            <div>
              <div className="grid max-md:grid-cols-3 max-md:grid-rows-3 max-md:gap-3">
                <div className="max-md:flex max-md:flex-row max-md:gap-1 max-md:py-2 max-md:px-3 bg-white/40 shadow-lg max-md:w-[100px] rounded-full">
                  <div className=""><Image src="react.svg" alt="magic" width={18} height={"100"}/></div>
                  <div>React</div>
                </div>
                <div className="max-md:flex max-md:flex-row max-md:gap-1 max-md:py-2 max-md:px-3 bg-white/40 shadow-lg max-md:w-[100px] rounded-full">
                  <div><Image src="nodejs.svg" alt="magic" width={18} height={"100"}/></div>
                  <div>Node</div>
                </div>
                <div className="max-md:flex max-md:flex-row max-md:gap-1 max-md:py-2 max-md:px-3 bg-white/40 shadow-lg max-md:w-[100px] rounded-full">
                  <div><Image src="/Angular.svg" alt="magic" width={18} height={100}/></div>
                  <div>Angular</div>
                </div>
                <div className="max-md:flex max-md:flex-row max-md:gap-1 max-md:py-2 max-md:px-3 bg-white/40 shadow-lg max-md:w-[100px] rounded-full">
                  <div><Image src="Angular.svg" alt="magic" width={18} height={"100"}/></div>
                  <div>Angular</div>
                </div>
                <div className="max-md:flex max-md:flex-row max-md:gap-1 max-md:py-2 max-md:px-3 bg-white/40 shadow-lg max-md:w-[100px] rounded-full">
                  <div><Image src="/Angular.svg" alt="magic" width={18} height={100}/></div>
                  <div>Angular</div>
                </div>
                <div className="max-md:flex max-md:flex-row max-md:gap-1 max-md:py-2 max-md:px-3 bg-white/40 shadow-lg max-md:w-[100px] rounded-full">
                  <div><Image src="Angular.svg" alt="magic" width={18} height={"100"}/></div>
                  <div>Angular</div>
                </div>
                <div className="max-md:flex max-md:flex-row max-md:gap-1 max-md:py-2 max-md:px-3 bg-white/40 shadow-lg max-md:w-[100px] rounded-full">
                  <div><Image src="Angular.svg" alt="magic" width={18} height={"100"}/></div>
                  <div>Angular</div>
                </div>
                <div className="max-md:flex max-md:flex-row max-md:gap-1 max-md:py-2 max-md:px-3 bg-white/40 shadow-lg max-md:w-[100px] rounded-full">
                  <div><Image src="Angular.svg" alt="magic" width={18} height={"100"}/></div>
                  <div>Angular</div>
                </div>

              </div>
            </div>
          </div>
         </div>
        </div>
        {/* box-5 end */}



        </div>
       </section>
       {/* sixth section end */}

       {/* seventh section start */}
       <section className='max-md:px-6 max-md:py-[64px] bg-[#BDD5F4]'>
        <div className='max-md:flex max-md:flex-col max-md:gap-12'>
        <div className='max-md:flex max-md:flex-col max-md:gap-5'>
          <div className="max-md:flex max-md:justify-end max-md:p-2"><Image src={"/catun.png"} alt='catun' width={300} height={100}/></div>
          <div className='max-md:flex max-md:flex-col text-black max-md:gap-3'>
          <div className='text-2xl font-semibold font-[Sora]'>Contact Us</div>
          <div className='font-[Sora]'>Talk with us to know how we can make you a part of a thriving digital landscape</div>
          </div>
        </div>
        <div className='max-md:flex max-md:flex-col max-md:gap-20'>
          <div className='max-md:px-[20px] max-md:py-[10px] bg-[#93BBEF] rounded-[25px]'>
            <div className='max-md:flex max-md:justify-between py-4'>
              <div className='max-md:flex max-md:flex-row max-md:gap-2'>
                <div><Image src={'phone.svg'} alt='exm' width={18} height={20}/></div>
                <div className='text-natural-900/80 text-sx'>Phone</div>
              </div>
              <div className='font-bold text-sx'>+1 315 308 0901</div>
            </div>
            <div><hr className='bg-black/10 max-md:h-0 outline-1 outline-offset-[-0.5px] outline-black/10'></hr></div>
            <div className='max-md:flex max-md:justify-between py-4'>
              <div className='max-md:flex max-md:flex-row max-md:gap-2'>
                <div><Image src={'mail.svg'} alt='exm' width={18} height={25}/></div>
                <div className='text-natural-900/80 text-sx'>Gmail</div>
              </div>
              <div className='font-bold text-sx'>sales@chromezy.com</div>
            </div>
          </div>
          <div className='bg-[#DBEBFF] rounded-2xl'>
            <div className="text-black font-semibold font-['Sora'] text-2xl max-md:p-5">
              Let’s talk!

            </div>
            <div className="max-md:px-[20px]  max-md:flex max-md:flex-col max-md:gap-5 max-md:py-[40px]">
            <div>
              <div className='text-lg'>
                What’s your name?
              </div>
              <div className='bg-white h-[45px] rounded-2xl'><input className='bg-white w-full h-[45px] rounded-lg ' type='text'/></div>
              
              
            </div>
            <div>
              <div className='text-lg'>
               What’s your email address?
              </div>
              <div className='bg-white h-[45px] rounded-2xl'><input className='bg-white w-full h-[45px] rounded-lg ' type='text'/></div>
              
              
            </div>
            <div>
              <div className='text-lg'>
               What’s your phone number?
              </div>
              <div className='bg-white h-[45px] rounded-2xl'><input className='bg-white w-full h-[45px] rounded-lg ' type='text'/></div>
              
              
            </div>
            <div>
              <div className='text-lg'>
                What are you looking for?
              </div>
              <div className='bg-white h-[45px] rounded-2xl'><input className='bg-white w-full h-[45px] rounded-lg ' type='text' /></div>
              
              
            </div>
            <div>
              <div className='text-lg'>
               How can we help you?
              </div>
              <div className='bg-white h-[45px] rounded-2xl'><input className='bg-white w-full h-[45px] rounded-lg ' type='text'/></div>
              
              
            </div>
            <div><div className='text-lg bg-black text-white max-md:flex max-md:justify-center rounded-full px-[20px] py-[18px]'>
              Send Request</div></div>
            </div>
          </div>
        </div>
</div>
       </section>
       {/* seventh section end */}

       {/* footer sections start */}

       <section className='max-md:px-6 max-md:py-8'>
        <div className='max-md:flex max-md:flex-col max-md:gap-6'>
          <div className='max-md:flex max-md:flex-col max-md:gap-5'>
            <div><Image src={'logo-final 2.svg'} alt='mega' width={250} height={100} /></div>
            <div className="text-normal text-white/60 font-['sora']">Not just about software & Product development; were your tech partners, crafting modern digital solutions for next-gen excellence!</div>
          </div>
          <div className='max-md:flex max-md:flex-col max-md:gap-8'>
            <div className='max-md:flex max-md:flex-col max-md:gap-2'>
            <div className='max-md:flex max-md:justify-row max-md:gap-3 max-md:pl-5'>
              <div><Image src={"phone.svg"} width={20} height={10} alt='img' /></div>
              <div className='text-white  text-normal font-["sora"]'>+1 315 308 0901</div>
            </div>
            <div className='max-md:flex max-md:justify-row max-md:gap-3 max-md:pl-5'>
              <div><Image  src={"mail.svg"} width={20} height={10} alt='img' /></div>
              <div className='text-white  text-normal font-["sora"]'>sales@chromezy.com</div>
            </div>
            </div>
            <div className='max-md:flex max-md:justify-center max-md:flex-row max-md:gap-5'>
            <div>
              <div className="bg-black max-md:text-sx w-full max-md:px-5 max-md:py-3 rounded-full text-white max-md:flex max-md:justify-start font-['sora']"><button>Work with us</button></div>
              <div><button>Join the team</button></div>
            </div>
            <div>
              <div className="bg-black max-md:text-sx w-full text-white max-md:px-5 max-md:py-3 rounded-full max-md:flex max-md:justify-start font-['sora']"><button>Work with us</button></div>
              <div><button>Join the team</button></div>
            </div>
            </div>
          </div>
          <div className='max-md:flex max-md:flex-col max-md:gap-5'>
            <div className="max-md:flex max-md:flex-col max-md:gap-3 text-md font-normal font-['inert'] max-md:bg-[#101523] max-md:p-5 rounded-2xl">
              <div className='max-md:flex max-md:justify-between'>
                <div className='text-white'>Home</div>
                <div><Image src={'chevron-right.svg'} alt='img' width={25} height={15}/></div>
              </div>
              <div className='text-white/5'><hr></hr></div>
              <div className='max-md:flex max-md:justify-between'>
                <div className='text-white'>About Us</div>
                <div><Image src={'chevron-right.svg'} alt='img' width={25} height={15}/></div>
              </div>
              <div className='text-white/5'><hr></hr></div>
              <div className='max-md:flex max-md:justify-between'>
                <div className='text-white'>Career</div>
                <div><Image src={'chevron-right.svg'} alt='img' width={25} height={15}/></div>
              </div>
              <div className='text-white/5'><hr></hr></div>
              <div className='max-md:flex max-md:justify-between'>
                <div className='text-white'>Case Study</div>
                <div><Image src={'chevron-right.svg'} alt='img' width={25} height={15}/></div>
              </div>
              

            </div>

            <div className="max-md:flex max-md:flex-col max-md:gap-3 text-md font-normal font-['inert'] max-md:bg-[#101523] max-md:p-5 rounded-2xl">
              <div className='max-md:flex max-md:justify-between'>
                <div className='text-white'>AI</div>
                <div><Image src={'chevron-right.svg'} alt='img' width={25} height={15}/></div>
              </div>
              <div className='text-white/5'><hr></hr></div>
              <div className='max-md:flex max-md:justify-between'>
                <div className='text-white'>MVP</div>
                <div><Image src={'chevron-right.svg'} alt='img' width={25} height={15}/></div>
              </div>
              <div className='text-white/5'><hr></hr></div>
              <div className='max-md:flex max-md:justify-between'>
                <div className='text-white'>SaaS</div>
                <div><Image src={'chevron-right.svg'} alt='img' width={25} height={15}/></div>
              </div>
              <div className='text-white/5'><hr></hr></div>
              <div className='max-md:flex max-md:justify-between'>
                <div className='text-white'>E-commerce</div>
                <div><Image src={'chevron-right.svg'} alt='img' width={25} height={15}/></div>
              </div>
              

            </div>

            <div className="max-md:flex max-md:flex-col max-md:gap-3 text-md font-normal font-['inert'] max-md:bg-[#101523] max-md:p-5 rounded-2xl">
              <div className='max-md:flex max-md:justify-between'>
                <div className='text-white'>Tearm</div>
                <div><Image src={'chevron-right.svg'} alt='img' width={25} height={15}/></div>
              </div>
              <div className='text-white/5'><hr></hr></div>
              <div className='max-md:flex max-md:justify-between'>
                <div className='text-white'>Privacy</div>
                <div><Image src={'chevron-right.svg'} alt='img' width={25} height={15}/></div>
              </div>
            
              
              
              

            </div>
          </div>
        </div>
       </section>

       {/* footer sections end */}

      </div>
    </>
  );
}
