import DatePicker from 'react-datepicker';
import './DateSelector.css';
import 'react-datepicker/dist/react-datepicker.css';
import { useDate } from '../../context';

export const DateSelector = ({ placeholder, checkInType }) => {
    const { dateDispatch, checkInDate, checkOutDate } = useDate();

    //console.log(checkInDate, checkOutDate);

    const handleDateChange = (date) => {
        dateDispatch({
            type: checkInType === 'in' ? 'CHECK_IN' : 'CHECK_OUT',
            payload: date,
        });
    };
    
    const handleDateFocus = () => {
        dateDispatch({
            type: "DATE_FOCUS",
        });
    }
    return (
        <DatePicker
            
            selected={checkInType === 'in' ? checkInDate : checkOutDate}
            onChange={(date) => handleDateChange(date)}
            className="search-dest input"
            onFocus={handleDateFocus}
            dateFormat="dd/MM/yyyy"
            minDate={new Date()}
            placeholderText="Add Dates"
            closeOnScroll={true}
        />
    );
};
