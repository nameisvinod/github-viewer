import moment from 'moment';

const formatDate = (date, desiredFormat = 'YYYY-MM-DD HH:mm:ss') => {
    return moment(date).format(desiredFormat)
}

export { formatDate }