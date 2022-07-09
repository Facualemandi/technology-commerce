// import React from "react";
// import { Navigate } from "react-router-dom";
// import { useAuth } from "../Context/authContext";

// export const ProtectRoute = ({ children }) => {
//   const { user, getToken } = useAuth();

//   console.log(getToken);

//   !getToken ? <Navigate to={"/"} /> : <Navigate to={"/Home"} />;

//   // if (getToken) return <Navigate to={"/Home"} />;

//   return <>{children}</>;
// };
