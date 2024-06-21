import Image from "next/image";
import React from "react";
export const templatedata = {
  img: "/Images/templates/dp1.svg",
  name: "Arun C",
  designation: "UI/UX Designer",
  about:
    "Developing intuitive and engaging user interfaces for digital purposes.",
  email: "arunc12@gmail.com",
  mobile: "+91 7994185674",
  website: "www.arunc.com",
  linkedin: "Arun C",
  aboutme:
    "I'm a UX/UI Designer with a background in Psychology, which gives me a unique edge in empathizing with users and improving their experience through design.",
  servicesOffered: ["Web Design", "Mobile App Design", "Brand Identity"],
  education: [
    "SSLC",
    "Plus Two In Computer Science",
    "Diploma In DPSE",
    "Diploma in UiUx Design",
  ],
  certifications: [
    {
      year: "2020",
      institute: "Design Institute",
      certification: "Certified UX Designer",
    },
    {
      year: "2018",
      institute: "Tech University",
      certification: "Certified Web Developer",
    },
  ],
  achievements:
    "I'm a UX/UI Designer with a background in Psychology, which gives me a unique edge in empathizing with users and improving their experience through design.",
  languages: ["Hindi", "English", "Malayalam", "Tamil"],
  hobbies: ["Gaming", "Swimming", "Reading", "Dancing"],
  recentWorks: [
    {
      image: "/Images/templates/projects/red1.svg",
      projectName: "Project Name",
      details:
        "I'm a UX/UI Designer with a background in Psychology, which gives me a unique edge in empathizing with users and improving their experience through design",
    },
    {
      image: "/Images/templates/projects/red3.svg",
      projectName: "Project Name",
      details:
        "I'm a UX/UI Designer with a background in Psychology, which gives me a unique edge in empathizing with users and improving their experience through design",
    },
    {
      image: "/Images/templates/projects/red2.svg",
      projectName: "Project Name",
      details:
        "I'm a UX/UI Designer with a background in Psychology, which gives me a unique edge in empathizing with users and improving their experience through design",
    },
  ],
};

const items = [
  {
    src: "/Images/templates/email.svg",
    alt: "Email Icon",
    data: templatedata.email,
  },
  {
    src: "/Images/templates/mobile.svg",
    alt: "Mobile Icon",
    data: templatedata.mobile,
  },
  {
    src: "/Images/templates/website.svg",
    alt: "Website Icon",
    data: templatedata.website,
  },
  {
    src: "/Images/templates/linked.svg",
    alt: "LinkedIn Icon",
    data: templatedata.linkedin,
  },
];
const TemplateOne = () => {
  return (
    <div
      className="font-concord font-normal
    px-2 max-w-[1600px] 3xl:max-w-[1920px]   mx-auto lg:px-[0vw] md:px-[5vw] mt-10"
    >
      {/* hero */}
      <div className="relative">
        <Image
          src="/Images/templates/Frame.svg"
          width={100}
          height={400}
          alt="image"
          className="w-full h-[440px] lg:h-[640px] xl:h-[840px] object-cover object-bottom  rounded-t-lg md:rounded-none"
        />
        <div className="absolute  right-2 left-2 top-2 xl:top-8 lg:right-14 lg:left-14 xl:left-28 xl:right-28 text-white">
          <div className="   text-red-400 ">
            <div className="flex justify-between w-full">
              <Image
                src="/Images/templates/company1.svg"
                alt="companyLogo"
                width={30}
                height={50}
                className="md:w-[35px] xl:w-[60px]"
              />
              <Image
                src="/Images/templates/share.svg"
                alt="shareLogo"
                width={20}
                height={30}
                className="md:w-[25px] xl:w-[40px]"
              />
            </div>
          </div>
          <div className="mt-5 md:mt-[-16px] xl:mt-[-36px]">
            <div className="flex justify-center items-center">
              <Image
                src="/Images/templates/dp1.svg"
                alt="Rounded Image"
                width={120}
                height={100}
                className="md:w-[170px] xl:w-[270px] "
              />
            </div>
            <div className="text-center px-[3%] mt-5 md:mt-9">
              <div>
                <span className="border-b border-[#ED3834] text-xl lg:text-3xl xl:text-4xl pb-1 xl:pb-1.5">
                  <span className=" text-[#ED3834] ">Hello,</span>i am <br />
                  <span className="text-4xl lg:text-5xl xl:text-6xl ">
                    Arun C
                  </span>
                </span>
                <p className="text-2xl lg:text-5xl lg:mt-7 xl:text-7xl">
                  UI UX Designer
                </p>
                <p className="text-xs max-w-[290px] mx-auto lg:mt-10 lg:text-xl lg:max-w-[600px] xl:text-[26px] font-light xl:max-w-[700px]">
                  Developing intuitive and engaging user interfaces for digital
                  products
                </p>
              </div>

              <div>
                <div className="flex items-center justify-center text-[10px] ">
                  <div className="grid grid-cols-2 gap-x-4 gap-y-4 mt-4 md:grid-cols-4">
                    {items.map((item, index) => (
                      <div
                        key={index}
                        className="flex justify-left md:justify-center items-center text-xs lg:text-base xl:text-lg gap-2"
                      >
                        <Image
                          src={item.src}
                          alt={item.alt}
                          width={32}
                          height={20}
                          className="xl:w-10"
                        />
                        <span className="whitespace-nowrap">{item.data}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* aboutme */}

      {/* About Me Section */}
      <div className="px-[7%]">
        <div className=" text-center mt-4 lg:mt-10 xl:mt-24">
          <span className="border-b border-[#ED3834] text-[#ED3834]  text-xl xl:text-[44px] md:text-[25px] lg:text-3xl font-medium  ">
            About Me
          </span>
          <p className="text-[11px] xl:mt-8 font-thin text-center mt-2 opacity-80 md:text-lg lg:text-xl md:leading-6 max-w-[700px] xl:max-w-[850px] xl:leading-9 xl:text-[28px] mx-auto">
            {templatedata.aboutme}
          </p>
        </div>

        <div className=" text-center mt-4 md:mt-10 lg:mt-14 xl:mt-20 xl:max-w-[650px] mx-auto">
          <span className="border-b border-[#ED3834] text-[#ED3834] xl:text-[44px] md:text-[25px] text-xl font-medium lg:text-3xl  ">
            Services Offered
          </span>
          <div className="flex justify-around mt-2 xl:mt-5 ">
            {templatedata.servicesOffered.map((service, index) => (
              <div key={index} className="flex flex-col items-center m-2">
                <Image
                  src="/Images/templates/develop.svg"
                  alt={`${service} Icon`}
                  width={40}
                  height={40}
                  className="md:w-[50px] xl:w-[80px]"
                />
                <span className="text-[8px] md:text-lg xl:text-2xl   mt-3 font-bold lg:text-[14px]  ">
                  {service}
                </span>
              </div>
            ))}
          </div>
        </div>

        <div className=" text-center mt-4 md:mt-10 lg:mt-14 xl:mt-20   xl:max-w-[650px] mx-auto">
          <span className="border-b border-[#ED3834] text-[#ED3834] xl:text-[44px] md:text-[25px] text-xl font-medium lg:text-3xl  ">
            Education
          </span>
          <div className="flex items-center justify-center text-[10px] md:text-lg xl:text-2xl mt-3">
            <ul className="grid grid-cols-2 gap-4 list-disc list-inside">
              {templatedata.education.map((item, index) => (
                <li key={index} className="text-left ">
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className=" text-center mt-4 md:mt-10 lg:mt-14 xl:mt-20  ">
          <span className="border-b border-[#ED3834] text-[#ED3834] xl:text-[44px] md:text-[25px] text-xl font-medium lg:text-3xl  ">
            Certifications
          </span>
          <div className=" mt-3 max-w-[400px] xl:max-w-[650px]  mx-auto">
            {templatedata.certifications.map((cert, index) => (
              <div className="flex justify-between mb-2 xl: text-left  text-[10px] md:text-lg xl:text-[25px]">
                <div className=" flex flex-col leading-3 md:leading-5 xl:leading-[60px]">
                  <div className="">{cert.certification}</div>
                  <div className="text-gray-500 md:text-sm  xl:text-base">
                    {cert.institute}
                  </div>
                </div>

                <div className="text-gray-500">{cert.year}</div>
              </div>
            ))}
          </div>
        </div>

        <div className=" text-center mt-4 md:mt-10 lg:mt-14 xl:mt-20 ">
          <span className="border-b border-[#ED3834] text-[#ED3834] xl:text-[44px] md:text-[25px] text-xl font-medium lg:text-3xl  ">
            My Achievements
          </span>
          <p className="text-[11px] xl:mt-8 font-thin text-center mt-2 opacity-80 md:text-lg lg:text-xl md:leading-6 max-w-[700px] xl:max-w-[850px] xl:leading-9 xl:text-[28px] mx-auto">
            {templatedata.achievements}
          </p>
        </div>

        <div className=" text-center mt-4 md:mt-10 lg:mt-14 xl:max-w-[650px] mx-auto xl:mt-20 ">
          <span className="border-b border-[#ED3834] text-[#ED3834] xl:text-[44px] md:text-[25px] text-xl font-medium lg:text-3xl  ">
            Languages
          </span>
          <div className="flex items-center justify-center text-[10px] md:text-lg xl:text-[28px] mt-3">
            <ul className="grid grid-cols-2 xl:gap-x-28 gap-4 list-disc list-inside">
              {templatedata.languages.map((item, index) => (
                <li key={index} className="text-left">
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className=" text-center mt-4 md:mt-10 lg:mt-14 xl:max-w-[650px] mx-auto xl:mt-20 ">
          <span className="border-b border-[#ED3834] text-[#ED3834] xl:text-[44px] md:text-[25px] text-xl font-medium lg:text-3xl  ">
            Hobbies
          </span>

          <div className="flex items-center justify-center text-[10px] md:text-lg xl:text-[28px] mt-3">
            <ul className="grid grid-cols-2 gap-4 xl:gap-x-28 list-disc list-inside">
              {templatedata.hobbies.map((item, index) => (
                <li key={index} className="text-left">
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
        <div className=" text-center mt-4 md:mt-10 lg:mt-14 xl:mt-20 xl:max-w-[980px] mx-auto ">
          <span className="border-b border-[#ED3834] text-[#ED3834] xl:text-[44px] md:text-[25px] text-xl font-medium lg:text-3xl  ">
            My Recent works
          </span>
          <div className="mt-3 xl:mt-10">
            {templatedata.recentWorks.map((work, index) => (
              <div
                className={`md:mb-7 xl:gap-16 lg:flex lg:items-center lg:justify-between ${index % 2 === 0 ? "lg:flex-row" : "lg:flex-row-reverse"}`}
                key={index}
              >
                <div className="lg:w-[55%]">
                  <Image
                    src={work.image}
                    alt={work.projectName}
                    width={250}
                    height={100}
                    className="w-[200px] h-[160px] md:w-[380px] md:h-full object-cover mx-auto lg:mx-0 lg:w-full lg:h-[300px] xl:h-[340px]"
                  />
                </div>
                <div className="lg:w-[45%] lg:px-6 lg:text-left text-center mt-4 lg:mt-0 hidden lg:flex lg:flex-col">
                  <p className="text-lg font-semibold xl:text-3xl">{work.projectName}</p>
                  <p className="mt-2">{work.details}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className=" text-center mt-4 md:mt-10 lg:mt-14 xl:mt-20 ">
          <span className="border-b border-[#ED3834] text-[#ED3834] xl:text-[44px] md:text-[25px] text-xl font-medium lg:text-3xl  ">
            Contact Me
          </span>
          <div className="text-black px-[15%] max-w-[400px] lg:max-w-[800px] xl:max-w-[1000px] xl:mt-10  mx-auto w-full mt-3">
            <form className="flex flex-col space-y-4">
              <input
                type="text"
                name="name"
                placeholder="Name"
                className="p-2 border bg-[#D7D7D7] placeholder-black rounded-lg text-sm md:text-base"
              />
              <input
                type="email"
                name="email"
                placeholder="Email"
                className="p-2 border bg-[#D7D7D7] placeholder-black rounded-lg text-sm md:text-base"
              />
              <textarea
                name="message"
                placeholder="Message Here"
                className="p-2 border bg-[#D7D7D7] placeholder-black rounded-lg h-22 text-sm md:text-base"
              />
              <button
                type="submit"
                className="p-2 bg-red-500 text-white rounded hover:bg-red-600 text-sm md:text-base"
              >
                Submit Now
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TemplateOne;
