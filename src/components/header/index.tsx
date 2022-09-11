import React from 'react';
import { AiFillMessage } from 'react-icons/ai'

const Header: React.FC<{}> = () => {

  return (
    <div className="mb-6 bg-primary text-white">
      <div className="mx-auto w-full flex items-center justify-between mb-8 ">
        <div className="flex items-center my-2  h-auto md:w-28 w-20 p-2">

          <div className='h-30 w-30 rounded-full bg-green-50'>
            {/* <img src="" alt="" /> */}
          </div>
          <div>
            <h4>Username</h4>
            <small>status</small>
          </div>

        </div>
        <div>
          <AiFillMessage />
        </div>
      </div>
    </div>
  );
};

export default Header;
