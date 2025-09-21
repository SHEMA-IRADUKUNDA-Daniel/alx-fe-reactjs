export default function UserCard({ user, repos }) {
  if (!user) return null; // nothing if no user yet

  return (
    <div className="flex flex-col justify-center content-center w-[0 auto]">
      <img
        src={user.avatar_url}
        alt={user.login}
        width={80}
        height={80}
        style={{ borderRadius: "50%" }}
      />
      <h2>{user.name || user.login}</h2>
      <p>{user.location}</p>
      <p>{user.bio || "No bio available"}</p>
      <a href={user.html_url} target="_blank" rel="noopener noreferrer">
        View GitHub Profile
      </a>
      {repos && repos.length > 0 && (
        <div className="mt-4">
          <h3 className="font-semibold">Recent Repos:</h3>
          <ul className="list-disc list-inside">
            {repos.map((repo) => (
              <li key={repo.id}>
                <a
                  href={repo.html_url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-500 hover:underline"
                >
                  {repo.name}
                </a>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}
