import styled from "styled-components/macro";

export default function Navigation({ onNavigate }) {
    return (
        <NavigationContainer>
            <Navigationitem onClick={(event) => onNavigate("discover")}>
                Discover
      </Navigationitem>
            <Navigationitem onClick={(event) => onNavigate("bookmarks")}>
                Bookmarks
      </Navigationitem>
            <Navigationitem onClick={(event) => onNavigate("coaching")}>
                Coaching
      </Navigationitem>
            <Navigationitem onClick={(event) => onNavigate("progress")}>
                Progress
      </Navigationitem>
            <Navigationitem onClick={(event) => onNavigate("profile")}>
                Profile
      </Navigationitem>
        </NavigationContainer>
    );
}

const NavigationContainer = styled.div`
  position: fixed;
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  height: 3.125rem;
  max-width: 23.438rem;
  width: 100%;
  bottom: 0.313rem;
`;

const Navigationitem = styled.button`
  display: block;
  height: 2.813;
  background-color: yellow;
  font-weight: 800;
  color: hsla(0, 0%, 8%)
  border-radius: 0.25rem;
  border-style: none;
  background-color: hsla(216, 50%, 96%);
  box-shadow: 0 0.188rem 0.25rem hsla(203, 39%, 88%)
`;
