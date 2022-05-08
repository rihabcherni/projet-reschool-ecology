import React from 'react'
import CommandeDechetTable from '../../components/Table/gestionDechets/CommandeDechetTable'
import DetailCommandeDechetTable from '../../components/Table/gestionDechets/DetailCommandeDechetTable';
import DechetsTable from '../../components/Table/gestionDechets/DechetsTable';

export default function CommandeDechets() {
  return (
    <>
      <DechetsTable/>
      <CommandeDechetTable/>
      <DetailCommandeDechetTable/>
    </>
  )
}
