import React from "react";

const btnClickEventHandler = () => {
     console.log('Button Clicked');
}

const Button = (props) => {
  return <button onClick={props.eventHandler} className="btn btn-primary">{props.children}</button>;
};

export default Button;
