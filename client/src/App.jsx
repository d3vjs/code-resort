import React from 'react';
import './App.scss';

import { StreamChat } from 'stream-chat';
import { Chat } from 'stream-chat-react';
import Cookies from 'universal-cookie';

import { ChannelListContainer, ChannelContainer, Auth } from './components';

const apiKey = "vh32wc4jfdtc";
const client = StreamChat.getInstance(apiKey);

const authToken = false;

const App = () => {

    if (!authToken) return <Auth />

    return (
        <div className="container">
            <Chat client={client} theme="team dark">
                <ChannelListContainer />
                <ChannelContainer />
            </Chat>
        </div>
    )
}

export default App
