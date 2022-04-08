import React from 'react';
import { Button,ThemeProvider,createTheme} from "@mui/material";
import { useState } from "react";
import {baseTheme, theme1} from "./style";
import { deepmerge } from "@mui/utils";
import { Route, Routes , BrowserRouter as Router} from 'react-router-dom';
import './App.css';
import InterfaceGestionnaire from './interface/gestionnaire/InterfaceGestionnaire';
import InterfaceInternaute from './interface/internaute/InterfaceInternaute';
import InterfaceResponsableEtablissement from './interface/responsable-etablissements/InterfaceResponsableEtablissement';


import DashboardResponsableEtablissement from './interface/responsable-etablissements/pages/DashboardResponsableEtablissement';
import LoginResponsableEtablissement from './interface/responsable-etablissements/pages/LoginResponsableEtablissement';


import Dashboard from './interface/gestionnaire/pages/Dashboard';

import MapGestionnaire from './interface/gestionnaire/pages/MapGestionnaire';
import Poubelles from './interface/gestionnaire/pages/Poubelles';
import Camion from './interface/gestionnaire/pages/Camion';

import Ouvrier from './interface/gestionnaire/pages/personnel/Ouvrier';
import ReparateurPoubelle from './interface/gestionnaire/pages/personnel/ReparateurPoubelle';
import ReparateurCamion from './interface/gestionnaire/pages/personnel/ReparateurCamion';

import ResponsableEtablissement from './interface/gestionnaire/pages/clients/ResponsableEtablissement';
import ClientDechet from './interface/gestionnaire/pages/clients/ClientDechet';

import Fournisseur from './interface/gestionnaire/pages/Fournisseur';

import CommandeDechets from './interface/gestionnaire/pages/commande/CommandeDechets';
import CommandePoubelle from './interface/gestionnaire/pages/commande/CommandePoubelle';

import LoginGestionnaire from './interface/gestionnaire/pages/LoginGestionnaire';


const PageNotFound=()=><div>page not found</div>
function App() {
	const [theme, setTheme] = useState(baseTheme);
    const handleSwitch = (whichTheme) => {
      const newTheme = deepmerge(theme, whichTheme);
      setTheme(createTheme(newTheme));
    };
return (
	<>
	<ThemeProvider theme={theme}>

		<Router>
			<Routes>
				<Route path='/' element={<InterfaceInternaute/>}>
					<Route index element={<Dashboard/>}/>
					<Route path='/about-as' element={<Dashboard/>}/>
					<Route path='/mission' element={<Dashboard/>}/>
					<Route path='/dashboard' element={<Dashboard/>}/>
				</Route>
				
				<Route path='/gestionnaire' element={<InterfaceGestionnaire/>}>
					<Route index element={<Dashboard/>}/>
					<Route path='map' element={<MapGestionnaire/>}/>
					<Route path='poubelles' element={<Poubelles/>}/>
					<Route path='camions' element={<Camion/>}/>

					<Route path='personnel/ouvriers' element={<Ouvrier/>}/>
					<Route path='personnel/reparateurs-poubelle' element={<ReparateurPoubelle/>}/>		
					<Route path='personnel/reparateurs-camion' element={<ReparateurCamion/>}/>
					
					<Route path='clients/responsables-etablissements' element={<ResponsableEtablissement/>}/>
					<Route path='clients/acheteurs-dechets' element={<ClientDechet/>}/>
					<Route path='fournisseurs' element={<Fournisseur/>}/>

					<Route path='commandes-poubelles' element={<CommandePoubelle/>}/>
					<Route path='commandes-dechets' element={<CommandeDechets/>}/>
				</Route>
				<Route path="/gestionnaire/login" element={<LoginGestionnaire />} />

				<Route path='/responsable-etablissement' element={<InterfaceResponsableEtablissement/>}>
					<Route index element={<Dashboard/>}/>
					<Route path='dashboard' element={<DashboardResponsableEtablissement/>}/>

				</Route>
				<Route path="/responsable-etablissement/login" element={<LoginResponsableEtablissement />} />


				<Route path="*" element={<PageNotFound />} />


			</Routes>
		</Router>
		<Button
		onClick={() => setTheme(baseTheme)}
		variant="contained"
		color="primary"
	>
		Reset
	</Button>

	<Button onClick={() => handleSwitch(theme1)} variant="contained">
		Theme 
	</Button>
	</ThemeProvider>
	</>

);
}

export default App;

