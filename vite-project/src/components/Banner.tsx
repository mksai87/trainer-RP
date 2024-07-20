function Banner() {
  const url = "banner.jpg";
  return (
    <>
      <div
        style={{
          background: `url('${url}')`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          color: "white",
          width: "100%",
          height: "60vh",
        }}
        className="jumbotron bg-cover text-white"
      >
        <div className="container py-5 text-center">
          <b>
            <h1
              className="display-4 font-weight-bold"
              style={{ color: "black", fontSize: "70px" }}
            >
              AI Powered Job Prep Hub
            </h1>
          </b>
          <b>
            {" "}
            <p className="font-italic mb-0" style={{ color: "black" }}>
              Harness AI to Master Aptitude, Verbal, Technical Skills, and
              Interview Techniques.
            </p>
          </b>
        </div>
      </div>
    </>
  );
}
export default Banner;
