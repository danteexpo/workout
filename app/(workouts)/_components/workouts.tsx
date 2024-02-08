import { WorkoutInterface } from "@/types/types";
import Workout from "./workout";

type WorkoutsProps = {
	workouts: WorkoutInterface[];
};

const Workouts = ({ workouts }: WorkoutsProps) => {
	return (
		<div>
			{workouts.map((workout) => (
				<Workout key={workout.id} workout={workout} />
			))}
		</div>
	);
};

export default Workouts;
