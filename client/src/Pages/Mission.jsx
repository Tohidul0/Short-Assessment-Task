import { Button, Label, Select, TextInput } from 'flowbite-react';
import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Userpost from '../Components/Userpost';

function Mission(props) {
    const [formData, setFormData] = useState({});

    const navigate = useNavigate();

    const [allpost, setAllpost] = useState([]);

 
    const hendleSubmit = async (e) => {
    e.preventDefault();
    console.log(formData)
    try {
      const res = await fetch(`http://localhost:3000/api/mission/create`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        credentials: 'include',
        body: JSON.stringify(formData),
      });
      const data = await res.json();
      if (!res.ok) {
        window.alert(data.maessage);
        return;
      }

      if (res.ok) {
        navigate('/dashboard');
      }
    } catch (error) {
        window.alert('Something went wrong');
    }
  };




  useEffect(() =>{
    const getUser = async () =>{
        try{
            const loadData =JSON.parse( localStorage.getItem('user'));
            const userId = loadData._id;
            console.log(userId)

            const res = await fetch(`http://localhost:3000/api/mission/${userId}`);
            const data= await res.json();
            setAllpost(data); 
            console.log(allpost);
            console.log(data);
            console.log( typeof( allpost))
        }
        catch(err){
            console.log(err);
        }
    }
    getUser();
}, [])
    
    return (
        <div className='min-h-screen pt-10'>
            <h1 className='text-3xl mx-auto text-center font-serif font-semibold'>Create A post</h1>
            <form onSubmit={hendleSubmit}>
            
            
            <TextInput type='text'id="title"  placeholder='Title' className=' sm:w-full md:w-3/5 mx-auto mt-5' onBlur={(e) => setFormData({...formData,[e.target.id] : e.target.value})}></TextInput>
            <Select id="catagory"  className='sm:w-full md:w-3/5 mx-auto mt-5' onBlur={(e) => setFormData({...formData,[e.target.id] : e.target.value})}>
                <option type="uncategorized">Choose a Status</option>
                <option value="Open">Open</option>
                <option value="Closed">Closed</option>
            </Select>
            <div className='sm:w-full md:w-3/5 mx-auto'>
            <textarea id="content" onBlur={(e) => setFormData({...formData,[e.target.id] : e.target.value})} placeholder='Description' name="comment" rows="4" className=" w-full mx-auto  border rounded-md  mt-5 bg-gray-700 text-white leading-tight"></textarea>
            </div>
            <Button type='submit' className='px-10 rounded-md  mx-auto mt-5 bg-gradient-to-r from-lime-400 to-green-500'>Post</Button>
            </form>
            <div>
              <h1 className='text-3xl mt-20 text-center font-serif font-semibold '>Your past posts</h1>
              <div className=''>
                {
                    allpost.length>0 ? (
                        <div className='border-2 mx-10 gap-4 p-10 '>
                            {allpost.map(post =>(
                              <Userpost  key={post._id} post={post}  ></Userpost> 
                            ))}
                        </div>
                    ) : (<div className='text-2xl w-2/3 mx-auto p-10  text-center mt-10 rounded-3xl bg-rose-200'>
                        Mice could not post yet
                    </div>)
                }
            </div>
            </div>

            
        </div>
    );
}


export default Mission;