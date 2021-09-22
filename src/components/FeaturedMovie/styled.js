import styled from 'styled-components';

export const FeaturedArea = styled.div`

    .featured{
        height: 100vh;
        background-size: cover;
        background-position: center;
        background-image: url(https://image.tmdb.org/t/p/original${props=>props.back.backdrop_path});

        .vertical{
            width: inherit;
            height: inherit;
            background: linear-gradient(to top, #111 10%, transparent 90%);

            .horizontal{
                width: inherit;
                height: inherit;
                background: linear-gradient(to right, #111 30%, transparent 70%);
                display: flex;
                flex-direction: column;
                justify-content: center;
                padding-left: 30px;
                /*padding-bottom: 100px;
                padding-top: 70px;*/

                .name{
                    font-size: 60px;
                    font-weight: bold;
                }
                .info{
                    font-size: 18px;
                    font-weight: bold;
                    margin-top: 15px;
                    
                    .points, .year, .seasons{
                        display: inline-block;
                        margin-right: 15px;
                    }
                    .points{
                        color: #46d369;
                    }
                }

                .description{
                    margin-top: 15px;
                    font-size: 20px;
                    color: #999;
                    max-width: 40%;
                    overflow: hidden;
                    text-overflow: ellipsis;
                    display: -webkit-box;
                    -webkit-line-clamp: 5;
                    -webkit-box-orient: vertical;
                }

                .buttons{
                    margin-top: 15px;

                    .watchBtn, .listBtn{
                        display: inline-block;
                        font-size: 20px;
                        font-weight: bold;
                        padding: 12px 25px;
                        border-radius: 5px;
                        text-decoration: none;
                        margin-right: 10px;
                        opacity: 1;
                        transition: all ease .2s;

                        &:hover{
                            opacity: .7;
                        }
                    }
                    .watchBtn{
                        background-color: #FFF;
                        color: #000;
                    }
                    .listBtn{
                        background-color: #333;
                        color: #FFF;
                    }
                }

                .genres{
                    margin-top: 10px;
                    color: #999;
                    font-size: 18px;
                }
            }
        }
    }
`;