import React, { useState } from 'react';
import { Checkbox, TextField, FormControlLabel, Box, Collapse, Typography, Grid } from '@mui/material';

const FSCertificate = () => {
  const [isChecked, setIsChecked] = useState(false);

  const handleCheckboxChange = (event) => {
    setIsChecked(event.target.checked);
  };

  return (
    <Box mt={5}>
      <Typography variant="h4" gutterBottom>
        FSC
      </Typography>
      <FormControlLabel control={<Checkbox checked={isChecked} onChange={handleCheckboxChange} />} label="Сертифікат FSC" />
      <Collapse in={isChecked} timeout="auto" unmountOnExit>
        <Box mt={2}>
          <Grid container spacing={2}>
            <Grid item xs={6}>
              <TextField label="№" variant="outlined" fullWidth margin="normal" />
            </Grid>
            <Grid item xs={6}>
              <TextField label="%" variant="outlined" fullWidth margin="normal" />
            </Grid>
          </Grid>
        </Box>
      </Collapse>
    </Box>
  );
};

export default FSCertificate;
