import React from 'react';

const ArrayMethods = () => {
    const users = ["John", "Doe", "Alice", "Smith", "Adam", "Jack", "Shoe"]; //7
    const addUser=()=>{
        const ind = users.push("Sparrow");     //We pushed the array of sparrow
        console.log(ind);                       //log print the index value
        console.log("Add User",users[ind-1]);    // log print the Add User & the last array
        users.forEach((ele) =>console.log(ele) ); //for each print the all arrays in loop

        const userIndex = users.indexOf("Daniel")  // the indexOf array Daniel 
        if (userIndex === -1) {                         // check the indexOf are already in or not
            console.log("User is not in the array");    //print the unknown array
            const lastEle = users.push("Daniel");       //push into the array
            console.log(lastEle);
            console.log("Add user", users[lastEle - 1]);
            users.forEach((ele) => console.log(ele));

         }
        
    }

    const removeUser=()=>{
        const rem =users.pop();   //pop
        console.log("remove User",rem);  //console
        users.forEach((ele)=>console.log(ele)) //forEach
    }

    return (
        <div>
            <h1>Array</h1>
            <ul>
            {
                users.map((item,index)=>{
                    return(
                        <div key={index}>
                            <li>{item}</li>     
                        </div>
                    )
                })
            }
            </ul>
            <button onClick={addUser}>Add</button>
            <button onClick={removeUser}>Remove</button>
            <button>Splice</button>
            <button>Slice</button>
        </div>
    );
};

export default ArrayMethods;