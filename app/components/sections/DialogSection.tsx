"use client";

import { PropsWithChildren } from "react";
import { Button } from "../Button";
import { ContainerWithBg } from "../ContainerWithBg";
import { Dialog, DialogClose, DialogTitle } from "../Dialog";
import { CopyButton } from "../CopyButton";

export const DialogSection = (
  props: PropsWithChildren<{ sourceCode: string }>
) => {
  return (
    <section id="#dialog" className="w-full">
      <ContainerWithBg>
        <div className="flex w-full h-full justify-center items-center">
          <Dialog trigger={<Button>Open</Button>}>
            <div className="p-4 max-w-md">
              <div className="relative bg-white rounded-md p-4 w-full flex flex-col gap-4">
                <DialogClose className="absolute right-0 top-0 size-8">
                  &#x2715;
                </DialogClose>
                <DialogTitle className="text-lg font-semibold">
                  Terms and Conditions
                </DialogTitle>
                <div className="">
                  Quis blandit turpis cursus in hac habitasse platea dictumst
                  quisque sagittis, purus sit. Facilisis leo, vel fringilla est
                  ullamcorper eget nulla facilisi etiam dignissim diam quis enim
                  lobortis scelerisque fermentum?
                </div>
                <div>
                  <DialogClose asChild>
                    <Button>Accept</Button>
                  </DialogClose>
                </div>
              </div>
            </div>
          </Dialog>
        </div>
      </ContainerWithBg>
      <div className="relative w-full overflow-scroll">
        <div className="absolute right-0 top-0 p-4">
          <CopyButton content={props.sourceCode} />
        </div>
        <div className="w-full overflow scroll h-[300px]">
          <div className="absolute w-full">{props.children}</div>
        </div>
      </div>
    </section>
  );
};
