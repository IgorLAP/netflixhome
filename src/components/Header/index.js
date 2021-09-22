import React from 'react';
import {HeaderArea} from './styled';

export default ({black})=>{
    return (
        <HeaderArea className={black ? 'black' : ''}>
            <div className="logo">
                <a href="/">
                    <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Netflix_2015_logo.svg/2560px-Netflix_2015_logo.svg.png" alt="netflix logo" />
                </a>
            </div>
            <div className="user">
                <a href="/">
                    <img src="https://upload.wikimedia.org/wikipedia/commons/0/0b/Netflix-avatar.png" alt="user icon" />
                </a>
            </div>
        </HeaderArea>
    )
}