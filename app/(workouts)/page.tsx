import { prisma } from "@/lib/prisma";

export default async function Home() {
	const workouts = await prisma.workout.findMany({
		// where: {
		// 	userId,
		// },
		include: {
			exercises: {
				orderBy: {
					order: "asc",
				},
			},
		},
		orderBy: {
			order: "asc",
		},
	});

	return (
		<main>
			{workouts.map((workout) => (
				<div key={workout.id}>{workout.title}</div>
			))}
		</main>
	);
}
