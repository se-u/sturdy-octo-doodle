import { useState } from "react";

const countries = [
  { name: "Indonesia", code: "+62" },
  { name: "United States", code: "+1" },
  { name: "United Kingdom", code: "+44" },
  { name: "Canada", code: "+1" },
  { name: "Australia", code: "+61" },
  // Add more countries as needed
];

export const CountryDropdown: React.FC = () => {
  const [selectedCountry, setSelectedCountry] = useState<string>("");

  const handleSelectChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedCountry(event.target.value);
  };

  return (
    <div>
      {/* <label htmlFor="country-select">Choose a country:</label> */}
      <select
        className="w-full text-black py-2 px-4 rounded-full border-2 text-base leading-tight border-black transform transition-transform "
        id="country-select"
        value={selectedCountry}
        onChange={handleSelectChange}
      >
        <option value="">Select a country</option>
        {countries.map((country, index) => (
          <option key={index} value={country.code}>
            {country.name} ({country.code})
          </option>
        ))}
      </select>
      {/* {selectedCountry && (
          <div>
            <p>Selected Country Code: {selectedCountry}</p>
          </div>
        )} */}
    </div>
  );
};
