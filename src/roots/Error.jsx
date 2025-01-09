import {useRouteError} from 'react-router'
import Header from "../components/Header";
function Error() {
    const err = useRouteError();
    console.log(err);
  return (
    <div>
      <Header/>
      <div className="flex">
      {err.status +" "+ err.statusText} 
      </div>
      </div>
  )
}

export default Error