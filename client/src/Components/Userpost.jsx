import React from 'react';
import { useNavigate } from 'react-router-dom';

function Singlepost(props) {
    const {content, title, catagory,slug, _id} = props.post;
    const navigate = useNavigate()
    

    const hendleDelte =  async (id) =>{
        const yesDelete = window.confirm("are you sure delete Acount?");
        if(yesDelete){
            const res = await fetch(`http://localhost:3000/api/mission/delete/${id}`, { 
            method: "DELETE",
            headers: {'Content-Type' : 'application/json'},
            credentials: 'include',
            });

            const data = await res.json();
             if(!res.ok){
                window.alert((data.maessage))
             }
            else{
                window.alert("delete post successfully")
                navigate('/dashboard')
          }
        }
    }

    return (
    <div className="  px-6 py-6 m-3 relative  w-full text-white shadow bg-gradient-to-r overflow-hidden from-[#3b99f1] via-[#4FB5FF] to-[#4FB5FF] group">
            <span className="h-[200px] duration-300 group-hover:blur-sm group-hover:top-[-30%] absolute rounded-full w-[200px] bg-gradient-to-r from-[#0064c2] top-[30%] left-[-40%] z-10 via-[#49aef7] to-[#c7e0f1]"></span>
            <span className="h-[200px] absolute rounded-full w-[200px] bg-gradient-to-tr from-[#0064c2] top-[-40%] right-[-40%] z-10 via-[#4FB5FF] duration-300 group-hover:blur-sm group-hover:top-[40%] to-[#4FB5FF]"></span>
           
            <div className="space-y-6 z-20 relative ">
                <h1 className="text-2xl font-bold">{title}</h1>
                <p>{content}</p>
                <p className={catagory === 'Open' ? " text-green-600 font-bold   w-1/6" : " text-red-600 font-bold w-1/6"}>{catagory}</p>

            </div>
            <div className='flex justify-between '>
                <button className='hover:opacity-70 border-2 rounded-md p-2 bg-indigo-500 w-32 m-5'> Upadte</button>
                <br/>
                <button onClick={()=>hendleDelte(_id)} className='hover:opacity-70 border-2 rounded-md p-2 bg-red-700 w-32 m-5'>Delete</button>
            </div>
           
    </div>
    );
}

export default Singlepost;