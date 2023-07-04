import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { userInfo } from "../store/StoreActions";
import axios from "axios";
import './UserInfo.css';
import { ReactComponent as LoadingIcon} from "../../assets/images/icon_spin.svg";

export const UserInfo = () => {
    const [loading, setLoading] = useState(true);
    const token = useSelector(state => state.token);
    const dispatch = useDispatch();

    useEffect(() => {
        if (token) {
            setLoading(true)
            axios.get('https://gateway.scan-interfax.ru/api/v1/account/info', {
                headers: {
                    'Content-Type': 'application/json',
                    'Accept': 'application/json',
                    'Authorization': `Bearer ${token}`
                }
            })
            .then((response) => {
                dispatch(userInfo(response.data.eventFiltersInfo))
                setLoading(false)
            })
            .catch((error) => {
                console.error(error);
                setLoading(false)
            });
        }
    }, [token]);

    return (
        <div className="userInfoWrapper">
            {loading ? (
                <LoadingIcon />
            ) : (
            <>
                <div className="userInfoDescription">
                    <p className="userInfoText">Использовано компаний</p>
                    <p className="userInfoText">Лимит по компаниям</p>
                </div>

                <div className="userInfoData">
                    <p className="userInfoNumber">1</p>
                    <p className="userInfoNumber">5</p>
                </div>
            </>
            )}
        </div>
    )
}