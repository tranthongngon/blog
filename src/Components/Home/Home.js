import React from 'react';
import ModuleOne from './ModuleOne/ModuleOne';
import ModuleTwo from "./ModuleTwo/ModuleTwo";
import ModuleThree from './ModuleThree/ModuleThree';
import ModuleFour from './ModuleFour/ModuleFour';
import ModuleFive from './ModuleFive/ModuleFive';
import {DataPosts} from "./DataPosts";
import './home.css';




function Home() {
    return (
        <div className="site-content">
            <DataPosts>
                <ModuleOne/>
                <ModuleTwo/>
                <ModuleThree/>
                <ModuleFour/>
                <ModuleFive/>
            </DataPosts>
        </div>
    )
}

export default Home
