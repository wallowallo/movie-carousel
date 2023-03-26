import Card from '../card/card';
import { ISeries } from '../../app/models/models';
import { ArrowBackIos, ArrowForwardIos } from '@mui/icons-material';
import { Fab } from '@mui/material';
import { CardsContainer, CardChangerContainer } from '../../app/styles/styles';

// TODO: type properly
const Cards = ({ state, setValue, setFavorite, properties }: any) => {

    const nextSeriesRight = () => {
        setValue(state.idx + 1);
    };

    const nextSeriesLeft = () => {
        setValue(state.idx - 1);
    };

    const setFavorited = (s: ISeries): ISeries => {
        return setFavorite(s)
    }
    return (
        <CardsContainer>
            <CardChangerContainer>
                <Fab onClick={nextSeriesLeft} >
                    <ArrowBackIos style={{ color: "#9400D3" }} />
                </Fab>
            </CardChangerContainer>

            {state.topFiveSeries.map((s: ISeries) =>
                <Card properties={properties} setAsFavorite={setFavorited} key={s.imdbID} series={s} />
            )}

            <CardChangerContainer>
                <Fab onClick={nextSeriesRight}>
                    <ArrowForwardIos style={{ color: "#9400D3" }} />
                </Fab>
            </CardChangerContainer>
        </CardsContainer>
    );
}

export default Cards;