import { useEffect, useState, useContext } from "react";
import { Link, useParams } from "react-router";
import { mealURI } from "../../config";
import { useRecipee } from "../utilities/helper";
import { useSelector, useDispatch } from "react-redux";
import { removeItem, addItem, clearCart } from "../utilities/cartSlice";
import Shimmer from "./Shimmer";
import "../index.css";


function RecipeeCard() {
  const [isDisable, setIsDisable] = useState(false)
  const dispatch = useDispatch();
  const [bgColor, setBgColor] = useState('bg-blue-700')

  function handleAddItem(recipee) {
    dispatch(addItem(recipee));
  }

  const info = useParams();
  const { data } = useRecipee(info.id);
  
  return (
    <>
      {data.length == 0 ? (
        <div className="flex">
          <Shimmer />
        </div>
      ) : (
        <div className="w-screen ">
          <div className="banner w-full h-2/4 p-4 overflow-hidden flex justify-center items-center flex-col gap-3 ">
            <img
              src={data.strMealThumb}
              alt=""
              className="object-cover h-96  rounded-md"
            />
            <button
                className={`${bgColor} text-zinc-50 p-2 rounded-md `}
              onClick={() => {
                if(!isDisable){
                  setIsDisable(true)
                  setBgColor("bg-green-700")
                  return handleAddItem(data)
                }
              }}
            >
             {isDisable?"Item is Added":"Add to cart"}
            </button>
          </div>
          <h2>Ingedients</h2>
          <ul>
            <li>{data.strIngredient1}</li>
            <li>{data.strIngredient2}</li>
            <li>{data.strIngredient3}</li>
            <li>{data.strIngredient4}</li>
            <li>{data.strIngredient5}</li>
            <li>{data.strIngredient6}</li>
            <li>{data.strIngredient7}</li>
            <li>{data.strIngredient8}</li>
            <li>{data.strIngredient9}</li>
            <li>{data.strIngredient10}</li>
            <li>{data.strIngredient11}</li>
            <li>{data.strIngredient12}</li>
            <li>{data.strIngredient13}</li>
          </ul>
          <h2>Instructions</h2>
          <p>{data.strInstructions}</p>

          <h2>Sources</h2>
          <li>
            <a href={data.strSource} className="link" target="_blank">
              {data.strSource}
            </a>
          </li>
          <li>
            <a href={data.strYoutube} className="link" target="_blank">
              {data.strYoutube}
            </a>
          </li>
        </div>
      )}
    </>
  );
}

export default RecipeeCard;
