import React from 'react';
import PropTypes from 'prop-types';
import './button.scss';

const EventButton = ({label,className,click})=>(
    <div className={"event-btn "+className} onClick={click}>
        {label}
    </div>
)
EventButton.prototype = {
    label:PropTypes.String,
    className:PropTypes.String,
    click:PropTypes.func
}
export default EventButton;