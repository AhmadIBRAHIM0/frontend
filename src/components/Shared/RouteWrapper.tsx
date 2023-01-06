import React, {useEffect} from "react";
import {Route, Routes, useNavigate} from "react-router-dom";

type RouteWrapperProps = {
    element: React.ReactNode;
    path: string;
    role?: string;
}
const RouteWrapper: React.FC<RouteWrapperProps> = (props) => {

    const navigate = useNavigate();
    console.log(localStorage.getItem('role'));

    useEffect(() => {
        (
            () => {
                if (props.role && localStorage.getItem('role') !== props.role) {
                    console.log('redirect');
                    navigate('/404');
                }
            }
        )();
    }, []);

    return (
        <Routes>
            <Route path={props.path} element={props.element}/>
        </Routes>
    )

}

export default RouteWrapper