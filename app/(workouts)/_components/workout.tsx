import { WorkoutInterface } from "@/types/types";

type WorkoutProps = {
	workout: WorkoutInterface;
};

const Workout = ({ workout }: WorkoutProps) => {
	return <div>{workout.title}</div>;
};

export default Workout;
