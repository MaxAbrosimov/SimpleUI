import {convertTimestampToDate} from "src/utils/timeUtils";
import {SUCCESS, SUCCESS_OPACITY, FAIL, FAIL_OPACITY} from "src/constants/COLORS";

export const convertLineData = (data =[]) => {
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
                    backgroundColor: FAIL_OPACITY,
                    borderColor: FAIL,
                },
                {
                    data: success,
                    backgroundColor: SUCCESS_OPACITY,
                    borderColor: SUCCESS,
                }
            ]
        },
    };
};

export const convertChartData = data => ({
    chartData: {
        labels: ['success', 'fail', 'skipped'],
        centerConfig: {
            text: data.totalTestsCount + ' Tests',
        },
        datasets: [
            {
                data: [ data.successfullTestsCount, data.failedTestsCount, data.skippedTestsCount],
                backgroundColor: [SUCCESS, FAIL],
                hoverBackgroundColor: [SUCCESS, FAIL],
            }
        ]
    }
});