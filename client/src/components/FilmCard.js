import React from 'react'

export const FilmCard = ({ film }) => {
    return (
        <>
            <h2>Название фильма <strong>{film.name}</strong> </h2>

            {/*<p>Количество кликов по ссылке: <strong>{film.clicks}</strong></p>*/}
            <p>Дата создания: <strong>{new Date(film.date).toLocaleDateString()}</strong></p>
        </>
    )
}