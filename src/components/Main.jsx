import React from "react";
import { TypeAnimation } from "react-type-animation";
import {
  FaTwitter,
  FaFacebook,
  FaInstagram,
  FaLinkedinIn,
} from "react-icons/fa";

const Main = () => {
  return (
    <div id="main">
      <img
        className="w-full h-screen object-cover object-left"
        src="https://wallpapers.com/images/hd/kurzgesagt-l7p9deha2zbl84np.jpg"
      />
      <div className="w-full h-screen absolute top-0 left-0 bg-white/10 shadow-lg shadow-violet-800/70">
        <div className="max-w-[700px] m-auto h-full w-full flex flex-col justify-center items-center">
          <img
            className="max-w-[250px] rounded-full mb-[25px] border-solid border-4 border-[#3c1280] "
            src="https://media.licdn.com/dms/image/C4E03AQHNs0uCxLZ2dw/profile-displayphoto-shrink_800_800/0/1618587681341?e=1722470400&v=beta&t=EkRyTQpPTiAYfP4T5OtdFGgLVp9G5qtv43-_bRXuaGQ"
          />
          <h1 className="flex sm:text-5xl text-4xl font-bold text-gray-800">
            I'm Justin Rafael
          </h1>
          <h2 className="flex sm:text-3xl text-2xl pt-4 text-gray-800">
            I'm a
            <TypeAnimation
              sequence={[
                // Same substring at the start will only be typed out once, initially
                "Programmer",
                2000, // wait 1s before replacing "Mice" with "Hamsters"
                "Developer",
                2000,
                "Tech Enthusiast",
                2000,
              ]}
              wrapper="span"
              cursor={true}
              style={{
                fontSize: "1em",
                paddingLeft: "5px",
                display: "inline-block",
              }}
              repeat={Infinity}
            />
          </h2>
          <div className="flex justify-between pt-6 max-w-[200px] w-full">
            <a href="https://x.com/rafaeljustin92">
              <FaTwitter className="cursor-pointer" size={20} />
            </a>
            <a href="https://www.facebook.com/justin.rafaelzz/">
              <FaFacebook className="cursor-pointer" size={20} />
            </a>
            <a href="https://www.instagram.com/rafaeljustin92/">
              <FaInstagram className="cursor-pointer" size={20} />
            </a>
            <a href="https://www.linkedin.com/in/justin-rafael-yahya-4a81a61b8/">
              <FaLinkedinIn className="cursor-pointer" size={20} />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Main;
