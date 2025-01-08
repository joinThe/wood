import React, { useState } from 'react';
import { Box, TextField, Select, MenuItem, Button, List, ListItem, ListItemText, Typography } from '@mui/material';

import MainCard from 'components/MainCard';

import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFnsV3';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import { TimePicker } from '@mui/x-date-pickers/TimePicker';

// ==============================|| SAMPLE PAGE ||============================== //

export default function Report() {
  const [items, setItems] = useState([]);
  const [textInput, setTextInput] = useState('');
  const [groupTextInput, setGroupTextInput] = useState('');
  const [selectValue, setSelectValue] = useState('');
  const [selectedDate, setSelectedDate] = useState(null);
  const [selectedStartTime, setSelectedStartTime] = useState(null);
  const [selectedEndTime, setSelectedEndTime] = useState(null);

  const handleAddItem = () => {
    if (textInput.trim() && selectValue) {
      setItems([...items, { text: textInput, select: selectValue }]);
      setTextInput('');
      setSelectValue('');
    }
  };

  return (
    <MainCard title="Звіт">
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
              label="Час початку"
              value={selectedStartTime}
              onChange={(newValue) => setSelectedStartTime(newValue)}
              renderInput={(params) => <TextField {...params} fullWidth />}
              ampm={false}
            />
            <TimePicker
              label="Час кінця"
              value={selectedEndTime}
              onChange={(newValue) => setSelectedEndTime(newValue)}
              renderInput={(params) => <TextField {...params} fullWidth />}
              ampm={false}
            />
          </Box>
        </LocalizationProvider>
      </Box>
      <Box>
        <TextField label="Бригада №" value={groupTextInput} onChange={(e) => setGroupTextInput(e.target.value)} />
      </Box>
      <Box sx={{ maxWidth: 400, mt: 4 }}>
        <Typography variant="h5" gutterBottom>
          Виконані роботи{' '}
        </Typography>

        <Box sx={{ display: 'flex', gap: 2, mb: 2 }}>
          <TextField label="Text" value={textInput} onChange={(e) => setTextInput(e.target.value)} fullWidth />
          <Select value={selectValue} onChange={(e) => setSelectValue(e.target.value)} displayEmpty fullWidth>
            <MenuItem value="" disabled>
              Обробка
            </MenuItem>
            <MenuItem value="Option 1">Шліфування</MenuItem>
            <MenuItem value="Option 2">Фрезерування</MenuItem>
            <MenuItem value="Option 3"></MenuItem>
          </Select>
          <Button variant="contained" onClick={handleAddItem}>
            +
          </Button>
        </Box>

        <List>
          {items.map((item, index) => (
            <ListItem key={index}>
              <ListItemText primary={item.text} secondary={`Selected: ${item.select}`} />
            </ListItem>
          ))}
        </List>
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
