import "./Skills.css"; // Make sure to include this CSS file

const Skills = ({ imageUrl, text }) => {
  return (
    <>
      <div
        className="card"
        style={{
          width: "15rem",
          margin: "20px",
          marginRight: "auto",
        }}
      >
        <img
          src={imageUrl}
          className="card-img-top"
          alt="..."
          style={{ height: "10rem" }}
        />
        <div className="card-body">
          <h5 className="card-title">{text}</h5>
        </div>
      </div>
    </>
  );
};

export default Skills;
