import React from "react";
// import { IconBrandGithubFilled } from "@tabler/icons-react";

interface Props {
  platform: string;
  username: string;
  icon: React.ElementType;
}

const Social: React.FC<Props> = ({ platform, username, icon: Icon }) => {
  return (
    <div className="flex items-center justify-center border-2 w-fit rounded-full p-2">
      <a
        href={`https://www.${platform}.com/${username}`}
        target="_blank"
        rel="noopener noreferrer"
      >
        <Icon />
      </a>
    </div>
  );
};

export default Social;
