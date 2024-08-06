// storage.js

const STORAGE_KEY = 'project-manager-data';

// Save data to local storage
export const saveData = (data) => {
  try {
    const jsonData = JSON.stringify(data);
    localStorage.setItem(STORAGE_KEY, jsonData);
  } catch (error) {
    console.error('Error saving data to local storage:', error);
  }
};

// Load data from local storage
export const loadData = () => {
  try {
    const jsonData = localStorage.getItem(STORAGE_KEY);
    if (jsonData) {
      return JSON.parse(jsonData);
    }
    return [];
  } catch (error) {
    console.error('Error loading data from local storage:', error);
    return [];
  }
};
