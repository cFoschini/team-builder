import React, { useState } from "react";


export default function Form(){
    const [inputs, setInputs] = useState([{
name: "",
age: "",
occ: "",
bio: ""
    }])

    const onInputChange = event => {
         setInputs({ 
            ...inputs,
            [event.target.name]: event.target.value,
        })
    };

const onSubmit = event => {
         event.preventDefault();

    };


    return(
        <div className="form">
            <form onSubmit={onSubmit}> 
                <h3>Add New Member</h3>
                <br/>
                <input type="text" placeholder="Name" name="name" onChange={onInputChange}/>
                <br/>
                <input type="text" placeholder="Age" name="age" onChange={onInputChange}/>
                <br/>
                <input type="text" placeholder="Occupation" name="occ" onChange={onInputChange}/>
                <br/>
                <input type="text" placeholder="Add bio here!" name="bio" onChange={onInputChange}/>
                <br/>
                <button onClick={event => {

                }}>Add Member</button>
            </form>
        </div>
    )
};

