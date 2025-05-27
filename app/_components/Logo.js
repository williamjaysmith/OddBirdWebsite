import Image from "next/image";
import Link from "next/link";
import logo from "@/public/logo.png";

function Logo() {
  return (
    <Link href="/" className="z-10 flex items-center gap-4">
      <span className="text-xl font-semibold text-primary-100">
        The WILDERNESTS
      </span>
    </Link>
  );
}

export default Logo;
