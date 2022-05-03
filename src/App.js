import React, { useEffect, useState } from 'react';
import { Route, Routes ,Navigate} from 'react-router-dom';

import './App.css';
/**** ---------------------internaute ------------------------ ****/
	import InterfaceInternaute from './interface/internaute/InterfaceInternaute';

/**** ---------------------internaute ------------------------ ****/
/**** ---------------------gestionnaire ------------------------ ****/
	import InterfaceGestionnaire from './interface/gestionnaire/InterfaceGestionnaire';

	import Dashboard from './interface/gestionnaire/pages/Dashboard';
	import MapGestionnaire from './interface/gestionnaire/pages/MapGestionnaire';
	import Poubelles from './interface/gestionnaire/pages/GestionPoubelleEtablissement/Poubelles';
	import Camion from './interface/gestionnaire/pages/TransportDechet/Camion';
	import Ouvrier from './interface/gestionnaire/pages/personnel/Ouvrier';
	import ReparateurPoubelle from './interface/gestionnaire/pages/personnel/ReparateurPoubelle';
	import ReparateurCamion from './interface/gestionnaire/pages/personnel/ReparateurCamion';
	import ResponsableEtablissement from './interface/gestionnaire/pages/clients/ResponsableEtablissement';
	import ClientDechet from './interface/gestionnaire/pages/clients/ClientDechet';
	import Fournisseur from './interface/gestionnaire/pages/productionPoubelle/Fournisseur';
	import CommandeDechets from './interface/gestionnaire/pages/commande/CommandeDechets';
	import CommandePoubelle from './interface/gestionnaire/pages/commande/CommandePoubelle';
	import CalendrierGestionnaire from './interface/gestionnaire/pages/CalendrierGestionnaire';
	import LoginGestionnaire from './interface/gestionnaire/pages/LoginGestionnaire';
/**** ----------------------gestionnaire ------------------------ ****/
/**** ----------------------responsable Etablissement ------------------------ ****/
	import InterfaceResponsableEtablissement from './interface/responsable-etablissements/InterfaceResponsableEtablissement';

	import DashboardResponsable from './interface/responsable-etablissements/pages/DashboardResponsable';
	import CommanderResponsable from './interface/responsable-etablissements/pages/CommandeResponsable';
	import CalendrierResponsable from './interface/responsable-etablissements/pages/CalendrierResponsable';
	import MapResponsable from './interface/responsable-etablissements/pages/MapResponsable';
	import PannePoubelleEtablissement from './interface/responsable-etablissements/pages/PannePoubelleEtablissement';
	import PoubelleEtablissement from './interface/responsable-etablissements/pages/PoubelleEtablissement';
	import PanierResponsable from './interface/responsable-etablissements/pages/PanierResponsable';
	import LoginResponsable from './interface/responsable-etablissements/pages/LoginResponsable';
	import StockPoubelle from './interface/gestionnaire/pages/productionPoubelle/StockPoubelle';
	import MateriauxPrimaire from './interface/gestionnaire/pages/productionPoubelle/MateriauxPrimaire';
/**** ----------------------responsable Etablissement ------------------------ ****/
import axios from 'axios';
import PannePoubelle from './interface/gestionnaire/pages/pannes/PannePoubelle';
import PanneCamion from './interface/gestionnaire/pages/pannes/PanneCamion';

const PageNotFound=()=><div>page not found</div>

axios.defaults.baseURL= "http://127.0.0.1:8000/";
axios.defaults.headers.post['Content-type']="application/json";
axios.defaults.headers.post['Accept']="application/json";

// axios.defaults.withCredentials = true;
// let token='';
// if(localStorage.getItem('auth_token_responsable')!==''){
// 	 token=localStorage.getItem('auth_token_responsable');
// 	 axios.interceptors.request.use(function(config){
// 		config.headers.Authorization = token ? `Bearer ${token}` : '' ; 
// 		return config;
//     });
// }
// else if(localStorage.getItem('auth_token_gestionnaire')!==''){
// 	token=localStorage.getItem('auth_token_gestionnaire');
// 	axios.interceptors.request.use(function(config){
// 	   config.headers.Authorization = token ? `Bearer ${token}` : '' ; 
// 	   return config;
//    });
// }else {
//    token='';
// }
//  if(localStorage.getItem('auth_token_gestionnaire')!==''){
// 	 token=localStorage.getItem('auth_token_gestionnaire');
// }
//  axios.interceptors.request.use(function(config){
// 			config.headers.Authorization = token ? `Bearer ${token}` : '' ; 
// 			return config;
// 	});

	// axios.interceptors.request.use(function(config){
	// 		if(tokengestionnaire!==''){	
	// 			config.headers.Authorization = tokengestionnaire ? `Bearer ${tokengestionnaire}` : '' ; 
	// 			console.log(config.headers.Authorization)
	// 		}
	// 		return config;
	// 	});
function App() {
	const [GestionnaireAuth, setGestionnaireAuth]=useState(false);
	const [ResponsableAuth, setResponsableAuth]=useState(false);

	useEffect(()=>{
		axios.get(`api/auth-gestionnaire/checkingAuthGestionnaire`).then(res=>{
			if(res.status===200){
				setGestionnaireAuth(true);
			}
		});
		return()=>{
			setGestionnaireAuth(false);
		};
	},[]);
	useEffect(()=>{
		axios.get(`api/auth-responsable-etablissement/checkingAuthResponsable`).then(response=>{
			if(response.status===200){
				setResponsableAuth(true);
			}
		});
		return()=>{
			setResponsableAuth(false);
		};
	},[]);
	return (
		<>
				<Routes>
					<Route path='/' element={<InterfaceInternaute/>}></Route>
					<Route path="/gestionnaire/login" element={!GestionnaireAuth?<LoginGestionnaire/>:<div><Navigate replace to="/gestionnaire" /><InterfaceGestionnaire/></div>}/>
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
						
						<Route path='production/fournisseurs' element={<Fournisseur/>}/>
						<Route path='production/stock-poubelles' element={<StockPoubelle/>}/>
						<Route path='production/materiaux-primaires' element={<MateriauxPrimaire/>}/>

						<Route path='commandes-poubelles' element={<CommandePoubelle/>}/>
						<Route path='commandes-dechets' element={<CommandeDechets/>}/>
					
						<Route path='pannes-poubelles' element={<PannePoubelle/>}/>
						<Route path='pannes-camions' element={<PanneCamion/>}/>
					
						<Route path='calendrier' element={<CalendrierGestionnaire/>}/>
					
					</Route>
					<Route path="/responsable-etablissement/login" element={!ResponsableAuth?<LoginResponsable/>:<div><Navigate replace to="/responsable-etablissement" /><InterfaceResponsableEtablissement/></div>}/>
					<Route path='/responsable-etablissement' element={ResponsableAuth?<InterfaceResponsableEtablissement/>:<div><Navigate replace to="/responsable-etablissement/login"/></div>}>
						<Route index element={<DashboardResponsable/>}/>
						<Route path='map' element={<MapResponsable/>}/>
						<Route path='poubelle' element={<PoubelleEtablissement/>}/>
						<Route path='panne-poubelle' element={<PannePoubelleEtablissement/>}/>
						<Route path='calendrier' element={<CalendrierResponsable/>}/>
						<Route path='commander' element={<CommanderResponsable/>}/>
						<Route path='panier' element={<PanierResponsable/>}/>
					</Route>
					<Route path="*" element={<PageNotFound />} />
				</Routes>
		</>
	);
   }
export default App;

