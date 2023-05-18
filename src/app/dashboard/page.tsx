"use client";
import { useAuth } from "@/context/AuthContext";
import { useGetUserDoc } from "@/hooks/useGetUser";

export default function Dashboard() {
  const { user } = useAuth();
  const userData = useGetUserDoc(user?.uid);
  console.log(userData, "userData");
  return (
    <>
      <div className="px-4 lg:px-8 max-w-screen-xl mx-auto bg-red-500 py-12">
        <h3> Dashboard </h3>
        <p> {user ? "Hello " + user.uid : ""} </p>
        <p> {user ? user.metadata.creationTime : ""}</p>
        {userData && <p>Seller: {userData.roles.seller ? "sim " : "não"}</p>}
      </div>
    </>
  );
}
