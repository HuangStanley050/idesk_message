import React from "react";
import { CopyToClipboard } from "react-copy-to-clipboard";
import { connect } from "react-redux";
import "./answer.css";

const Answer = props => {
    var message;
    if (props.ID === 1) {
        message = props.msg1;
    }
    if (props.ID === 2) {
        message = props.msg2;
    }
    if (props.ID === 3) {
        message = props.msg3;
    }
    if (props.ID === 4) {
        message = props.msg4;
    }
    if (props.ID === 5) {
        message = props.msg5;
    }
    return (
        <CopyToClipboard text={message}>
        <button onClick={props.clicked} className="myButton">{props.option}</button>
        </CopyToClipboard>
    );
};

const mapStateToProps = state => {
    return {
        msg1: state.msg1,
        msg2: state.msg2,
        msg3: state.msg3,
        msg4: state.msg4,
        msg5: state.msg5
    };
};

export default connect(mapStateToProps)(Answer);
