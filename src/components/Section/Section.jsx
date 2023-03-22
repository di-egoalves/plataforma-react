export function Section(props) {
    return (
        <div className="section">
            <h2>{props.title}</h2>
            <p>{props.description}</p>
        </div>
    )
}