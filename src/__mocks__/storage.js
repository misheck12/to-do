let storage = [];

// return the storage
export const loadStorage = () => storage;

// update the storage
export const updateStorage = (data) => {
  storage = [];
  storage = data;
};
