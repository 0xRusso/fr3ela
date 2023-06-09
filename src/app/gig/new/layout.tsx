import PrivateRoute from "@/components/PrivateRoute";
import { PWC } from "@/types/components";

export const metadata = {
  title: "Gig Creation",
  description: "Generated by create next app"
};

const GigLayout = ({ children }: PWC) => (
  <PrivateRoute>{children}</PrivateRoute>
);

export default GigLayout;
