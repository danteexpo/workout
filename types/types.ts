export interface WorkoutInterface {
	id: number;
	title: string;
	order: number;
	exercises: ExerciseInterface[];
	userId: number;
}

export interface ExerciseInterface {
	id: number;
	title: string;
	group: ExerciseGroup;
	type: ExerciseType;
	duration: number;
	reps: number;
	order: number;
	workoutId: number;
}

export type ExerciseGroup = "Prepare" | "Work" | "Rest" | "Cool down";

export type ExerciseType = "Reps" | "Duration";
