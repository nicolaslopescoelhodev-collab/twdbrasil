import type {Metadata} from 'next';
import './globals.css';
export const metadata:Metadata={title:'TWD Brasil Online | Sobreviva ao novo mundo',description:'O portal da comunidade brasileira de The Walking Dead Online no Roblox. Explore o mapa, encontre as safe zones e consulte as regras de PvP.',icons:{icon:'/favicon.svg',shortcut:'/favicon.svg'}};
export default function RootLayout({children}:Readonly<{children:React.ReactNode}>){return <html lang="pt-BR"><body>{children}</body></html>}
