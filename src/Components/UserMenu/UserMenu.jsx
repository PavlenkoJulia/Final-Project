import React from "react";
import { removeToken } from "../store/StoreActions";
import { useDispatch } from "react-redux";
import userAvatar from "../../assets/images/avatar.png";
import './UserMenu.css';

export const UserMenu = () => {
    const dispatch = useDispatch();

    const handleClick = () => {
        localStorage.removeItem('token')
        dispatch(removeToken())
    }

    const userMenuInfo = (
        <div className="userMenuInfo">
            <p className="userMenuText">Алексей А.</p>
            <button className="logoutBtn" onClick={handleClick}>Выйти</button>
        </div>
    )

    const userAvatarBlock = (
        <div className="userAvatarWrapper">
            <img src={userAvatar} alt="" />
            </div>
    )

    return (
        <div className="userMenuWrapper">
            {userMenuInfo}
            {userAvatarBlock}
        </div>
    )
}