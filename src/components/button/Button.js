function Button(props) {
	return (
		<div className={"btn btn-light " + props.mod} onClick={props.onClick}>
			{props.children}
		</div>
	);
}

export default Button;
