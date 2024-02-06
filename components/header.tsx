import { ModeToggle } from "@/components/mode-toggle";

const Header = () => {
	return (
		<header className="flex items-center justify-between w-full">
			<h1 className="text-xl font-bold">Workout</h1>
			<ModeToggle />
		</header>
	);
};

export default Header;
