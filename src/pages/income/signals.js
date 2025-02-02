import { signal } from '@preact/signals';

export const typesSignal = signal([]);
export const updateItem = (id, field, value) => {
  typesSignal.value = typesSignal.value.map((item) => {
    if (item.id !== id) return item;

    return {
      ...item,
      [field]: Array.isArray(item[field])
        ? [...item[field], value] // Append to existing array
        : value // Overwrite for strings or other types
    };
  });
  console.log('🚀 ~ typesSignal.value=typesSignal.value.map ~ typesSignal.value:', typesSignal.value);
};

export const addNewItem = (value) => {
  const oldItems = typesSignal.value;

  const newItem = { value, id: oldItems.length };

  switch (value) {
    case 'board':
      break;
    case 'rail':
      newItem.bunch = [];
      break;
    case 'freza':
      newItem.bunch = [];
      break;
    case 'circle':
      newItem.ttnItems = [];
      break;
    case 'lamel':
      newItem.bunch = [];
      newItem.bunch2 = [];
      break;
  }

  typesSignal.value = [...oldItems, newItem];
  console.log('🚀 ~ Board ~ typesSignal.value:', typesSignal.value);
};

export const removeItem = (id) => {
  typesSignal.value = typesSignal.value.filter((item) => item.id !== id); // Remove item by filtering out the item
};
