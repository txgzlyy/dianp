import React from 'react'
import { render } from 'react-dom'

import './static/css/common.less'

class Hello extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            time:Date.now()
        }
    }
    render(){
        let arr = ['aa','bb','cc','dd'];
        return (
            <div>
                <p onClick={this.handclick.bind(this)} style={{fontSize:'100px',color:"red"}}> HELLO React {this.state.time} </p>
                <ol>
                   {
                       arr.map((item,index)=>{
                           return (
                               <li key={index}>{item}</li>
                           )
                       })
                   }
                </ol>
            </div>
        )
    }
    handclick(event){
        this.setState({time:Date.now()})
    }
}

render(<Hello/>,document.getElementById('root'))
