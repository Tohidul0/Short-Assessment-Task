import React, { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../contexts/Auth';

function Navbar(props) {
    const {user, logout} = useAuth();
    const [username, setUsername] = useState('');
    const navigate = useNavigate();
    
    useEffect(() => {
        // Log user data for debugging
       
       console.log(user)
        
      }, [user]);

      const gotoSignOut =  async () =>{
       
        const yesDelete = window.confirm("are you sure SignOut?");
        if(yesDelete){
            const res = await fetch(`http://localhost:3000/api/user/auth/logout`, { 
            method: "POST",
            headers: {'Content-Type' : 'application/json'},
            });

            const data = await res.json();
             if(!res.ok){
                dispatch(updateFailure(data.maessage))
             }
            else{
                // 
                logout();
                navigate('/login');
          }

            
          }
        }
    return (
        <div>
    
    <nav class="block w-full max-w-screen-xl px-6 py-3 mx-auto text-black bg-white border shadow-md rounded-xl border-white/80 bg-opacity-80 backdrop-blur-2xl backdrop-saturate-200">
            <div class="flex items-center justify-between text-blue-gray-900">
                <Link to='./'> Engagement Platform </Link>
            <div class=" lg:block">
                <ul class="flex flex-col gap-2 my-2 lg:mb-0 lg:mt-0 lg:flex-row lg:items-center lg:gap-6">
                    <li class="block p-1 font-sans text-sm antialiased font-medium leading-normal text-blue-gray-900">
                        <Link to="/home" class="flex items-center transition-colors hover:text-blue-500">
                            Home
                        </Link>
                    </li>
                    <li class="block p-1 font-sans text-sm antialiased font-medium leading-normal text-blue-gray-900">
                    <Link to="/surveys" class="flex items-center transition-colors hover:text-blue-500">
                        surveys
                        </Link>
                    </li>
                    <li class="block p-1 font-sans text-sm antialiased font-medium leading-normal text-blue-gray-900">
                    <Link to="/missions" class="flex items-center transition-colors hover:text-blue-500">
                    missions
                        </Link>
                    </li>
                    {user ? (
                        <li class="block p-1 font-sans text-sm antialiased font-medium leading-normal text-blue-gray-900">
                    <button onClick={gotoSignOut}  class="flex items-center transition-colors hover:text-blue-500">
                        LOG OUT {console.log(user)}
                    </button>
                    </li>
                    ) : (
                        <li class="block p-1 font-sans text-sm antialiased font-medium leading-normal text-blue-gray-900">
                    <Link to="/Login" class="flex items-center transition-colors hover:text-blue-500">
                        LOG IN
                        </Link>
                    </li>
                    )}
                    
                </ul>
            </div>
            
        </div>
    </nav>
  
            
    </div>
    );
}

export default Navbar;