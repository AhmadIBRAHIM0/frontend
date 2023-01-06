import Sidebar from "./SideBar";
import React, {useEffect} from "react";
import {useNavigate} from "react-router-dom";

type WrapperProps = {
    children: React.ReactNode;
}
const Wrapper: React.FC<WrapperProps> = (props) => {

    const navigate = useNavigate();
    const parseJwt = () => {
        try {
            const token = localStorage.getItem('token');
            if (token) {
                return JSON.parse(atob(token.split(".")[1]));
            }
            return null;
        } catch (e) {
            return null;
        }
    };

    const [redirect, setRedirect] = React.useState(false);
    useEffect(() => {
        (
            () => {
                if (!localStorage.getItem('token') || parseJwt().exp * 1000 < Date.now()) {
                    setRedirect(true);
                }
            }
        )();
    }, []);

    if (redirect) {
        navigate('/login');
        return null;
    }

    return (
        <div className="flex">
            <Sidebar/>
            <main className="flex justify-center content-center w-full">
                {props.children}
            </main>
        </div>

    );

}

export default Wrapper