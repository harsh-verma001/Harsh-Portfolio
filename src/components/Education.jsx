import "./Education.css";
const Education = ({ heading, text, grades, year }) => {
  return (
    <>
      <div className="edu-para-container">
        <center>
          <h5 style={{ borderBottom: "2px solid black" }}>{heading}</h5>
        </center>
        <div className="content">
          <span style={{ fontWeight: "600" }}>College : </span>{" "}
          <span>{text}</span>
          <br />
          <span style={{ fontWeight: "600" }}>Percentage : </span>{" "}
          <span>{grades}</span> <br />
          <span style={{ fontWeight: "600" }}>Year : </span> <span>{year}</span>
          {/* <p>College : {text}</p>
          <p>Percentage : {grades}</p>
          <p>Year : {year}</p> */}
        </div>
      </div>
    </>
  );
};
export default Education;
