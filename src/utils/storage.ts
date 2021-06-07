import Taro from "@tarojs/taro";

export const rm = (key: string) => {
  Taro.removeStorageSync(key);
};
export const get = (key: string): string | null => {
  return Taro.getStorageSync(key);
};
export const set = (key: string, val: string) => {
  return Taro.setStorageSync(key, val);
};
export const clear = () => {
  return Taro.clearStorageSync();
};
