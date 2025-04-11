import { useEffect } from "react";
import { useRouter } from "next/navigation";
import { useAuth } from "@/context/auth.context";

const ProtectedRoute = ({ children,allowedRoles=[]}) => {
    const router = useRouter();
    const { user, loading } = useAuth();
    useEffect(() => {
        if (!loading) {
            if (!user || (allowedRoles.length > 0 && !allowedRoles.includes(user.role))) {
                router.push("/signin");
            }
        }
    }, [user, loading, allowedRoles, router]);

    if (loading) {
        return <div>Loading...</div>;
    }

    return <>{children}</>;
};

export default ProtectedRoute;