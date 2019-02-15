import {convertTimestampToDate} from "src/utils/timeUtils";

export const convertLineData = data => {
    const success = [];
    const fail = [];
    const labels = [];
    data.forEach(t => {
        success.push(t.success);
        fail.push(t.fail);
        labels.push(convertTimestampToDate(t.timestamp));
    });
    return {
        chartData: {
            labels,
            datasets: [
                {
                    data: fail,
                    backgroundColor: 'rgba(255,99,99, 0.1)',
                    borderColor: "rgba(255,99,99)",
                },
                {
                    data: success,
                    backgroundColor: 'rgba(129,213,125, 0.1)',
                    borderColor: "rgba(129,213,125)",
                }
            ]
        },
    };
};

export const convertChartData = data => ({
    chartData: {
        labels: ['success', 'fail', 'skipped'],
        datasets: [
            {
                data: [ data.success, data.fail, data.skipped],
                backgroundColor: ['#81D57D', '#FF6363'],
                hoverBackgroundColor: ['#81D57D', '#FF6363']
            }
        ]
    }
});