import { useEffect, useState } from "react";
import { Link, json } from "react-router-dom";


const LeftSideNav = () => {
    const [category, setCategory] = useState([]);

    useEffect(()=>{
        fetch('categories.json')
        .then(res=> res.json())
        .then(data=> setCategory(data))
    },[])
    return (
        <div>
            <h1 className="text-3xl font-bold ml-4 underline">All Categories{category.length}</h1>
            {
                category.map(category=> <Link className="block ml-4 text-xl font-semibold " key={category.id}> {category.name} </Link>)
            }
        </div>
    );
};

export default LeftSideNav;