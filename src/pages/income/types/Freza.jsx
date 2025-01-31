import React, { useState } from 'react';
import {
  Box,
  Select,
  MenuItem,
  FormControl,
  InputLabel,
  TextField,
  Checkbox,
  FormControlLabel,
  Typography,
  Button,
  Paper
} from '@mui/material';

import Grid from '@mui/material/Unstable_Grid2';
import TypeWrapper from './utils/TypeWrapper';

const Freza = () => {
  const [listItems, setListItems] = useState([{ number: '', height: '', length: '', width: '' }]);

  const handleAddItem = () => {
    setListItems([...listItems, { number: '', height: '', length: '', width: '' }]);
  };

  const handleItemChange = (index, field, value) => {
    const updatedItems = [...listItems];
    updatedItems[index][field] = value;
    setListItems(updatedItems);
  };

  return (
    <TypeWrapper>
      <Grid item>
        <Box
          sx={{
            display: 'flex',
            flexDirection: 'column',
            gap: 2,
            alignItems: 'start',
            padding: 2,
            maxWidth: 500
          }}
        >
          <Typography variant="h6" sx={{ mb: 1 }}>
            Фреза
          </Typography>

          {/* Підвид */}
          <FormControl fullWidth>
            <InputLabel id="subtype-label">Підвид</InputLabel>
            <Select labelId="subtype-label" defaultValue="">
              <MenuItem value="type1">Тип 1</MenuItem>
              <MenuItem value="type2">Тип 2</MenuItem>
            </Select>
          </FormControl>

          {/* Список Пачок */}
          <Paper
            sx={{
              padding: 2,
              width: '100%',
              backgroundColor: '#f5f5f5'
            }}
            elevation={1}
          >
            <Typography variant="subtitle1" sx={{ mb: 2 }}>
              Список Пачок
            </Typography>
            {listItems.map((item, index) => (
              <Grid container spacing={2} key={index} sx={{ mb: 2 }}>
                {/* № пачки */}
                <Grid item xs={3}>
                  <TextField
                    fullWidth
                    label="№ пачки"
                    value={item.number}
                    onChange={(e) => handleItemChange(index, 'number', e.target.value)}
                  />
                </Grid>

                {/* Висота */}
                <Grid item xs={3}>
                  <TextField
                    fullWidth
                    label="Висота"
                    value={item.height}
                    onChange={(e) => handleItemChange(index, 'height', e.target.value)}
                  />
                </Grid>

                {/* Довжина */}
                <Grid item xs={3}>
                  <TextField
                    fullWidth
                    label="Довжина"
                    value={item.length}
                    onChange={(e) => handleItemChange(index, 'length', e.target.value)}
                  />
                </Grid>

                {/* Ширина */}
                <Grid item xs={3}>
                  <TextField
                    fullWidth
                    label="Ширина"
                    value={item.width}
                    onChange={(e) => handleItemChange(index, 'width', e.target.value)}
                  />
                </Grid>
              </Grid>
            ))}
            <Button variant="contained" color="primary" onClick={handleAddItem}>
              Додати елемент
            </Button>
          </Paper>

          {/* Об'єм */}
          <TextField fullWidth label="Об'єм" variant="outlined" />

          {/* Коєфіцієнт */}
          <TextField fullWidth label="Коєфіцієнт" variant="outlined" />

          {/* Сортність */}
          <FormControl fullWidth>
            <InputLabel id="grade-label">Сортність</InputLabel>
            <Select labelId="grade-label" defaultValue="">
              <MenuItem value="grade1">Сорт 1</MenuItem>
              <MenuItem value="grade2">Сорт 2</MenuItem>
            </Select>
          </FormControl>

          {/* Загальна м3 */}
          <TextField fullWidth label="Загальна м3" variant="outlined" />

          {/* Сума */}
          <TextField fullWidth label="Сума" variant="outlined" />

          {/* зПДВ */}
          <FormControlLabel control={<Checkbox color="success" />} label="зПДВ" labelPlacement="end" sx={{ ml: 0 }} />
        </Box>
      </Grid>
    </TypeWrapper>
  );
};

export default Freza;
