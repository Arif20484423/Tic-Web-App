 import { useEffect } from "react";
import { useRouter } from "next/navigation";
import axios from "axios";

const ProtectedPage = ({children}) => {
     const router = useRouter();
    const getRoleOfUser = () => {   
        const res = axios.get(`${process.env.NEXT_PUBLIC_API_URL}/api/v1/user/role`);
        return res.Role;
    }
    useEffect(() => {
        const role = getRoleOfUser();
        if(role != "STUDENT" && role != "TIC"){
            router.push("/signin");
        }
    }, []);
    return (
        <div>
            {children}
        </div>
    );
};

export default ProtectedPage;