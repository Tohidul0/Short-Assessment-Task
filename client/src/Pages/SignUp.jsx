import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Alert, Button, Label, Spinner, TextInput } from 'flowbite-react';




function SignUp(props) {
    const [formData, setFormData] = useState({});
    const [error, setError] = useState(null)
    const navigate = useNavigate('');
    const [loading, setLoading] = useState(false);
    //const apiUrl = process.env.REACT_APP_BACKEND_URL ;
    
    
    // hendleChane part----------------------------------------
    const hendleChange =(e) =>{
        setFormData({...formData, [e.target.id] : e.target.value })
        
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
          setLoading(false)
        }
        try{
            const res = await fetch(`http://localhost:3000/api/user/alluser`,{
                method: "POST",
                headers: {'Content-Type' : 'application/json'},
                credentials: 'include',
                body: JSON.stringify(formData)
                
            });
           
            const data = await res.json();
            if(data.success === "false"){
                
                setLoading(false)
                window.alert(data.maessage);
                
            }
            if(res.ok){
                setLoading(false)
                // dispatch(signInSuccess(data));
                navigate('/');
            }
        }
        catch(err){
            setLoading(false)
            window.alert(err.message);
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
                <Label className='mt-5' value='Your username'/>
                <TextInput
                    type='text'
                    placeholder='username'
                    id='username'
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
                        <Spinner className='text-sm m-4'/> <span>loading.....</span>
                        </>
                      )
                      :
                        "Sign Up"
                    }
                </Button>
                

            </form>
            <p className='text-sm mt-2'>Allready have an account?
            <Link to='/register'>
            <span className='text-cyan-500 font-semibold'>Sign In</span>
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

export default SignUp;