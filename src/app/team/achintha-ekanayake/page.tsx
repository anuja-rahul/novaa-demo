import UserSteps from "@/components/UserSteps";
import "./index.css";
import Paths from "@/components/Paths";

export const metadata = {
  title: "NOVAA demo - Achintha",
};

export default function AchinthaEkanayake() {
  return (
    <main className="flex min-h-[70vh] flex-col items-center justify-center text-balance text-center">
      <Paths namePath="achintha-ekanayake" />
      {/* Delete this if you want ! */}
      <h1 className="mb-8 text-4xl sm:text-5xl">Your Progress</h1>
      <UserSteps />
      Achintha{"'"}s page.
    </main>
  );
}
