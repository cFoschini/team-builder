import React, {useState} from 'react'
import Form from "./Form"

export default function Members(props) {
const {input} = props;

    const [member, setMember] = useState([{
        name: "Christian",
        age: "22",
        occupation: "Sub-contractor",
        bio: "This is a bio!",
        id: 1
    },{
        name: "John",
        age: "34",
        occupation: "Senior-web-dev",
        bio: "This is a bio!",
        id: 2
    },{
        name: "Tessa",
        age: "20",
        occupation: "Nanny",
        bio: "This is a bio!",
        id: 3
    },{
        name: "Mark",
        age: "43",
        occupation: "Day-trader",
        bio: "This is a bio!",
        id: 4
    }]);

const handleDel = (id) => { 
    const newMembers = member.filter(mem => mem.id !== id);
    setMember(newMembers);
}

const handleAdd = (input, setInput) => {
    ...input
}



    return (
        <div className="member-card">
            {member.map((mem) => (
                <div className="team" key={mem.id}>
                <h3>Name: {mem.name}</h3>
                <h4>Age: {mem.age}</h4>
                <h4>Occupation: {mem.occupation}</h4>
                <p>Bio: {mem.bio}</p>
                <button onClick={() =>handleDel(mem.id)}>Delete</button>
                </div>
            ))}
            <Form/>
            <button onClick={handleAdd}>Add Member</button>
            </div>
    );
}