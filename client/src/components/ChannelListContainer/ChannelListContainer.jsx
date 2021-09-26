import React from 'react'

import CodeIcon from '../../assets/code.png';
import LogoutIcon from '../../assets/logout.png';

const SideBar = () => (
    <div className="sidebar">
        <div className="sidebar-icon">
            <div className="inner-icon">
                <img src={CodeIcon} alt="Code" width="30" />
            </div>
        </div>
        <div className="sidebar-icon">
            <div className="inner-icon">
                <img src={LogoutIcon} alt="Logout" width="30" />
            </div>
        </div>
    </div>
);

const ActionsHeader = () => (
    <div className="actions-header">
        <p className="actions-header-text">Code Resort</p>
    </div>
)

const ChannelListContainer = () => {
    return (
        <>
            <SideBar />
            <div className="actions-container">
                <ActionsHeader />
            </div>
        </>
    )
}

export default ChannelListContainer
