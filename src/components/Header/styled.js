import styled from 'styled-components';

export const HeaderArea = styled.div`
    position: fixed;
    z-index: 999;
    top: 0;
    left: 0;
    right: 0;
    height: 70px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 30px;
    background: transparent;
    transition: all ease .3s;

    &.black{
        background-color: #111;
    }

    .logo{
        height: 25px;
        
        img{
            height: 100%;
        }
    }
    .user{
        height: 30px;

        img{
            height: 100%;
            border-radius: 3px;
        }
    }
`;