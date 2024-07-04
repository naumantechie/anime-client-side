export interface SpotlightAnimes {
    rank: number;
    id: string;
    name: string;
    description: string;
    poster: string;
    jname: string;
    episodes: {
        sub: number;
        dub: number;
    };
    otherInfo: string[];
}

export interface TrendingAnimes {
    rank: number;
    name: string;
    id: string;
    poster: string;
}

export interface HomeAnimes {
    spotlightAnimes: SpotlightAnimes[];
    trendingAnimes: TrendingAnimes[];
}

export interface SliderProps {
    spotlightAnimes: SpotlightAnimes[];
}

export interface AnimeCarouselProps {
    trendingAnimes: TrendingAnimes[];
}

// anime info
export interface Info {
    id: string;
    name: string;
    description: string;
    poster: string;
    stats: {
        rating: string;
        quality: string;
        episodes: {
            sub: number;
            dub: number;
        };
        type: string;
        duration: string;
    };
}

// anime extra info
export interface MoreInfo {
    japanese: string;
    aired: string;
    premiered: string;
    duration: string;
    status: string;
    malscore: string;
    genres: string[];
    studios: string;
    producers: string[];
}

export interface AnimeGridData {
    id: string;
    name: string;
    poster: string;
    duration: string;
    type: string;
    rating: number;
    episodes: {
        sub: number;
        dub: number;
    };
}

export interface AnimeData {
    anime: {
        info: Info;
        moreInfo: MoreInfo;
    };
    recommendedAnimes: AnimeGridData[];
}

export interface AnimeGridProps {
    animeCategory: AnimeGridData[];
}
