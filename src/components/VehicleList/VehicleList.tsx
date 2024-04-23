import React, { ReactNode } from 'react'

type VehicleListProps = {
  children: ReactNode[];
};

function VehicleList({children}: VehicleListProps) {
  return (
    <>
      {children}
    </>
  )
}

export default VehicleList