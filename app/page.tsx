import { Sidebar } from "./components/Sidebar";
import { DialogSection } from "./components/sections/DialogSection";
import { Code } from "bright";

const fetchComponentCode = async (component: string) => {
  const res = await fetch(
    `https://raw.githubusercontent.com/nstfkc/radixframerwind/main/app/components/${component}.tsx`
  );
  return await res.text();
};

export default async function Page() {
  const [dialogCode] = await Promise.all([fetchComponentCode("Dialog")]);
  return (
    <div className="bg-slate-200 min-h-screen">
      <div className="flex">
        <div className="min-w-[300px]">
          <Sidebar />
        </div>
        <div className="grow p-4">
          <DialogSection sourceCode={dialogCode}>
            <Code
              style={{ borderRadius: "0 0 1rem 1rem", margin: "0" }}
              lang="tsx"
              theme="material-ocean"
            >
              {dialogCode}
            </Code>
          </DialogSection>
        </div>
      </div>
    </div>
  );
}
