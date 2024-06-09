import { useContext } from "react";
import { AuthContext } from "../authentication/AuthProvider";
import useAxiosSecure from "./useAxiosSecure";
import { useQuery } from "@tanstack/react-query";



const useOrganizer = () => {
    const {user} = useContext(AuthContext);
    console.log(user.email)
    const axiosSecure = useAxiosSecure()
    const {data: isOrganizer} = useQuery({
        queryKey: [user?.email, 'isOrganizer'],
        queryFn: async () =>{
            const res = await axiosSecure.get(`/users/organizer/${user.email}`);
            // console.log(res.data);
            return res.data?.organizer;
        }
    })
    return [isOrganizer, user?.email ];
};

export default useOrganizer;