import React, { useState } from "react";

const PasswordGeneratorApp = () => {
  const [Password, setPassword] = useState("");
  const [upperCase, setupperCase] = useState(false);
  const [lowerCase, setlowerCase] = useState(false);
  const [incNumber, setincNumber] = useState(false);
  const [incIntegers, setincIntegers] = useState(false);
  const [length, setlength] = useState(8);
  const [passStrength, setPassStrength] = useState(0)
  const generatePassword = () => {
    const upperCaseAlpha = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    const lowerCaseAlpha = "abcdefghijklmnopqrstuvwxyz";
    const number = "0123456789";
    const symbols = "!@#$%^&*()_+~`|}{[]:;?><,./-=";
    let PasswordsChars = "";
    if (upperCase) PasswordsChars += upperCaseAlpha;
    if (lowerCase) PasswordsChars += lowerCaseAlpha;
    if (incNumber) PasswordsChars += number;
    if (incIntegers) PasswordsChars += symbols;
    let finalPassword = "";
    for (let i = 0; i < length; i++) {
      finalPassword += PasswordsChars.charAt(
        Math.floor(Math.random() * PasswordsChars.length)
      );
    }
    setPassword(finalPassword);
    calculateStrength();
  };

  const calculateStrength = () => {
    let strength = 0;
    if (upperCase) strength += 1;
    if (lowerCase) strength += 1;
    if (incNumber) strength += 1;
    if (incIntegers) strength += 1;
    setPassStrength(strength);
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-800 text-white">
      <div className="bg-gray-700 p-8 rounded-lg shadow-lg w-[90%] max-w-md">
        <h2 className="text-2xl font-bold mb-6 text-center">
          Password Generator
        </h2>

        <div className="flex items-center mb-4">
          <label className="font-semibold w-full">Generated Password</label>
          <input
            type="text"
            readOnly
            className="bg-gray-600 text-white p-2 w-full rounded-lg border-none outline-none"
            placeholder="Generated Password"
            value={Password}
          />
        </div>
        <div className='relative mb-4'>
          <label className="font-semibold w-full">Password Length: {length}</label>
          <input
            type="range"
            min="8"
            max="20"
            value={length}
            onChange={(e) => setlength(Number(e.target.value))}
            className="w-full h-2 bg-gray-600 rounded-lg appearance-none cursor-pointer"
          />
        </div>

        <div className="flex items-center space-x-2 mb-4">
          <input
            type="checkbox"
            id="uppercase"
            checked={upperCase}
            onChange={(e) => setupperCase(e.target.checked)}
          />
          <label htmlFor="uppercase">Include Uppercase</label>
        </div>

        <div className="flex items-center space-x-2 mb-4">
          <input
            type="checkbox"
            id="lowercase"
            checked={lowerCase}
            onChange={(e) => setlowerCase(e.target.checked)}
          />
          <label htmlFor="lowercase">Include Lowercase</label>
        </div>

        <div className="flex items-center space-x-2 mb-4">
          <input
            type="checkbox"
            id="numbers"
            checked={incNumber}
            onChange={(e) => setincNumber(e.target.checked)}
          />
          <label htmlFor="numbers">Include Numbers</label>
        </div>

        <div className="flex items-center space-x-2 mb-4">
          <input
            type="checkbox"
            id="specialChars"
            checked={incIntegers}
            onChange={(e) => setincIntegers(e.target.checked)}
          />
          <label htmlFor="specialChars">Include Special Characters</label>
        </div>

        <div className="mb-4">
          <label className="font-semibold">Password Strength:</label>
          <div className="bg-gray-600 h-2 rounded-full mt-1">
          <div
              className={`h-full rounded-full ${
                passStrength === 0 ? "bg-gray-300 w-2" :
                passStrength === 1 ? "bg-red-500 w-1/4" : 
                passStrength === 2 ? "bg-yellow-500 w-1/2" :
                passStrength === 3 ? "bg-purple-500 w-3/4" :
                passStrength === 4 ? "bg-green-500 w-full" :
                "bg-gray-300 w-1/4"
              }`}
              ></div>
          </div>
        </div>

        <button
          onClick={generatePassword}
          className="bg-blue-500 hover:bg-blue-600 w-full py-2 rounded-lg font-semibold transition-colors"
        >
          Generate Password
        </button>
      </div>
    </div>
  );
};

export default PasswordGeneratorApp;
