import React from 'react';
import '../style/Init.css';
import Nav from './Navbar';
import Home from './Home';




class Init extends React.Component{
   render() {
   return (
       <div>
<Nav/>
<div className="init" id="section">
</div>
<div className="middle">
<div>   
  <Home/>
            </div>
  
</div>
     </div>
   );
 }
}
export default Init; 