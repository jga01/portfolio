import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Resume — Tiago Goossen de Andrade",
};

export default function ResumePage() {
  return (
    <div className="min-h-screen bg-background flex flex-col items-center py-12 px-4">
      <div className="w-full max-w-[850px] mb-4 flex justify-end">
        <a
          href="/resume.pdf"
          download
          className="px-4 py-2 bg-accent text-white text-sm rounded-lg hover:bg-accent/80 transition-colors"
        >
          Download PDF
        </a>
      </div>

      <div className="w-full max-w-[850px] flex-1 min-h-[80vh]">
        <object
          data="/resume.pdf"
          type="application/pdf"
          className="w-full h-[85vh] rounded-lg border border-neutral-800"
        >
          <div className="flex flex-col items-center justify-center h-64 text-neutral-400">
            <p className="mb-4">Unable to display PDF in browser.</p>
            <a
              href="/resume.pdf"
              download
              className="px-4 py-2 bg-accent text-white text-sm rounded-lg hover:bg-accent/80 transition-colors"
            >
              Download PDF
            </a>
          </div>
        </object>
      </div>
    </div>
  );
}
