import wasm from "./tesseract-core-simd-lstm.wasm"
import TesseractCore from "./tesseract-core-simd-lstm.wasm.js"

const TessModule = await TesseractCore({
  instantiateWasm: (info, receive) => {
    const instance = new WebAssembly.Instance(wasm, info);
    receive(instance);
    return instance.exports;
  },
});

export { TessModule }