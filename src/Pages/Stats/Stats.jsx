import React, { useContext } from 'react';
import { Legend, Pie, PieChart, Tooltip } from 'recharts';
import TimelineContext from '../../Context/TimelineContext';

const Stats = () => {
   const { timeline } = useContext(TimelineContext);

const callCount  = timeline.filter(e => e.method === 'Call').length;
const textCount  = timeline.filter(e => e.method === 'Text').length;
const videoCount = timeline.filter(e => e.method === 'Video').length;

const data = [
  { name: 'Call',  value: callCount,  fill: '#244d3f' },
  { name: 'Text',  value: textCount,  fill: '#7f37f5' },
  { name: 'Video', value: videoCount, fill: '#37a163' },
];
if (callCount==0 && textCount==0 && videoCount==0) {
 return <div className="w-10/12 mx-auto flex flex-col items-center justify-center py-18 text-center shadow-sm rounded-xl bg-gray-50 my-25">
                        <p className="text-gray-400 text-4xl font-medium">
                            No activity yet
                        </p>
                        <p className="text-gray-300 text-sm mt-1">
                            Start a call, text or video to see stats here
                        </p>
                    </div>
}

    return (
    <>
   <div className='w-10/12 mx-auto text-4xl mt-15 mb-3 font-semibold text-[#1F2937]'>
    <h1>Friendship Analytics</h1>
   </div>
    <div className="w-10/12 mx-auto bg-white rounded-xl shadow-sm p-6 ">

 
  <h2 className="text-lg font-semibold text-gray-700 mb-6">
    By Interaction Type
  </h2>


  <div className="flex justify-center items-center">
    <PieChart width={320} height={320}>

      <Pie
        data={data}
        dataKey="value"
        nameKey="name"
        innerRadius={70}
        outerRadius={100}
        paddingAngle={6}
        cornerRadius={10}
        isAnimationActive={true}
      />
<div>
     <Legend></Legend>
</div>
      <Tooltip />

    </PieChart>
  </div>



  </div>

</>

    );
};

export default Stats;