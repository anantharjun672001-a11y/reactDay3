import React from 'react';

const CompC = ({arr}) => { //arr is a props
    return (
        <div>
            <h1>Components C</h1>
            {                               //use {} in html for js
                arr.map((ele,index)=>{      //map how to use map in arrow function
                    return(
                         <div key={index}>    {/* index find index value in array  */}
                            <p>{ele}</p>      {/* we basically print the props but in array we print the array values so ele is array value */}
                        </div>
                    )
                })
            }
        </div>
    );
};

export default CompC;