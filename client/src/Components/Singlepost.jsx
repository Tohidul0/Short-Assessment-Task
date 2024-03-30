import React from 'react';

function Singlepost(props) {
    const {content, title, catagory} = props.post;
    return (
        <div className=' border-4 rounded-md m-5'>
            <h1>Title : {title}</h1>
            <p>Description : {content}</p>
            {
                catagory === "Open" ? (
                    <h1 className=' text-green-600'>Status : {catagory}</h1>
                ) : (
                    <h1 className=' text-red-600'>Status : {catagory}</h1>
                )
            }
        </div>
    );
}

export default Singlepost;