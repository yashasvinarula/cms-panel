import React, {Component} from 'react';
import Row from './Row';
import Button from '@material-ui/core/Button';
import './App.css';

class App_test extends Component{

    constructor(){
        super();
        this.state = {
            header: ['Name', "Email", 'Admin', 'City/State',  'Change Locations', 'Location Names', 'Save Changes'],
            tableData: [
                { name: 'ElevenX1', email: 'ElevenX1@gmail.com', isadmin: true, cityOrState: 'City', locationNames: ['Ludhiana', 'Jalandhar', 'Sangat'],   availableLocations: ['Ludhiana', 'Jalandhar', 'Sangat', 'Khanna', 'Khanna2'] },
                { name: 'ElevenX2', email: 'ElevenX2@gmail.com', isadmin: false, cityOrState: 'State', locationNames: ['Punjab'],   availableLocations: ['Punjab'] },
                { name: 'ElevenX3', email: 'ElevenX3@gmail.com', isadmin: true, cityOrState: 'City', locationNames: ['Ludhiana', 'Khanna'],   availableLocations: ['Ludhiana', 'Jalandhar', 'Sangat', 'Khanna', 'Khanna2'] },
            ]
        };
        this.logout = this.logout.bind(this);
    }

    logout = () => {
        window.confirm('logout')
    }

    render(){
        const {header, tableData} = this.state;
        return(
            <div>
                <Button onClick = {this.logout}style = {{ position: 'absolute', right: '10vw'}} variant="contained" size="medium" color="primary" >
                        Logout
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
                            <Row item = {item} />
                        ))}
                    </tbody>
                </table>
            </div>
        )
    }
}

export default App_test;