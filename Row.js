import React, {Component} from 'react';
import Input from '@material-ui/core/Input';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import ListItemText from '@material-ui/core/ListItemText';
import Select from '@material-ui/core/Select';
import Checkbox from '@material-ui/core/Checkbox';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Button from '@material-ui/core/Button';



class Row extends Component{

    constructor(){
        super();
        this.state = {
            name: '',
            email: '',
            cityOrState: '',
            isadmin: '',
            locationNames: '',
            availableLocations: '',
            selectedLocations: [],
        };
        this.handleCityChange = this.handleCityChange.bind(this);
        this.checkedChange = this.checkedChange.bind(this);
        this.radioChange = this.radioChange.bind(this);
        this.applyChange = this.applyChange.bind(this);
    }

    componentDidMount(){
        const {item} = this.props;
        const {name, email, cityOrState, isadmin, locationNames, availableLocations} = item;
        this.setState({name, email, cityOrState, isadmin, locationNames, availableLocations});
        this.setState({selectedLocations: locationNames});
    }

    handleCityChange = event => {
        const { value } = event.target;
        console.log('event', event);
        let tempArray = this.state.selectedLocations;
        for (let i = 0, l = value.length; i < l; i += 1) {
            if(!tempArray.includes(value[i])) tempArray.push(value[i]);
        }
        this.setState({selectedLocations: event.target.value});
    }

    checkedChange = event => {
        const {isadmin} = this.state;
        this.setState({isadmin: !isadmin})
    }

    radioChange  = event => {
        this.setState({cityOrState: event.target.value});
    }

    applyChange = () => {
        const { email, cityOrState, isadmin, selectedLocations} = this.state;
        const obj = {email, cityOrState, isadmin, selectedLocations};
        console.log(obj);
        if(window.confirm(`Change values for ${email}?`)){
            alert('values changed');
        }
    }

    render(){
        const {item} = this.props;
        const ITEM_HEIGHT = 48;
        const ITEM_PADDING_TOP = 8;
        const MenuProps = {
        PaperProps: {
            style: {
                 maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
                 width: 250,
                },
            },
        };
        const selectedLocations = this.state.selectedLocations;
        console.log(selectedLocations);
        return(
            <tr className = 'row'>
                <td>{item.name}</td>
                <td>{item.email}</td>
                <td>
                    {
                        this.state.isadmin ? (
                            <Checkbox checked={true} onChange={this.checkedChange} value="isadmin" />
                        ) : (
                            <Checkbox checked={false} onChange={this.checkedChange} value="isadmin" />
                        ) 
                    }
                    
                </td>
                <td>
                    {
                        this.state.cityOrState == 'City' ? (
                            <RadioGroup
                            aria-label="Gender"
                            name="gender1"
                            value='cityOrState'
                            onChange={this.radioChange}
                            >
                                <FormControlLabel value="City" control={<Radio />} label="City" checked/>
                                <FormControlLabel value="State" control={<Radio />} label="State" />
                            </RadioGroup>
                          ) : (
                            <RadioGroup
                            aria-label="Gender"
                            name="gender1"
                            value='cityOrState'
                            onChange={this.radioChange}
                            >
                                <FormControlLabel value="City" control={<Radio />} label="City" />
                                <FormControlLabel value="State" control={<Radio />} label="State" checked/>
                            </RadioGroup>
                        )
                    }
                </td>
                <td>
                    <FormControl>
                        <Select
                            multiple
                            value= {selectedLocations}
                            input={<Input id="select-multiple-checkbox" />}
                            onChange = {this.handleCityChange}
                            // renderValue={selected => selected.join(', ')}
                            renderValue = {() => 'Available Locations'}
                            MenuProps={MenuProps}
                            >
                            {item.availableLocations.map(name => (
                                <MenuItem key={name} value={name}>                                
                                <Checkbox checked={selectedLocations.indexOf(name) > -1} />
                                <ListItemText primary={name} />
                                </MenuItem>
                            ))}
                        </Select>
                    </FormControl>
                </td>
                <td style = {{textAlign: 'left'}}>
                    {
                        selectedLocations.map((item, index) => 
                            (
                                <li>{item}</li>
                            )
                        )
                    }
                </td>
                <td>
                    <Button onClick = {this.applyChange} variant="contained" size="medium" color="primary" >
                        Apply Changes
                    </Button>
                </td>                
            </tr>
        )
    }
}

export default Row;
