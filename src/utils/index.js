import moment from 'moment';

const currentDate = new Date().toISOString();

const parseDate = (date) => {
    return moment(date).format('LL');
}

const parseISO = (date) => {
    return moment(date).toISOString()
}

const dateDifference = (date_in) => {
    return moment(currentDate).diff(moment(date_in), 'days');
}

export { currentDate, parseDate, dateDifference, parseISO }