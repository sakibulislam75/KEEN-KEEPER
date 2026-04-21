const Card = () => {
  const stats = [
    { value: 10, label: "Total Friends" },
    { value: 3, label: "On Track" },
    { value: 6, label: "Need Attention" },
    { value: 12, label: "Interactions This Month" },
  ];

  return (
    <div className="w-10/12 mx-auto grid grid-cols-1 md:grid-cols-4 gap-4 p-4 mt-8">
      {stats.map((stat,i) => (
        <div key={i} className=" bg-white rounded-xl p-6 shadow-sm text-center">
          <p className="text-4xl font-bold text-teal-900">{stat.value}</p>
          <p className="text-gray-500 mt-2">{stat.label}</p>
        </div>
      ))}
    </div>
  );
};


export default Card;