import Link from "next/link";

export default function NavLinks({ session, onClose }) {
  return (
    <>
      <li className="list-none">
        <Link
          href="/cabins"
          className="transition-colors hover:text-accent-400"
          onClick={onClose}
        >
          Cabins
        </Link>
      </li>
      <li className="list-none">
        <Link
          href="/about"
          className="transition-colors hover:text-accent-400"
          onClick={onClose}
        >
          About
        </Link>
      </li>
      <li className="list-none">
        {session?.user?.image ? (
          <Link
            href="/account"
            className="flex items-center gap-4 transition-colors hover:text-accent-400"
            onClick={onClose}
          >
            <img
              className="hidden h-8 rounded-full sm:flex"
              src={session.user.image}
              alt={session.user.name}
              referrerPolicy="no-referrer"
            />
            <span>Guest area</span>
          </Link>
        ) : (
          <Link
            href="/account"
            className="transition-colors hover:text-accent-400"
            onClick={onClose}
          >
            Guest area
          </Link>
        )}
      </li>
    </>
  );
}
