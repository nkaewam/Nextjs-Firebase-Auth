import LandingLogIn from "@/components/landing-log-in";

export default function Home() {
  return (
    <div className="flex flex-col items-center py-20">
      <div className="flex flex-col items-center gap-6">
        <h1 className="text-6xl font-bold">Landing page</h1>
        <p className="text-secondary-foreground/60 w-1/2 text-center">
          lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit
        </p>
      </div>
      <LandingLogIn />
    </div>
  );
}
