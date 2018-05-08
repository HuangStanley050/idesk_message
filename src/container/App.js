import React, { Component } from 'react';
import { connect } from "react-redux";
//import { CopyToClipboard } from 'react-copy-to-clipboard';

import './App.css';
import Answer from "../components/answer.js";

class App extends Component {


  /*handleCopy(index) {
    //alert(index);
    if (index === 1) {
      alert(this.props.msg1);
    }
    if (index === 2) {
      alert(this.props.msg2);
    }
    if (index === 3) {
      alert(this.props.msg3);
    }
    if (index === 4) {
      alert(this.props.msg4);
    }
    if (index === 5) {
      alert(this.props.msg5);
    }
  }*/

  render() {
    var index1 = 1,
      index2 = 2,
      index3 = 3,
      index4 = 4,
      index5 = 5;
    return (
      <div className="App">
            
            <Answer ID={index1}   option={"New Call"} /> 
            
            
            <Answer ID = { index2 }  option = { "Call Resolved" }/> 
            <Answer ID = { index3 }  option = { "No Response" } /> 
            <Answer ID = { index4 }  option = { "High Call Volumn" }/> 
            <Answer ID = { index5 }  option = { "Request to Call" }/> 
          
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    msg1: state.msg1,
    msg2: state.msg2,
    msg3: state.msg3,
    msg4: state.msg4,
    msg5: state.msg5
  };
};

export default connect(mapStateToProps)(App);
