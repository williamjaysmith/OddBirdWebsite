"use client";
import NavLinks from "./NavLinks";

export default function MobileMenu({ session, onClose }) {
  return (
    <div className="sm:hidden fixed inset-0 bg-primary-900 bg-opacity-70 backdrop-blur z-50 p-8 flex flex-col items-start gap-6 text-xl">
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
