import ResumeDoc from "../images/Resume 09 08 2024.pdf";
import { Document, Page, pdfjs } from "react-pdf";
pdfjs.GlobalWorkerOptions.workerSrc = `//unpkg.com/pdfjs-dist@${pdfjs.version}/build/pdf.worker.min.mjs`;

function ResumeData(){
        return(
            <div>
            <Document
            file={ResumeDoc}
            onLoadError={console.error}
            style={{width: '100vw', height: 'auto'}}
            >
                <Page pageIndex={0}/>
            </Document>
            </div>
        );
    }
export default ResumeData;