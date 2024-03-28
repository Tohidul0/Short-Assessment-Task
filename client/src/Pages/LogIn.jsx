import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Alert, Button, Label, Spinner, TextInput } from 'flowbite-react';




function LogIn(props) {
    const [formData, setFormData] = useState({});
    const [error, setError] = useState(null)
    const navigate = useNavigate('');
    const [loading, setLoading] = useState(false);
    //const apiUrl = process.env.REACT_APP_BACKEND_URL ;
    
    
    // hendleChane part----------------------------------------
    const hendleChange =(e) =>{
        setFormData({...formData, [e.target.id] : e.target.value.trim() })
        
    }




    // onsubmit part------------------------------------------
    const hendleSubmit = async (e) =>{
        e.preventDefault(); 
        setLoading(true)
        console.log(formData)
        console.log('clickeeddd')
        if(!formData.email || !formData.password || formData.email ==='' || formData.password === ''){
          setError("All field required");
          console.log(error)
          setLoading(true)
        }
        try{
            const res = await fetch(`${apiUrl}/api/signIn`,{
                method: "POST",
                headers: {'Content-Type' : 'application/json'},
                credentials: 'include',
                body: JSON.stringify(formData)
                
            });
           
            const data = await res.json();
            if(data.success === "false"){
                
                
                setError(data.maessage);
                
            }
            if(res.ok){
                // dispatch(signInSuccess(data));
                navigate('/');
            }
        }
        catch(err){
            
            setError(err.meassage);
        }
    }


    return (
        <div className='mt-20  min-h-screen md:mx-auto sm:px-7  flex justify-center flex-col md:flex-row   max-w-3xl '>
            
            <div className=' w-full mx-auto '>
            <form  onSubmit={hendleSubmit}>
                
                <Label className='mt-5' value='Your Email'/>
                <TextInput
                    type='text'
                    placeholder='your@gmail.com'
                    id='email'
                    onBlur={hendleChange}
                    />
                <Label className='mt-5' value='Your Password'/>
                <TextInput
                    type='password'
                    placeholder='Password'
                    id='password'
                    onBlur={hendleChange}
                    />
                <Button type="submit" className='mt-5 mb-5 w-full' disabled={loading} >
                    {
                      loading ? (
                        <>
                        <Spinner className='text-sm'/> loading.....
                        </>
                        
                      )
                      :
                        "Log In"
                    }
                </Button>
                

            </form>
            <p className='text-sm mt-2'>don't have an account?
            <Link to='/register'>
            <span className='text-cyan-500 font-semibold'>Sign Up</span>
            </Link>
            </p>
            {error && (
                <Alert className='mt-5' color='failure'>{error}</Alert>
            )
                
            }
            </div>
            
            
            
        </div>
    );
}

export default LogIn;