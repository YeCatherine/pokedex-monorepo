import {createContext, useContext} from "react"

/**
 * The global content type.
 */
export type GlobalContent = {
    language: string
    setLanguage: (c: string) => void
}

/**
 * The application Language.
 */
export const MyGlobalContext = createContext<GlobalContent>({
    language: "en",
    setLanguage: () => {
    },
})
export const useGlobalContext = () => useContext(MyGlobalContext)
