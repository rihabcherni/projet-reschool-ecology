import React from "react";
import { BsFillCalendarDateFill, BsTrashFill, BsTools } from "react-icons/bs";
import { HiUsers } from 'react-icons/hi'
import { ImUserTie, ImStatsDots } from "react-icons/im";
import { VscTrash } from "react-icons/vsc";
import { FaMapMarkedAlt, FaTruckMoving, FaRecycle, FaTrash, FaUser, FaUserTie,FaCalendarDay} from "react-icons/fa";
import { RiShoppingBasketFill } from "react-icons/ri"
import { MdReportProblem } from "react-icons/md"
import AdminPanelSettingsIcon from '@mui/icons-material/AdminPanelSettings';
import ContactsIcon from '@mui/icons-material/Contacts';

export const linkDetailsGestionnaire = [
    {id: 1, name: "Dashboard",  path:"/gestionnaire", icon: <ImStatsDots/>},
    {id: 2, name: "Map",  path:"/gestionnaire/map", icon: <FaMapMarkedAlt/>},

    {id: 3, name: "Gestion poubelles", path:"/gestionnaire/poubelles", icon: <BsTrashFill/>},
    {id: 4, name: "Gestion camions", path:"/gestionnaire/camions", icon: <FaTruckMoving/>},
   
    {id: 5, name: "Production poubelle", icon: <FaTrash color="primary"/>,
      items: [
        {id: 1, name: "Fournisseurs", path:"/gestionnaire/production/fournisseurs", icon: <FaUserTie/>},
        {id: 2,name: "Stock poubelles", path:"/gestionnaire/production/stock-poubelles", icon: <VscTrash/>},
        {id: 3,name: "Materiaux primaires", path:"/gestionnaire/production/materiaux-primaires", icon: <BsTools/>},
      ]},
    {id: 6, name: "Personnel", icon: <HiUsers/>,
      items: [
        {id: 1,name: "Ouvriers", path:"/gestionnaire/personnel/ouvriers", icon: <HiUsers/>},
        {id: 2,name: "Réparateurs poubelle", path:"/gestionnaire/personnel/reparateurs-poubelle", icon: <BsTools/>},
        {id: 3,name: "Réparateurs camion", path:"/gestionnaire/personnel/reparateurs-camion", icon: <BsTools/>},
      ]},
    {id: 7, name: "Clients", icon: <FaUser/>,
    items: [
      {id: 1,name: "Responsables Etablissement", path:"/gestionnaire/clients/responsables-etablissements", icon: <FaUser/>},
      {id: 2,name: "Acheteurs de déchets", path:"/gestionnaire/clients/acheteurs-dechets", icon: <FaRecycle/>},
    ]
    },
    {id: 8, name: "Commandes", icon: <RiShoppingBasketFill/>,
    items: [
      { id: 1,name: "Commandes Poubelles", path:"/gestionnaire/commandes-poubelles", icon: <VscTrash/>},
      { id: 2,name: "Commandes Déchets", path:"/gestionnaire/commandes-dechets", icon: <FaRecycle/>},
    ]
    },
    {id: 9, name: "Pannes", icon: <MdReportProblem/>,
    items: [
      { id: 1,name: "Pannes Poubelles", path:"/gestionnaire/pannes-poubelles", icon: <VscTrash/>},
      { id: 2,name: "Pannes Camions", path:"/gestionnaire/pannes-camions", icon: <FaRecycle/>},
    ]
    },
    {id:10, name: "Calendrier",path:"/gestionnaire/calendrier", icon: <BsFillCalendarDateFill/>},
    {id:11, name: "Gestionnaire liste",path:"/gestionnaire/liste-gestionnaire", icon: <AdminPanelSettingsIcon/>},
    {id:12, name: "Contact-us",path:"/gestionnaire/contact-us", icon: <ContactsIcon/>},

  ];