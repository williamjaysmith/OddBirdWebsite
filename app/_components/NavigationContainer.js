import Link from "next/link";
import { auth } from "../_lib/auth";
import NavigationUI from "./NavigationUI";

export default async function Navigation() {
  const session = await auth();
  return <NavigationUI session={session} />;
}
