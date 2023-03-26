import styled from '@emotion/styled';
import { css } from '@emotion/react'

const cardsContainerReuse = css`
    display: flex;
    width: 90%;
    margin: 0 auto;
    padding-top: 2rem;
`;

// ------------- CONTAINERS -------------

export const CardsContainer = styled.div`
    ${cardsContainerReuse}
`;

export const SmallerFabContainer = styled.div`
    width: 4rem;
    height: 4rem;
    margin: auto;
`;

export const DurationContainer = styled.div`
    position: absolute;
    margin-left: 1.5rem;
    bottom: 1rem;
    right: 1rem; 
`;

export const FabContainer = styled.div`
    width: 5.5rem;
    height: 5.5rem;
    margin: auto;
`;

export const CardChangerContainer = styled.div`
    position: relative;
    display: flex;
    height: 4rem;
    margin: auto;
`;

export const OverlayButtonContainer = styled.div`
    display: flex;
    width: 14rem;
    height: 10rem;
    margin: auto;
`

export const OverlayContainer = styled.div`
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 100%;
    overflow: hidden;
`;

export const LoadContainer = styled.div`
    display: flex;
    justify-content: center;
    position: absolute;
    z-index: 9999;
    width: 100vw;
    height: 100vh;
    background-color: black;
    overflow: hidden;
`

export const FavoriteContainer = styled.div`
    ${cardsContainerReuse}
    flex-wrap: wrap;
`;

// ------------- HEADERS -------------

export const Header = styled.h1`
    margin-left: 5%;
`;

export const SeriesHeader = styled.h2`
    position: absolute;
    margin-top: 1rem;
    margin-left: 1.5rem;
`;

// ------------- IMG -------------

export const Poster = styled.img`
    width: 100%;
    height: auto;
`;

export const LogoImage = styled.img`
    height: auto;
    animation: image-pulse 2s infinite ease-out;
`;

// ------------- OVERLAYS -------------

export const InfoOverlay = styled.div`
    position: absolute;
    display: flex;
    width: 100%;
    height: 100%;
    transition: all 0.3s ease;
    opacity: 0;
    background-color: #9400D3;
    background-size: 100%;
`;

// ------------- OTHER -------------

export const SeriesCard = styled.div`
    position: relative;
    display: flex;
    width: 18%;
    margin: 0 1%;
    &:hover .overlay {
        opacity: 0.90;
    }
`;

export const Year = styled.span`
    position: absolute;
    margin-left: 1.5rem;
    bottom: 1rem;
`;

export const Duration = styled.span``;