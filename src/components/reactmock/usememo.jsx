import React, { useState, useMemo } from "react";

const TestMock = () => {
  const [isdark, setIsdark] = useState(false);

  const themeStyles = useMemo(() => {
    return {
      backgroundColor: isdark ? "darkgray" : "lightgray", 
      width: "500px",
      height: "500px",
    };
  }, [isdark]); 

  return (
    <div style={themeStyles}> 
      <button onClick={() => setIsdark(!isdark)}>Change Theme</button>
    </div>
  );
};

export default TestMock;
