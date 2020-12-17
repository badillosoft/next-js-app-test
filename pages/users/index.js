// route: /users

// pre-fetching
export async function getStaticProps() {
    const response = await fetch("https://randomuser.me/api/?results=10&seed=123");

    const data = await response.json();

    return {
        props: {
            users: data.results
        }
    }
}

export default function Users({ users }) {
    return (
        <div>
            <ul>
                {
                    users.map(user => {
                        return <li key={user.login.uuid}>{user.name.first}</li>
                    })
                }
            </ul>
        </div>
    )
}