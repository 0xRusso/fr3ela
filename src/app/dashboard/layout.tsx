import PrivateRoute from "@/components/PrivateRoute";
import { PWC } from "@/types/components";

export const metadata = {
  title: "Dashboard",
  description: "Generated by create next app"
};

const DashboardLayout = ({ children }: PWC) => (
  <PrivateRoute>
    <div className="px-4 lg:px-8 max-w-screen-xl mx-auto py-12">{children}</div>
  </PrivateRoute>
);

export default DashboardLayout;
