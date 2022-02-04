import React from 'react';
import ReactDOM from 'react-dom';
import Header from './components/header';

function Home() {
    return (
    <>
   <head>

</head>
 <body className="content ">
  <Header/>
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
             right-1/4 w-1/2   mp-4  text-white pt-2 pb-2
             md:text-2xl

            lg:top-42 lg:bottom-8 ">計画を作る
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
