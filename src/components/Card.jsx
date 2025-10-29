
function Card({title,description,icon}) {
  return (
      <div className="bg-[#212121]  p-4 border border-[#1F2937] rounded 1A1A1A m-2">
          <p className="icon text-blue-600 mb-4">{icon}</p>
          <h2 className="text-3xl text-white p-2"> {title}</h2>
          <p className="  text-[#888E99] ">
              {description}
          </p>
    </div>
  )
}

export default Card
