import moment from 'moment'

export const DateFormat = (date) =>{
    return moment(date).format('MMMM/DD/YYYY')
}