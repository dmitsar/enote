import React from 'react'
import {Link} from 'react-router-dom'

export const FilmsList = ({ films }) => {
    if (!films.length) {
        return <p className="center">Фильмов пока нет</p>
    }

    return (
        <table>
            <thead>
            <tr>
                <th>№</th>
                <th>Название фильма</th>
                <th>Открыть</th>
            </tr>
            </thead>

            <tbody>
            { films.map((film, index) => {
                return (
                    <tr key={film._id}>
                        <td>{index + 1}</td>
                        <td>{index + 1}</td>
                        <td>
                            <Link to={`/detail/${film._id}`}>Открыть</Link>
                        </td>
                    </tr>
                )
            }) }
            </tbody>
        </table>
    )
}