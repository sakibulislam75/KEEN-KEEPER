import React from 'react';
import UseData from '../../Hook/UseData';

const Friends = () => {
    const { fData, loading } = UseData();

    if (loading) return <span className="loading loading-spinner loading-lg block mx-auto mt-10" />;

    return (
        <div className='w-10/12 mx-auto my-15'>
            <h2 className="text-xl font-semibold mb-4">Your Friends</h2>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                {fData.map((friend) => (
                    <div key={friend.id} className="card bg-base-100 shadow-sm items-center text-center p-5">

                        <div className="avatar mb-3">
                            <div className="w-20 rounded-full">
                                <img src={friend.picture} alt={friend.name} />
                            </div>
                        </div>

                        <p className="font-bold">{friend.name}</p>
                        <p className="text-sm text-base-content/50 mb-2">{friend.days_since_contact}d ago</p>

                        <div className="flex flex-wrap justify-center gap-1 mb-2">
                            {friend.tags.map((tag, i) => (
                                <span key={i} className="badge badge-soft badge-accent text-xs">
                                    {tag.toUpperCase()}
                                </span>
                            ))}
                        </div>

                        <span className={`badge text-xs capitalize ${friend.status === 'overdue' ? 'badge-error' :
                                friend.status === 'almost due' ? 'badge-warning' :
                                    'badge-success'
                            }`}>
                            {friend.status}
                        </span>

                    </div>
                ))}
            </div>
        </div>
    );
};

export default Friends;