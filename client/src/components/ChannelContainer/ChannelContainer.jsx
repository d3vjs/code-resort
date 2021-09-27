import React from 'react';
import { Channel, useChatContext } from 'stream-chat-react';

import { ChannelInner, CreateChannel, EditChannel, TeamMessage } from '.././';

const ChannelContainer = ({
    isCreating,
    setIsCreating,
    isEditing,
    setIsEditing,
    createType
}) => {

    const { channel } = useChatContext();

    if (isCreating) {
        return (
            <div className="chat-container">
                <CreateChannel
                    createType={createType}
                    setIsCreating={setIsCreating}
                />
            </div>

        )
    }
    if (isEditing) {
        return (
            <div className="chat-container">
                <EditChannel
                    setIsEditing={setIsEditing}
                />
            </div>
        )
    }

    const EmptyState = () => (
        <div className="empty-container">
            <p className="first-empty">This is the beginning of your chat history</p>
            <p className="second-empty">Send messages, attachments, links, emojis, and more!</p>
        </div>
    )

    return (
        <div className="chat-container">
            <Channel
                EmptyStateIndicator={EmptyState}
                Message={(messageProps, i) => <TeamMessage key={i} {...messageProps}/>}
            >
                <ChannelInner setIsEditing={setIsEditing}/>
            </Channel>
        </div>
    )
}

export default ChannelContainer
