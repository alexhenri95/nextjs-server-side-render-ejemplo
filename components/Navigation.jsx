import Link from "next/link"

const Navigation = () => {
    return (
        <>
            <div className="py-4 px-4">
                <div className="mx-auto bg-gray-100 rounded-lg shadow-lg py-4 px-6 flex items-center justify-between">
                    <div>
                        <h1 className="font-bold text-blue-700">Navbar</h1>
                    </div>
                    <ul className="flex items-center gap-4">
                        <li className="font-semibold">
                            <Link href={`/`}>
                                <a className="cursor-pointer">Home</a>
                            </Link>
                        </li>
                        <li className="font-semibold">
                            <Link href={`/about`}>
                                <a className="cursor-pointer">About</a>
                            </Link>
                        </li>
                        <li className="font-semibold">
                            <Link href={`/services`}>
                                <a className="cursor-pointer">Services</a>
                            </Link>
                        </li>
                    </ul>
                </div>
            </div>
        </>

        
    )
}

export default Navigation