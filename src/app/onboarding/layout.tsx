import PrivateRoute from "@/components/PrivateRoute";
import { PWC } from "@/types/components";
import Image from "next/image";
import Link from "next/link";
import WelcomeImage from "./WelcomeImage";
import WelcomeMessage from "./WelcomeMessage";

export const metadata = {
  title: "Onboard",
  description: "Generated by create next app"
};

function OnboardingLayout({ children }: PWC) {
  return (
    <PrivateRoute>
      <section>
        <div className="lg:grid lg:min-h-screen lg:grid-cols-12">
          <WelcomeImage />

          <main
            aria-label="Main"
            className="flex items-center justify-center px-8 py-8 sm:px-12 lg:col-span-8 lg:px-16 lg:py-12 xl:col-span-8"
          >
            <div className="max-w-xl lg:w-3xl">
              <WelcomeMessage />

              {children}
            </div>
          </main>
        </div>
      </section>
    </PrivateRoute>
  );
}

export default OnboardingLayout;
