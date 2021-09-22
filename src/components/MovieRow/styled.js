import styled from 'styled-components';

export const MovieRowArea = styled.div`
    margin-bottom: 30px;

    h2{
        margin: 0 0 0 30px;
    }
    .listArea{
        overflow-x: hidden;
        padding-left: 30px;

        .list{
            width: 9999999px;

            .item{
                display: inline-block;
                width: 250px;
                cursor: pointer;

                img{
                    width: 100%;
                    transform: scale(0.9);
                    transition: all ease .2s;

                    &:hover{
                        transform: scale(1);
                    }
                }
            }
        }
    }
`;