import React, { useState } from "react";
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
  Grid,
  Paper,
} from "@mui/material";

const Rail = () => {
  const [listItems, setListItems] = useState([
    { number: "", quantity: "", length: "", width: "", thickness: "", volume: "", grade: "" },
  ]);

  const handleAddItem = () => {
    setListItems([
      ...listItems,
      { number: "", quantity: "", length: "", width: "", thickness: "", volume: "", grade: "" },
    ]);
  };

  const handleItemChange = (index, field, value) => {
    const updatedItems = [...listItems];
    updatedItems[index][field] = value;
    setListItems(updatedItems);
  };

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        gap: 2,
        alignItems: "start",
        padding: 2,
        maxWidth: 500,
      }}
    >
      <Typography variant="h6" sx={{ mb: 1 }}>
        Рейка
      </Typography>

      {/* Підвид */}
      <FormControl fullWidth>
        <InputLabel id="subtype-label">Підвид</InputLabel>
        <Select labelId="subtype-label" defaultValue="">
          <MenuItem value="type1">Тип 1</MenuItem>
          <MenuItem value="type2">Тип 2</MenuItem>
        </Select>
      </FormControl>

      {/* Товщина */}
      <TextField fullWidth label="Товщина" variant="outlined" />

      {/* Загальний Об'єм */}
      <TextField fullWidth label="Загальний Об'єм" variant="outlined" />

      {/* Сума */}
      <TextField fullWidth label="Сума" variant="outlined" />

      {/* зПДВ */}
      <FormControlLabel
        control={<Checkbox color="success" />}
        label="зПДВ"
        labelPlacement="end"
        sx={{ ml: 0 }}
      />

      {/* List Section */}
      <Paper
        sx={{
          padding: 2,
          width: "100%",
          backgroundColor: "#f5f5f5",
        }}
        elevation={1}
      >
        <Typography variant="subtitle1" sx={{ mb: 2 }}>
          Список
        </Typography>
        {listItems.map((item, index) => (
          <Grid container spacing={2} key={index} sx={{ mb: 2 }}>
            {/* № пачки */}
            <Grid item xs={4}>
              <TextField
                fullWidth
                label="№ пачки"
                value={item.number}
                onChange={(e) => handleItemChange(index, "number", e.target.value)}
              />
            </Grid>

            {/* Кількість */}
            <Grid item xs={4}>
              <TextField
                fullWidth
                label="Кількість"
                value={item.quantity}
                onChange={(e) => handleItemChange(index, "quantity", e.target.value)}
              />
            </Grid>

            {/* Довжина */}
            <Grid item xs={4}>
              <TextField
                fullWidth
                label="Довжина"
                value={item.length}
                onChange={(e) => handleItemChange(index, "length", e.target.value)}
              />
            </Grid>

            {/* Ширина */}
            <Grid item xs={4}>
              <TextField
                fullWidth
                label="Ширина"
                value={item.width}
                onChange={(e) => handleItemChange(index, "width", e.target.value)}
              />
            </Grid>

            {/* Товщина */}
            <Grid item xs={4}>
              <TextField
                fullWidth
                label="Товщина"
                value={item.thickness}
                onChange={(e) => handleItemChange(index, "thickness", e.target.value)}
              />
            </Grid>

            {/* Об'єм */}
            <Grid item xs={4}>
              <TextField
                fullWidth
                label="Об'єм"
                value={item.volume}
                onChange={(e) => handleItemChange(index, "volume", e.target.value)}
              />
            </Grid>

            {/* Сортність */}
            <Grid item xs={4}>
              <FormControl fullWidth>
                <InputLabel id={`grade-label-${index}`}>Сортність</InputLabel>
                <Select
                  labelId={`grade-label-${index}`}
                  value={item.grade}
                  onChange={(e) => handleItemChange(index, "grade", e.target.value)}
                >
                  <MenuItem value="grade1">Сорт 1</MenuItem>
                  <MenuItem value="grade2">Сорт 2</MenuItem>
                </Select>
              </FormControl>
            </Grid>
          </Grid>
        ))}
        <Button variant="contained" color="primary" onClick={handleAddItem}>
          Додати елемент
        </Button>
      </Paper>
    </Box>
  );
};

export default Rail;
