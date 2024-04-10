import React from 'react'

class Profile extends React.Component{
constructor(){
  super();
  this.state={
    name:"vaishnavi" 
  }
  console.log("constructor")
}
getDerivedStatesFromProps(){
  console.log("getting props");
  return true;
}
componentDidMount(){
  console.log("componentdidMount")
}

shouldComponentUpdate(nextProps, nextState){
  console.log("shouldComponentUpdate");
  return true;
}

getSnapshotBeforeUpdate(prevProps, prevState){
  console.log("getSnapshotBeforeUpdate");
  return true;
}

componentDidUpdate(){
  console.log("componentDidUpdate");
}

componentWillUnmount(){
  console.log("componentWillUnmount");
}

render()
{
  console.log("render");
  
  return(
    <div>
             <h1>{this.state.name}</h1>

             <button onClick={()=>{this.setState({num:this.state.num+1,name:"pallavi"})}}> Toggle NavBar</button>
            
        </div>
        )
      }
}

export default Profile;