'use client'
import FilterTab from "@/components/FilterTab";
import Graphs from "@/components/GraphContainer";
import { useState } from "react";


export default function Home() {
  const [selectedGraph,setSelectedGraph] = useState<string|null>(null);

  const handleGraphSelect = (key:string) =>{
    setSelectedGraph(key);
  }
  return (
    <div style={{ justifyItems: 'center' }}>
      <h1>PDF Download Page</h1>
      <div style={{ marginBottom: '7rem' }}>
        <FilterTab onGraphSelect={handleGraphSelect} />
      </div>
      <Graphs currGraph={selectedGraph || 'NULL'} />
    </div>

  );
}
