import React from "react";
import devimage from '../image/devraj.jpg'
// import ButtonLink from './ButtonLink'
import PDF from '../resume/Devraj Singh front-end.pdf'
import { Link } from "react-router-dom";
const About = () => {
  return (
    <div name="about"  id="about" className="bg-[#1a1a1a] w-full h-full text-gray-300 overflow-hidden">
    {/* <ul className='circles'>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            
          </ul> */}
      <div className="h-full w-full flex flex-col justify-center items-center  ">
        <div className="max-w-[1000px] w-full    ">
          <div className="sm:text-left pl-20 pt-20  ">
          
            <h1 className=" text-4xl ">Introduction</h1>
          </div><br></br>
         
          <div className="sm: text-left pl-20  flex sm:flex flex-col  ">
          <div className=" object-contain h-[40%] w-[30%]" >

          <img 
              src={devimage}
              className=" rounded-3xl float-left  sm:float-center "
              alt=""
            />
          </div><br></br>
              <div>
              <h3 className="text-2xl ">Frontend Developer</h3>
               <p>Front-end Development I am a beginner developer looking for opportunities to expand my skills. I have knowledge of HTML, CSS, JavaScript, and BootStrap          and I am committed to improving my proficiency in these technologies.</p>
                <p>If you are looking for a motivated and dedicated front-end developer, I am available for work opportunities and excited to contribute to projects that allow me to expand my experience and knowledge.</p>
                   <br></br>
               <div className="sm: text-left pl-20  flex">
              <a href={PDF}>
               <button
                  className="text-white border-2 px-4 py-2 my-4 mx-auto flex items-center hover:bg-pink-600 hover:border-pink-600 
                  duration-300 rounded"
                        >
                  View Resume -
               </button>
              </a>
          </div>
              </div>
          </div> <br/>
          
        </div>
         
      </div>
    </div>
  );
};

export default About;
