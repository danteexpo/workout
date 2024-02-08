import { WorkoutInterface } from "@/types/types";

type WorkoutsProps = {
	workouts: WorkoutInterface[];
};

const Workouts = ({ workouts }: WorkoutsProps) => {
	return (
		<div>
			{workouts.map((workout) => (
				<p key={workout.id}>{workout.title}</p>
			))}
		</div>
	);
};

export default Workouts;
