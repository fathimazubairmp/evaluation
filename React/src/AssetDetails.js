import axios from "axios";
import { useState, useEffect} from "react";
import './App.css';
import {useParams} from "react-router-dom"
import {useNavigate} from "react-router-dom"

function AssetDetails(){

    //initialize the use case to empty
    const [asset,setAsset] = useState([])
    const{id} = useParams()
    const navigate= useNavigate()
    useEffect(()=>{
        console.log("use effect hook executed");
        axios
        .get(`http://localhost:3007/asset/${id}`)
        .then(response =>{
            console.log('promise fulfilled')
            console.log(response)
            setAsset(response.data)
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
    <button   className='edit' onClick={()=>navigate(`/assetedit/${asset.id}`)}>Edit</button>
    <button className='delete'  onClick={()=>DeleteAsset(asset.id)}>Delete</button>
    </div>
    </>);
}

function DeleteAsset(id)
{
    axios
        .delete(`http://localhost:3007/asset/${id}`)
        .then(response =>{
            console.log('promise fulfilled')
            console.log(response)
        })
        window.location='/AssetList'
}
export default AssetDetails;


