import React, {Component} from 'react';
import Button from '@material-ui/core/Button';

class ApproveRow extends Component{
    constructor(){
        super();
        this.state = {

        };
    }

    approve = () => {
        window.confirm('approve?');
    }

    reject = () => {
        window.confirm('reject?');
    }

    render(){
        const {item} = this.props;
        return(
            <tr className = 'row'>
                <td style = {{width: '33.3%'}}>{item.name}</td>
                <td  style = {{width: '33.3%'}}>{item.email}</td>
                <td  style = {{width: '33.3%'}}>
                    <Button onClick = {this.approve} variant="contained" size="medium" color="primary">
                        Approve
                    </Button>
                    &nbsp;&nbsp;&nbsp;&nbsp;
                    <Button onClick = {this.reject} variant="contained" size="medium" color="secondary" >
                        Reject
                    </Button>
                </td>                
            </tr>
        )
    }
}

export default ApproveRow;