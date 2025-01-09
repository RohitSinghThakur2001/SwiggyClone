import { useState } from "react";

const Section = ({ Heading, isVisible, setIsVisible }) => {
  // const [isVisible,setIsVisible] = useState(false)
  return (
    <div className="border border-red-900 m-2 p-2">
      <h1 className="font-bold">{Heading}</h1>
      <button className="underline" onClick={setIsVisible}>
        {isVisible ? "Hide" : "Show"}
      </button>
      <p hidden={!isVisible}>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus ipsa
        reiciendis cum quidem, ea vel, amet quas unde consequuntur cupiditate
        iusto! Quod eos dolorem ratione iusto, vel soluta eaque accusamus?Lorem
        ipsum dolor, sit amet consectetur adipisicing elit. Optio tempora ipsa
        cum, adipisci impedit quis dolor, dolores quos veniam aperiam autem,
        fugit explicabo sed enim non fuga voluptatum esse consequuntur!
      </p>
    </div>
  );
};
function Instamart() {
  const [visibleSection, setVisibleSection] = useState("nothing");
  // const [isVisible, setIsVisible] = useState(false);
  let sectionArr = ["About", "Cart", "Orders", "Rewards"];
  return (
    <div>
      {sectionArr.map((elm) => {
        return (
          <Section
            Heading={elm}
            isVisible={visibleSection === elm}
            setIsVisible={() =>{
              return(visibleSection===elm ? setVisibleSection("") : setVisibleSection(elm))
              }
            }
          />
        );
      })}
    </div>
  );
}

export default Instamart;
