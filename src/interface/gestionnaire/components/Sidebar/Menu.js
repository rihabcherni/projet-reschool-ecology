
function hasChildren(item) {
    const { items: children } = item;
    if (children === undefined) {
      return false;
    }
    if (children.constructor !== Array) {
      return false;
    }
    if (children.length === 0) {
      return false;
    }
  
    return true;
  }
  const menu = [
    {id: 1, name: "Dashboard",  path:"/gestionnaire", icon: <ImStatsDots/>},
    {id: 2, name: "Map",  path:"/gestionnaire/map", icon: <FaMapMarkedAlt/>},

    {id: 3, name: "Poubelles", path:"/gestionnaire/poubelles", icon: <BsTrashFill/>},
    {id: 4, name: "Camions", path:"/gestionnaire/camions", icon: <FaTruckMoving/>},
   
    {id: 5, name: "personnel", path:"/gestionnaire/personnel", icon: <HiUsers/>,
    items: [
      {name: "Ouvriers", path:"/gestionnaire/personnel/ouvriers", icon: <HiUsers/>},
      {name: "Réparateurs poubelle", path:"/gestionnaire/personnel/reparateurs-poubelle", icon: <BsTools/>},
      {name: "Réparateurs camion", path:"/gestionnaire/personnel/reparateurs-camion", icon: <BsTools/>},
    ]
    },
    {id: 6, name: "Réparateurs poubelle", path:"/gestionnaire/personnel/reparateurs-poubelle", icon: <BsTools/>},
    {id: 7, name: "Réparateurs camion", path:"/gestionnaire/personnel/reparateurs-camion", icon: <BsTools/>},

    {id: 8, name: "Responsables Etablissement", path:"/gestionnaire/clients/responsables-etablissements", icon: <FaUser/>},
    {id: 9, name: "Acheteurs de déchets", path:"/gestionnaire/clients/acheteurs-dechets", icon: <FaRecycle/>},
    
    {id: 10, name: "Fournisseurs", path:"/gestionnaire/fournisseurs", icon: <FaUserTie/>},
   
    {id: 11, name: "Commandes Poubelles", path:"/gestionnaire/commandes-poubelles", icon: <VscTrash/>},
    {id: 12, name: "Commandes Déchets", path:"/gestionnaire/commandes-dechets", icon: <BsFillBasketFill/>},
    {id: 13, name: "Calendrier",path:"/gestionnaire/calendrier", icon: <FaCalendarDay/>},

  ];
export default function MenuSidebar() {
  return menu.map((item, key) => <MenuItem key={key} item={item} />);
}

