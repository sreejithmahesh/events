import React from 'react';
import './card.scss';
const Card = (props)=>{
    const {title} = props;

    return (<div className="card-body">
            <div>
                <div className="card-title">{title}</div>
                <div className="card-title-line"></div>
            </div>
            <div>
                {props.children}
            </div>
        </div>)
}
Card.prototype = {
    title:String
}
export default Card;