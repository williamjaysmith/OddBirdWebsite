import Link from "next/link";
import Image from "next/image";
import bg from "@/public/bg.png";

export default function Page() {
  return (
    <main className="mt-24">
      <Image
        src={bg}
        fill
        placeholder="blur"
        quality={80}
        className="-z-10 object-cover object-top"
        alt="Mountains and forests with two cabins"
      />

      <div className="relative text-center">
        <h1 className="mb-10 text-4xl font-normal tracking-tight text-primary-50 sm:text-8xl">
          Welcome to paradise.
        </h1>
        <Link
          href="/cabins"
          className="text-md whitespace-nowrap bg-accent-500 px-6 py-4 font-semibold text-primary-800 transition-all hover:bg-accent-600 sm:px-8 sm:py-6 sm:text-lg"
        >
          Explore luxury cabins
        </Link>
      </div>
    </main>
  );
}
