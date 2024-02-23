import {useRouteError} from "react-router-dom";

export default function ErrorPage () {
    const error = useRouteError();
    console.error(error);

    return(
        <div id="error page">
            <h1>Unexpected error has occurred</h1>
            <p>Error</p>
            <p>
                <i>{error.statusText || error.message}</i>
            </p>
        </div>
    );
}