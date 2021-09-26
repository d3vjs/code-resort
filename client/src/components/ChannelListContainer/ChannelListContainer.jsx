import React from 'react'
import { ChannelList, useChatContext } from 'stream-chat-react';
import Cookies from 'universal-cookie';

import { ChannelSearch, TeamChannelList, TeamChannelPreview } from '.././';

import CodeIcon from '../../assets/code.png';
import LogoutIcon from '../../assets/logout.png';

const cookies = new Cookies();

const SideBar = ({ logout }) => (
    <div className="sidebar">
        <div className="sidebar-icon">
            <div className="inner-icon">
                <img src={CodeIcon} alt="Code" width="30" />
            </div>
        </div>
        <div className="sidebar-icon">
            <div className="inner-icon" onClick={logout}>
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

    const logout = () => {

        cookies.remove('token');
        cookies.remove('userId');
        cookies.remove('username');
        cookies.remove('fullName');
        cookies.remove('phoneNumber');
        cookies.remove('avatarURL');
        cookies.remove('hashedPassword');

        window.location.reload();

    }

    return (
        <>
            <SideBar logout={logout}/>
            <div className="actions-container">
                <ActionsHeader />
                <ChannelSearch />
                <ChannelList
                    filters={{}}
                    channelRenderFilterFn={() => { }}
                    List={(listProps) => (
                        <TeamChannelList {...listProps} type="team" />
                    )}
                    Preview={(previewProps) => (
                        <TeamChannelPreview
                            {...previewProps}
                            type="team"
                        />
                    )}
                />
                <ChannelList
                    filters={{}}
                    channelRenderFilterFn={() => { }}
                    List={(listProps) => (
                        <TeamChannelList {...listProps} type="messaging" />
                    )}
                    Preview={(previewProps) => (
                        <TeamChannelPreview
                            {...previewProps}
                            type="messaging"
                        />
                    )}
                />
            </div>
        </>
    )
}

export default ChannelListContainer
