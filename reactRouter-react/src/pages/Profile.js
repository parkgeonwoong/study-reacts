import { useParams } from "react-router-dom"

const data = {
    woongs: {
        name: '박건웅',
        description: "react developer & finance"
    },
    node: {
        name: "Node",
        description: "Node Express javascript"
    }
}

const Profile = () => {
    const params = useParams()
    const profile = data[params.username]

    return (
        <div>
            <h1>User Profile</h1>
            {profile ? (
                <div>
                    <h2>{profile.name}</h2>
                    <p>{profile.description}</p>
                </div>
            ) : (
                <p>Not Found</p>
            )}
        </div>
    )
}

export default Profile