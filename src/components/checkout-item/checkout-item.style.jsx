import styled from "styled-components";

const StyledItemWidth = styled.span.attrs(() => ({
  className: "item-width",
}))`
  width: 23%;
`;

export const StyledCheckoutItemCon = styled.div`
  width: 100%;
  display: flex;
  min-height: 100px;
  border-bottom: 1px solid darkGray;
  padding: 15px 0;
  font-size: 20px;
  align-items: center;
`;
export const StyledImageCon = styled.div`
  width: 23%;
  padding-right: 15px;

  img {
    width: 100%;
    height: 100%;
  }
`;
export const StyledName = styled(StyledItemWidth)``;
export const StyledPrice = styled(StyledItemWidth)``;
export const StyledQuantityCon = styled(StyledItemWidth)`
  display: flex;

  .arrow {
    cursor: pointer;
  }

  .value {
    margin: 0 10px;
  }
`;

export const StyledDeleteButton = styled.span`
  padding-left: 12px;
  cursor: pointer;
`;
