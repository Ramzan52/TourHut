import React from 'react'

import { makeStyles } from '@material-ui/core/styles';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormHelperText from '@material-ui/core/FormHelperText';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import TextField from '@material-ui/core/TextField';
import "./Styles/SearchBar.css";

const useStyles = makeStyles((theme) => ({
  formControl: {
    margin: theme.spacing(1),
    minWidth: 120,
  },
  selectEmpty: {
    marginTop: theme.spacing(2),
  },
}));



function SearchBar() {
  const classes = useStyles();
  const [age, setAge] = React.useState('');

  const handleChange = (event) => {
    setAge(event.target.value);
  };

  
    return (
      <div>
        
    <div className="card-7">
      <br/>
  <div className="card-body">
    <form className="form" >
      <div className="input-group input--large">
        <label className="label">Location</label>
        <input className="input--style-1" type="text" placeholder="Search Venue" name="going" />
      </div>
      <div className="input-group input--medium">
      <label className="label">Dates</label>
      <form className={classes.container} noValidate>
      <TextField
        id="date"
      
        type="date"
        defaultValue=""
        className={classes.textField}
        InputLabelProps={{
          shrink: true,
        }}
      />
      </form>
      </div>
    
      <div className="input-group input--medium">
     
      <FormControl className={classes.formControl}>
        <InputLabel id="demo-simple-select-label">Categories</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          
          value={age}
          onChange={handleChange}
        >
          <MenuItem value={10}>Family Tour</MenuItem>
          <MenuItem value={20}>Couples Tour</MenuItem>
          <MenuItem value={30}>Group Tour</MenuItem>
        </Select>
      </FormControl>
      </div>
      <button  variant="success" className="btn-submit" type="submit">Search</button>
    </form>
  </div>
</div>

      </div>
    );
}

export default SearchBar;
