import countryOptions from "@/Data/countryOptions";
import React, { useState } from "react";
import Select from "react-select";


const PhoneInput = () => {
  const [selectedCountry, setSelectedCountry] = useState(countryOptions[0]);
  const [phoneNumber, setPhoneNumber] = useState("");

  const handleCountryChange = (selectedOption) => {
    setSelectedCountry(selectedOption);
  };

  return (
    <div className="flex items-center space-x-3 border-b border-gray-300">
        {/* Country Code Selector */}
        <Select
            options={countryOptions}
            value={selectedCountry}
            onChange={handleCountryChange}
            className="w-40"
        />

        {/* Phone Number Input */}
        <input
            type="tel"
            className="w-full outline-none"
            placeholder="Enter phone number"
            value={`${selectedCountry.value} ${phoneNumber}`}
            onChange={(e) => setPhoneNumber(e.target.value.replace(selectedCountry.value, "").trim())}
        />
    </div>
  );
};

export default PhoneInput;
