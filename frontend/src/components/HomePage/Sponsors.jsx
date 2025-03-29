import React from "react";
import AwsLogo from "../../assets/aws-image.png"; // Adjust path
import CloudGuruLogo from "../../assets/cloudguru-logo.png"; // Adjust path

const Sponsors = () => {
  return (
    <div className="bg-black py-4 overflow-hidden">
      <div className="mx-auto md:w-[80%] overflow-hidden relative">
        {/* Scrolling Wrapper */}
        <div className="flex gap-10 animate-scroll w-max">
          <img src={AwsLogo} alt="AWS Logo" className="w-20 h-20" />
          <img src={CloudGuruLogo} alt="A Cloud Guru Logo" className="w-20 h-20" />
          <img src={AwsLogo} alt="AWS Logo" className="w-20 h-20" />
          <img src={CloudGuruLogo} alt="A Cloud Guru Logo" className="w-20 h-20" />
        </div>
      </div>
    </div>
  );
};

export default Sponsors;
