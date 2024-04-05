import classes from "./LoaderOverlay.module.css";
const LoadingOverlay = () => {
	return (
		<div className={classes.loaderOverlay}>
			{/* <div className={classes.loaderSpinner}></div> */}
			<div className={classes.ldsSpinner}>
				<div></div>
				<div></div>
				<div></div>
				<div></div>
				<div></div>
				<div></div>
				<div></div>
				<div></div>
				<div></div>
				<div></div>
				<div></div>
				<div></div>
			</div>
		</div>
	);
};

export default LoadingOverlay;
