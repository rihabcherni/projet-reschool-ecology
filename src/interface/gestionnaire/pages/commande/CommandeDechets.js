import React from 'react'
import CommandeDechetTable from '../../components/Table/gestionDechets/CommandeDechet/CommandeDechetTable'
import DetailCommandeDechetTable from '../../components/Table/gestionDechets/DetailCommandeDechet/DetailCommandeDechetTable';
import DechetsTable from '../../components/Table/gestionDechets/Dechet/DechetsTable';

export default function CommandeDechets() {
  return (
    <>
      <DechetsTable/>
      <CommandeDechetTable/>
      <DetailCommandeDechetTable/>
    </>
  )
}
