import React, { useState } from "react";
import { Menu, Input, Container } from "semantic-ui-react";
const Layout = () => {
  const [activeItem, setActiveItem] = useState("home");
  const handleItemClick = (e, { name }) => {
    setActiveItem(name.toLowerCase());
  };
  return (
    <Menu borderless fluid fixed="top">
      <Container>
        <Menu.Item header name="Saint Gobain Glass" />
        <Menu.Item
          name="home"
          active={activeItem === "home"}
          onClick={handleItemClick}
        />
        <Menu.Item
          name="messages"
          active={activeItem === "messages"}
          onClick={handleItemClick}
        />
        <Menu.Item
          name="friends"
          active={activeItem === "friends"}
          onClick={handleItemClick}
        />
        <Menu.Menu position="right">
          <Menu.Item>
            <Input icon="search" placeholder="Search..." />
          </Menu.Item>
          <Menu.Item
            name="logout"
            active={activeItem === "logout"}
            onClick={handleItemClick}
          />
        </Menu.Menu>
      </Container>
    </Menu>
  );
};

export default Layout;
