import React, { Component } from 'react';
import './App.css';
import AddItem from './addItem';
import ListItem from './listitem';
const headers = {
  "access-control-allow-origin": "*",
  "Content-type": "application/json; charset=UTF-8",
  "mode": "no-cors"
};
class App extends Component {

  constructor(props) {
    super(props)

    this.state = {
      data: [],
      newItem: false,
      editItem: false,
      editData: {}
    };

    this.handleaddItem = this.handleaddItem.bind(this);
    this.toggleAdd = this.toggleAdd.bind(this);
    this.editItemHandler = this.editItemHandler.bind(this);
    this.cancelItem = this.cancelItem.bind(this); 
    this.deleteItemHandler = this.deleteItemHandler.bind(this); 
  }

  componentDidMount() {
    this.getData();
  }

  getData = () => {
    var options = {
      method: "GET",
      headers: headers
    };

    //It should return array
    return fetch('http://localhost:4000/all', options)
      .then((response) => response.json())
      .then((responseJson) => {
        console.log("responseJson", responseJson);
        this.setState({
          data: responseJson
        });
      })
      .catch((error) => {
        console.error(error);
      });
  }

  // update locally insted of http call
  // updateItem = (data) => {
  //   var index = this.state.data.findIndex(x=> x.name === data.name);
  //   if (index === -1){

  //   }
  //   else
  //     this.setState({
  //       data: [
  //          ...this.state.data.slice(0,index),
  //          Object.assign({}, this.state.data[index], data),
  //          ...this.state.data.slice(index+1)
  //       ]
  //     });
  // }


  handleaddItem(data) {
    data.attributes = { length: "1.2m", weight: 390 };
    if(this.state.editItem){
     // this.updateItem(data);
      fetch(`http://localhost:4000/edit/${data.name}`, {
        method: "post",
        headers: headers,
        body: JSON.stringify(data)
  
      })
        .then((response) => {
  
          this.setState({ editItem: false, editData: {} })
          this.getData();
        });
     
      return;
    }

    
  
    fetch('http://localhost:4000/add', {
      method: "post",
      headers: headers,
      body: JSON.stringify(data)

    })
      .then((response) => {

        this.setState({ newItem: false })
        this.getData();
      });
  }

  deleteItemHandler(data) {
    fetch(`http://localhost:4000/delete/${data.name}`, {
      method: "GET",
      headers: headers
    })
      .then((response) => {
        this.getData();
      });
  }

  toggleAdd() {
    this.setState({ newItem: true })
  }

  editItemHandler(index, item) {
    this.setState({editData: item, editItem: true})

  }

  cancelItem(){
    this.setState({editData: {}, editItem: false, newItem: false})
  }

  render() {
    console.log(this.state);
    const { newItem, editItem, editData, data } = this.state;
    return (


      <div>
        <h3 style={title}>ONLINE ZOO</h3>
        {(newItem || editItem) ?
          <AddItem handleaddItem={this.handleaddItem} editItem={editData} cancelItem={this.cancelItem}/>
          : <button onClick={this.toggleAdd} style={addButton}> Add New </button>
        }

        <div>
          {
            !(newItem || editItem) && <ListItem data={data} editItemHandler={this.editItemHandler} deleteItemHandler={this.deleteItemHandler} />
          }
        </div>
      </div>
    )
  }
}


const addButton = {
  backgroundColor: 'red',
  border: 'none',
  color: 'white',
  padding: '5px 5px',
  textAlign: 'center',
  textDecoration: 'none',
  display: 'inlineBlock',
  fontSize: '16px',
  float: 'right',
  margin: '10px',
};

const title = {
 display:'flex',
 justifyContent:'center',
 margin:'5px',
 pdding:'5px',
 fontWeight:'Bold',
 
};

export default App;
