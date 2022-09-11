import moment from 'moment'

// Format Date Time
export const getDateTime = (val: string) => `${moment(val).format('hh:mm a')} | ${moment(val).format('DD/MM/YYYY')}`;

