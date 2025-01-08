import React, { useState } from 'react';
import {
  Box,
  TextField,
  Select,
  MenuItem,
  Button,
  List,
  ListItem,
  ListItemText,
  Typography,
  FormControlLabel,
  Checkbox
} from '@mui/material';

import MainCard from 'components/MainCard';

import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFnsV3';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import { TimePicker } from '@mui/x-date-pickers/TimePicker';
// ==============================|| SAMPLE PAGE ||============================== //

export default function Income() {
  const [items, setItems] = useState([]);
  const [textInput, setTextInput] = useState('');
  const [selectValue, setSelectValue] = useState('');
  const [selectedDate, setSelectedDate] = useState(null);
  const [selectedTime, setSelectedTime] = useState(null);

  const [checked, setChecked] = useState(false);
  const [textInput1, setTextInput1] = useState('');
  const [textInput2, setTextInput2] = useState('');

  const handleAddItem = () => {
    if (textInput.trim() && selectValue) {
      setItems([...items, { text: textInput, select: selectValue }]);
      setTextInput('');
      setSelectValue('');
    }
  };

  const handleSubmit = () => {
    console.log('Checkbox is:', checked);
    console.log('Input 1:', textInput1);
    console.log('Input 2:', textInput2);
  };

  return (
    <MainCard title="Прихід">
      <Box>
        <LocalizationProvider dateAdapter={AdapterDateFns}>
          <Box sx={{ display: 'flex', gap: 2, mb: 2 }}>
            <DatePicker
              label="Дата"
              value={selectedDate}
              onChange={(newValue) => setSelectedDate(newValue)}
              renderInput={(params) => <TextField {...params} fullWidth />}
            />
            <TimePicker
              label="Час"
              value={selectedTime}
              onChange={(newValue) => setSelectedTime(newValue)}
              renderInput={(params) => <TextField {...params} fullWidth />}
              ampm={false}
            />
          </Box>
        </LocalizationProvider>
      </Box>
      <Box mt={6}>
        <Typography variant="h5" gutterBottom>
          Checkbox and Text Inputs
        </Typography>
        <Box sx={{ mt: 4, display: 'flex', alignItems: 'center', gap: 2, margin: 'auto' }}>
          {' '}
          <FormControlLabel control={<Checkbox checked={checked} onChange={(e) => setChecked(e.target.checked)} />} label="Check me" />
          <TextField label="Input 1" value={textInput1} onChange={(e) => setTextInput1(e.target.value)} sx={{ mb: 2 }} />
          <TextField label="Input 2" value={textInput2} onChange={(e) => setTextInput2(e.target.value)} sx={{ mb: 2 }} />
        </Box>
        <Button variant="contained" onClick={handleSubmit}>
          Submit
        </Button>
      </Box>
    </MainCard>
  );
}
// export default function SamplePage() {
//   return (
//     <MainCard title="Sample Card">
//       <Grid container rowSpacing={4.5} columnSpacing={2.75}>
//         {/* row 1 */}
//         <Grid item xs={12} sx={{ mb: -2.25 }}>
//           <Typography variant="h5">Dashboard</Typography>
//         </Grid>
//       </Grid>
//     </MainCard>
//   );
// }
