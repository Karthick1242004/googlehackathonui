import React from "react";
import "./table.css";
function handleClick() {
  console.log("Button clicked");
}
const Docappointment = () => {
  const data = [
    {
      id: "Dr.Deeksha",
      name: "11.00am",
      contact: "6345894627",
      age: (
        <button className="my-button" onClick={handleClick}>
          Book Now
        </button>
      ),
    },
    {
      id: "Dr.Vikas",
      name: "8.00am",
      contact: "9562395783",
      age: (
        <button className="my-button" onClick={handleClick}>
          Book Now
        </button>
      ),
    },
    {
      id: "Dr.Nicholas",
      name: "3.00pm",
      contact: "9562694062",
      age: (
        <button className="my-button" onClick={handleClick}>
          Book Now
        </button>
      ),
    },
    {
      id: "Dr.Deepthi",
      name: "7.00pm",
      contact: "6596238946",
      age: (
        <button className="my-button" onClick={handleClick}>
          Book Now
        </button>
      ),
    },
  ];

  return (
    <div className="table-container">
      <div className="table">
        <center>
          <h2>Cardiologists</h2>
        </center>
        <table>
          <thead>
            <tr>
              <th>Name</th>
              <th>Available Time</th>
              <th>Contact Number</th>
              <th>Book</th>
            </tr>
          </thead>
          <tbody>
            {data.map((item) => (
              <tr key={item.id}>
                <td>{item.id}</td>
                <td>{item.name}</td>
                <td>{item.contact}</td>
                <td>{item.age}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <div className="image-container">
        <div className="image-blur" />
      </div>
    </div>
  );
};
export default Docappointment;
