import useParticipantCamps from "../../../hooks/useParticipantCamps";
import { BarChart, Bar, Cell, XAxis, YAxis, CartesianGrid, Tooltip } from 'recharts';
const colors = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042', 'red', 'pink'];
import PropTypes from 'prop-types';


const Analytics = () => {
    const [camps] = useParticipantCamps();
        console.log(camps)
    const getPath = (x, y, width, height) => {
        return `M${x},${y + height}C${x + width / 3},${y + height} ${x + width / 2},${y + height / 3}
        ${x + width / 2}, ${y}
        C${x + width / 2},${y + height / 3} ${x + (2 * width) / 3},${y + height} ${x + width}, ${y + height}
        Z`;
      };
      
      const TriangleBar = (props) => {
        const { fill, x, y, width, height } = props;
      
        return <path d={getPath(x, y, width, height)} stroke="none" fill={fill} />;
      };


    return (
        <div className="w-full max-w-screen-lg md:w-3/4 lg:w-1/2 py-24 lg:p-24">
            <BarChart
            className="w-full max-w-screen-lg md:w-3/4 lg:w-1/2"
      width={400}
      height={300}
      data={camps}
      margin={{
        top: 20,
        right: 30,
        left: 20,
        bottom: 5,
      }}
    >
      <CartesianGrid strokeDasharray="3 3" />
      <XAxis dataKey="name" />
      <YAxis />
      <Tooltip></Tooltip>
      <Bar dataKey="age" fill="#8884d8" shape={<TriangleBar />} label={{ position: 'top' }}>
        {camps.map((entry, index) => (
          <Cell key={`cell-${index}`} fill={colors[index % 20]} />
        ))}
      </Bar>
    </BarChart>
        </div>
    );
};
Analytics.propTypes = {  
    props: PropTypes.object, 
    fill: PropTypes.string,  
    x: PropTypes.number,  
    y: PropTypes.number,  
    width: PropTypes.number,  
    height: PropTypes.number,  
}
export default Analytics;