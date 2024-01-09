import dayjs from 'dayjs';
import bigIntSupport from 'dayjs/plugin/bigIntSupport';
dayjs.extend(bigIntSupport);


export const blockTimestampToViewFormatter = (blockTimestamp) => {

    // 时间戳
    const timestamp = blockTimestamp * 1000n; // 注意乘以1000，因为 JavaScript 中的时间戳是以毫秒为单位

    // 将时间戳转换为指定格式
    const formattedDate = dayjs(timestamp).format('MM/DD/YYYY, h:mm:ss A');

    return formattedDate;
}