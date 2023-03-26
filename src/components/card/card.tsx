import { Timer, PlayCircleFilledWhiteOutlined, StarOutline, Replay, DeleteOutline } from '@mui/icons-material';
import { Fab } from '@mui/material';
import { styled as style } from '@mui/material/styles';
import { CardProperties, ISeries } from '../../app/models/models';
import { OverlayButtonContainer, OverlayContainer, SeriesCard, Poster, InfoOverlay, SeriesHeader, Year, DurationContainer, Duration, FabContainer, SmallerFabContainer } from '../../app/styles/styles';

type Props = {
    series: ISeries,
    setAsFavorite: (s: ISeries) => void,
    properties: CardProperties,
}

const FabButton = style(Fab)(() => ({
    width: "5rem",
    height: "5rem",
    "&:hover .playIcon": {
        color: "#9400D3 !important"
    }
}));

const FavButton = style(Fab)(() => ({
    "&:hover .favorite": {
        color: "#9400D3 !important"
    }
}));

const RewindButton = style(Fab)(() => ({
    "&:hover .rewind": {
        color: "#9400D3 !important"
    }
}));


function Card({ series, setAsFavorite, properties }: Props) {

    let rewind, play, favorite, duration, year;

    if (properties.rewindButton) {
        rewind = <SmallerFabContainer>
            <RewindButton>
                <Replay className="rewind" />
            </RewindButton>
        </SmallerFabContainer>
    }

    if (properties.playButton) {
        play = <FabContainer>
            <FabButton>
                <PlayCircleFilledWhiteOutlined className="playIcon" style={{ color: "green", fontSize: "5rem" }} />
            </FabButton>
        </FabContainer>
    }

    if (properties.favoriteButton) {
        favorite = <SmallerFabContainer>
            <FavButton onClick={() => setAsFavorite(series)}>
                <StarOutline className="favorite" />
            </FavButton>
        </SmallerFabContainer>
    } else {
        favorite = <SmallerFabContainer>
            <FavButton onClick={() => setAsFavorite(series)}>
                <DeleteOutline className="favorite" />
            </FavButton>
        </SmallerFabContainer>
    }

    if (properties.year) {
        year = <Year>{series.Year}</Year>
    }

    if (properties.duration) {
        duration = <DurationContainer>
            <Duration>30m</Duration>
            <Timer style={{ color: "white", verticalAlign: "-20%", width: "1.2rem", marginLeft: "0.2rem" }} />
        </DurationContainer>
    }

    return (
        <SeriesCard>
            <OverlayContainer>
                <InfoOverlay className="overlay">
                    <SeriesHeader>{series.Title}</SeriesHeader>

                    <OverlayButtonContainer>
                        {rewind}

                        {play}

                        {favorite}
                    </OverlayButtonContainer>

                    {year}

                    {duration}
                </InfoOverlay>

                <Poster alt={series.Title} src={series.Poster} />
            </OverlayContainer>
        </SeriesCard>
    );
}

export default Card;