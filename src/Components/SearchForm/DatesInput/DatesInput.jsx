import React, { useState } from "react";
import "./DatesInput.css";
import moment from "moment";
import "moment/locale/ru";
import locale from "antd/locale/ru_RU";
import { DatePicker } from "antd";
import { useDispatch } from "react-redux";
import { addEndDate, addStartDate, removeEndDate, removeStartDate } from "../../store/StoreActions";

export const DatesInput = () => {
    const dateFormat = ['DD/MM/YYYY', 'DD/MM/YY', 'DD-MM-YYYY', 'DD-MM-YY', 'DD.MM.YYYY', 'DD.MM.YY'];
    const dispatch = useDispatch();
    const disabledDate = (current) => {
        return current && current > moment().endOf('day');
    };

    const handleStartDateChange = (date) => {
        if (date) {
            dispatch(addStartDate(date.$d.toISOString()))
        } else {
            dispatch(removeStartDate())
        }
    }

    const handleEndDateChange = (date) => {
        if (date) {
            dispatch(addEndDate(date.$d.toISOString()))
        } else {
            dispatch(removeEndDate())
        }
    }

    const datePicker = (
        <div className="datePickerWrapper">
            <DatePicker 
                onChange={handleStartDateChange}
                name="datesInput"
                id="datesInput"
                className="datesInput"
                format={dateFormat}
                locale={locale}
                disabledDate={disabledDate}
                placeholder="Дата начала"
                style={{ height: 43 }}
            />
            <DatePicker 
                onChange={handleEndDateChange}
                className="datesInput"
                format={dateFormat}
                locale={locale}
                disabledDate={disabledDate}
                placeholder="Дата конца"
                style={{ height: 43 }}
            />
        </div>
    )

    return (
        <>
            <label htmlFor="datesInput" className="searchLabel">Диапазон поиска *</label>
            {datePicker}
        </>
    )
}