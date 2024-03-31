import { Button, Select, TextInput } from 'flowbite-react';
import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';

function Upadatepost(props) {
    const [formData, setFormData] = useState({});
    const [title, setTitle] = useState('');
    const [status, setStatus] = useState('');
    const [descrip , setDescrip] = useState('');

    const navigate = useNavigate();
    const {_id} = useParams()


    useEffect(() =>{
        const laodposts = async () =>{
              try{
                const res = await fetch(`http://localhost:3000/api/mission/get/${_id}`, {
                    method: 'GET',
                    headers: {
                      'Content-Type': 'application/json',
                    },
                    credentials: 'include', 
                  });
              const data = await res.json()
              
              setTitle(data[0].title);
              setDescrip(data[0].content);
              setStatus(data[0].catagory);
              
              } 
              catch (err){
                console.log(err);
              }
            
        }
        laodposts();
    }, [_id])


 
    const hendleSubmit = async (e) => {
    e.preventDefault();
    console.log(formData)
    try {
      const res = await fetch(`http://localhost:3000/api/mission/update/${_id}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        credentials: 'include',
        body: JSON.stringify(formData),
      });
      const data = await res.json();
      if (!res.ok) {
        window.alert(data.maessage);
        
      }

      else {
        navigate('/missions');
      }
    } catch (error) {
        window.alert('Something went wrong');
    }
  };



    return (
        <div className='min-h-screen pt-10'>
            <h1 className='text-3xl mx-auto text-center'>Update post</h1>
            <form onSubmit={hendleSubmit}>
            
            
            <TextInput type='text'id="title"   placeholder={title} className=' sm:w-full md:w-3/5 mx-auto mt-5' onBlur={(e) => setFormData({...formData,[e.target.id] : e.target.value})}></TextInput>
            <Select id="catagory"  className='sm:w-full md:w-3/5 mx-auto mt-5' onBlur={(e) => setFormData({...formData,[e.target.id] : e.target.value})}>
                <option type="uncategorized">Choose a Status</option>
                <option value="Open">Open</option>
                <option value="Closed">Closed</option>
            </Select>
            <div className='sm:w-full md:w-3/5 mx-auto'>
            <textarea id="content" onBlur={(e) => setFormData({...formData,[e.target.id] : e.target.value})} placeholder={descrip} name="Description" rows="4" className=" w-full mx-auto  border rounded-md  mt-5 bg-gray-700 text-white leading-tight"></textarea>
            </div>
            <Button type='submit' className='px-10 rounded-md  mx-auto mt-5 bg-gradient-to-r from-lime-400 to-green-500'>Save</Button>
            </form>
        </div>
    );
}

export default Upadatepost;