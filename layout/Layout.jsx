import Head from "next/head"
import Navigation from "../components/Navigation"

const Layout = ({children, title}) => {
    return (
        <>
            <Head>
                <title>Next.js Project | {title}</title>
            </Head>

            <Navigation/>

            <div className="max-w-7xl mx-auto p-4">
                { children }
            </div>
        </>
    )
}

export default Layout