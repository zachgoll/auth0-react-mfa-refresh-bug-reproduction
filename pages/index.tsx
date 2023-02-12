import { useAuth0, withAuthenticationRequired } from "@auth0/auth0-react";

function Home() {
  const { logout, user, getAccessTokenSilently } = useAuth0();

  return (
    <div>
      <p>User: {user?.email}</p>

      <button
        onClick={async () => {
          const token = await getAccessTokenSilently();

          const response = await fetch("http://localhost:8080", {
            headers: {
              "Content-Type": "application/json",
              Authorization: `Bearer ${token}`,
            },
          }).then((res) => res.json());

          console.log(response);
        }}
      >
        Make API Call
      </button>

      <button onClick={() => logout()}>Logout</button>
    </div>
  );
}

export default withAuthenticationRequired(Home);
