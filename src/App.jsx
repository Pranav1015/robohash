import React, { Component } from "react";
import './App.css'

export class App extends Component{
  constructor () {
    super()
    this.state = {
      people : [],
      searchData : ""
    }
  }

  componentDidMount(){
    fetch("https://jsonplaceholder.typicode.com/users")
    .then((Response)=> Response.json())
    .then((result)=> this.setState(()=> { return {people : result}}))
  }

  render(){
    const filteredData = this.state.people.filter((people)=> {
      return people.name.toLocaleLowerCase().includes(this.state.searchData)

    })
    return(
      <>
    <div className="input">
      <input  type="text" placeholder="search" onChange={(event)=>{
      const searchData = event.target.value.toLocaleLowerCase()
      
      this.setState(()=>{
        return {searchData : searchData}
      })
      }} />
      </div>
      <div className="people">
        {filteredData.map((eachperson)=>  
        <div className="robot-container">
        <p>{eachperson.name}</p>
        <img src={`https://robohash.org/${eachperson.id}?set=set3`} alt="" />
        </div>

        )}
      </div>
      </>
    )
  }
}



export default App