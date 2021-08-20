declare module '*.css' {
  const mapping: Record<string, string>
  export default mapping
}

declare namespace NodeJS {
  export interface ProcessEnv {
    WEBSOCKET_URL: string
  }
}
