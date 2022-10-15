import { useRouter } from "next/router"
import fecth from 'isomorphic-fetch'
import Layout from "../../layout/Layout";

export default function Profile({user}) {

    console.log(user);
    return (
        <Layout title={user.first_name}>
            <div className="block w-full overflow-x-auto mt-8">
                <div className="flex items-center">
                    <figure className="mr-6">
                        <img src={ user.avatar } className="h-40" alt={ user.first_name + ' ' + user.last_name } />
                    </figure>
                    <div>
                        <p className="text-lg"><span className="font-bold">Id</span> { user.id }</p>
                        <p className="text-lg"><span className="font-bold">Nombre</span> { user.first_name }</p>
                        <p className="text-lg"><span className="font-bold">Apellido</span> { user.last_name }</p>
                        <p className="text-lg"><span className="font-bold">Email</span> { user.email }</p>
                    </div>
                </div>
            </div>
        </Layout>
    )
}

Profile.getInitialProps = async(ctx) => {
    const res = await fetch(`https://reqres.in/api/users/${ctx.query.id}`)
    const resJSON = await res.json()
    return { user: resJSON.data }
}