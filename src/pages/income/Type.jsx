import React, { useState } from 'react';
import { Box, Typography, Select, MenuItem, FormControl, InputLabel, Button, Collapse } from '@mui/material';
import Board from './types/Board';
import Rail from './types/Rail';
import Freza from './types/Freza';
import Circle from './types/Circle';
import Lamel from './types/Lamel';
import { addNewItem, typesSignal } from './signals';

const menuItems = [
  { value: 'freza', label: 'Фреза' },
  { value: 'circle', label: 'Кругляк' },
  { value: 'board', label: 'Дошка' },
  { value: 'lamel', label: 'Ламель' },
  { value: 'rail', label: 'Рейка' }
];

const WoodTypeSelect = () => {
  const [selectedItem, setSelectedItem] = useState('');
  const items = typesSignal.value;

  const handleSelectChange = (event) => {
    setSelectedItem(event.target.value);
  };

  const handleAddItem = () => {
    if (selectedItem) {
      addNewItem(selectedItem);
      // setItems([...items, { value: selectedItem, id: items.length }]);

      setSelectedItem('');
    }
  };

  return (
    <Box mt={5}>
      <Typography variant="h4" gutterBottom>
        Вид
      </Typography>
      <Box>
        <FormControl fullWidth>
          <InputLabel>Виберіть тип</InputLabel>
          <Select value={selectedItem} onChange={handleSelectChange} label="Виберіть елемент">
            {menuItems.map(({ value, label }) => (
              <MenuItem key={value} value={value}>
                {label}
              </MenuItem>
            ))}
          </Select>
        </FormControl>

        <Button variant="contained" color="primary" onClick={handleAddItem} sx={{ mt: 2 }}>
          Додати
        </Button>
      </Box>

      <Collapse in={items.length > 0} timeout="auto" unmountOnExit>
        <Box mt={2}>
          {items.map((item, i) => (
            <Box key={i} mb={2}>
              {(() => {
                switch (item.value) {
                  case 'board':
                    return <Board id={i} />;
                  case 'rail':
                    return <Rail id={i} />;
                  case 'freza':
                    return <Freza id={i} />;
                  case 'circle':
                    return <Circle id={i} />;
                  case 'lamel':
                    return <Lamel id={i} />;
                  default:
                    return null;
                }
              })()}
            </Box>
          ))}
        </Box>
      </Collapse>
    </Box>
  );
};

export default WoodTypeSelect;
