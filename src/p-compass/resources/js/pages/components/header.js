import React from 'react';
import { Link } from 'react-router-dom';


const header=() => {

    return (
    <>
 <body className="content ">
 <header className="  h-20 bg-gray-500">
    <nav className="flex p-3 objects-center justify-between">
      <h2 className="text-white font-bold cursor-pointer
      pt-2 text-4xl
      text-center">
          <Link to="/" style={{ color: '#FFF' }} >
          P-compass
          </Link>
        </h2>
     </nav>
  </header>
</body>
    </>
    );
}


export default header;
