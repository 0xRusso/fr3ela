"use client";

import { useAuth } from "@/context/Auth";
import Link from "next/link";
import ConnectWallet from "../auth/ConnectWallet";

const navigation = [
  { title: "Home", path: "/" },
  { title: "Post Gig", path: "/gig/new" }
];

const navigationItems = navigation.map((item, idx) => (
  <li key={idx} className="text-gray-600 hover:text-blue-600">
    <Link href={item.path}>{item.title}</Link>
  </li>
));

export const Navbar = () => {
  const { user } = useAuth();

  return (
    <>
      {user ? navigationItems : null}
      <ConnectWallet />
    </>
  );
};

export default Navbar;
