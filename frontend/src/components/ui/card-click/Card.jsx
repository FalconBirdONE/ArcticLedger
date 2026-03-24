import './Card.css'
export default function Card(props) {
    return (
        <div className="card">
            <div className="card-content">
                <h2 className="card-title">{props.title}</h2>
            </div>
        </div>
    )
}