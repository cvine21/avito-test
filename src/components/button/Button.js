function Button(props) {
	return (
		<button
			className={"btn btn-light " + props.mod}
			onClick={props.onClick}
		>
			{props.children}
		</button>
	);
}

export default Button;
