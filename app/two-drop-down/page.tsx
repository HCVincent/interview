"use client";

import { useState } from "react";

const countries = [
  { name: "India", value: "IN", cities: ["Delhi", "Mumbai"] },
  { name: "Pak", value: "PK", cities: ["Lahore", "Karachi"] },
  { name: "Bangladesh", value: "BG", cities: ["Dhaka", "Chittagong"] },
];

const TwoDropDown = () => {
  const [selectedCountry, setSelectedCountry] = useState("");
  const [selectedCities, setSelectedCities] = useState<string[]>([]);
  const handleSelectedCountry = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedCountry(e.target.value);
    const cityData = countries.find(
      (country) => country.name === selectedCountry
    );
    setSelectedCities(cityData ? cityData.cities : []);
  };
  return (
    <div>
      <select name="country" id="country" onChange={handleSelectedCountry}>
        {countries.map((country) => (
          <option key={country.value}>{country.name}</option>
        ))}
      </select>
      <select name="city" id="city">
        {selectedCities.map((selectedCity) => (
          <option key={selectedCity}>{selectedCity}</option>
        ))}
      </select>
    </div>
  );
};

export default TwoDropDown;
