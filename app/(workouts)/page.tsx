import { prisma } from "@/lib/prisma";
import Workouts from "./_components/workouts";

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

	return <Workouts workouts={workouts} />;
}
