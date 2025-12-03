import React from 'react';

const FilterReduce = ({shopping}) => {
    const handleSubmit =(e)=>{
        const cate = e.target.value;
        console.log(cate);
        const filteredProducts = shopping.filter((item)=>item.category===cate)
        console.log(filteredProducts);
        const totalPrice = filteredProducts.reduce((total,ele)=>total+ele.price,0)
        console.log(totalPrice);
    }
    

    return (
        <div>
            <h1>Filter and Reduce</h1>
            {
                shopping.map((ele)=>{
                    return(
                        <div key={ele.id}className='card'>
                            <p>{ele.name}</p>
                            <p>{ele.price}</p>
                            <p>{ele.category}</p>
                        </div>    
                    )
                })
            }
            <button value="Electronics" onClick={(e)=>handleSubmit(e)}>Electronics</button>
            <button value="Grocery" onClick={(e)=>handleSubmit(e)}>Grocery</button>
        </div>
    );
};

export default FilterReduce;