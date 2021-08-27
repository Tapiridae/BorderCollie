/**
 * @description 获取随机颜色
 * @returns {String}
 */
export const randomColor = () => {
  let color = 'rgb(';
  for (let i = 0; i < 3; i++) color += Math.random() * 256 + ',';
  color = color.substring(0, color.length - 1) + ')';
  return color;
};
