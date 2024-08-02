import { Banners } from "@/components/Banners";
import Image from "next/image";

export default function Home() {
  return (
    <>
      <header className="p-4 border border-b-neutral-500">
        <h1 className="text-3xl">BannerGen</h1>
      </header>
      <main className="sm:max-w-3xl m-auto">
        <h1 className="text-2xl my-4">Create the perfect banner for your business</h1>
        <p className="mb-2">Click on the edit button to customize</p>
        <Banners />
      </main>
    </>
  );
}
