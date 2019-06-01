import React, {Component} from 'react';
import ApproveRow from './ApproveRow';
import Button from '@material-ui/core/Button';

class ApproveUser extends Component{
    constructor(){
        super();
        this.state = {
            header: ['Name', 'Email', 'Approve'],
            tableData: [
                { name: 'ElevenX', email: 'ElevenX@gmail.com'},
                { name: 'ElevenX', email: 'ElevenX@gmail.com'},
                { name: 'ElevenX', email: 'ElevenX@gmail.com'},
                { name: 'ElevenX', email: 'ElevenX@gmail.com'},
                { name: 'ElevenX', email: 'ElevenX@gmail.com'},
                { name: 'ElevenX', email: 'ElevenX@gmail.com'},
            ]
        }
    }

    logout = () => {
        window.confirm('logout')
    }

    render(){
        const {header, tableData} = this.state;
        return(
            <div>
                <Button onClick = {this.logout} style = {{ position: 'absolute', right: '10vw'}} variant="contained" size="medium" color="primary" >
                        Logout
                </Button>
                <Button style = {{ position: 'absolute', left: '10vw'}} variant="contained" size="medium" color="primary" >
                        Modify Users
                </Button>
                <br /> <br /> <br />
                

                <table>
                    <tr className = 'header'>
                        {header.map((item) => 
                            (<th>{item}</th>)
                        )}
                    </tr>                    
                    <tbody>
                        {tableData.map((item) =>(
                            <ApproveRow item = {item} />
                        ))}
                    </tbody>
                </table>
            </div>
        )
    }
}

export default ApproveUser;