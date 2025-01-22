import React, { useState } from 'react';
import { Box, Typography, Select, MenuItem, TextField, Checkbox, List, ListItem, ListItemText, Button } from '@mui/material';

const LamelComponent = () => {
  const [generalM2, setGeneralM2] = useState('');
  const [sum, setSum] = useState('');
  const [thickness, setThickness] = useState('');
  const [quantity, setQuantity] = useState('');
  const [length, setLength] = useState('');
  const [width, setWidth] = useState('');
  const [m2, setM2] = useState('');
  const [sortType, setSortType] = useState('');
  const [itemsList, setItemsList] = useState([]);
  const [subSort, setSubSort] = useState('');
  const [subM2, setSubM2] = useState('');
  const [subItemsList, setSubItemsList] = useState([]);

  const handleAddMainItem = () => {
    setItemsList((prev) => [...prev, { thickness, quantity, length, width, m2, sortType }]);
    setThickness('');
    setQuantity('');
    setLength('');
    setWidth('');
    setM2('');
    setSortType('');
  };

  const handleAddSubItem = () => {
    setSubItemsList((prev) => [...prev, { subSort, subM2 }]);
    setSubSort('');
    setSubM2('');
  };

  return (
    <Box sx={{ p: 2, mt: 4, gap: 2 }}>
      {/* Header */}
      <Typography variant="h6" sx={{ textAlign: 'center' }}>
        Ламель
      </Typography>

      {/* General Inputs */}
      <Box sx={{ display: 'flex', alignItems: 'center', gap: 2, mb: 2 }}>
        <TextField label="Загальна м2" value={generalM2} onChange={(e) => setGeneralM2(e.target.value)} sx={{ width: '150px' }} />
        <TextField label="Сума" value={sum} onChange={(e) => setSum(e.target.value)} sx={{ width: '150px' }} />
        <Checkbox />
        <Typography>зПДВ</Typography>
      </Box>

      {/* Detailed Inputs */}
      <Box sx={{ display: 'flex', gap: 2, flexWrap: 'wrap', mb: 2, mt: 2 }}>
        <TextField label="Товщина" value={thickness} onChange={(e) => setThickness(e.target.value)} sx={{ width: '100px' }} />
        <TextField label="Кількість" value={quantity} onChange={(e) => setQuantity(e.target.value)} sx={{ width: '100px' }} />
        <TextField label="Довжина" value={length} onChange={(e) => setLength(e.target.value)} sx={{ width: '100px' }} />
        <TextField label="Ширина" value={width} onChange={(e) => setWidth(e.target.value)} sx={{ width: '100px' }} />
        <TextField label="М2" value={m2} onChange={(e) => setM2(e.target.value)} sx={{ width: '100px' }} />
        <Select value={sortType} onChange={(e) => setSortType(e.target.value)} displayEmpty sx={{ width: '150px' }}>
          <MenuItem value="">Сортність</MenuItem>
          <MenuItem value="Sort 1">Sort 1</MenuItem>
          <MenuItem value="Sort 2">Sort 2</MenuItem>
        </Select>
        <Button variant="contained" onClick={handleAddMainItem}>
          Додати
        </Button>

        {/* Main List */}
        {itemsList.length ? (
          <Box sx={{ p: 2, mt: 2 }}>
            <List>
              {itemsList.map((item, index) => (
                <ListItem key={index}>
                  <ListItemText
                    primary={`Товщина: ${item.thickness}, Кількість: ${item.quantity}, Довжина: ${item.length}, Ширина: ${item.width}, М2: ${item.m2}, Сортність: ${item.sortType}`}
                  />
                </ListItem>
              ))}
            </List>
          </Box>
        ) : null}
      </Box>

      {/* Subsection */}
      <Box sx={{ mt: 2 }}>
        <Box sx={{ display: 'flex', gap: 2, mb: 2 }}>
          <Select value={subSort} onChange={(e) => setSubSort(e.target.value)} displayEmpty sx={{ width: '150px' }}>
            <MenuItem value="">Сортність</MenuItem>
            <MenuItem value="Sort A">Sort A</MenuItem>
            <MenuItem value="Sort B">Sort B</MenuItem>
          </Select>
          <TextField label="Підсумок м2" value={subM2} onChange={(e) => setSubM2(e.target.value)} sx={{ width: '150px' }} />
          <Button variant="contained" onClick={handleAddSubItem}>
            Додати
          </Button>
        </Box>

        {subItemsList.length ? (
          <Box sx={{ p: 2, mt: 2 }}>
            <List>
              {subItemsList.map((item, index) => (
                <ListItem key={index}>
                  <ListItemText primary={`Сортність: ${item.subSort}, Підсумок м2: ${item.subM2}`} />
                </ListItem>
              ))}
            </List>
          </Box>
        ) : (
          <></>
        )}
      </Box>
    </Box>
  );
};

export default LamelComponent;
