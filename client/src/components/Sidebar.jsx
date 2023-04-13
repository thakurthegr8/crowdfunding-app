import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

import { logo, sun } from '../assets';
import { navlinks } from '../constants';

const Icon = ({ styles, name, imgUrl, isActive, disabled, handleClick }) => (
  <div className={`w-[150px] h-[50px] rounded-[10px] ${isActive === name ? 'bg-black-700' : 'bg-transparent'} flex justify-start items-center ${!disabled && 'cursor-pointer'} ${styles}`} onClick={handleClick}>
    <img src={imgUrl} alt="fund_logo" className={`w-1/2 h-1/2 ${isActive !== name && 'grayscale'}`} />
    <span className="text-white text-l ml">{name}</span>
  </div>
);

const Sidebar = () => {
  const navigate = useNavigate();
  const [isActive, setIsActive] = useState('dashboard');

  return (
    <div className="flex flex-col items-start sticky top-10 h-[93vh]">
      <Link to="/" className="mb-5">
        <div className="flex items-center">
          <Icon styles="w-[50px] h-[60px] bg-[4#1c1c2]" imgUrl={logo} />
          <span className="text-xl font-medium ml-1 text-white">RaiseOnChain</span>
        </div>
      </Link>

      <div className="flex-1 flex flex-col justify-between items-start border border-gray-500 rounded-[10px] w-[200px] py-9 mt-0">
        <div className="flex flex-col justify-start gap- w-full">
          {navlinks.map((link) => (
            <Icon 
              key={link.name}
              {...link}
              isActive={isActive}
              handleClick={() => {
                if(!link.disabled) {
                  setIsActive(link.name);
                  navigate(link.link);
                }
              }}
            />
          ))}
        </div>
{/* 
        <div className="flex justify-center items-center w-full border-t border-gray-500 py-2">
          <Icon styles="bg-[4#1c1c2] mx-2" imgUrl={sun} />
        </div> */}
      </div>
    </div>
  );
};

export default Sidebar;
