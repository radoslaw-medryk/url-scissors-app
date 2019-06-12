import * as React from "react";
import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";
import { MainPage } from "src/pages/Main/MainPage";
import { RedirectPage } from "src/pages/Redirect/RedirectPage";

export type ReactAppProps = {
    //
};

export const ReactApp: React.SFC<ReactAppProps> = props => {
    return (
        <BrowserRouter>
            <Switch>
                <Route exact path="/" component={MainPage} />
                <Route exact path="/u/:id" component={RedirectPage} />
                <Route path="/" render={() => <Redirect to="/" />} />
            </Switch>
        </BrowserRouter>
    );
};
