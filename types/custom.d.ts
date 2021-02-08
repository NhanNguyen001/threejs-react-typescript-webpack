declare module "*worker.ts" {
    class WebpackWorker extends Worker {
        constructor()

        onmessage(this: Worker, ev: MessageEvent): any;
    };

    export default WebpackWorker;
}

declare module '*.scss' {
    const content: {[className: string]: string};
    export default content;
}

// TODO
declare module '@loaders.gl/gltf';

// Declared using webpack.
declare const WEBVIZ_VERSION: string;

declare module '@deck.gl/core' {
    export interface DeckProps {
        _onMetrics?(state: DeckMetrics): void;
    }

    export type DeckMetrics = {
        fps: number;
        setPropsTime: number;
        updateAttributesTime: number;
        framesRedrawn: number;
        pickTime: number;
        pickCount: number;
        gpuTime: number;
        gpuTimePerFrame: number;
        cpuTime: number;
        cpuTimePerFrame: number;
        bufferMemory: number;
        textureMemory: number;
        renderbufferMemory: number;
        gpuMemory: number;
    }
}