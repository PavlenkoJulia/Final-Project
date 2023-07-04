import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { addINN, addTonality, addIdsFromObjectsearch, addResponseFromHistograms, addLimit, removeEndDate, removeStartDate } from '../store/StoreActions';
import axios from "axios";
import moment from "moment";
import "moment/locale/ru";
import './SearchForm.css';
import { DatesInput } from './DatesInput/DatesInput';
import { Checkboxes } from './Checkboxes/Checkboxes';
import { Select } from 'antd';

export const SearchForm = () => {
    const [innValue, setInnValue] = useState('');
    const [quantityValue, setQuantityValue] = useState('');
    const startDate = useSelector(state => state.searchFormData.issueDateInterval.startDate);
    const endDate = useSelector(state => state.searchFormData.issueDateInterval.endDate);
    const searchFormData = useSelector(state => state.searchFormData);
    const token = useSelector(state => state.token);
    const [loading, setLoading] = useState(false);
    const dispatch = useDispatch()
    const navigate = useNavigate()

    const handleInputChange = (e: any) => {
        const innInputValue = e.target.value.replace(/[^0-9]/g, '');
        setInnValue(innInputValue);
        dispatch(addINN(innInputValue))
    }

    const handleSelectChange = (value: any) => {
        dispatch(addTonality(value))
    }

    const handleQuantityChange = (e) => {
        const quantity = e.target.value.replace(/[^0-9]/g, '');
        setQuantityValue(quantity)
        dispatch(addLimit(+quantity))
    }

    const handleSubmit = (e) => {
        setLoading(true)
        e.preventDefault();

        if (token && searchFormData) {
            axios.post('https://gateway.scan-interfax.ru/api/v1/objectsearch/histograms', searchFormData, {
                headers: {
                    'Content-Type': 'application/json',
                    'Accept': 'application/json',
                    'Authorization': `Bearer ${token}`
                }
            })
            .then((response) => {
                navigate('/search/results')
                setLoading(false)
                dispatch(addResponseFromHistograms(response.data))
            })
            .catch((error) => {
                console.error(error);
            });

            axios.post('https://gateway.scan-interfax.ru/api/v1/objectsearch', searchFormData, {
                headers: {
                    'Content-Type': 'application/json',
                    'Accept': 'application/json',
                    'Authorization': `Bearer ${token}`
                }
            })
            .then((response) => {
                dispatch(addIdsFromObjectsearch(response.data))
            })
            .catch((error) => {
                console.error(error);
            });

            dispatch(removeStartDate())
            dispatch(removeEndDate())
        }
    }

    const innInput = (
        <div className='inputWrapper'>
            <label htmlFor='innInput' className='searchLabel'> ИНН компании *</label>
            <input id='innInput' className='searchInput' 
                name='innInput' 
                placeholder='10 цифр' 
                value={innValue} 
                onChange={handleInputChange}
            />
            {innValue.length > 10 ? <p className='errorMessage'>Введите корректные данные</p> : null}
        </div>
    )

    const tonalitySelect = (
        <div className='inputWrapper'>
            <label htmlFor='selectTone' className='searchLabel'> Тональность</label>
            <Select id='selectTone' className='ant-select-selector'
                name='selectTone'
                onChange={handleSelectChange}
                options={[
                    { value: 'any', label: 'Любая'},
                    { value: 'positive', label: 'Позитивная'},
                    { value: 'negative', label: 'Негативная'}
                ]}
                size='large'
                bordered={false}
                style={{ height: 43}}
            />
        </div>
    )

    const quantityInput = (
        <div className='inputWrapper'>
            <label htmlFor='quantityInput' className='searchLabel'> Количество документов в выдаче *</label>
            <input id='quantityInput' className='searchInput numberInput' 
                name='quantityInput' 
                value={quantityValue} 
                placeholder='От 1 до 1000'
                type='number'
                onChange={handleQuantityChange}
                status={(quantityValue < 1 || quantityValue > 100) && quantityValue ? 'error' : null}
            />
            {(quantityValue < 1 || quantityValue > 100) && quantityValue ? <p className='errorMessage'>Введите корректное число</p> : null}
        </div>
    )

    const searchBtn = (
        <div className='searchBtnWrapper'>
            <button className='searchFormBtn' loading={loading.toString()} onClick={handleSubmit} disabled={!innValue || !quantityValue || !startDate || !endDate}>
                Поиск
            </button>
            <p>* Обязательные к заполнению поля</p>
        </div>
    )

    return (
        <form className='searchForm' onSubmit={handleSubmit}>
            <div className='searchFormWrapper'>
                <div className='inputsWrapper'>
                    {innInput}
                    {tonalitySelect}
                    {quantityInput}
                </div>

                <div className='checkboxesWrapper'>
                    <Checkboxes />
                </div>
            </div>

            <div className='bottomFormWrapper'>
                <div>
                    <DatesInput />
                </div>
                {searchBtn}
                {startDate && endDate && moment(startDate).isAfter(moment(endDate)) && <p className='errorMessage'>Введите корректные данные</p>}
            </div>
        </form>
    )
}