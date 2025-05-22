import Link from "next/link";

export default function NavLinks({ session, onClose }) {
  return (
    <>
      <li className="list-none ">
        <Link
          href="/cabins"
          className="hover:text-accent-400 transition-colors"
          onClick={onClose}
        >
          Cabins
        </Link>
      </li>
      <li className="list-none">
        <Link
          href="/about"
          className="hover:text-accent-400 transition-colors"
          onClick={onClose}
        >
          About
        </Link>
      </li>
      <li className="list-none">
        {session?.user?.image ? (
          <Link
            href="/account"
            className="hover:text-accent-400 transition-colors flex items-center gap-4"
            onClick={onClose}
          >
            <img
              className="hidden sm:flex h-8 rounded-full"
              src={session.user.image}
              alt={session.user.name}
              referrerPolicy="no-referrer"
            />
            <span>Guest area</span>
          </Link>
        ) : (
          <Link
            href="/account"
            className="hover:text-accent-400 transition-colors"
            onClick={onClose}
          >
            Guest area
          </Link>
        )}
      </li>
    </>
  );
}
