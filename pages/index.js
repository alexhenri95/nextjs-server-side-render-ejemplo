import Layout from "../layout/Layout";
import fetch from 'isomorphic-fetch'
import UsersList from "../components/UsersList";

export default function Home({users}) {
    return (
        <Layout title='Home'>
            <h1 className="text-4xl font-bold text-blue-700">Home: Listado de usuarios</h1>
            <div>
                <UsersList users={users}/>
            </div>
        </Layout>
    )
}

Home.getInitialProps = async(ctx) => {
    const res = await fetch(`https://reqres.in/api/users`)
    const resJSON = await res.json()
    return { users: resJSON.data}
}