interface ImportMetaEnv {
    readonly VITE_MARVEL_API_BASEURL: string
    readonly VITE_MARVEL_API_PUBLIC_KEY: string
    readonly VITE_MARVEL_API_PRIVATE_KEY: string
    // more env variables...
}

interface ImportMeta {
    readonly env: ImportMetaEnv
}