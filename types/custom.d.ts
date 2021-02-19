declare module '*worker.ts' {
    class WebpackWorker extends Worker {
        constructor()

        onmessage(this: Worker, ev: MessageEvent): any;
    }

    export default WebpackWorker;
}

declare module '*.scss' {
    const content: {[className: string]: string};
    export default content;
}

declare module '@loaders.gl/gltf';

// Declared using webpack.
declare const WEBVIZ_VERSION: string;
