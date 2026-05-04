/// <reference types="vite" />

declare module "*.css" {
  const content: { [className: string]: string };
  export default content;
}