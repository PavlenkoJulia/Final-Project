import React, { useEffect, useState} from "react";
import { useDispatch } from "react-redux";
import { toggleInBusinessNews, toggleOnlyMainRole, toggleOnlyWithRisk, toggleMaxFullness } from "../../store/StoreActions";
import { Checkbox } from "antd";
import "./Checkboxes.css"

export const Checkboxes = () => {
    const [checked, setChecked] = useState();
    const dispatch = useDispatch();
    useEffect(() => {
        if (checked) {
            const maxFullness = checked.includes('Признак максимальной полноты');
            dispatch(toggleMaxFullness(maxFullness))

            const inBusiness = checked.includes('Упоминания в бизнес-контексте');
            dispatch(toggleInBusinessNews(inBusiness))

            const onlyMain = checked.includes('Главная роль в публикации');
            dispatch(toggleOnlyMainRole(onlyMain))

            const onlyRisk = checked.includes('Публикации только с риск-факторами');
            dispatch(toggleOnlyWithRisk(onlyRisk))
        }
    }, [checked])

    const onChange = (checkedValues) => {
        setChecked(checkedValues)
    }

    const options = [
        'Признак максимальной полноты',
        'Упоминания в бизнес-контексте', 
        'Главная роль в публикации',
        'Публикации только с риск-факторами',
        'Включать технические новости рынков',
        'Включать анонсы и календари',
        'Включать сводки новостей'
    ];

    const groupOfCheckboxes = (
        <Checkbox.Group
            className="checkboxesGroup"
            onChange={onChange}
            defaultValue={['Признак максимальной полноты', 'Главная роль в публикации', 'Публикации только с риск-факторами']}
            options={options}
        />
    )

    return (
        <>
            {groupOfCheckboxes}
        </>
    )
}