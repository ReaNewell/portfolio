import React from 'react';
import Form from './components/Form';
import List from './components/List';

export default class ListList extends React.Component {
    state = {
        listItems: []
    }
    handleAddItem = (listItem) => {
        if (!listItem) {
            return 'Enter valid value to form.';
        } else if (this.state.listItems.indexOf(listItem) > -1) {
            return 'This list item already exists.';
        }
        this.setState((prevState) => ({ listItems: prevState.listItems.concat([listItem]) }));
    };
    handleDeleteItems = () => {
        this.setState(() => ({ listItems: [] }));
    };
    handleDeleteItem = (itemToRemove) => {
        this.setState((prevState) => ({ 
            listItems: prevState.listItems.filter((listItem) => itemToRemove !== listItem)
         }));
    }
    componentDidMount() {
        try {
            const json = localStorage.getItem('listItems');
            const listItems = JSON.parse(json);
    
            if (listItems) {
                this.setState(() => ({ listItems }));
            }
        } catch (e) {
            //Do nothing at all.
        }
    }
    componentDidUpdate(prevProps, prevState) {
        if (prevState.listItems.length !== this.state.listItems.length) {
            const json = JSON.stringify(this.state.listItems);
            localStorage.setItem('listItems', json);
        }
    }
    componentWillUnmount() {
        console.log('componentWillUnmount!');
    }
    render() {
        return (
            <div className="listlist">
                <div className='listlist-container'>
                    <div className='listlist_header'>
                        <h1 className='listlist__title'>List List</h1>
                        <h3 className='listlist__subtitle'>A Simple List Application</h3>
                    </div>
                    <div className='listlist-left-side'>
                        <Form 
                            handleAddItem={this.handleAddItem}
                        />
                    </div>
                    <List 
                        listItems={this.state.listItems}
                        handleDeleteItem={this.handleDeleteItem}
                    />
                </div>
            </div>
        );        
    };
}

// <button
// onClick={this.handleDeleteItems}
// className='listlist_button'
// >
// Remove All
// </button>