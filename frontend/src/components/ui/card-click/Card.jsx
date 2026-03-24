import './Card.css'
import { useNavigate } from "react-router-dom";

export default function Card(props) {
    const navigate = useNavigate();
    return (
        <div className="card" onClick={() => navigate(props.path)}>
            <div className="card-content">
                <h2 className="card-title">{props.title}</h2>
            </div>
        </div>
    )
}