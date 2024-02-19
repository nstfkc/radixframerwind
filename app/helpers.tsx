export const copyToClipboard = (str: string, cb: VoidFunction = () => {}) => {
  navigator.permissions
    .query({ name: "clipboard-write" } as any)
    .then((result) => {
      if (result.state === "granted" || result.state === "prompt") {
        navigator.clipboard.writeText(str);
        cb();
      }
    });
};
