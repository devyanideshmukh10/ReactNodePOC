import React from 'react';

function ListItem(props) {
    const { data, editItemHandler, deleteItemHandler } = props;
    return (

        <div>
            {
                <ul style={ulStyle}>
                    {
                        Array.isArray(data) && data.map((item, index) => {
                            return <li style={list} key={index}>
                             
                                    <img style={image} src={item.image} alt="Facebook Icon" />
                            
                                <div style={content}>
                                    <p>{item.name}</p>
                                    <p>{item.family}</p>
                                </div>
                                <button onClick={() => { editItemHandler(index, item) }} style={editButton} >Update</button>
                                <button onClick={() => { deleteItemHandler(item) }} style={deleteButton} >Delete</button>
                            </li>
                        }
                        )
                    }
                </ul>
            }
        </div>
    )
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
    margin: '10px',

}


const editButton = {
    backgroundColor: 'deepskyblue',
    border: 'none',
    color: 'white',
    padding: '5px 5px',
    textAlign: 'center',
    textDecoration: 'none',
    display: 'inlineBlock',
    fontSize: '16px',
    float:'right',
    marginTop: '10px',
    marginRight:'10px',
  };


  const deleteButton = {
    backgroundColor: 'gray',
    border: 'none',
    color: 'white',
    padding: '5px 5px',
    textAlign: 'center',
    textDecoration: 'none',
    display: 'inlineBlock',
    fontSize: '16px',
   float:'right',
    marginTop: '10px',
    marginRight:'10px',
  };

export default ListItem;


