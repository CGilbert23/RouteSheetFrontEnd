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

const extractDept_id = (data) => {
    return data && data.split("___")[1];
}

export { currentDate, parseDate, dateDifference, parseISO, extractDept_id }