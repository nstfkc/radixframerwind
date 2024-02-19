"use client";

import {
  Root,
  Content,
  Trigger,
  Portal,
  Overlay,
  Title,
  Description,
  Close,
} from "@radix-ui/react-dialog";
import {
  motion,
  useMotionValueEvent,
  useSpring,
  useTransform,
} from "framer-motion";
import { PropsWithChildren, useEffect, useState } from "react";

export const Dialog = (
  props: PropsWithChildren<{
    initiallyOpen?: boolean;
    trigger: JSX.Element | string;
  }>
) => {
  const { children, trigger, initiallyOpen = false } = props;

  const [open, setOpen] = useState(false);

  const spring = useSpring(0, {
    stiffness: 300,
    damping: 30,
  });

  const control = useTransform(spring, [0, 100], [0, 100]);
  const opacity = useTransform(spring, [0, 100], [0, 1]);
  const scale = useTransform(spring, [0, 100], [0.95, 1]);

  useMotionValueEvent(control, "change", (latest) => {
    if (latest === 0) {
      setOpen(false);
    }
  });

  useEffect(() => {
    if (initiallyOpen) {
      spring.set(100);
      setOpen(true);
    }
  }, [initiallyOpen, spring]);

  return (
    <div>
      <Root
        open={open}
        onOpenChange={() => {
          if (!open) {
            spring.set(100);
            setOpen(true);
          } else {
            spring.set(0);
          }
        }}
      >
        <Trigger asChild={typeof trigger !== "string"}>{trigger}</Trigger>
        <Portal>
          <Content asChild>
            <div className="fixed w-full h-full inset-0 z-[9999] flex items-center justify-center">
              <Overlay asChild>
                <motion.div
                  style={{ opacity }}
                  onClick={() => spring.set(0)}
                  className="fixed inset-0 z-[-1] bg-black/40 backdrop-blur-[2px]"
                />
              </Overlay>
              <motion.div
                layout
                style={{
                  opacity,
                  scale,
                }}
              >
                {children}
              </motion.div>
            </div>
          </Content>
        </Portal>
      </Root>
    </div>
  );
};

export const DialogClose = Close;
export const DialogTrigger = Trigger;
export const DialogTitle = Title;
export const DialogDescription = Description;
