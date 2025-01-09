import {useEffect,useState} from "react"
import {mealURI} from "../../config"

//this code says : agar searchtext me khali hai ya usme spaces hai to resData return kar dena other wise----> filter karke data bhej do
export function filterData(searchText, resData) {
  const filteredData = (searchText.trim()=="")?resData:resData.filter((elm) =>
    elm.strMeal?.toLowerCase().includes(searchText.toLowerCase())
  );
  return filteredData;
}

export function useRecipee(id){
    const [data, setdata] = useState([])
    const [meals,setMeals] = useState([])
    useEffect(()=>{
        fetch(mealURI)
        .then(data=>data.json())
        .then(data=>{
          setMeals(data.data.data)
          setdata((data.data.data.filter(elm=>elm.idMeal===id))[0]);
        })
        
      },[])
      return {
        data,
        meals
      }
}