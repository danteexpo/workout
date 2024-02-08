export interface WorkoutInterface {
	id: number;
	title: string;
	order: number;
	exercises: ExerciseInterface[];
	userId: string;
}

export interface ExerciseInterface {
	id: number;
	title: string;
	group: "Prepare" | "Work" | "Rest" | "CoolDown";
	type: "Reps" | "Duration";
	duration: number;
	reps: number;
	order: number;
	workoutId: number;
}
