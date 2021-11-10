/**
 * @description 获取随机颜色
 * @returns {String}
 */
export const randomColor: () => string = () => {
  let color = 'rgb(';
  for (let i = 0; i < 3; i++) color += Math.random() * 256 + ',';
  color = color.substring(0, color.length - 1) + ')';
  return color;
};

/**
 * @description 生成uuid
 * @returns {String}
 */
export const uuid: () => string = () => {
  let _url = URL.createObjectURL(new Blob());
  let uuid = _url.toString();
  URL.revokeObjectURL(_url);
  return uuid.substr(uuid.lastIndexOf('/') + 1);
};

/**
 * @description 获取随机按钮主题
 * @returns {String}
 */
export const randomType = () => {
  let theme = ['primary', 'info', 'default', 'warning', 'error'];
  return theme[parseInt(String(Math.random() * 5))];
};
