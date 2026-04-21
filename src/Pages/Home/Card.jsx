import UseData from "../../Hook/UseData";

const Card = () => {
  const { fData } = UseData();

  const onTrackCount = fData.filter(item => item.status === "on-track").length;
  const almostDueCount = fData.filter(item => item.status === "almost due").length;
  const thisMonth=fData.filter(item=>item.days_since_contact<=30).length;

  return (
    <div className="w-10/12 mx-auto grid grid-cols-1 md:grid-cols-4 gap-4 p-4 mt-8">

      <div className="bg-white rounded-xl p-6 shadow-sm text-center">
        <p className="text-4xl font-bold text-teal-900">{fData.length}</p>
        <p className="text-gray-500 mt-2">Total Friends</p>
      </div>

      <div className="bg-white rounded-xl p-6 shadow-sm text-center">
        <p className="text-4xl font-bold text-teal-900">{onTrackCount}</p>
        <p className="text-gray-500 mt-2">On Track</p>
      </div>

      <div className="bg-white rounded-xl p-6 shadow-sm text-center">
        <p className="text-4xl font-bold text-teal-900">{almostDueCount}</p>
        <p className="text-gray-500 mt-2">Need Attention</p>
      </div>

      <div className="bg-white rounded-xl p-6 shadow-sm text-center">
        <p className="text-4xl font-bold text-teal-900">
          {thisMonth}
        </p>
        <p className="text-gray-500 mt-2">Interaction This Month</p>
      </div>

    </div>
  );
};

export default Card;
