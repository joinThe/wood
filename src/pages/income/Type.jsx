import React, { useState } from 'react';
import { Box, Typography, Select, MenuItem, FormControl, InputLabel, TextField, Button, Grid, Collapse } from '@mui/material';
import Board from './types/Board';
import Rail from './types/Rail';
import Freza from './types/Freza';

const WoodTypeSelect = () => {
  const [selectedItem, setSelectedItem] = useState('');
  const [items, setItems] = useState([]);
  const [woodType, setWoodType] = useState('');

  const woodTypes = ['Дуб', 'Бук', 'Ясень']; // Підвиди типів дерева

  const handleSelectChange = (event) => {
    setSelectedItem(event.target.value);
  };

  const handleWoodTypeChange = (event) => {
    setWoodType(event.target.value);
  };

  const handleAddItem = () => {
    if (selectedItem) {
      setItems([...items, { name: selectedItem }]);
      setSelectedItem('');
      setWoodType('');
    }
  };

  return (
    <Box mt={5}>
      <Typography variant="h5" gutterBottom>
        Вид
      </Typography>
      <Box>
        <FormControl fullWidth>
          <InputLabel>Виберіть тип</InputLabel>
          <Select value={selectedItem} onChange={handleSelectChange} label="Виберіть елемент">
            <MenuItem value="Фреза">Фреза</MenuItem>
            <MenuItem value="Кругляк">Кругляк</MenuItem>
            <MenuItem value="Дошка">Дошка</MenuItem>
            <MenuItem value="Ламель">Ламель</MenuItem>
            <MenuItem value="Рейка">Рейка</MenuItem>
          </Select>
        </FormControl>

        <Button variant="contained" color="primary" onClick={handleAddItem} sx={{ mt: 2 }}>
          Додати
        </Button>
      </Box>

      <Collapse in={items.length > 0} timeout="auto" unmountOnExit>
        <Box mt={2}>
          {items.map((item, index) => (
            <Box key={index} mb={2}>
              {item.name=="Дошка"?<Board/>:null}
              {item.name=="Рейка"?<Rail/>:null}
              {item.name=="Фреза"?<Freza/>:null}

              {/* <Typography variant="h6" gutterBottom>
                {item.name}
              </Typography>
              <Grid container spacing={2}>
                <Grid item xs={6}>
                  <TextField label="Обєм" variant="outlined" fullWidth value={item.volume} disabled />
                </Grid>
                <Grid item xs={6}>
                  <FormControl fullWidth>
                    <InputLabel>Тип дерева</InputLabel>
                    <Select value={item.woodType} onChange={handleWoodTypeChange} label="Тип дерева" disabled>
                      {woodTypes.map((woodType, idx) => (
                        <MenuItem key={idx} value={woodType}>
                          {woodType}
                        </MenuItem>
                      ))}
                    </Select>
                  </FormControl>
                </Grid>
              </Grid>
              <Typography variant="h6">{`та інше для "${item.name}"....`}</Typography> */}
            </Box>
          ))}
        </Box>
      </Collapse>
    </Box>
  );
};

export default WoodTypeSelect;
