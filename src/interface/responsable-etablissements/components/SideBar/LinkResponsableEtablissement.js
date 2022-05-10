import React from "react";
import { BsFillCalendarDateFill, BsTrashFill, BsTools ,BsFillBasketFill} from "react-icons/bs";
import { ImStatsDots } from "react-icons/im";
import { FaMapMarkedAlt} from "react-icons/fa";
import { RiShoppingBasketFill } from "react-icons/ri"

export const LinkResponsableEtablissement = [
    {id: 1, name: "Dashboard",path:"/responsable-etablissement", icon: <ImStatsDots/>},
    {id: 2, name: "Map",path:"/responsable-etablissement/map", icon: <FaMapMarkedAlt/>},
    {id: 3, name: "Poubelle",path:"/responsable-etablissement/poubelle", icon: <BsTrashFill/>},
    {id: 4, name: "Pannes Poubelle",path:"/responsable-etablissement/panne-poubelle", icon: <BsTools/>},
    {id: 5, name: "Calendrier",path:"/responsable-etablissement/calendrier", icon: <BsFillCalendarDateFill/>},
    {id: 6, name: "Commander",path:"/responsable-etablissement/commander", icon: <RiShoppingBasketFill/>},
    {id: 7, name: "Panier",path:"/responsable-etablissement/panier", icon: <BsFillBasketFill/>}
  ];