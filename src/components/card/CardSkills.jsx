const CardSkills = ({ icon, name }) => {
    return (
      <div className="card-skills bg-gray-200 text-black m-1 p-1 rounded-lg flex items-center">
        <div className="mr-2 ml-1">{icon}</div>
        <span >{name}</span>
      </div>
    );
  };
  
  export default CardSkills;