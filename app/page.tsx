import { Sidebar } from "./components/Sidebar";
import { DialogSection } from "./components/sections/DialogSection";
import { Code } from "bright";

export default function Page() {
  return (
    <div className="bg-slate-200 min-h-screen">
      <div className="flex">
        <div className="min-w-[300px]">
          <Sidebar />
        </div>
        <div className="grow p-4">
          <DialogSection>
            <Code lang="tsx">{`import { Dialog } from "sonner";`}</Code>
          </DialogSection>
        </div>
      </div>
    </div>
  );
}
