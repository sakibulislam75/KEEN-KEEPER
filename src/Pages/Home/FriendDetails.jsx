import React, { useContext } from 'react';
import { useParams } from 'react-router-dom';
import UseData from '../../Hook/UseData';
import { HiOutlineBellSnooze, HiOutlineChatBubbleLeftRight, HiOutlinePhone } from 'react-icons/hi2';
import { IoArchiveOutline } from 'react-icons/io5';
import { RiDeleteBin5Line, RiDeleteBin6Line } from 'react-icons/ri';
import { FadeLoader } from 'react-spinners';
import { FiPhoneCall } from 'react-icons/fi';
import { LuMessageSquareMore } from 'react-icons/lu';
import { PiVideoCameraLight } from 'react-icons/pi';
import TimelineContext from '../../Context/TimelineContext';

const FriendDetails = () => {
  const { id } = useParams();
  const { fData, loading } = UseData();
  const clickedFrnd = fData.find(
    frnd => frnd.id == (id)
  );

  const{timeline,setTimeline}=useContext(TimelineContext);
  const handleCheckIn = (method) => {
  const newEntry = {
    ...clickedFrnd,           // clickedFrnd এর সব data
    method: method,           // "Call" / "Text" / "Video"
    date: new Date().toLocaleDateString(),
  
  };

  setTimeline([...timeline, newEntry]);
};
  if (loading) {
    return <div className='w-10/12 mx-auto mt-25'><FadeLoader className='mx-auto ' color='rgba(36, 77, 63, 1)' /></div>;
  }

  return (
    <div className='w-10/12 mx-auto mt-15 grid grid-cols-1 md:grid-cols-[.7fr_1.3fr] gap-2.5'>

      <div>
        <div className="card bg-base-100 shadow-sm items-center text-center p-5">

          <div className="avatar mb-3">
            <div className="w-20 rounded-full">
              <img src={clickedFrnd.picture} alt={clickedFrnd.name} />
            </div>
          </div>

          <p className="font-bold">{clickedFrnd.name}</p>
          <p className="text-sm text-base-content/50">{clickedFrnd.email}</p>
          <p className="text-sm text-base-content/50 mb-2">{clickedFrnd.days_since_contact}d ago</p>

          <div className="flex flex-wrap justify-center gap-1 mb-2">
            {clickedFrnd.tags.map((tag, i) => (
              <span key={i} className="badge badge-soft badge-accent text-xs">
                {tag.toUpperCase()}
              </span>
            ))}
          </div>

          <span className={`badge text-xs capitalize mb-2 ${clickedFrnd.status === 'overdue' ? 'badge-error' :
              clickedFrnd.status === 'almost due' ? 'badge-warning' :
                'badge-success'
            }`}>
            {clickedFrnd.status}
          </span>

          <span><em className='text-gray-400'>{clickedFrnd.bio}</em></span>
        </div>

        <div className="grid grid-cols-1 mt-3 space-y-2">
          <button className="btn btn-soft btn-warning w-full">
            <HiOutlineBellSnooze /> Snooze 2 Weeks
          </button>
          <button className="btn btn-soft btn-neutral w-full">
            <IoArchiveOutline /> Archive
          </button>
          <button className="btn btn-soft btn-error w-full">
            <RiDeleteBin6Line /> Delete
          </button>
        </div>
      </div>
      <div >
        <div className=" grid grid-cols-1 md:grid-cols-3 gap-3 ml-3">

          <div className="bg-white rounded-xl p-6 shadow-sm text-center ">
            <p className="text-4xl font-bold text-[#559b84]">{clickedFrnd.days_since_contact}</p>
            <p className="text-gray-500 mt-2">Days Since Contact</p>
          </div>

          <div className="bg-white rounded-xl p-6 shadow-sm text-center">
            <p className="text-4xl font-bold text-[#559b84]">{clickedFrnd.goal}</p>
            <p className="text-gray-500 mt-2">Goal(Days)</p>
          </div>

          <div className="bg-white rounded-xl p-6 shadow-sm text-center">
            <p className="text-4xl font-bold text-[#559b84]">{clickedFrnd.next_due_date}</p>
            <p className="text-gray-500 mt-2">Next Due </p>
          </div>


        </div>
        <div className='flex justify-between  bg-white rounded-xl p-6 shadow-sm  mt-4 ml-3 p-6'>
          <div>
            <h1 className='text-xl'>Relationship Goal</h1>
            <h2 className='pt-4 text-gray-400'>Connect every <span className='font-bold'>30 days</span></h2>

          </div>
          <button className='btn'>Edit</button>
        </div>
        <div className='ml-3  shadow-sm  bg-white p-4 py-8 rounded-md mt-7.5'>
          <h1 className='mb-5 text-gray-400 font-semibold'>Quick Check-In</h1>
          <div className="grid grid-cols-1 gap-3 md:grid-cols-3 gap-3">
            <button onClick={()=>handleCheckIn('Call')} className='btn  flex-col h-24 gap-2 w-full'>
              <FiPhoneCall size={24} />
              <span>Call</span>
            </button>
            <button onClick={()=>handleCheckIn('Text')} className='btn flex-col h-24 gap-2 w-full'>
              <LuMessageSquareMore size={24} />
              <span>Text</span>
            </button>
            <button onClick={()=>handleCheckIn('Video')} className='btn flex-col h-24 gap-2 w-full'>
              <PiVideoCameraLight size={24} />
              <span>Video</span>
            </button>
          </div>
        </div>
      </div>
    </div>

  );
};

export default FriendDetails;