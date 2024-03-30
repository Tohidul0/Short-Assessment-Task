import React, { useEffect, useState } from 'react';
import Singlepost from '../Components/Singlepost';

function Dashboard(props) {
    const [allpost, setAllpost] = useState([]);
    useEffect(() =>{
        const laodposts = async () =>{
              try{
                const res = await fetch(`http://localhost:3000/api/mission/allpost`, {
                    method: 'GET',
                    headers: {
                      'Content-Type': 'application/json',
                    },
                    credentials: 'include', 
                  });
              const data = await res.json()
              setAllpost(data.posts); 
              console.log(allpost);
              console.log(data);
              console.log( typeof( allpost))
              } 
              catch (err){
                console.log(err);
              }
            
        }
        laodposts();
    }, [])





    return (
        
        <div>
            <h1 className=' m text-center my-10 text-5xl '> All Mission</h1>
            <div>
                {
                    allpost ? (
                        <div className='border-2 mx-10 p-20'>
                            {allpost.map(post =>(
                              <Singlepost key={post._id} post={post}></Singlepost>  
                            ))}
                        </div>
                    ) : (<div>
                        there is no post
                    </div>)
                }
            </div>
        </div>
    );
}

export default Dashboard;