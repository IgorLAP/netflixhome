import styled from 'styled-components';

export const MovieRowArea = styled.div`
    margin-bottom: 30px;

    &:hover .arrowLeft, &:hover .arrowRight{
        opacity: 1;
    }

    h2{
        margin: 0 0 0 30px;
    }
    .arrowLeft, .arrowRight{
        position: absolute;
        width: 40px;
        height: 375px;
        background-color: rgba(0,0,0,.6);
        color: #FFF;
        z-index: 99;
        display: flex;
        align-items: center;
        justify-content: center;
        overflow: hidden;
        cursor: pointer;
        opacity: 0;
        transition: all ease .2s;

        img{
            height: 50px;
        }
    }
    .arrowLeft{
        left: 0;
    }
    .arrowRight{
        right: 0;
    }
    .listArea{
        overflow-x: hidden;
        padding-left: 30px;

        .list{
            transition: all ease .5s;

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

@media (max-width: 760px){
    .arrowLeft, .arrowRight{
        opacity: 1;
    }
}
`;