import React from "react";

function MealCard({
  strMeal,
  strMealThumb,
  idMeal,
  strArea,
  strCategory,
  strTags,
  user
}) {
  
  return (
    <div className=" card border border-zinc-400 h-2/3 w-80 rounded-md overflow-hidden ">
      <div className="upper shadow-xl  top-0 w-full h-56 overflow-hidden relative">
        <div className="absolute w-full -z-10">
          <img
            src={strMealThumb}
            className="h-56 object-cover w-full "
          />
          <div className=" bg-zinc-900 h-12 w-full absolute bottom-0 rounded-2xl blur-xl -mb-6"></div>
        </div>
        <div className="flex justify-between pl-3 pr-3  w-full  text-zinc-100 font-bold absolute bottom-2">
          <div className="">{strMeal}</div>
          <div className="">⭐{(Math.random() * 4 + 1).toFixed(1)}</div>
        </div>
      </div>
      <div className=" lower mt-2 p-2  bottom-0">
        <div className="top flex justify-between items-center">
          <div className="tags">{strTags}</div>
          <div className="price">₹{Math.floor(Math.random() * 35) * 10}/-</div>
        </div>
        <div className="bottom flex flex-col gap-1">
          <div className="veg-nonveg">{strCategory}</div>
          <div className="discount1 bg-green-600 text-zinc-100 p-1 rounded-md">
            Flat {Math.floor(Math.random() * 4) * 10 + 10}% off on walk-in
          </div>
          <div className="discount2  bg-green-200 p-1 rounded-md">
            Up to {Math.floor(Math.random() * 4) * 10 + 10}% off with bank
            offers
          </div>
        </div>
      </div>
    </div>
  );
}

export default MealCard;
