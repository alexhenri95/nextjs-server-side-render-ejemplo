import Router from "next/router";

const UsersList = ({users}) => {
    console.log(users);
    return (
        <div className="block w-full overflow-x-auto mt-8">
            <table className="items-center bg-transparent w-full border-collapse ">
                <thead>
                    <tr>
                        <th className="px-6 bg-blueGray-50 text-blueGray-500 align-middle border border-solid border-blueGray-100 py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left">
                            
                        </th>
                        <th className="px-6 bg-blueGray-50 text-blueGray-500 align-middle border border-solid border-blueGray-100 py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left">
                            Nombre
                        </th>
                        <th className="px-6 bg-blueGray-50 text-blueGray-500 align-middle border border-solid border-blueGray-100 py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left">
                            Email
                        </th>
                    </tr>
                </thead>

                <tbody>
                    {
                        users.map( user => (
                            <tr key={user.id} onClick={ e => Router.push('/users/[id]', `/users/${user.id}`)} className="cursor-pointer hover:bg-gray-200">
                                <th className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4 text-left text-blueGray-700 ">
                                    <img src={ user.avatar } className="rounded-full h-24" alt={ user.first_name + ' ' + user.last_name } />
                                </th>
                                <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4 ">
                                    { user.first_name + ' ' + user.last_name }
                                </td>
                                <td className="border-t-0 px-6 align-center border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
                                    { user.email }
                                </td>
                            </tr>
                        ) )
                    }
                </tbody>

            </table>
        </div>
    )
}

export default UsersList