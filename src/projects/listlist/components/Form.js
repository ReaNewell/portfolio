import React from 'react';

class Form extends React.Component {
    state = {
        error: undefined
    };
    handleAddItem = (e) => {
        e.preventDefault();

        const listItem = e.target.elements.listItem.value.trim();
        const error = this.props.handleAddItem(listItem);

        this.setState(() => ({ error }));

        if (!error) {
            e.target.elements.listItem.value = '';
        }

        console.log(listItem);
    };
    render() {
        return (
            <div>
                <form 
                    onSubmit={this.handleAddItem}
                    className="form"
                >
                    <input 
                        type="text" 
                        name="listItem" 
                        className="form__input"
                    />
                    <button className="form__button">ADD</button>
                </form>
            </div>
        );
    }
}

export default Form;