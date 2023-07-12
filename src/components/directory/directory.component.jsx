import DirectoryData from "./directory-data.json";
import DirectoryItem from "../directory-item/directory-item.component";
import { StyledDirectoryCon } from "./directory.style";

const Directory = () => {
  return (
    <StyledDirectoryCon>
      {DirectoryData.map((directory) => (
        <DirectoryItem
          key={directory.id}
          directory={directory}
        />
      ))}
    </StyledDirectoryCon>
  );
};

export default Directory;
