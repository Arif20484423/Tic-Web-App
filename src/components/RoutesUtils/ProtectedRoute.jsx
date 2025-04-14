import { useContext, useEffect } from "react";
import { useRouter } from "next/navigation";
import { AppContext } from "@/context/app.context";

const ProtectedRoute = ({ children, allowedRoles = [] }) => {
  const router = useRouter();
  const { user } = useContext(AppContext);
  if (user) {
    if (allowedRoles.includes(user.role)) {
      return <>{children}</>;
    } else {
     return <div>Access denied</div>;
    }
  } else {
    return <div>Loading</div>;
  }
};

export default ProtectedRoute;
