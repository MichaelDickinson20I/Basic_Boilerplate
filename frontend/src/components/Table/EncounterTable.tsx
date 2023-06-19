import { Slider } from '@mui/material'
import React from 'react'

export type TableProps = {
  // encounterData: string
}

const EncounterTable: React.FC<TableProps> = () => {
  return (
    <>
      {/* <div className="bg-slate-700 h-20 text-xl">Encounter Table</div> */}
      <Slider className="max-w-2xl" />
    </>
  )
}

export default EncounterTable
