import moment from 'moment';

const parseDate = (date) => {
    return moment(date).format('LLL');
}

const dateDifference = (currentDate, date_in) => {
    return moment(currentDate).diff(moment(date_in), 'days');
}

export { parseDate, dateDifference }