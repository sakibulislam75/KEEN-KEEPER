import { useContext, useState } from 'react';
import TimelineContext from '../../Context/TimelineContext';
import { FiPhoneCall } from 'react-icons/fi';
import { LuMessageSquareMore } from 'react-icons/lu';
import { PiVideoCameraLight } from 'react-icons/pi';
import text from '../../assets/text.png'
import video from '../../assets/call.png'
import call from '../../assets/video.png'

const Timeline = () => {
    const { timeline } = useContext(TimelineContext);
    const [filter, setFilter] = useState('All');

    const filtered =
        filter === 'All'
            ? timeline
            : timeline.filter(e => e.method === filter);

    return (
        <div className='w-10/12 mx-auto mt-15'>

            <h1 className='text-3xl font-bold mb-5'>Timeline</h1>

            {/* Only Select */}
            <select
                value={filter}
                onChange={(e) => setFilter(e.target.value)}
                className="select select-success shaow-sm  bg-white  px-5  mb-5"
            >
                <option value="All">Filter Timeline</option>
                <option value="Call">Call</option>
                <option value="Text">Text</option>
                <option value="Video">Video</option>
            </select>

            {/* List */}
            <div className='grid grid-cols-1 gap-3 md:grid-cols-1 gap-5 mt-10'>
                {filtered.length === 0 ? (
                    <div className="flex flex-col items-center justify-center py-18 text-center shadow-sm rounded-xl bg-gray-50">
                        <p className="text-gray-400 text-4xl font-medium">
                            No activity yet
                        </p>
                        <p className="text-gray-300 text-sm mt-1">
                            Start a call, text or video to see timeline here
                        </p>
                    </div>

                ) : (
                    filtered.map((entry, index) => (
                        <div
                            key={index}
                            className='flex items-center-safe gap-4  shadow-sm rounded-xl p-4 py-8 pl-8 bg-white'
                        >
                            <div className='text-gray-500'>
                                {entry.method === 'Call' && <img src={call} ></img>}
                                {entry.method === 'Text' && <img src={text}></img>}
                                {entry.method === 'Video' && <img src={video}></img>}
                            </div>

                            <div>
                                <p>
                                    <span className='font-bold text-[#244D3F] text-[20px]'>{entry.method}</span>
                                    <span className='text-gray-400 text-[18px]'> with {entry.name}</span>
                                </p>
                                <p className='text-[16px] text-gray-400'>{entry.date}</p>
                            </div>
                        </div>
                    ))
                )}
            </div>

        </div>
    );
};

export default Timeline;
