import { Link, useParams } from "react-router-dom"
import "./CharityCard.scss"

function CharityCard ({organizations, currentOrganization}) {
    return (
        <div className="card">
            <h1 className="title">CHARITIES</h1>
            {organizations
            .filter((charity)=> charity.id != charity.selectedCharity.id)
            .map((charity) => (
                <Link className="card__header" key={charity.id} to={`/${charity.id}`} >
                    <div className="card__image">
                        <img className="card__pic" src={charity.image} alt="Charity Image" />
                    </div>
                    <p className="card__upper-text">{charity.title}</p>
                    <p className="card__lower-text">{charity.location}</p>
                </Link>
            ))}
        </div>
    );
};

export default CharityCard