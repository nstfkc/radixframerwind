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
  useMotionTemplate,
  useMotionValueEvent,
  useSpring,
  useTransform,
} from "framer-motion";
import { PropsWithChildren, ReactNode, useEffect, useState } from "react";

export const Dialog = (
  props: PropsWithChildren<{
    initiallyOpen?: boolean;
    title: JSX.Element | string;
    description: JSX.Element | string;
    trigger: ReactNode;
  }>
) => {
  const {
    children,
    trigger,
    description,
    title,
    initiallyOpen = false,
  } = props;

  const [open, setOpen] = useState(false);

  const spring = useSpring(0, {
    stiffness: 300,
    damping: 30,
  });

  const opacity = useTransform(spring, [0, 100], [0, 1]);
  const scale = useTransform(spring, [0, 100], [0.95, 1]);

  useMotionValueEvent(opacity, "change", (latest) => {
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
        <Trigger asChild>{trigger}</Trigger>
        <Portal>
          <Overlay asChild>
            <motion.div
              style={{ opacity }}
              className="fixed inset-0 bg-black/20"
            />
          </Overlay>
          <Content asChild>
            <div className="fixed z-[9999] top-[40%] translate-y-[-50%] left-[50%] translate-x-[-50%]">
              <motion.div
                layout
                style={{
                  opacity,
                  scale,
                }}
                className="bg-white rounded-xl p-6"
              >
                <Title asChild={typeof title !== "string"}>{title}</Title>
                <Description asChild={typeof description !== "string"}>
                  {description}
                </Description>
                {children}
                <Close className="absolute top-2 right-2 p-1" asChild>
                  <button>&#x2715;</button>
                </Close>
              </motion.div>
            </div>
          </Content>
        </Portal>
      </Root>
    </div>
  );
};

export const DialogClose = Close;
