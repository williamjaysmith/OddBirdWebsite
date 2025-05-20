"use client";
import NavLinks from "./NavLinks";

export default function MobileMenu({ session, onClose }) {
  return (
    <div className="fixed inset-0 z-50 flex flex-col items-start gap-6 bg-primary-900 bg-opacity-70 p-8 text-xl backdrop-blur sm:hidden">
      <button
        className="self-end text-3xl"
        onClick={onClose}
        aria-label="Close Menu"
      >
        &times;
      </button>
      <NavLinks session={session} onClose={onClose} />
    </div>
  );
}
