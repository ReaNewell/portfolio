import React from 'react'

const Item = (props) => (
    <div className="list-item">
        <p className="list-item__text">{props.count}. {props.itemText}</p>
        <button
            className="list-item__button"
            onClick={(e) => {
                props.handleDeleteItem(props.itemText);
            }}
        >
            x
        </button>
    </div>
);

export default Item;