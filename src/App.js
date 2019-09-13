import React from 'react';
import {Container, Row, Col} from 'react-bootstrap'
import Display from './Display';


class Calculator extends React.Component {
    constructor(props){
        super(props);
        this.state={
            leng:'0',
            disIn: "0",
            dis:''
        }
        this.number= React.createRef();
        this.handleNum= this.handleNum.bind(this);
        this.handleClear=this.handleClear.bind(this);
        this.handleDel= this.handleDel.bind(this)
    }
    handleNum(event){
     this.setState({
         dis:this.state.dis +=event.target.innerHTML
     })
    }
    handleClear(){
        this.setState({
            dis:''
        })
    }
    handleDel(){
        this.setState({
            dis:this.state.dis.substring(0, this.state.dis.length-1)
        })
      
    }
    perFormMath(){

    }

    render(){
         this.firstRow =['DEL','(',')','/'];
         this.firstRowVal = this.firstRow.map((val, index)=><div  key={index} className="item"><h4 onClick={val==='DEL'?this.handleDel:this.handleNum} key={index}>{val}</h4></div>)
    
      this.secondRow= [7, 8, 9, 'x']
      this.secondRowVal = this.secondRow.map((val, index)=><div key={index} className="item"><h4 onClick={this.handleNum} >{val}</h4></div>)

        this.thirdRow = [4, 5, 6, '-']
        this.thirdRowVal = this.thirdRow.map((val, index)=><div key={index} className="item"><h4 onClick={this.handleNum} >{val}</h4></div>)

        this.fourthRow =[1,2,3,'+'];
         this.fourthRowVal = this.fourthRow.map((val, index)=><div key={index} className="item"><h4 onClick={this.handleNum} >{val}</h4></div>)

        this.fifthRow =[0,'.','=','clear'];
        this.fifthRowVal = this.fifthRow.map((val, index)=><div key={index} className="item"><h4 onClick={val==='clear'?this.handleClear:this.handleNum} >{val}</h4></div>)

        return(
                
                <Container className="container">
                    <Display display={this.state.dis.length ===0?this.state.disIn:this.state.dis}/>
                    <Row className="row">
                        {this.firstRowVal}
                    </Row>

                    <Row>
                        {this.secondRowVal}
                    </Row>

                    <Row>
                        {this.thirdRowVal}
                    </Row>

                    <Row>
                        {this.fourthRowVal}
                    </Row>

                    <Row>
                        {this.fifthRowVal}
                    </Row>
                </Container>

        )
    }
}

export default Calculator;