const InfoCard = ({ title, value }) => (
    <div className="p-4 bg-white rounded shadow-md">
      <h2 className="text-lg font-semibold">{title}</h2>
      <p className="mt-2 text-xl">{value}</p>
    </div>
  );
  
  export default InfoCard;
  