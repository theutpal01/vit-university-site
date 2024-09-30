function UtilityCard({
	icon,
	title,
	description,
	theme = "default",
	size = "md",
	className,
}) {
	const styles = {
		primary: "bg-primary-light dark:bg-primary-dark border-primary-light",
		secondary:
			"bg-secondary-light dark:bg-secondary-dark border-secondary-light",
		tertiary:
			"bg-tertiary-light dark:bg-tertiary-dark border-tertiary-light",
		default: "bg-gray-900 text-white",
		xs: "max-w-sm",
		sm: "max-w-md",
		md: "max-w-lg",
		lg: "max-w-xl",
		xl: "max-w-2xl",
	};

	return (
		<div
			className={`select-none max-w-80 min-w-96 h-full border rounded-2xl p-6 items-center bg-clip-padding backdrop-filter backdrop-blur bg-opacity-0 bg-white/5 ${styles[theme]} ${styles[size]} ${className}`}
		>
			{/* Icon */}
			<div className="flex flex-col items-center">
				<div className="text-primary-dark text-6xl mb-6">{icon}</div>
			</div>

			{/* Title */}
			<h2 className="text-xl mb-4 font-manrope font-bold">{title}</h2>

			{/* Description */}
			<p className="text-sm font-manrope font-bold text-gray-400">
				{description}
			</p>
		</div>
	);
}

export default UtilityCard;

// Example Use

{
	/* <UtilityCard
    icon={<FaUser />}
    title="User Management"
    description="Manage users and their permissions."
/> */
}
