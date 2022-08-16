import './note.css';
export const Note = (props) => {
    return ( <div className="both">
        <h1 className="h1"> {props.heading}</h1>
    <p className = "para">{props.para}</p>
    </div>
    )
}