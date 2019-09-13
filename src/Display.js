import React from 'react';
import {Row} from 'react-bootstrap'

class Display extends React.Component{
    constructor(props){
        super(props);

    }
    render (){
    return <Row className="display"> <h4>{this.props.display}</h4></Row>
    }
}
export default Display;