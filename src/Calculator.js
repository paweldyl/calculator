import React from "react";
import Screen from "./Screen";
import Keyboard from "./Keyboard";
class Calculator extends React.Component {
	constructor(){
		super();
		this.state = {
			screen: "0",
			curr: "0",
			prev: "0",
			sign: "",
			clearCurr: false,
			shouldCalculate: false,
			hardReset: false
		}
		this.add_to_curr = this.add_to_curr.bind(this);
		this.choose_operation = this.choose_operation.bind(this);
		this.change_sign = this.change_sign.bind(this);
		this.to_procent = this.to_procent.bind(this);
		this.reset = this.reset.bind(this);


	}
	add_to_curr(event){
		console.log(event.target);
		if(this.state.hardReset){
			this.setState({
				screen: event.target.innerHTML,
				curr: event.target.innerHTML,
				prev: "0",
				sign: "",
				clearCurr: false,
				shouldCalculate: false,
				hardReset: false
			});
		}
		else if(this.state.clearCurr){
			this.setState({
				curr: event.target.innerHTML,
				screen: event.target.innerHTML,
				shouldCalculate: true,
				clearCurr: false
			});
		}
		else if(this.state.curr === "0"){
			this.setState({
				curr: event.target.innerHTML,
				screen: event.target.innerHTML
			});
		}
		else{
			this.setState((prevState) =>{
				return{
					curr: prevState.screen + event.target.innerHTML,
					screen: prevState.screen + event.target.innerHTML
				};
			});
		}
	}
	choose_operation(event){
		if(event.target.innerHTML === "="){
			this.setState(prevState =>{
				return{
					hardReset: true,
					shouldCalculate: false
				};
			})
			switch(this.state.sign){
				case "+":
					this.setState((prevState) =>{
						return{
							prev: (parseFloat(prevState.prev) + parseFloat(prevState.curr)).toString(),
							screen: (parseFloat(prevState.prev) + parseFloat(prevState.curr)).toString(),
						}
					})
					break;
				case "-":
					this.setState((prevState) =>{
						return{
							prev: (parseFloat(prevState.prev) - parseFloat(prevState.curr)).toString(),
							screen: (parseFloat(prevState.prev) - parseFloat(prevState.curr)).toString(),
						}
					})
					break;
				case "x":
					this.setState((prevState) =>{
						return{
							prev: (parseFloat(prevState.prev) * parseFloat(prevState.curr)).toString(),
							screen: (parseFloat(prevState.prev) * parseFloat(prevState.curr)).toString(),
						}
					})
					break;
				case "÷":
					this.setState((prevState) =>{
						return{
							prev: (parseFloat(prevState.prev) / parseFloat(prevState.curr)).toString(),
							screen: (parseFloat(prevState.prev) / parseFloat(prevState.curr)).toString(),
						}
					})
					break;
			}
		}
		else{
			if(this.state.shouldCalculate){
				switch(this.state.sign){
					case "+":
						this.setState((prevState) =>{
							return{
								prev: (parseFloat(prevState.prev) + parseFloat(prevState.screen)).toString(),
								curr: (parseFloat(prevState.prev) + parseFloat(prevState.screen)).toString(),
								screen: (parseFloat(prevState.prev) + parseFloat(prevState.screen)).toString(),
							}
						})
						break;
					case "-":
						this.setState((prevState) =>{
							return{
								prev: (parseFloat(prevState.prev) - parseFloat(prevState.screen)).toString(),
								curr: (parseFloat(prevState.prev) - parseFloat(prevState.screen)).toString(),
								screen: (parseFloat(prevState.prev) - parseFloat(prevState.screen)).toString(),
							}
						})
						break;
					case "x":
						this.setState((prevState) =>{
							return{
								prev: (parseFloat(prevState.prev) * parseFloat(prevState.screen)).toString(),
								curr: (parseFloat(prevState.prev) * parseFloat(prevState.screen)).toString(),
								screen: (parseFloat(prevState.prev) * parseFloat(prevState.screen)).toString(),
							}
						})
						break;
					case "÷":
						this.setState((prevState) =>{
							return{
								prev: (parseFloat(prevState.prev) / parseFloat(prevState.screen)).toString(),
								curr: (parseFloat(prevState.prev) / parseFloat(prevState.screen)).toString(),
								screen: (parseFloat(prevState.prev) / parseFloat(prevState.screen)).toString(),
							}
						})
						break;
				}
			}
			else{
				this.setState((prevState) =>{
					return{
						prev: prevState.screen
					};
				})
			}
			this.setState({
				sign: event.target.innerHTML,
				clearCurr: true,
				shouldCalculate: false,
				hardReset: false
			});
		}
			
	}
	change_sign(event){
		if(this.state.hardReset){
			this.setState((prevState) =>{
				return{
					prev: (parseFloat(prevState.prev) * -1).toString(),
					screen: (parseFloat(prevState.prev) * -1).toString()
				}
			})
		}
		else{
			this.setState((prevState) =>{
				return{
					screen: (parseFloat(prevState.screen) * -1).toString(),
					curr: (parseFloat(prevState.screen) * -1).toString()
				}
			})
		}
	}
	to_procent(event){
		if(this.state.hardReset){
			this.setState((prevState) =>{
				return{
					prev: (parseFloat(prevState.prev) / 100).toString(),
					screen: (parseFloat(prevState.prev) / 100).toString()
				}
			})
		}
		else{
			this.setState((prevState) =>{
				return{
					screen: (parseFloat(prevState.screen) / 100).toString(),
					curr: (parseFloat(prevState.screen) / 100).toString()
				}
			})
		}
	}
	reset(event){
		this.setState({
		screen: "0",
		curr: "0",
		prev: "0",
		sign: "",
		clearCurr: false,
		shouldCalculate: false,
		hardReset: false
		})
	}
	render(){
		return(
			<div className = "calculator">
				<Screen 
					screen =  {this.state.screen}
				/>
				<Keyboard 
					add_to_curr = {this.add_to_curr}
					choose_operation = {this.choose_operation}
					change_sign = {this.change_sign}
					to_procent = {this.to_procent}
					reset = {this.reset}
				/>
			</div>
		);
	}
}

export default Calculator