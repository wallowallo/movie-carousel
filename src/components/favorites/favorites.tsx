import Card from '../card/card';
import { ISeries, CardProperties } from '../../app/models/models';
import { FavoriteContainer } from '../../app/styles/styles';

export type Props = {
    favorites: ISeries[],
    properties: CardProperties,
    deleteFavorite: (s: ISeries) => void
}

const Favorites = ({ favorites, properties, deleteFavorite }: Props) => {
    const deleteFavorites = (s: ISeries) => deleteFavorite(s);

    return (
        <FavoriteContainer>
            {favorites.map((s: ISeries, idx: number) =>
                <Card properties={properties} setAsFavorite={deleteFavorites} key={idx} series={s} />
            )}
        </FavoriteContainer>
    );
}

export default Favorites;