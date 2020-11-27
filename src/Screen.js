import React from "react";

class Screen extends React.Component{
	render(){
		return(
			<div className = "screen">
				<div className = "screen-value">{this.props.screen}</div>
			</div>
		);
	}
}

export default Screen;