import React from "react";
type HomePageProps = {
  text: string;
};

export const HomePage = (props: HomePageProps) => {
  const { text } = props;
  return (
    <div>
      <h1>Home Page</h1>
      <p>Welcome to the home page</p>
      {text}
    </div>
  );
};
