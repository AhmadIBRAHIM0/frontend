import Sidebar from "./Shared/SideBar";
import React from "react";

type WrapperProps = {
    children: React.ReactNode;
}
const Wrapper: React.FC<WrapperProps> = (props) => {
    return (

        <div className="flex">
            <Sidebar/>
            <main>
                { props.children }
            </main>
        </div>

    );

}

export default Wrapper