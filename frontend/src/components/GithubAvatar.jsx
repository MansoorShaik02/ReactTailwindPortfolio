import { useEffect, useState } from "react";
import axios from "axios";

const GitHubAvatar = () => {
  const [profile, setProfile] = useState(null);

  useEffect(() => {
    const fetchProfile = async () => {
      try {
        const response = await axios.get(
          "https://api.github.com/users/MansoorShaik02"
        );
        setProfile(response.data);
      } catch (error) {
        console.error("Error fetching GitHub profile:", error);
      }
    };

    fetchProfile();
  }, []);

  if (!profile) {
    return <div>Loading...</div>;
  }

  return (
    // <div className="flex items-center justify-center">
    //   <img
    //     src={profile.avatar_url}
    //     alt={profile.login}
    //     className="rounded-full w-32 h-32"
    //   />
    // </div>
    <div className="avatar">
      <div className="w-11 rounded-full">
        <img src={profile.avatar_url} alt={profile.login} />
      </div>
    </div>
  );
};

export default GitHubAvatar;
