// import "./SelectedCharity"
import { Link } from "react-router-dom";
function SelectedCharity ({SelectedCharity}) {
    return (
        <div>
                <Link className="card__header" key={SelectedCharity.id} to={`/${SelectedCharity.id}`} >
                    <div className="card__image">
                        <img className="card__pic" src={SelectedCharity.image} alt="Charity Image" />
                    </div>
                    <p className="card__upper-text">{SelectedCharity.title}</p>
                    <p className="card__lower-text">{SelectedCharity.location}</p>
                </Link>
        </div>
    );
};

export default SelectedCharity