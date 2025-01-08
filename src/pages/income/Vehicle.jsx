import React, { useState } from 'react';
import { Checkbox, TextField, FormControlLabel, Box, Grid, Typography } from '@mui/material';

const Vehicle = () => {
  const [isChecked, setIsChecked] = useState(false);

  const handleCheckboxChange = (event) => {
    setIsChecked(event.target.checked);
  };

  return (
    <Box mt={5}>
      <Typography variant="h5" gutterBottom>
        Транспорт
      </Typography>
      <Grid container spacing={2} alignItems="center">
        <Grid item xs={4}>
          <TextField label="Номер машини" variant="outlined" fullWidth margin="normal" />
        </Grid>
        <Grid item xs={4}>
          <TextField label="Витрати" variant="outlined" fullWidth margin="normal" />
        </Grid>
        <Grid item xs={4}>
          <FormControlLabel control={<Checkbox checked={isChecked} onChange={handleCheckboxChange} />} label="зПДВ" />
        </Grid>
      </Grid>
    </Box>
  );
};

export default Vehicle;
