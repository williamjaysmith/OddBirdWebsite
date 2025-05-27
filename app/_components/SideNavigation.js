// "use client";

// import Link from "next/link";
// import {
//   CalendarDaysIcon,
//   HomeIcon,
//   UserIcon,
// } from "@heroicons/react/24/solid";
// import SignOutButton from "./SignOutButton";
// import { usePathname } from "next/navigation";

// const navLinks = [
//   {
//     name: "Home",
//     href: "/account",
//     icon: <HomeIcon className="h-5 w-5 text-primary-600" />,
//   },
//   {
//     name: "Reservations",
//     href: "/account/reservations",
//     icon: <CalendarDaysIcon className="h-5 w-5 text-primary-600" />,
//   },
//   {
//     name: "Guest profile",
//     href: "/account/profile",
//     icon: <UserIcon className="h-5 w-5 text-primary-600" />,
//   },
// ];

// function SideNavigation() {
//   const pathname = usePathname();

//   return (
//     <nav className="border-r border-primary-900">
//       <ul className="flex h-full gap-2 overflow-x-auto whitespace-nowrap text-lg sm:flex-col">
//         {navLinks.map((link) => (
//           <li key={link.name}>
//             <Link
//               className={`flex items-center gap-4 px-5 py-3 font-semibold text-primary-200 transition-colors hover:bg-primary-900 hover:text-primary-100 ${
//                 pathname === link.href ? "bg-primary-900" : ""
//               }`}
//               href={link.href}
//             >
//               {link.icon}
//               <span>{link.name}</span>
//             </Link>
//           </li>
//         ))}

//         <li className="mt-auto">
//           <SignOutButton />
//         </li>
//       </ul>
//     </nav>
//   );
// }

// export default SideNavigation;

"use client";

import { useState } from "react";
import Link from "next/link";
import {
  CalendarDaysIcon,
  HomeIcon,
  UserIcon,
} from "@heroicons/react/24/solid";
import { ChevronDownIcon } from "@heroicons/react/20/solid";
import SignOutButton from "./SignOutButton";
import { usePathname } from "next/navigation";

const navLinks = [
  {
    name: "Home",
    href: "/account",
    icon: <HomeIcon className="h-5 w-5 text-primary-600" />,
  },
  {
    name: "Reservations",
    href: "/account/reservations",
    icon: <CalendarDaysIcon className="h-5 w-5 text-primary-600" />,
  },
  {
    name: "Guest profile",
    href: "/account/profile",
    icon: <UserIcon className="h-5 w-5 text-primary-600" />,
  },
];

function SideNavigation() {
  const pathname = usePathname();
  const currentLink = navLinks.find((link) => link.href === pathname);
  const currentLabel = currentLink?.name || "Menu";
  const [open, setOpen] = useState(false);
  console.log(pathname);
  return (
    <nav className="border-primary-900 sm:border-r">
      {/* Mobile toggle button */}
      <button
        onClick={() => setOpen((prev) => !prev)}
        className="flex w-full items-center justify-between border-b border-primary-900 bg-primary-950 px-4 py-3 sm:hidden"
      >
        <span className="font-semibold text-primary-100">{currentLabel}</span>
        <ChevronDownIcon
          className={`h-5 w-5 text-primary-100 transition-transform ${
            open ? "rotate-180" : ""
          }`}
        />
      </button>

      {/* Menu list */}
      <ul
        className={`${
          open ? "block" : "hidden"
        } bg-primary-950 text-lg sm:flex sm:h-full sm:flex-col sm:gap-2 sm:bg-transparent`}
      >
        {navLinks.map((link) => (
          <li key={link.name}>
            <Link
              className={`flex items-center gap-4 px-5 py-3 font-semibold text-primary-200 transition-colors hover:bg-primary-900 hover:text-primary-100 ${
                pathname === link.href ? "bg-primary-900" : ""
              }`}
              href={link.href}
              onClick={() => setOpen(false)} // Close menu after click on mobile
            >
              {link.icon}
              <span>{link.name}</span>
            </Link>
          </li>
        ))}

        <li className="mt-auto px-5 py-3 sm:px-0 sm:py-0">
          <SignOutButton />
        </li>
      </ul>
    </nav>
  );
}

export default SideNavigation;
