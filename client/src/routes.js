import React from 'react'
import {Switch, Route, Redirect} from 'react-router-dom'
import  {FilmsPage} from './pages/FilmsPage'
import {CreatePage} from "./pages/CreatePage";
import {AuthPage} from "./pages/AuthPage";
import {DetailPage} from "./pages/DetailPage";
import {RecordPage} from "./pages/RecordPage";

export const useRoutes = isAuthenticated => {
    if(isAuthenticated)
    {
        return (
            <Switch>
                <Route path="/films" exact>
                    <FilmsPage/>
                </Route>
                <Route path="/create" exact>
                    <CreatePage/>
                </Route>
                <Route path="/record" exact>
                    <RecordPage/>
                </Route>
                <Route path="/detail/:id">
                    <DetailPage/>
                </Route>
                <Redirect to="/create" />
            </Switch>
        )
    }
    return (
        <Switch>
            <Route path="/" exact>
                <AuthPage />
            </Route>
            <Redirect to="/" />
        </Switch>
    )
}