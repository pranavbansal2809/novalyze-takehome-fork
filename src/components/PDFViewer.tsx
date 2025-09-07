// PdfViewer.jsx
import React, { useState } from "react";
import { Document, Page, pdfjs } from "react-pdf";
import pdfDoc from '../resources/sample.pdf';

pdfjs.GlobalWorkerOptions.workerSrc = new URL(
  'pdfjs-dist/build/pdf.worker.min.mjs',
  import.meta.url,
).toString();

export default function PdfViewer() {
  const [numPages, setNumPages] = useState<number>();
  const [pageNumber, setPageNumber] = useState<number>(1);

  function onDocumentLoadSuccess({ numPages }: { numPages: number }): void {
    setNumPages(numPages);
  }

  return (
    <div className="h-full flex flex-col items-center p-4">
      {/* <Document file={pdfDoc} onLoadSuccess={onDocumentLoadSuccess}>
        <Page pageNumber={pageNumber} />
      </Document>
      <p>
        Page {pageNumber} of {numPages}
      </p> */}

      <iframe src={pdfDoc} title="Sample PDF" className="w-full h-full border rounded-lg" />
    </div>
  );
}
