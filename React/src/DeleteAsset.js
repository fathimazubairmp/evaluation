import axios from "axios";
import { useState, useEffect} from "react";
import './App.css';
import {useParams} from "react-router-dom"

/*const fetchStaffList = () =>{
    return fetch("http://localhost:3001/staff_list")
        .then((response) => response.json())
        .then((data) => console.log(data))
}*/
//initialize the use case to empty


/*const fetchStaffList = () =>{
    return axios.get("http://localhost:3002/staff_list")
        .then((response) => console.log(response.data));
}*/

function DeleteAsset(){
    
    //initialize the use case to empty
    const [asset,setAsset] = useState([])
    const{id} = useParams()
    useEffect(()=>{
        console.log("use effect hook executed");
        axios
        .delete(`http://localhost:3007/asset/${id}`)
        .then(response =>{
            console.log('promise fulfilled')
            console.log(response)
            setAsset(response.data)
            window.location='/AssetList'
        })
        /*setTimeout(()=>{
            fetchStaffList();
        },5000)*/
        
    },[])
    
    return(<>
    <div className='assetdetails'>
    <h2><em>Asset List</em></h2>
    <h3>am_model:{asset.am_model}</h3>
    <h3>am_snumber:{asset.am_snumber}</h3>
    <h3>am_myyear:{asset.am_myyear}</h3>
    <h3>am_pdate:{asset.am_pdate}</h3>
    <h3>am_warranty:{asset.am_warranty}</h3>
    <h3>am_from:{asset.am_from}</h3>
    <h3>am_to: {asset.am_to}</h3>
    </div>
    </>);
}
export default DeleteAsset;