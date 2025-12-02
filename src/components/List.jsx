import React from 'react';

const List = ({arrObj}) => {
    return (
        <> 
        
           <h1 style={{ textAlign: "center" }}>List</h1>

       
        {
           arrObj.map((ele,index)=>{
                return(
                    <div key={index} className='card'>
                        <img src={ele.image}/>
                        <h1>{ele.name}</h1>
                        <p>{ele.desc}</p>
                        <p>{ele.price}</p>
                    </div>
                )
           })
        }
     </>
    );
};

export default List;