import PrivateRoute from "@/components/PrivateRoute";
import { PWC } from "@/types/components";
import Image from "next/image";
import Link from "next/link";

export const metadata = {
  title: "Onboard",
  description: "Generated by create next app"
};

function OnboardingLayout({ children }: PWC) {
  return <PrivateRoute>{children}</PrivateRoute>;
}

export default OnboardingLayout;
