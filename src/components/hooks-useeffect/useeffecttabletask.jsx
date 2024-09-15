import { useEffect, useState } from "react";
import axios from "axios";
import Table from "react-bootstrap/Table";

const UseEffectTable = () => {
  const [Data, setData] = useState([]);
  const [type, setType] = useState("products");
  useEffect(() => {
    document.title = "useEffect Table";
    console.log("use effect rendering");
    fetchData();
  }, [type]);

  const fetchData = async () => {
    try {
      const { data, status } = await axios.get(
        `https://fakestoreapi.com/${type}`
      );
      if (status === 200) {
        setData(data);
      }
    } catch (err) {
      console.error("error message", err);
    }
  };
  const clickHandler = (each) => {
    setType(each);
  };

  return (
    <div>
      <h1 style={{ textAlign: "center" }}>fake store data</h1>
      {["products", "carts", "users"].map((each) => (
        <button
          onClick={() => {
            clickHandler(each);
          }}
        >
          {each}
        </button>
      ))}
     <Table striped bordered hover>
        <thead>
          <tr>
            {type === "products" && <th>Title</th>}
            {type === "carts" && <th>Cart ID</th>}
            {type === "users" && <th>Username</th>}
          </tr>
        </thead>
        <tbody>
          {Data.map((each, index) => (
            <tr key={index}>
              {type === "products" && <td>{each.title}</td>}
              {type === "carts" && <td>{each.id}</td>}
              {type === "users" && <td>{each.username}</td>}
            </tr>
          ))}
        </tbody>
      </Table>
     
     
       
    </div>
  );
};
export default UseEffectTable;
