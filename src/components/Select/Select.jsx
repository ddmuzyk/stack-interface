import * as React from 'react';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';

export default function BasicSelect({label, values}) {
  const [choice, setChoice] = React.useState('');

  const handleChange = (event) => {
    setChoice(event.target.value);
  };

  return (
    <Box sx={{ minWidth: 120 }}>
      <FormControl fullWidth>
        <InputLabel id="demo-simple-select-label">{label}</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={choice}
          label={label}
          onChange={handleChange}
        > {values.map((value, i) => {
          return <MenuItem key={i} value={value}>{value}</MenuItem>
          })
        }
        </Select>
      </FormControl>
    </Box>
  );
}