import React,{Component} from 'react'

class Demo extends React.Component{
 constructor(props)
 { 
     super(props)
     this.state={
         count:10
     }
 }

 handalar=()=>{
     this.setState({count:this.state.count+1})
 }

  render()
  {
      return(
          <div>
              <h1>Demo Component</h1>
              {this.state.count}
              <button onClick={this.handalar}>Clickme</button>
          </div>
      )
  }
}

export default Demo