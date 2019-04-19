import React, { Component } from 'react';



export class Sample extends React.Component {
  constructor(props) {
    super(props)

    this.state = {data: []}  ;      

  }
  
  componentDidMount(){
       
        this.getData();
    }

    getData = () => {
         //It should return array
          return fetch('http://localhost:4000/all')
            .then((response) => response.json())
            .then((responseJson) => {
                console.log("responseJson", responseJson);
                this.setState({
                    data: responseJson
                });
            })
            .catch((error) =>{
                console.error(error);
            });
    }
    renderView(data, index) {

      return (<li style={list}>
        <a  >
          <img style={image} src={data.image} alt="Facebook Icon" />
        </a>
        <div style={content}>
          <p>{data.name}</p>
          <p>{data.family}</p>
        </div>
      </li>)
    }
    

  render() {
    console.log(this.state.data);
    return (
      <div>
        <ul style={ulStyle}>
              {
                this.state.data.map((data, index) =>
                 {
                   return this.renderView(data, index);
                 }
              )
              }
            </ul>
      </div>
    )
  }
}

const ulStyle = {
  listStyleType: 'none',
  display: 'inline-block'
};
const image = {
  float: 'left',
  width: '80px',
  height: '80px'
};
const content = {
   display: 'inline-block',
   margin: '10px'
}
const list = {
  margin: '10px'
}