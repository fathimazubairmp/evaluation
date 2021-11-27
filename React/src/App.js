import {BrowserRouter as Router,Routes,Route,Link}
from "react-router-dom";

import './App.css'
//importing all the components
import Form from './Form.js';
import Login from './Login.js';
import Form2 from './Form2.js';
import Nomatch from './Nomatch.js';
import AssetList from './AssetList.js';
import AssetDetails from "./AssetDetails.js";
import DeleteAsset from "./DeleteAsset.js";
import AssetEdit from "./AssetEdit.js";
import About from "./About.js";

function App()
{
    return(<MyRouter/>);
}
function MyRouter(){
    var div={
        display:'inline',
        padding:'10px',
        marginLeft:'50px',
        textAlign:'center',
    }
    var link={
        textDecoration:'none',
        color:'blue',
    }
    
    return(
        <Router>
            <body>
            <p className='p'>
                <div className='logo'>Asset Management System</div>
                <div style={div}><Link style={link} to="/Form">Registration</Link></div>
                <div style={div}><Link style={link} to="/Login">Login</Link></div>
                <div style={div}><Link style={link} to="/Form2">Asset Registration</Link></div>
                <div style={div}><Link style={link} to="/AssetList">Asset List</Link></div>
                <div style={div}><Link style={link} to="/About">About</Link></div>
            </p>
            <p>
            </p>
            <Routes>
                <Route path="/Form" element={<Form/>}/>
                <Route path="/Login" element={<Login/>}/>
                <Route path="/Form2" element={<Form2/>}/>
                <Route path="/About" element={<About/>}/>
                <Route path="/AssetList" element={<AssetList/>}/>
                <Route path="/AssetDetails/:id" element={<AssetDetails/>}/>
                <Route path="/DeleteAsset/:id" element={<DeleteAsset/>}/>
                <Route path="/Assetedit/:id" element={<AssetEdit/>}/>
                <Route path="*" element={<Nomatch/>}/>
            </Routes>
            <footer>
            Հայերեն Shqi العربية Български Català 中文简体 Hrvatski Česky Dansk Nederlands English
            </footer>
            </body>
        </Router>
    );
}
export default App;
