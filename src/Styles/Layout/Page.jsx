import { useEffect } from "react";
import { StyledGrid } from "./Styled.Page";

const Page = (props) => {
  // Destructuring props object to extract the children, title, description, and subtitle properties
  const { children, title, description } = props;
  // Using useEffect  to update the document title and description whenever they change
  useEffect(() => {
    document.title = title;
    // If a description it exists, it sets the content attribute of the description meta tag to the value of the "description" prop
    if (description) {
      document
        .querySelector('meta[name="description"]')
        .setAttribute("content", description);
    }
  }, [title, description]);

  return <StyledGrid> {children} </StyledGrid>;
};

export { Page };
