import type { Metadata, Viewport } from "next";
import { Inter as FontSans } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";
import { ThemeProvider } from "@/components/theme-provider";
import Header from "@/components/header";

const fontSans = FontSans({
	subsets: ["latin"],
	variable: "--font-sans",
});

export const metadata: Metadata = {
	title: "Workout",
	description: "A customizable interval timer for workouts.",
	manifest: "/manifest.json",
};

export const viewport: Viewport = {
	themeColor: "#000000",
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="en">
			<body
				className={cn(
					"min-h-screen bg-background font-sans antialiased p-6 md:p-8",
					fontSans.variable
				)}
			>
				<ThemeProvider
					attribute="class"
					defaultTheme="system"
					enableSystem
					disableTransitionOnChange
				>
					<main className="flex flex-col gap-4 w-full max-w-2xl mx-auto">
						<Header />
						{children}
					</main>
				</ThemeProvider>
			</body>
		</html>
	);
}
