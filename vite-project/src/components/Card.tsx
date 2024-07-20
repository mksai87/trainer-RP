interface utility {
  titel: string;
  url: string;
  about: string;
  link: string;
  alter: string;
}

function Card({ titel, url, about, link, alter }: utility) {
  return (
    <>
      <div className="card" style={{ width: "18rem" }}>
        <img src={url} className="card-img-top" alt={alter} />
        <div className="card-body">
          <h5 className="card-title">{titel}</h5>
          <p className="card-text">{about}</p>
          <a href={link} className="btn btn-primary">
            YT link
          </a>
        </div>
      </div>
    </>
  );
}
export default Card;
