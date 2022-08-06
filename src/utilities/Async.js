import AsyncStorage from "@react-native-async-storage/async-storage";

export const set = async (key, value) => {
  console.log("Saving data... ", key, value);
  const data = JSON.stringify(value);
  return await AsyncStorage.setItem(key, data);
};

export const get = async (key) => {
  console.log("Loading data.... ", key);
  try {
    const getData = await AsyncStorage.getItem(key);
    return JSON.parse(getData);
  } catch (e) {
    return { error: "Failed to Store!" };
  }
};

export const clear = async () => {
  console.log("Clear Storage... ");
  return await AsyncStorage.clear();
};
