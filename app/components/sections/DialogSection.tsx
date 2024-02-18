import { PropsWithChildren } from "react";
import { Button } from "../Button";
import { ContainerWithBg } from "../ContainerWithBg";
import { Dialog } from "../Dialog";

export const DialogSection = (props: PropsWithChildren) => {
  return (
    <section id="#dialog">
      <ContainerWithBg>
        <div className="flex w-full h-full justify-center items-center">
          <Dialog
            title={<h2 className="font-bold text-lg">Dialog</h2>}
            description={
              <p className="opacity-70">
                This is a dialog component that can be used to show a modal
                dialog.
              </p>
            }
            trigger={<Button>Open</Button>}
          >
            <div className="py-4 max-w-md">
              Quis blandit turpis cursus in hac habitasse platea dictumst
              quisque sagittis, purus sit. Facilisis leo, vel fringilla est
              ullamcorper eget nulla facilisi etiam dignissim diam quis enim
              lobortis scelerisque fermentum?
            </div>
          </Dialog>
        </div>
      </ContainerWithBg>
      <div>
        <div>Code</div>
        <div>{props.children}</div>
      </div>
    </section>
  );
};
