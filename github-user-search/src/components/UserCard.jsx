export default function UserCard({ user }) {
  if (!user) return null; // nothing if no user yet

  return (
    <div>
      <img
        src={user.avatar_url}
        alt={user.login}
        width={80}
        height={80}
        style={{ borderRadius: "50%" }}
      />
      <h2>{user.name || user.login}</h2>
      <p>{user.email}</p>
      <p>{user.location}</p>
      <p>{user.bio || "No bio available"}</p>
      <a href={user.html_url} target="_blank" rel="noopener noreferrer">
        View GitHub Profile
      </a>
    </div>
  );
}
