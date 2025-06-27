import React from "react";

const AppLoader = () => {
  return (
    <div className="w-full h-full flex justify-center items-center">
    <div className="flex flex-col justify-center items-center gap-4">
      {/* Outer spinning circle */}
      <div className="relative flex justify-center rounded-full items-center">
        {/* Spinning border circle - clockwise */}

        <div
          className="absolute w-4 h-4 border-8  border-t-transparent border-r-transparent rounded-full animate-spin-slow-3"
          style={{
            borderImage: "linear-gradient(45deg, #5881EA, #CE74F9) 1",
          }}
        ></div>
        <div className="z-10 animate-zoom-in-out">
          <svg
            width="120" // Updated width
            height="120" // Updated height
            viewBox="0 0 23 30"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M11.9785 0.574944L20.5326 9.0028L15.2043 14.4134L12.3412 11.5925L14.8487 9.04498L12.0206 6.25308L3.29677 15.1169L0.433702 12.296L11.9785 0.574944Z"
              fill="url(#paint0_linear_1556_68512)"
            />
            <path
              d="M19.9383 15.301L22.8225 18.0945L11.3721 29.9078L2.75486 21.5503L8.0423 16.0939L10.9264 18.8874L8.43246 21.4596L11.2872 24.2243L19.9383 15.301Z"
              fill="url(#paint1_linear_1556_68512)"
            />
            <defs>
              <linearGradient
                id="paint0_linear_1556_68512"
                x1="-2.40941"
                y1="10.3819"
                x2="22.5916"
                y2="2.08402"
                gradientUnits="userSpaceOnUse"
              >
                <stop stopColor="#5881EA" />
                <stop offset="1" stopColor="#CE74F9" />
              </linearGradient>
              <linearGradient
                id="paint1_linear_1556_68512"
                x1="-0.0408142"
                y1="25.2773"
                x2="24.8913"
                y2="16.796"
                gradientUnits="userSpaceOnUse"
              >
                <stop stopColor="#5881EA " />
                <stop offset="1" stopColor="#CE74F9" />
              </linearGradient>
            </defs>
          </svg>
        </div>
      </div>
    </div>
  </div>
  );
};

export default AppLoader;
