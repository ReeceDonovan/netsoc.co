declare module '*.jpg' {
  const link: string;
  export default link;
}
declare module '*.png' {
  const link: string;
  export default link;
}
declare module '*.svg' {
  const link: string;
  export default link;
}
declare module '*.mp4' {
  const link: string;
  export default link;
}

declare const process: {
  env: { [k: string]: string };
};
