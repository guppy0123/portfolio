import React from 'react';
import ReactDOM from 'react-dom';
import { Button, Card } from '@material-ui/core';

function Home() {
    return (
    <>
   <head>

</head>
 <body className="content ">
  <header className="  h-20 bg-primary">
    <nav className="flex p-3 objects-center justify-between">
      <h2 className="text-white font-bold cursor-pointer
      pt-2 text-lg

       sm:text-4xl ">P-compass</h2>
      <div className="flex object-center">
        <span className="text-white  mr-2 pt-3  px-3 text-xs sm:text-base lg:text-xl sm:pt-5 cursor-pointer hover:text-gray-200">このサイトについて</span>
        <button className="bg-transparent text-gray-200 p-2 rounded border border-gray-300 mr-4 hover:bg-gray-100 hover:text-gray-700">Sign in</button>
        <button className="bg-gray-900 text-gray-200 py-2  px-3 rounded hover:bg-gray-800 hover:text-gray-100">Sign up for free</button>
       </div>
     </nav>
  </header>
  <body className="flex flex-col">

    {/* 画像挿入する */}
    <div className="relative bg-white rounded over-flow-hidden">
     <img
     src='../images/home.jpeg'
     alt="practice-image"
     className="object-cover "/>
         <div class="absolute
         top-1/3 right-32 bottom-4 w-1/3 bg-white text-secondary-200 text-sm font-bold rounded-3xl
         md:bottom-1/4
         md:top-1/3 md:right-60  md:w-1/3 ">
           <div className="text-gray-800 text-center
           text-sm pt-3
           sm:pt-2
           lg:text-lg
           xl:pt-12 xl:text-4xl ">目標を達成し</div><br/>
           <div className="text-gray-800 text-center
           text-sm pb-1
           sm:pb-4
           lg:text-lg lg:pb-16
           xl:text-4xl ">あなたの望む未来を作る</div>
           <div class="absolute  bg-primary hover:bg-primary1 cursor-pointer text-gray  font-bold rounded-full text-center
            right-1/4 w-1/2    text-white pt-2 pb-1
            md:top-48 sm:pb--2 md:text-2xl
           lg:top-42 lg:bottom-8  ">計画を作る
           </div>
         </div>
     </div>

    <div className="flex-grow">
      <container className="bg-white">
      </container>
    </div>
  </body>

 <footer className="bottom-0 h-64 p-8 bg-footer relative">
    <div>
      <div className="">
        <div className="text-4xl md:text-6xl text-center">
          P-compassとは
        </div>
        <div className="text-sm  md:text-2xl lg:text-4xl text-center p-4 whitespace-pre overflow-x-auto">
        あなたが達成したい目標を達成するためのタスクを
        </div>
        <div className="text-sm   md:text-2xl lg:text-4xl text-center p-1 whitespace-pre overflow-x-auto">
        計画・管理するToDo計画管理サービスです
        </div>
      </div>
    </div>
 </footer>
</body>
    </>
    );
}


export default Home;
