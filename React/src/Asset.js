import React from 'react'
import {Link} from "react-router-dom";


function Asset(props){
    if(!localStorage.getItem('mytoken'))    //so it does not allow this page to be visible to strangers
    {
        localStorage.clear();
    }
    console.log(props)
    return(<>
        <h4>Asset Name:{props.details.am_model}{props.details.am_snumber}</h4>
        <Link to={`/assetdetails/${props.details.id}`} className='linkview'>View Details</Link>
        <Link to={`/deleteasset/${props.details.id}`} className='linkdel'>Delete Details</Link>
    </>);
}

export default Asset