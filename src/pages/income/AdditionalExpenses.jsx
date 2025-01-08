import React, { useState } from 'react';
import {
  Checkbox,
  TextField,
  FormControlLabel,
  Box,
  Grid,
  Typography,
  Button,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Collapse,
  Checkbox as MuiCheckbox,
  IconButton
} from '@mui/material';
import { DeleteOutlined } from '@ant-design/icons';

const AdditionalExpenses = () => {
  const [isChecked, setIsChecked] = useState(false);
  const [items, setItems] = useState([]);
  const [newItem, setNewItem] = useState({ name: '', amount: '', vat: false });

  const handleCheckboxChange = (event) => {
    setIsChecked(event.target.checked);
  };

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setNewItem((prevState) => ({ ...prevState, [name]: value }));
  };

  const handleCheckboxVatChange = (event) => {
    setNewItem((prevState) => ({ ...prevState, vat: event.target.checked }));
  };

  const handleAddItem = () => {
    if (newItem.name && newItem.amount) {
      setItems([...items, newItem]);
      setNewItem({ name: '', amount: '', vat: false });
    }
  };

  const handleDeleteItem = (index) => {
    setItems(items.filter((item, i) => i !== index));
  };

  return (
    <Box mt={5}>
      <Typography variant="h5" gutterBottom>
        Додаткові витрати
      </Typography>
      <FormControlLabel control={<Checkbox checked={isChecked} onChange={handleCheckboxChange} />} label="Додаткові витрати" />
      <Collapse in={isChecked} timeout="auto" unmountOnExit>
        <Box mt={2}>
          <Grid container spacing={2}>
            <Grid item xs={4}>
              <TextField
                label="Найменування"
                variant="outlined"
                fullWidth
                name="name"
                value={newItem.name}
                onChange={handleInputChange}
                margin="normal"
              />
            </Grid>
            <Grid item xs={4}>
              <TextField
                label="Сума"
                variant="outlined"
                fullWidth
                name="amount"
                value={newItem.amount}
                onChange={handleInputChange}
                margin="normal"
              />
            </Grid>
            <Grid item xs={4}>
              <FormControlLabel control={<MuiCheckbox checked={newItem.vat} onChange={handleCheckboxVatChange} />} label="зПДВ" />
            </Grid>
          </Grid>
          <Button variant="contained" color="primary" onClick={handleAddItem} sx={{ mt: 2 }}>
            Додати
          </Button>

          <TableContainer sx={{ mt: 3 }}>
            <Table>
              <TableHead>
                <TableRow>
                  <TableCell>Найменування</TableCell>
                  <TableCell>Сума</TableCell>
                  <TableCell>зПДВ</TableCell>
                  <TableCell>Дія</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {items.map((item, index) => (
                  <TableRow key={index}>
                    <TableCell>{item.name}</TableCell>
                    <TableCell>{item.amount}</TableCell>
                    <TableCell>{item.vat ? 'Так' : 'Ні'}</TableCell>
                    <TableCell>
                      <IconButton onClick={() => handleDeleteItem(index)}>
                        <DeleteOutlined />
                      </IconButton>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
        </Box>
      </Collapse>
    </Box>
  );
};

export default AdditionalExpenses;
