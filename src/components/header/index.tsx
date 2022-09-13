import React from 'react';
import { AiFillMessage } from 'react-icons/ai'

const Header: React.FC<{}> = () => {
  const username = sessionStorage.getItem('username')

  return (
    <div className="mb-6 bg-primary text-white">
      <div className="mx-auto w-full flex items-center justify-between mb-8 ">
        <div className="flex items-center my-2  h-auto md:w-28 w-20 p-2">
          <div className='h-[30px] w-[30px] p-[10px] rounded-[50%] relative bg-green-50 text-black flex items-center justify-center'>
            <p>{username?.slice(0, 1).toUpperCase()}</p>
          </div>
          <div className='ml-4'>
            <h4>{username}</h4>
          </div>
        </div>
        <div className='p-6'>
          <AiFillMessage size={40} />
        </div>
      </div>
    </div>
  );
};

export default Header;
