import React, { Component } from 'react'

class EventHandler extends Component {
  constructor(props) {
    super(props)
  
    this.state = {
       changeValue : ''
    }
  }
  handleInputChange = (e)=>{
     this.setState({
         changeValue : e.target.value
     }, ()=>{
         console.log(this.state.changeValue);
     })
  }
    
  render() {
    const {changeValue} = this.state
    return (
      <div>
          <input type="text" onChange={this.handleInputChange}/>
          <p>{changeValue}</p>
      </div>
    )
  }
}
export default EventHandler
