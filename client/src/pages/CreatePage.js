import React, {useContext, useEffect, useState} from 'react'
import {useHttp} from '../hooks/http.hook'
import {AuthContext} from '../context/AuthContext'
import {useHistory} from 'react-router-dom'

export const CreatePage = () => {
    const history = useHistory()
    const auth = useContext(AuthContext) //токен
    const {request} = useHttp()
    const [film, addFilm] = useState('')

    useEffect(() => {
        window.M.updateTextFields()
    }, [])

    const pressHandler = async event => {
        if (event.key === 'Enter') {
            try {
                const data = await request('/api/film/generate', 'POST', {from: film}, { //объект с инфой о фильме
                    Authorization: `Bearer ${auth.token}` //отправка токена в хедерах

                })
                console.log(data)
                history.push(`/detail/${data.film._id}`)
            } catch (e) {}
        }
    }

    return (
        <div className="row">
            <div className="col s8 offset-s2" style={{paddingTop: '2rem'}}>
                <div className="input-field">
                    <input
                        placeholder="Название фильма"
                        id="film"
                        type="text"
                        value={film}
                        onChange={e => addFilm(e.target.value)}
                        onKeyPress={pressHandler} // Если нажали энтер то фильм добавится
                    />
                    <label htmlFor="film">Введите название фильма</label>
                </div>
            </div>
        </div>
    )
}