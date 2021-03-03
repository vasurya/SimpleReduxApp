import React from 'react';
import { connect } from "react-redux";

const Component2 = (props) => {
    if(props.length <= 1){
        return <div>tetst</div>
    }
    return ( <div>
    
    {props.list.map((item, index) => (
       
       item != undefined  && <p key={index}>{item.inputTab}</p>
        
    ))}
    </div> 
    );
}
 
const mapStateToProps = state =>{
   
    return {
        list: state.list
    }
}
export default connect(mapStateToProps)(Component2);