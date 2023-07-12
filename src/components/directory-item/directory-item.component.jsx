import { useNavigate } from "react-router-dom";

import {
  StyledDirectoryItemBgImg,
  StyledDirectoryItemBodyCon,
  StyledDirectoryItemCon,
} from "./directory-item.style";

const DirectoryItem = ({ directory }) => {
  const { title, imageUrl, routeName } = directory;
  const navigate = useNavigate();
  const onNavigateHandler = () => navigate(routeName);

  return (
    <StyledDirectoryItemCon>
      <StyledDirectoryItemBgImg $imageUrl={imageUrl} />
      <StyledDirectoryItemBodyCon onClick={onNavigateHandler}>
        <h2>{title}</h2>
        <p>Shop Now</p>
      </StyledDirectoryItemBodyCon>
    </StyledDirectoryItemCon>
  );
};
export default DirectoryItem;
