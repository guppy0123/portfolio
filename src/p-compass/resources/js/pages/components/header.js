import React from 'react';


const header=() => {

    return (
    <>
 <body className="content ">
  <header className="  h-20 bg-primary">
    <nav className="flex p-3 objects-center justify-between">
      <h2 className="text-white font-bold cursor-pointer
      pt-2 text-lg
      sm:pt-1 sm:text-5xl ">P-compass</h2>
      <div className="flex object-center">
        <span className="text-white  mr-4 pt-4  px-3 text-xs sm:text-base lg:text-xl sm:pt-5 cursor-pointer hover:text-gray-200"
         variant="contained" href={`/about`}>このサイトについて</span>
        <button className="bg-transparent text-gray-200 p-2 rounded border border-gray-300 mr-4 hover:bg-gray-100 hover:text-gray-700">Sign in</button>
        <button className="bg-gray-900 text-gray-200 py-2  px-3 rounded hover:bg-gray-800 hover:text-gray-100">Sign up for free</button>
       </div>
     </nav>
  </header>
</body>
    </>
    );
}


export default header;
