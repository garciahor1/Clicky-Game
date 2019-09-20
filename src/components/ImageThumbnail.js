import React from "react"

function ImageThumbnail(props) {
    return (
        <img onClick={() => props.personAdded(props.id)} src={props.src} alt={props.name} className="img-thumbnail"></img>
    )
}

export default ImageThumbnail;