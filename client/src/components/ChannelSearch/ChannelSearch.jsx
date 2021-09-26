import React, { useState } from 'react';

import { useChatContext } from 'stream-chat-react';
import { SearchIcon } from '../../assets/SearchIcon';

const ChannelSearch = () => {

    const [query, setQuery] = useState('');
    const [loading, setLoading] = useState(false);

    const getChannels = async (query) => {
        try {
            // fetch channels here
        } catch (err) {
            setQuery('');
            console.error(err);
        }
    }

    const onSearch = (e) => {
        e.preventDefault();

        setLoading(true);

        setQuery(e.target.value);
        getChannels(e.target.value);
    }

    return (
        <div className="search-container">
            <div className="input-container">
                <div className="input-icon">
                    <SearchIcon />
                </div>
                <input 
                    className="input-text" 
                    placeholder="Search" 
                    type="text" 
                    value={query} 
                    onChange={onSearch} 
                />
            </div>
        </div>
    )
}

export default ChannelSearch
