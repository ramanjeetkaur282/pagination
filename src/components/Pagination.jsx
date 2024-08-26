import axios from "axios";
import { useEffect, useState } from "react";

const API_URL="https://jsonplaceholder.typicode.com/users";
const Pagination=()=>{

    const [users, setUsers]=useState([]);
    const [size,setSize]=useState(3);
    const [curr,setCurr]=useState(0);

    useEffect(()=>{
        const getData=async()=>{
        const response=await axios.get(API_URL);
        setUsers(response.data); 
        }
        getData();
    },[]);

    const setPrev=()=>{
        if(curr > 0){
            setCurr((prevState)=>prevState-1);
        } 
    }

    const setNext=()=>{
        if(curr < Math.ceil(users.length/size-1))
        setCurr((prevState)=>prevState+1);
    }

    const startIndex=curr*size;
    const endIndex=size+startIndex;
    return (
        <div>
            <div>
                {users.slice(startIndex,endIndex).map((user)=>(
                    <div>{user.name}</div>
                ))}
            </div>
            <div>
                <button onClick={()=>setPrev()}>Prev</button>
                <button onClick={()=>setNext()}>Next</button>
            </div>
        </div>
    )
}

export default Pagination;