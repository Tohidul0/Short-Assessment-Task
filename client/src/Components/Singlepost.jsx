import React from 'react';

function Singlepost(props) {
    const {content, title, catagory} = props.post;
    return (
        <div className=" hover:opacity-70 px-6 py-6 m-3 relative  w-full text-white shadow bg-gradient-to-r overflow-hidden from-[#3b99f1] via-[#4FB5FF] to-[#4FB5FF] group">
      <span className="h-[200px] duration-300 group-hover:blur-sm group-hover:top-[-30%] absolute rounded-full w-[200px] bg-gradient-to-r from-[#0064c2] top-[30%] left-[-40%] z-10 via-[#49aef7] to-[#c7e0f1]"></span>
      <span className="h-[200px] absolute rounded-full w-[200px] bg-gradient-to-tr from-[#0064c2] top-[-40%] right-[-40%] z-10 via-[#4FB5FF] duration-300 group-hover:blur-sm group-hover:top-[40%] to-[#4FB5FF]"></span>
      <div className="space-y-6 z-20 relative">
        <h1 className="text-2xl font-bold">{title}</h1>
        <p>{content}</p>
        <p className={catagory === 'Open' ? "bg-[#36d14a] py-2 px-6 w-1/6" : "bg-[#ee3e3e] py-2 px-6 w-1/6"}>{catagory}</p>

      </div>
    </div>
    );
}

export default Singlepost;