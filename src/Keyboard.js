import React from "react";

function Keyboard(props){
	return(
		<div className = "keyboard">
			<div onClick = {props.reset}>AC</div>
			<div onClick = {props.change_sign}><sup>+</sup>/<sub>-</sub></div>
			<div onClick = {props.to_procent}>%</div>
			<div value = "/" onClick = {props.choose_operation}>&divide;</div>
			<div value = "7" onClick = {props.add_to_curr}>7</div>
			<div value = "8" onClick = {props.add_to_curr}>8</div>
			<div value = "9" onClick = {props.add_to_curr}>9</div>
			<div value = "x" onClick = {props.choose_operation}>x</div>
			<div value = "4" onClick = {props.add_to_curr}>4</div>
			<div value = "5" onClick = {props.add_to_curr}>5</div>
			<div value = "6" onClick = {props.add_to_curr}>6</div>
			<div value = "-" onClick = {props.choose_operation}>-</div>
			<div value = "1" onClick = {props.add_to_curr}>1</div>
			<div value = "2" onClick = {props.add_to_curr}>2</div>
			<div value = "3" onClick = {props.add_to_curr}>3</div>
			<div value = "+" onClick = {props.choose_operation}>+</div>
			<div value = "0" onClick = {props.add_to_curr} className = "calc-zero">0</div>
			<div>.</div>
			<div onClick = {props.choose_operation}>=</div>
		</div>
	);
}

export default Keyboard;