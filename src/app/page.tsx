'use client';
import FilterTab from "@/components/FilterTab";
import Graphs from "@/components/GraphContainer";
import { useState, useRef } from "react";
import jsPDF from "jspdf";
import html2canvas from "html2canvas";

export default function Home() {
  const [selectedGraph, setSelectedGraph] = useState<string | null>(null);
  const graphContainerRef = useRef<HTMLDivElement>(null);

  const handleGraphSelect = (key: string) => {
    setSelectedGraph(key);
  };

  const downloadPDF = async () => {
    if (graphContainerRef.current) {
      const container = graphContainerRef.current;

      const pdf = new jsPDF("portrait", "mm", "a4");
      const canvas = await html2canvas(container, { scale: 2 });
      const imgData = canvas.toDataURL("image/png");

      const imgWidth = 190; // Adjust to fit within A4 width
      const imgHeight = (canvas.height * imgWidth) / canvas.width;

      pdf.addImage(imgData, "PNG", 10, 10, imgWidth, imgHeight);
      pdf.save("graphs.pdf");
    }
  };

  return (
    <div style={{ justifyItems: "center" }}>
      <h1>PDF Download Page</h1>
      <div style={{ marginBottom: "7rem" }}>
        <FilterTab onGraphSelect={handleGraphSelect} />
      </div>
      <div ref={graphContainerRef}>
        <Graphs currGraph={selectedGraph || "NULL"} />
      </div>
      <div style={{ marginTop: "20px", textAlign: "center" }}>
        <button
          onClick={downloadPDF}
          style={{
            backgroundColor: "#4CAF50",
            color: "white",
            border: "none",
            padding: "10px 20px",
            fontSize: "16px",
            cursor: "pointer",
            borderRadius: "5px",
          }}
        >
          Download All Graphs as PDF
        </button>
      </div>
    </div>
  );
}
