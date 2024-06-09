import { useQuery } from "@tanstack/react-query";
import { useContext } from "react";
import { AuthContext } from "../authentication/AuthProvider";
import useAxiosPublic from "./useAxiosPublic";


const useParticipantCamps = () => {
    const {user} = useContext(AuthContext);
    const info = user?.email;
    const axiosPublic= useAxiosPublic();
    const {data: camps = [], refetch } = useQuery({
        queryKey: ['camps'],
        queryFn: async () =>{
          const res = await axiosPublic.get(`/participantCamps/${info}`);
          return res.data
        }
      })
      console.log(camps)
     return [camps , refetch ]
};

export default useParticipantCamps;