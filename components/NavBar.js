/* eslint-disable @next/next/no-img-element */
/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import Link from 'next/link';
import {
  Navbar,
  Container,
  Nav,
  Button,
} from 'react-bootstrap';
import { signOut } from '../utils/auth';

export default function NavBar() {
  return (
    <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
      <Container>
        <Link passHref href="/">
          <Navbar.Brand>
            <img src="/HHPWLogo.png" width="auto%" height="100" alt="icon" className="nav-logo" />
          </Navbar.Brand>
        </Link>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            {/* CLOSE NAVBAR ON LINK SELECTION: https://stackoverflow.com/questions/72813635/collapse-on-select-react-bootstrap-navbar-with-nextjs-not-working */}
            <Link passHref href="/orders">
              <Nav.Link>View Orders</Nav.Link>
            </Link>
            <Link passHref href="/new">
              <Nav.Link>Create Order</Nav.Link>
            </Link>
            {/* <Button variant="danger" onClick={signOut}>
              Sign Out
            </Button> */}
            <div className="signoutBtn nav-right nav-spacing">
              <Container>
                {/* <SearchBar /> */}
                <Button variant="danger" onClick={signOut} style={{ fontSize: 12 }}>
                  <b><em>Sign Out &#9916;</em></b>
                </Button>
              </Container>
            </div>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
