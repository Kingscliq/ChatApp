import React from 'react';

const Header: React.FC<{}> = () => {

  return (
    <div className="mb-6 bg-primary">
      <div className="mx-auto w-full flex items-center justify-center mb-8 ">
        <div className="flex items-center my-4  h-auto md:w-28 w-20 ">
          <div>
            <figure>
              <img src="" alt="" />
            </figure>
            <div>
              <h4>Username</h4>
              <small>status</small>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
