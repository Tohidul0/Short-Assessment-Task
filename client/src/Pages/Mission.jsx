import { Button, Label, Select, TextInput } from 'flowbite-react';
import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

function Mission(props) {
    const [formData, setFormData] = useState({});

    const navigate = useNavigate();

 
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
    
    return (
        <div className='min-h-screen pt-10'>
            <h1 className='text-3xl mx-auto text-center'>Create A post</h1>
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
            <Button type='submit' className='sm:w-full md:w-3/5 mx-auto mt-5 bg-gradient-to-r from-lime-400 to-green-500'>Post</Button>
            </form>
            
            
        </div>
    );
}


export default Mission;