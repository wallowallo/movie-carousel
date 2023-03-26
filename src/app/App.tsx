import React, { useEffect, useState } from 'react';
import styled from '@emotion/styled';
import Cards from '../components/cards/cards';
import Favorites from '../components/favorites/favorites';
import { ISeries, CardProperties, State } from './models/models';
import { Header } from './styles/styles';
import PageLoad from '../components/pageLoad/pageLoad';

const Main = styled.main``;
const Footer = styled.footer``;
const Application = styled.div``;

function App() {
  let loadOverlay;

  const init: State = {
    series: [],
    loading: true,
    topFiveSeries: [],
    idx: 0,
    favorites: []
  }
  let [state, setData] = useState<State>(init);

  const topFiveSeries = (indx: number, array: ISeries[]) => array.slice(indx, indx + 5);
  const carouselProps: CardProperties = { playButton: true, year: true, duration: true, favoriteButton: true, rewindButton: true }
  const favoriteProps: CardProperties = { playButton: true, year: true, duration: true, favoriteButton: false, rewindButton: false }
  const movieTitleSearch = (title: string, apiKey: string) => {
    return `https://www.omdbapi.com/?s=${title}&apikey=${apiKey}`;
  }


  useEffect(() => {
    const searchList: string[] = [
      'hero',
      'awesome',
      'test',
      'super',
      'baby',
      'lady',
      'angel',
      'random',
      'man',
      'ant',
      'animal',
      'party',
      'map',
      'small',
      'large',
      'good',
      'bad',
      'kind',
      'god',
      'king',
      'dream',
      'fun',
      'greed',
      'bless',
    ]

    const getRandomInteger = (min: number, max: number) => {
      return Math.floor(Math.random() * (max - min)) + min;
    }

    const randomizer = (list: string[]): string => {
      const num = list.length - 1;
      const random = getRandomInteger(0, num);
      return list[random];
    };

    const randomOneUrl = movieTitleSearch(randomizer(searchList), "9c8ce040");
    const randomTwoUrl = movieTitleSearch(randomizer(searchList), "9c8ce040");
    const randomThreeUrl = movieTitleSearch(randomizer(searchList), "9c8ce040");
    const randomFourUrl = movieTitleSearch(randomizer(searchList), "9c8ce040");
    Promise.all([fetch(randomOneUrl), fetch(randomTwoUrl), fetch(randomThreeUrl), fetch(randomFourUrl)])
      .then(responses => responses.map(async (res) => (await res.json()).Search))
      .then(async (searches) => {
        let series: ISeries[] = [];
        for await (const search of searches) {
          series = [...series, ...search]
        }

        const favorites = JSON.parse(localStorage.getItem('favorites') || "") || [];
        const state = { series, topFiveSeries: topFiveSeries(0, series), loading: true, idx: 0, favorites: favorites }

        setData(state);
        return state;
      }).then((st) => {
        setTimeout(() => {
          setData({ ...st, loading: false });
        }, 1500)
      });
  }, [])

  const setArrayValue = (idx: number) => {
    if (idx < 0 && idx >= -5) {
      const array = [...state.series.slice(idx), ...state.series.slice(0, idx + 5)];
      state = { ...state, topFiveSeries: array, idx };
      setData(state);
      return;
    } else if (idx >= (state.series.length - 4)) {
      const index = Math.abs((state.series.length - 5) - idx)
      const array = [...state.series.slice(idx), ...state.series.slice(0, index)];

      state = { ...state, topFiveSeries: array, idx };
      setData(state);
      if (index === 5) {
        setData({ ...state, idx: 0 });
      }
      return;
    } else if (Math.abs(idx) > (state.series.length) && idx + (state.series.length + 1) === 0) {
      const array = [...state.series.slice(-1), ...state.series.slice(0, idx + 5)];

      return setData({ ...state, topFiveSeries: array, idx: -1 });
    }

    state = { ...state, topFiveSeries: topFiveSeries(idx, state.series), idx };
    setData(state);
  }

  const favorited = (s: ISeries) => {
    const itemExist = state.favorites.find((item) => {
      return item.imdbID === s.imdbID;
    })

    if (!itemExist) {
      const favorites = [...state.favorites, s]

      localStorage.setItem('favorites', JSON.stringify(favorites));

      state = { ...state, favorites };
      setData(state);
    }
    return;
  }

  const deleteFavorite = (s: ISeries) => {
    const favorites = state.favorites.filter((item: ISeries) => item !== s)

    localStorage.setItem('favorites', JSON.stringify(favorites));

    state = { ...state, favorites };
    setData(state);
  }

  if (state.loading) {
    loadOverlay = <PageLoad />;
  }

  return (
    < Application className="App" >
      {loadOverlay}
      <Header className="App-header">
      </Header>

      <Main>
        <Header> Random serier/filmer:</Header>
        <Cards properties={carouselProps} setFavorite={favorited} setValue={setArrayValue} state={state} />

        <Header> Favoritter:</Header>
        <Favorites deleteFavorite={deleteFavorite} properties={favoriteProps} favorites={state.favorites}></Favorites>
      </Main>

      <Footer>
      </Footer>
    </Application >
  );
}

export default App;
