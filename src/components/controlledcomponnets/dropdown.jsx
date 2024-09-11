import { useState } from "react";

const DropDown = () => {
    const [data, setData] = useState([]);
    
    const statesHandler = (value) => {
       if (value === 'andhrapradesh') {
           const newdata = ["Vizag", "Srikakulam", "Vijayawada", "Tenali"];
           setData(newdata);
       } else if (value === 'telangana') {
           const newdata = ["Hyderabad", "LB Nagar", "Ameerpet", "KPHB"];
           setData(newdata);
       } else {
           setData([]);
       }
    };

    const changeHandler = (event) => {
      const selectedValue = event.target.value;
      statesHandler(selectedValue);
    };

    return (
        <div>
            <select onChange={changeHandler}>
                <option value="">Select a state</option>
                <option value="andhrapradesh">Andhra Pradesh</option>
                <option value="telangana">Telangana</option>
            </select>

            <select>
                <option>Select a city</option>
                {
                    data.map((each, index) => {
                        return <option key={index}>{each}</option>;
                    })
                }
            </select>
        </div>
    );
};

export default DropDown;