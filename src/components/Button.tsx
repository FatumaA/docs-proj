// "use client";
import { type IconType } from "react-icons";
import { MdOutlineRemoveRedEye } from "react-icons/md";

export enum BtnActions {
	ViewPhoto = "download",
	SeeMore = "seeMore",
}

interface ButtonProps {
	icon?: IconType;
	size?: number;
	buttonText: string;
	iconClass?: string;
	withIcon?: boolean;
	onClickHandler?: (event: React.MouseEvent<HTMLButtonElement>) => void;
	btnAction?: BtnActions;
	actionURL?: string;
	type: "submit" | "reset" | "button";
}

const Button = ({
	icon: IconComponent,
	size,
	buttonText,
	iconClass,
	withIcon = false,
	onClickHandler,
	btnAction,
	actionURL,
	type,
}: ButtonProps) => {
	const clickHandler = () => {
		console.log("Button clicked");
		if (btnAction === BtnActions.ViewPhoto) {
			window.open(actionURL!);
		} else {
			console.log("FROM RICK MORTY");
			window.location.href = actionURL!;
		}
	};

	return (
		<button
			id="btn"
			type={type ?? "button"}
			className="bg-green-300 hover:bg-green-200 text-black font-bold px-4 py-2 rounded-md cursor-pointer flex items-center gap-2 w-fit"
			{...(type !== "submit" && { onClick: clickHandler })}
		>
			<span>{buttonText}</span>
			{withIcon && (
				<MdOutlineRemoveRedEye size={size ?? 24} className={iconClass} />
			)}
			{/* {withIcon && IconComponent && (
				<IconComponent size={size ?? 24} className={iconClass} />
			)} */}
		</button>
	);
};

export default Button;
