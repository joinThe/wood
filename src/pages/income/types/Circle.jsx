import React, { useState } from 'react';
import { Box, Typography, Select, MenuItem, TextField, Checkbox, Button, List, ListItem, ListItemText } from '@mui/material';

const Circle = () => {
  const [listItems, setListItems] = useState([]);
  const [newItem, setNewItem] = useState('');

  const [pidsumok, setPidsumok] = useState('');
  const [summa, setSumma] = useState('');
  const [pdv, setPdv] = useState(false);

  const handleAddItem = () => {
    setListItems([...listItems, { pidsumok, summa, pdv }]);
    setPidsumok('');
    setSumma('');
    setPdv(false);
  };

  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        gap: 2,
        p: 2
      }}
    >
      {/* Header */}
      <Typography variant="h6">Кругляк</Typography>

      {/* Select (Yellow) */}
      <Select placeholder="Підвид" defaultValue="" variant="outlined" sx={{ width: '200px' }}>
        <MenuItem value="option1">1</MenuItem>
        <MenuItem value="option2">2</MenuItem>
        <MenuItem value="option2">3</MenuItem>
      </Select>

      <Box
        sx={{
          display: 'flex',
          alignItems: 'center',
          gap: 2,
          flexWrap: 'wrap',
          justifyContent: 'center'
        }}
      >
        <TextField variant="outlined" onChange={(e) => setPidsumok(e.target.value)} label="Підсумок м3" sx={{ width: '150px' }} />
        <TextField variant="outlined" onChange={(e) => setSumma(e.target.value)} label="Сумма" sx={{ width: '150px' }} />
        <Checkbox
          onChange={(e) => {
            console.log('🚀 ~ Circle ~ e.target.value:', e.target.value);
            setPdv(e.target.value);
          }}
          sx={{
            width: '24px',
            height: '24px',
            p: 0
          }}
        />
        <Typography>зПДВ</Typography>
        <Button onClick={handleAddItem} variant="contained" sx={{ color: 'white', width: '200px' }}>
          Додати ТТН
        </Button>
      </Box>

      {/* List Section */}
      {listItems.length ? (
        <Box
          sx={{
            borderRadius: 1,
            width: '100%',
            p: 2
          }}
        >
          <Typography>Список ТТН</Typography>
          <List>
            {listItems.map((item, index) => (
              <ListItem key={index} sx={{ p: 0 }}>
                <ListItemText primary={item.summa} />
                <ListItemText primary={item.pidsumok} />
                <Checkbox checked={item.pdv} />
              </ListItem>
            ))}
          </List>
        </Box>
      ) : (
        <></>
      )}
    </Box>
  );
};

export default Circle;
