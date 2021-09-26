import React from 'react';

const TeamChannelList = ({ children, error = false, loading, type }) => {

    if (error) {
        return type === 'team' ? (
            <div className="channel-list">
                <p className="message">
                    Uh oh, something went wrong...
                </p>
            </div>
        ) : null;
    }

    if (loading) {
        <div className="channel-list">
            <p className="message loading">
                {type === 'team' ? 'Channels' : 'Messages'} loading...
            </p>
        </div>
    }

    return (
        <div className="channel-list">
            <div className="channel-header">
                <p className="title">
                    {type === 'team' ? 'Channels' : 'Direct Messages'}
                </p>
            </div>
            {children}
        </div>
    )
}

export default TeamChannelList
