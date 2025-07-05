import React from "react";
import Title from "../component/Title";
import about from "../assets/about.png";
import NewLetterBox from "../component/NewLetterBox";

function About() {
  return (
    <div className="w-[99vw] min-h-[100vh] flex items-center justify-center flex-col bg-gradient-to-l from-[#141414] to-[#0c2025] gap-[50px] pt-[80px]">
      <Title text1={"ABOUT"} text2={"US"} />
      <div className="w-[100%] flex items-center justify-center flex-col lg:flex-row">
        <div className="lg:w-[50%] w-[100%] flex items-center justify-center">
          <img
            src={about}
            alt=""
            className="lg:w-[65%] w-[80%] shadow-md shadow-black rounded-sm"
          />
        </div>
        <div className="lg:w-[50%] w-[80%] flex items-start justify-center gap-[20px] flex-col mt-[20px] lg:mt-[0px]">
          <p className='lg:w-[80%] w-[100%] text-[white] md:text-[16px] lg:text-[13px]'>
            OneCart was created to simplify and elevate your online shopping
            experience. By bringing together quality products, trending styles,
            and everyday essentials on a single platform, we make shopping
            easier, faster, and more reliable. With quick delivery, dependable
            service, and great value, OneCart is your go-to destination for
            hassle-free shopping.
          </p>
          <p className='lg:w-[80%] w-[100%] text-[white] md:text-[16px] lg:text-[13px]'>
            We’re built for today’s lifestyle—combining convenience, style, and
            affordability in one place. From fashion and everyday essentials to
            the latest trends, OneCart delivers what you need with fast
            shipping, easy returns, and a shopping experience designed entirely
            around you.
          </p>
          <p className="lg:w-[80%] w-[100%] text-[15px] text-[white] mt-[10px] font-bold">
            Our Mission
          </p>
          <p className='lg:w-[80%] w-[100%] text-[white] md:text-[16px] lg:text-[13px]'>
            At OneCart, our mission is to transform the way you shop online. We
            connect customers with trusted brands and quality products, offering
            a streamlined, value-driven experience that fits every lifestyle.
            With a focus on convenience, reliability, and customer satisfaction,
            we’re redefining what it means to shop smart.
          </p>
        </div>
      </div>
      <div className="w-[100%] flex items-center justify-center flex-col gap-[10px]">
        <Title text1={"WHY"} text2={"CHOOSE US"} />
        <div className="w-[80%] flex items-center justify-center lg:flex-row flex-col py-[40px]">
          <div className="lg:w-[33%] w-[90%] h-[250px] border-[1px] border-gray-100 flex items-center justify-center gap-[20px] flex-col px-[40px] py-[10px] text-[white] backdrop-blur-[2px] bg-[#ffffff0b]">
            <b className="text-[20px] font-semibold text-[#bff1f9]">
              Quality Assurance
            </b>
            <p>
              We guarantee quality through strict checks, reliable sourching,
              and a commitment to customer satisfaction always.
            </p>
          </div>

          <div className="lg:w-[33%] w-[90%] h-[250px] border-[1px] border-gray-100 flex items-center justify-center gap-[20px] flex-col px-[40px] py-[10px] text-[white] backdrop-blur-[2px] bg-[#ffffff0b]">
            <b className="text-[20px] font-semibold text-[#bff1f9]">
              Convenience
            </b>
            <p>
              Shop easily with fast delivery, simple navigation, secure checkout, and everything you need in one place.
            </p>
          </div>

          <div className="lg:w-[33%] w-[90%] h-[250px] border-[1px] border-gray-100 flex items-center justify-center gap-[20px] flex-col px-[40px] py-[10px] text-[white] backdrop-blur-[2px] bg-[#ffffff0b]">
            <b className="text-[20px] font-semibold text-[#bff1f9]">
              Exceptional Customer Service
            </b>
            <p>
              Our dedicated support team ensures quick responses, helpful solutions, and a smooth shopping experience every time
            </p>
          </div>
        </div>
      </div>

      <NewLetterBox />
    </div>
  );
}

export default About;
