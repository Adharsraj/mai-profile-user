"use client"
import React, { useState } from 'react';
import Image from 'next/image';
import { templatedata } from '../../../constants';
import { MaxWidthWrapper } from '@/components/ui/MaxWidthWrapper';

const TemplatePage: React.FC = () => {
  const data = templatedata[0];

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();   
    console.log('Form data:', formData);
  };

  return (
    <div>
      <div className="md:hidden top-8 left-4 z-10">
        <button
          onClick={() => window.history.back()}
          className="bg-white shadow-md border px-2 py-2 border-black rounded w-100 flex items-center justify-center"
          style={{ marginTop: '16px', marginBottom: '8px', fontFamily: 'FontAwesome' }}
        >
          <img
            src="/Images/templates/anklebracket.svg"
            alt="Ankle Bracket"
            className="h-4 w-4 inline-block align-middle mr-1"
          />
          Back
        </button>
      </div>



      <div className="relative w-full h-screen bg-cover bg-center rounded-xl" style={{ backgroundImage: "url('/Images/templates/Frame.svg')" }}>
        <div className="absolute inset-0 flex flex-col justify-start p-4 text-white">
          <div className="flex justify-between px-4">
            <div className="cursor-pointer md:ml-12">
              <Image src="/Images/templates/company1.svg" alt="Share Logo" width={50} height={50} />
            </div>
            <div className="cursor-pointer md:mr-12 mt-2">
              <Image src="/Images/templates/share.svg" alt="Logo" width={30} height={30} />
            </div>
          </div>
          <div className="flex items-center justify-center flex-col mt-4">
            <div className="rounded-full overflow-hidden w-48 h-48 md:w-60 md:h-60 lg:w-72 lg:h-72">
              <Image
                src="/Images/templates/dp1.svg"
                alt="Rounded Image"
                layout="responsive"
                width={200}
                height={200}
                className="object-cover"
              />
            </div>
            <h1 className="text-lg md:text-xl font-thin underline decoration-red-500 decoration-1 underline-offset-4 mt-6">
              <span className="text-red-500">Hello,</span> I'm
            </h1>
            <h2 className="text-2xl md:text-3xl mt-4 underline decoration-red-900 decoration-1 underline-offset-4 font-bold">{data.name}</h2>
            <h3 className="text-3xl md:text-4xl mt-2 font-bold">{data.designation}</h3>
            <p className="text-md md:text-xl font-thin mt-4 md:w-1/2 lg:w-1/3 mx-auto text-center">{data.about}</p>

            {/* Contact Information */}
            <div className="mt-4 text-md md:text-lg flex flex-wrap justify-center">
              <div className="flex items-center mr-4 mb-2">
                <Image src="/Images/templates/email.svg" alt="Email Icon" width={20} height={20} className="mr-2" />
                <span>{data.email}</span>
              </div>
              <div className="flex items-center mb-2 md:ml-4">
                <Image src="/Images/templates/mobile.svg" alt="Mobile Icon" width={20} height={20} className="mr-2" />
                <span>{data.mobile}</span>
              </div>
              <div className="flex items-center mr-4 mb-2">
                <Image src="/Images/templates/website.svg" alt="Website Icon" width={20} height={20} className="mr-2" />
                <span>{data.website}</span>
              </div>
              <div className="flex items-center mb-2 text-sm">
                <Image src="/Images/templates/linked.svg" alt="LinkedIn Icon" width={20} height={20} className="mr-2" />
                <span>{data.linkedin}</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* About Me Section */}
      <div className="text-black p-8 mx-auto w-full md:w-2/3 lg:w-1/2 ">
        <h2 className="text-xl md:text-2xl sm:text-xs font-bold mb-4 text-center underline decoration-red-500 decoration-1 underline-offset-4 text-red-500">About Me</h2>
        <p className="text-md md:text-lg text-center pl-4 text-[12px] md:text-md lg:text-lg font-bold">{data.aboutme}</p>
      </div>

      {/* Services Offered Section */}
      <div className="text-black p-8 mx-auto w-full md:w-2/3 lg:w-1/2">
        <h2 className="text-lg md:text-2xl font-bold mb-4 text-center underline decoration-red-500 decoration-1 underline-offset-4 text-red-500">
          Services Offered
        </h2>
        <div className="flex justify-center">
          {data.servicesOffered.map((service, index) => (
            <div key={index} className="flex flex-col items-center m-2">
              <Image src="/Images/templates/develop.svg" alt={`${service} Icon`} width={40} height={40} />
              <span className="text-[8px] md:text-md  mt-2 font-bold lg:text-[14px] ">{service}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Education Section */}
      <div className="text-black p-8 mx-auto w-full md:w-2/3 lg:w-1/2">
        <h2 className="text-xl md:text-2xl font-bold mb-4 text-center underline decoration-red-500 decoration-1 underline-offset-4 text-red-500 font-bold">Education</h2>
        <ul className="list-disc grid grid-cols-2 gap-4">
          {data.education.map((course, index) => (
            <li key={index} className="text-md text-[10px] md:text-md lg:text-lg">{course}</li>
          ))}
        </ul>
      </div>

      {/* Certifications Section */}
      <div className="text-black p-8 mx-auto w-full md:w-2/3 lg:w-1/2">
        <h2 className="text-xl md:text-2xl font-bold mb-4 text-center underline decoration-red-500 decoration-1 underline-offset-4 text-red-500">Certifications</h2>
        <ul className="list-inside">
          {data.certifications.map((cert, index) => (
            <li key={index} className="text-md pl-4 text-[12px] md:text-md lg:text-lg font-bold mt-4">
              <div className="flex justify-between">
                <div className="font-bold">{cert.certification}</div>
                <div className="text-gray-500">{cert.year}</div>
              </div>
              <div className="text-gray-500 mt-2 ">{cert.institute}</div>
            </li>
          ))}
        </ul>
      </div>

      {/* My Achievements Section */}
      <div className="text-black p-8 mx-auto w-full md:w-2/3 lg:w-1/2">
        <h2 className="text-xl md:text-2xl font-bold mb-4 text-center underline decoration-red-500 decoration-1 underline-offset-4 text-red-500">My Achievements</h2>
        <p className="text-md md:text-lg text-center pl-4 text-[12px] md:text-md lg:text-lg ">{data.achievements}</p>
      </div>

      {/* Languages Section */}
      <div className="text-black p-8 mx-auto w-full md:w-2/3 lg:w-1/2">
        <h2 className="text-xl md:text-2xl font-bold mb-4 text-center underline decoration-red-500 decoration-1 underline-offset-4 text-red-500">Languages</h2>
        <ul className="list-disc grid grid-cols-2 gap-4">
          {data.languages.map((language, index) => (
            <li key={index} className="flex items-center justify-center text-md md:text-lg">
              <span className="w-24">{language}</span>
            </li>
          ))}
        </ul>
      </div>

      {/* Hobbies Section */}
      <div className="text-black p-8 mx-auto w-full md:w-2/3 lg:w-1/2">
        <h2 className="text-xl md:text-2xl font-bold mb-4 text-center underline decoration-red-500 decoration-1 underline-offset-4 text-red-500">Hobbies</h2>
        <ul className="list-disc grid grid-cols-2 gap-4">
          {data.hobbies.map((hobby, index) => (
            <li key={index} className="flex items-center justify-center text-md md:text-lg">
              <span className="w-24">{hobby}</span>
            </li>
          ))}
        </ul>
      </div>

      <div className="text-black p-8 mx-auto w-full md:w-2/3 lg:w-1/2">
        <h2 className="text-xl md:text-2xl font-bold mb-4 text-center underline decoration-red-500 decoration-1 underline-offset-4 text-red-500">My Recent Works</h2>
        <div className="grid gap-8">
          {data.recentWorks.slice(0, 4).map((work, index) => (
            <div
              key={index}
              className={`grid grid-cols-1 md:grid-cols-2 gap-4 items-center ${index % 2 === 1 ? 'md:grid-flow-col-dense' : ''}`}
            >
              {index % 2 === 0 ? (
                <>
                  <div className="relative w-full h-48 md:h-64 lg:h-60">
                    <Image
                      src={work.image}
                      alt={work.projectName}
                      layout="fill"
                      objectFit="cover"
                      className="rounded-lg"
                    />
                  </div>
                  {/* Show details only on larger screens */}
                  <div className="hidden md:flex flex-col justify-center">
                    <h3 className="text-lg md:text-xl font-bold mb-2">{work.projectName}</h3>
                    <p className="text-md md:text-lg">{work.details}</p>
                  </div>
                </>
              ) : (
                <>
                  {/* Show details only on larger screens */}
                  <div className="hidden md:flex flex-col justify-center">
                    <h3 className="text-lg md:text-xl font-bold mb-2">{work.projectName}</h3>
                    <p className="text-md md:text-lg">{work.details}</p>
                  </div>
                  <div className="relative w-full h-48 md:h-64 lg:h-60">
                    <Image
                      src={work.image}
                      alt={work.projectName}
                      layout="fill"
                      objectFit="cover"
                      className="rounded-lg"
                    />
                  </div>
                </>
              )}
            </div>
          ))}
        </div>
      </div>


      {/* Contact Me Section */}
      <div className="text-black p-8 mx-auto w-full md:w-2/3 lg:w-1/2">
        <h2 className="text-xl md:text-2xl font-bold mb-4 text-center underline decoration-red-500 decoration-1 underline-offset-4 text-red-500">Contact Me</h2>
        <form onSubmit={handleSubmit} className="flex flex-col space-y-4">
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            placeholder="Name"
            className="p-2 border bg-gray-300 rounded-lg text-sm md:text-base"
          />
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="Email"
            className="p-2 border bg-gray-300 rounded-lg text-sm md:text-base"
          />
          <textarea
            name="message"
            value={formData.message}
            onChange={handleChange}
            placeholder="Message Here"
            className="p-2 border bg-gray-300 rounded-lg h-22 text-sm md:text-base"
          />
          <button type="submit" className="p-2 bg-red-500 text-white rounded hover:bg-red-600 text-sm md:text-base">Submit Now</button>
        </form>
      </div>
    </div>
  );
}

export default TemplatePage;

