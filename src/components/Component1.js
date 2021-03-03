import React,{useState} from 'react';
import store from "../store/index";
import { connect } from "react-redux";

const Component1 = (props) => {
    let [inputTab, handleInputTab] = useState("");
    return ( <div>
        <input onChange={(e)=>{
            handleInputTab(e.target.value);
            
        }}
            value={inputTab}
        />
        <button onClick={()=>{
            props.addItem({inputTab});
            console.log(store.getState());
            handleInputTab("")
        }}>Add</button>
    </div> );
}
 
const mapDispatchToProps = dispatch => {
    return {
      // dispatching plain actions
      addItem: (listItem) => dispatch({ type: 'ADD_ITEM', payload: listItem }),
      
    }
  }
export default connect(null,mapDispatchToProps)(Component1);