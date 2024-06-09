import useParticipantCamps from "../../../hooks/useParticipantCamps";


const Analytics = () => {
    const [camps, refetch] = useParticipantCamps();

    
    return (
        <div>
            <h1>this is Analytics</h1>
            <p className="text-6xl font-bold text-center py-40">Rechart</p>
        </div>
    );
};

export default Analytics;