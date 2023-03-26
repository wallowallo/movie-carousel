export interface ISeries { Title: string, Year: string, imdbID: string, Type: string, Poster: string }

export interface CardProperties { playButton: boolean, year: boolean, duration: boolean, favoriteButton: boolean, rewindButton: boolean }

export interface State { series: ISeries[], loading: boolean, topFiveSeries: ISeries[], idx: number, favorites: ISeries[] }