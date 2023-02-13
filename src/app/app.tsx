import React from "react";
import SignInScreen from "@/pages/api/SignInScreen";
// import dashboard from "@/pages/api/dashboard";
import { Dashboard } from "../pages/api/Dashboard";

export const App = () => {
  return (
    <div className="flex flex-row items-center justify-center text-red-700 w-full h-full">
      <SignInScreen />
      {/* <Dashboard /> */}
    </div>
  );
};
