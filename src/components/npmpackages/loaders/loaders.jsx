import { DNA } from "react-loader-spinner";
import "./CustomDna.css"; // Import your custom CSS file

export const CustomDna = () => {
  return (
    <>
      <DNA
        visible={true}
        height="500"
        width="500"
        ariaLabel="dna-loading"
        wrapperClass="dna-wrapper"
         
        
      />
    </>
  );
};


