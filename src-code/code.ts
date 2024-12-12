import { getStore, setStore, listenTS, dispatchTS } from "./utils/code-utils";

figma.showUI(__html__, {
  themeColors: true,
  width: 550,
  height: 600,
});

listenTS("hello", async(res) => {
  const thumbnail = await figma.getFileThumbnailNodeAsync()
  console.log(thumbnail)
 console.log("code.ts");
  alert(`Hello ${res.string}`);
  dispatchTS("helloCallback", { result: true });
});
