import React, { Component } from 'react';

class AddItem extends Component {

    constructor(props) {
        super(props);
        this.state = {
            name: '',
            family: "",
            genus: "",
            image: ""
        }
        this.itemChange = this.itemChange.bind(this);
        this.handleaddItem = this.handleaddItem.bind(this);
    }

    componentDidMount() {
        if (Object.entries(this.props.editItem).length !== 0) {
            this.setState(this.props.editItem);
        }

    }

    itemChange(e) {
        const value = e.target.value;
        const name = e.target.name;
        this.setState({ [name]: value })

    }

    handleaddItem(e) {
        e.preventDefault();
        this.props.handleaddItem(this.state);
    }

    render() {
        console.log(this.props.editItem)

        let lable = 'Add';
        if (Object.entries(this.props.editItem).length !== 0) {

            lable = 'Edit'
        }


        return (
            <div style={addSection}>
                <form onSubmit={this.handleaddItem}>
                    <label style={addLabel}>Name</label>
                    <input style={addInput}

                        onChange={this.itemChange}
                        value={this.state.name}
                        disabled={lable === 'Edit'}
                        name="name"
                    />
                    <br />
                    <label style={addLabel}>family</label>
                    <input style={addInput}

                        onChange={this.itemChange}
                        value={this.state.family}
                        name="family"
                    />
                    <br />
                    <label style={addLabel}>genus</label>
                    <input style={addInput}

                        onChange={this.itemChange}
                        value={this.state.genus}
                        name="genus"
                    />
                    <br />
                    <label style={addLabel}>image</label>
                    <input style={addInput}

                        onChange={this.itemChange}
                        value={this.state.image}
                        name="image"
                    />
                    <br />
                    <button style={addItem}>SAVE</button>
                    <button onClick={() => { this.props.cancelItem() }} type="button" style={cancelButton}>CANCEL</button>
                </form>
            </div>
        )
    }


}


const addSection = {
   display:'flex',
   padding:'5px',
   margin:'10px',
   textTransform: 'uppercase',
  };


  const addLabel = {
    padding: '5px',
    margin: '5px',
   };

   const addInput = {
    padding: '10px',
    margin: '5px',
   };

   const addItem = {
    backgroundColor: 'deepskyblue',
    border: 'none',
    color: 'white',
    padding: '5px 5px',
    textAlign: 'center',
    textDecoration: 'none',
    display: 'inlineBlock',
    fontSize: '16px',
    marginLeft: '65px',
  };

  const cancelButton = {
    backgroundColor: 'gray',
    border: 'none',
    color: 'white',
    padding: '5px 5px',
    textAlign: 'center',
    textDecoration: 'none',
    display: 'inlineBlock',
    fontSize: '16px',
    margin: '10px',
  };


export default AddItem;