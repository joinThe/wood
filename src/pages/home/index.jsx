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

export default function Home() {
  return (
    <MainCard title="Головна сторінка">
      <Typography>⬅ Виберіть сторінку</Typography>
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
