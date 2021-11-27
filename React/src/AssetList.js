import axios from "axios";
import { useState, useEffect} from "react";
import Asset from "./Asset";
import './App.css'

/*const fetchStaffList = () =>{
    return fetch("http://localhost:3001/staff_list")
        .then((response) => response.json())
        .then((data) => console.log(data))
}*/


/*const fetchStaffList = () =>{
    return axios.get("http://localhost:3002/staff_list")
        .then((response) => console.log(response.data));
}*/

function AssetList(){
    
    //initialize the use case to empty
    const [asset,setAsset] = useState([])
    useEffect(()=>{
        console.log("use effect hook executed");
        axios
        .get('http://localhost:3007/asset')
        .then(response =>{
            console.log('promise fulfilled')
            console.log(response)
            setAsset(response.data)
        })
        /*setTimeout(()=>{
            fetchStaffList();
        },5000)*/
        
    },[])
    var h2={
        color:'black',
        textAlign:'center'
    }
    return(<>
    <h2 style={h2}>Asset List</h2>
    <div id="unorder">
    <ul>
        {asset.map(asset =>
        <div id="assetid">
            <li key ={asset.id}>
                <Asset details ={asset}/>
            </li>
        </div> 
        )}
    </ul>
    </div>
    
    </>
    );
}
export default AssetList;