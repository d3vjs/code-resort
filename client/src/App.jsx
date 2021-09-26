import React from 'react';
import './App.scss';

import { StreamChat } from 'stream-chat';
import { Chat } from 'stream-chat-react';
import Cookies from 'universal-cookie';

import { ChannelListContainer, ChannelContainer, Auth } from './components';

const cookies = new Cookies();

const apiKey = "vh32wc4jfdtc";
const client = StreamChat.getInstance(apiKey);

const authToken = cookies.get('token');

if (authToken) {
    client.connectUser({
        id: cookies.get('userId'),
        name: cookies.get('username'),
        fullName: cookies.get('fullName'),
        phoneNumber: cookies.get('phoneNumber'),
        image: cookies.get('avatarURL'),
        hashedPassword: cookies.get('hashedPassword'),
    }, authToken);
}

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
