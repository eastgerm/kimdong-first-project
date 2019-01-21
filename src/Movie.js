import React from 'react';
import PropTypes from 'prop-types';
import LinesEllipsis from 'react-lines-ellipsis'
import './Movie.scss';

function Movie({title,image,genres,synopsis}){
        return (
            <div className={"Movie"}>
                <div className={"Movie__Column"}>
                    <MoviePoster image={image} alt={title}/>
                </div>
                <div className={"Movie__Column"}>
                    <h1>{title}</h1>
                    <div className={"Movie__Genres"}>
                        {genres.map((genres, index) => <MovieGenres genres={genres} key={index} />)}
                    </div>
                    <MovieSynopsis synopsis={synopsis}/>
                </div>
</div>
)
}

function MoviePoster({image, alt}) {
    return (
        <img className={"Movie__Poster"} src={image} alt={alt} title={alt}/>
    )
}

function MovieGenres({genres}) {
    return (
        <div className={"Movie__Genres"}>
            {genres}
            <p>말풍선</p>
        </div>
    );
}

function MovieSynopsis({synopsis}) {
    return (
        <div className={"Movie__Synopsis"}>
            <LinesEllipsis
                text={synopsis}
                maxLine={'3'}
                ellipsis={'...'}
                trimRight
                basedOn={'letters'}
            />
        </div>
    )
}

Movie.propTypes = {
    title: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
    genres: PropTypes.array.isRequired,
    synopsis:PropTypes.string.isRequired
};

MoviePoster.propTypes = {
    image: PropTypes.string.isRequired,
    alt: PropTypes.string.isRequired
};

MovieGenres.propTypes = {
    genres: PropTypes.string.isRequired
};

MovieSynopsis.propTypes = {
    synopsis: PropTypes.string.isRequired
};

export default Movie;