import React from "react";

const styles={
  wrrapper:{
    margin:8,
    padding:8,
    display:"flex",
    flexDirection:"Column",
    border:"1px solid grey",
    borderRadius:16,
  },
  messageeText:{
    color:"Black",
    fontSize:16,
  },
};

class Notification extends React.Component{
  constructor(props){
    super(props);
    this.state ={};
  }

  componentDidMount(){
    console.log(`${this.props.id} componentDidMount() called`);
  }
  componentDidUpdate(){
    console.log(`${this.props.id} componentDidUpdate() called`);
  }
  componentWillUnmount(){
    console.log(`${this.props.id} componenWillUnmount() called`);
  }
  render(){
    return(
      <div style={styles.wrrapper}>
        <span style={styles.messageeText}>
          {this.props.message}
        </span>
      </div>
    );
  }
}

export default Notification;