import { Workout } from "@prisma/client";

type WorkoutsProps = {
	workouts: Workout[];
};

const Workouts = ({ workouts }: WorkoutsProps) => {
	return (
		<main>
			{workouts.map((workout) => (
				<div key={workout.id}>{workout.title}</div>
			))}
		</main>
	);
};

export default Workouts;
