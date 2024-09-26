const Skills = ({ imageUrl, text }) => {
  return (
    <>
      <div
        class="card"
        style={{
          width: "15rem",
          margin: "20px",
          marginRight: "auto",
        }}
      >
        <img
          src={imageUrl}
          class="card-img-top"
          alt="..."
          style={{ height: "10rem" }}
        />
        <div class="card-body">
          <h5 class="card-title">{text}</h5>
        </div>
      </div>
    </>
  );
};

export default Skills;
