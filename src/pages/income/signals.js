import { signal } from '@preact/signals';

export const typesSignal = signal([]);

export const updateItem = (id, field, value) => {
  typesSignal.value = typesSignal.value.map((item) => (item.id === id ? { ...item, [field]: value } : item));
  console.log('🚀 ~ Board ~ typesSignal.value:', typesSignal.value);
};

export const addNewItem = (value) => {
  const oldItems = typesSignal.value;

  const newItem = { value, id: oldItems.length };

  switch (value) {
    case 'board':
      break;
    case 'rail':
      break;
    case 'freza':
      break;
    case 'circle':
      newItem.ttnItems = [];
      break;
    case 'lamel':
      break;
  }

  typesSignal.value = [...oldItems, newItem];
  console.log('🚀 ~ Board ~ typesSignal.value:', typesSignal.value);
};

export const removeItem = (id) => {
  typesSignal.value = typesSignal.value.filter((item) => item.id !== id); // Remove item by filtering out the item
};
