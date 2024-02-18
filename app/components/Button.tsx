import { ComponentProps } from "react";

export const Button = (props: ComponentProps<"button">) => {
  const { children, ...rest } = props;
  return (
    <button
      {...rest}
      className="bg-stone-900 text-white px-4 py-2 rounded-md tracking-wide font-medium shadow-md text-sm active:scale-[0.97] transition-all"
    >
      {children}
    </button>
  );
};
