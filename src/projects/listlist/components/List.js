import React from 'react';
import Item from './Item';

const List = (props) => (
    <div className="list list-bar">
        {
            props.listItems.map((listItem, index) => (
                <Item 
                    key={listItem}
                    itemText={listItem}
                    count={index + 1}
                    handleDeleteItem={props.handleDeleteItem}
                />
            ))
        }
    </div>
);

export default List;