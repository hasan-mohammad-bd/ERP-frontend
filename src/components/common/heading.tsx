interface HeadingProps {
	title: string;
	description: string;
}

export const Heading = ({ title }: HeadingProps) => {
	return (
		<div>
			<h2 className="text-xl font-medium tracking-tight">{title}</h2>
			{/* <p className="text-sm text-muted-foreground">{description}</p> */}
		</div>
	);
};
