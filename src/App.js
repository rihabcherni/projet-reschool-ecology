import React, { useEffect, useState } from 'react';
import { Route, Routes ,Navigate, useRoutes} from 'react-router-dom';
import axios from 'axios';
import './App.css';
/**** ---------------------internaute ------------------------ ****/
	import InterfaceInternaute from './interface/internaute/InterfaceInternaute';

/**** ---------------------internaute ------------------------ ****/
/**** ---------------------gestionnaire ------------------------ ****/
	import InterfaceGestionnaire from './interface/gestionnaire/InterfaceGestionnaire';

	import Dashboard from './interface/gestionnaire/pages/Dashboard';
	import MapGestionnaire from './interface/gestionnaire/pages/map/MapGestionnaire';
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
	import ModiferMotDePasse from './interface/gestionnaire/pages/ModiferMotDePasse';
	import ContactUs from './interface/gestionnaire/pages/ContactUs/ContactUs';
/**** ----------------------gestionnaire ------------------------ ****/
/**** ----------------------responsable Etablissement ------------------------ ****/
	import InterfaceResponsableEtablissement from './interface/responsable-etablissements/InterfaceResponsableEtablissement';

	import DashboardResponsable from './interface/responsable-etablissements/pages/DashboardResponsable';
	import MapResponsable from './interface/responsable-etablissements/pages/MapResponsable';
	import PannePoubelleEtablissement from './interface/responsable-etablissements/pages/PannePoubelleEtablissement';
	import PoubelleEtablissement from './interface/responsable-etablissements/pages/PoubelleEtablissement';
	import PanierResponsable from './interface/responsable-etablissements/pages/PanierResponsable';
	import HistoriqueCommande from './interface/responsable-etablissements/pages/HistoriqueCommande';

	import ProfileResponsable from './interface/responsable-etablissements/pages/ProfileResponsable';
	import LoginResponsable from './interface/responsable-etablissements/pages/LoginResponsable';
	import ListeProduitsPoubelle from './interface/responsable-etablissements/pages/ListeProduitsPoubelle';
	import ShowDetailsProduit from './interface/responsable-etablissements/pages/ShowDetailsProduit';
	

	import StockPoubelle from './interface/gestionnaire/pages/productionPoubelle/StockPoubelle';
	import MateriauxPrimaire from './interface/gestionnaire/pages/productionPoubelle/MateriauxPrimaire';
/**** ----------------------responsable Etablissement ------------------------ ****/
import PannePoubelle from './interface/gestionnaire/pages/pannes/PannePoubelle';
import PanneCamion from './interface/gestionnaire/pages/pannes/PanneCamion';
import Gestionnaire from './interface/gestionnaire/pages/Gestionnaire';
import ProfileGestionnaire from './interface/gestionnaire/pages/ProfileGestionnaire';
import Page404 from './Global/error-pages/Page404';
import Page401 from './Global/error-pages/Page401';


axios.defaults.baseURL= "http://127.0.0.1:8000/";
axios.defaults.headers.post['Content-type']="application/json";
axios.defaults.headers.post['Accept']="application/json";

const RouteGestionnairePrivate = () => useRoutes([
	{ path: "/gestionnaire", element: <Page401 /> },
	{ path: "/gestionnaire/map", element: <Page401 /> },
	{ path: "/gestionnaire/modifier-mot-de-passe", element: <Page401 /> },
	{ path: "/gestionnaire/poubelles", element: <Page401 /> },
	{ path: "/gestionnaire/camions", element: <Page401 /> },
	{ path: "/gestionnaire/personnel/ouvriers", element: <Page401 /> },
	{ path: "/gestionnaire/personnel/reparateurs-poubelle", element: <Page401 /> },
	{ path: "/gestionnaire/personnel/reparateurs-camion", element: <Page401 /> },
	{ path: "/gestionnaire/clients/responsables-etablissements", element: <Page401 /> },
	{ path: "/gestionnaire/clients/acheteurs-dechets", element: <Page401 /> },
	{ path: "/gestionnaire/production/fournisseurs", element: <Page401 /> },
	{ path: "/gestionnaire/production/stock-poubelles", element: <Page401 /> },
	{ path: "/gestionnaire/production/materiaux-primaires", element: <Page401 /> },
	{ path: "/gestionnaire/commandes-poubelles", element: <Page401 /> },
	{ path: "/gestionnaire/commandes-dechets", element: <Page401 /> },
	{ path: "/gestionnaire/pannes-poubelles", element: <Page401 /> },
	{ path: "/gestionnaire/pannes-camions", element: <Page401 /> },
	{ path: "/gestionnaire/calendrier", element: <Page401 /> },
	{ path: "/gestionnaire/liste-gestionnaire", element: <Page401 /> },
	{ path: "/gestionnaire/contact-us", element: <Page401 /> },
	{ path: "/gestionnaire/profile", element: <Page401 /> },
]);

const RouteResponsablePrivate = () => useRoutes([
	{ path: "/responsable-etablissement", element: <Page401 /> },
	{ path: "/responsable-etablissement/map", element: <Page401 /> },
	{ path: "/responsable-etablissement/modifier-mot-de-passe", element: <Page401 /> },
	{ path: "/responsable-etablissement/poubelle", element: <Page401 /> },
	{ path: "/responsable-etablissement/profile", element: <Page401 /> },
	{ path: "/responsable-etablissement/panne-poubelle", element: <Page401 /> },
	{ path: "/responsable-etablissement/panier", element: <Page401 /> },
	{ path: "/responsable-etablissement/historique-commande", element: <Page401 /> },
	{ path: "/responsable-etablissement/produit-poubelle", element: <Page401 /> },
	{ path: "/responsable-etablissement/produit-poubelle/:id", element: <Page401 /> },

]);

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
			{localStorage.getItem("auth_token_gestionnaire")=== null ? 	   
				<> 
					<Routes>
						<Route path="/gestionnaire/login" element={!GestionnaireAuth?<LoginGestionnaire/>:<div><Navigate to="/gestionnaire" /><InterfaceGestionnaire/></div>}/>
					</Routes>
					<RouteGestionnairePrivate/>
				</>
			:
				<Routes>
						<Route path='/' element={<Navigate to="/"/>}></Route>
						<Route path="/gestionnaire/login" element={<div><Navigate to="/gestionnaire" /><InterfaceGestionnaire/></div>}/>
						<Route path='/gestionnaire' element={<InterfaceGestionnaire/>}>
						<Route index element={<Dashboard/>}/>
						<Route path='modifier-mot-de-passe' element={<ModiferMotDePasse/>}/>
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
						<Route path='liste-gestionnaire' element={<Gestionnaire/>}/>
						<Route path='contact-us' element={<ContactUs/>}/>
						<Route path='profile' element={<ProfileGestionnaire/>}/>				

					
					</Route>
					<Route path='*' element={<div><Navigate replace to="/page-404" /><Page404/> </div>}/>
				</Routes>
			}

			{localStorage.getItem("auth_token_responsable")=== null ?
				<> 	    
					<Routes>
						<Route path="/responsable-etablissement/login" element={!ResponsableAuth?<LoginResponsable/>:<div><Navigate replace to="/responsable-etablissement" /><LoginResponsable/></div>}/>
					</Routes>
					<RouteResponsablePrivate/>
				</>
			:
				<Routes>
						<Route path='/' element={<Navigate to="/"/>}></Route>
						<Route path="/responsable-etablissement/login" element={<div><Navigate replace to="/responsable-etablissement" /><LoginResponsable/></div>}/>	
						<Route path='/responsable-etablissement' element={<InterfaceResponsableEtablissement/>}>	
						<Route index element={<DashboardResponsable/>}/>
						<Route path='map' element={<MapResponsable/>}/>
						<Route path='poubelle' element={<PoubelleEtablissement/>}/>
						<Route path='panne-poubelle' element={<PannePoubelleEtablissement/>}/>
						<Route path='panier' element={<PanierResponsable/>}/>
						<Route path='historique-commande' element={<HistoriqueCommande/>}/>
						<Route path='produit-poubelle' element={<ListeProduitsPoubelle/>}/>
						<Route path='produit-poubelle/:id' element={<ShowDetailsProduit/>}/>
						<Route path='profile' element={<ProfileResponsable/>}/>				
					</Route>
					<Route path='*' element={<div><Navigate to="/page-404" /><Page404/> </div>}/>
				</Routes>
		}
        <Routes>
			<Route path='/' element={<div><InterfaceInternaute/></div>}></Route>
		</Routes>
		</>
	);
   }
export default App;

