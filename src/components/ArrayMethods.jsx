import React from 'react';

const ArrayMethods = () => {
    const users = ["John", "Doe", "Alice", "Smith", "Adam", "Jack", "Shoe"]; //7
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
            <button>Add</button>
            <button>Remove</button>
            <button>Splice</button>
            <button>Slice</button>
        </div>
    );
};

export default ArrayMethods;