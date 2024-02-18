import { PropsWithChildren } from "react";

export const ContainerWithBg = (props: PropsWithChildren) => {
  return (
    <div className="relative w-full h-[200px] rounded-2xl overflow-hidden shadow-md">
      <div
        style={{
          position: "absolute",
          width: "100%",
          height: "100%",
          zIndex: 0,
          pointerEvents: "none",
          background:
            "linear-gradient(34deg, rgba(82, 82, 82, 1) 27%, rgba(173, 173, 173, 1) 77%)",
        }}
      >
        <svg xmlns="http://www.w3.org/2000/svg" width="100%" height="100%">
          <filter id="n" x="0" y="0">
            <feTurbulence
              type="turbulance"
              baseFrequency="3.8"
              stitchTiles="stitch"
            />
          </filter>
          <rect width="100%" height="100%" filter="url(#n)" opacity="1" />
        </svg>
      </div>
      <div className="relative w-full h-full z-1">{props.children}</div>
    </div>
  );
};
