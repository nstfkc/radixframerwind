"use client";

import {
  Root,
  Content,
  Trigger,
  Portal,
  Overlay,
  Title,
  Description,
} from "@radix-ui/react-dialog";
import {
  motion,
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
  const top = useTransform(spring, [0, 100], [`60%`, `50%`]);

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
              className="fixed inset-0 bg-black/10"
            />
          </Overlay>
          <Content asChild>
            <motion.div
              style={{ opacity, top: top }}
              className="fixed bg-white translate-y-[-50%] left-[50%] translate-x-[-50%] rounded-xl p-6"
            >
              <Title asChild={typeof title !== "string"}>{title}</Title>
              <Description asChild={typeof description !== "string"}>
                {description}
              </Description>
              {children}
            </motion.div>
          </Content>
        </Portal>
      </Root>
    </div>
  );
};
