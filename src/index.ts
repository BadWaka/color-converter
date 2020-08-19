/**
 * 把有透明度的颜色转换为纯色
 * @param rgba 有透明度的颜色
 */
export function rgba2rgb(rgba: string): string {
    if (!rgba) {
        return '';
    }
    let rgbaArr = rgba.split(',');
    let a = parseFloat(rgbaArr[3]);
    let rgbArr = [];
    for (let i = 0; i < 3; i++) {
        rgbArr.push(255 - parseInt(rgbaArr[i], 10) * a);
    }
    let rgb = rgbArr.join(',');
    return rgb;
}
