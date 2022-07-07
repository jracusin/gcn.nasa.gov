/*!
 * Copyright © 2022 United States Government as represented by the Administrator
 * of the National Aeronautics and Space Administration. No copyright is claimed
 * in the United States under Title 17, U.S. Code. All Other Rights Reserved.
 *
 * SPDX-License-Identifier: NASA-1.3
 */

import { Link, NavLink, useLocation } from '@remix-run/react'
import { useState } from 'react'
import {
  Header as USWDSHeader,
  NavMenuButton,
  PrimaryNav,
  Title,
  NavDropDownButton,
  Menu,
} from '@trussworks/react-uswds'

export function Header({ email }: { email?: string }) {
  const { pathname } = useLocation()
  const [expanded, setExpanded] = useState(false)
  const [userMenuIsOpen, setUserMenuIsOpen] = useState(false)
  const onClick = () => setExpanded((prvExpanded) => !prvExpanded)

  const pathMatches = (path: string) =>
    pathname === path || pathname.startsWith(`${path}/`)

  return (
    <>
      <div className={`usa-overlay ${expanded ? 'is-visible' : ''}`}></div>
      <USWDSHeader basic className="usa-header usa-header--dark">
        <div className="usa-nav-container">
          <div className="usa-navbar">
            <Title>
              <Link to="/">
                <img
                  id="site-logo"
                  src="/_static/img/logo.svg"
                  alt="NASA logo"
                />
                <span id="site-title">Multimessenger Astrophysics</span>
              </Link>
            </Title>
            <NavMenuButton onClick={onClick} label="Menu" />
          </div>
          <PrimaryNav
            mobileExpanded={expanded}
            items={[
              <NavLink className="usa-nav__link" to="/missions" key="/missions">
                Missions
              </NavLink>,

              <NavLink className="usa-nav__link" to="/gcn" key="/gcn">
                Transient Alerts
              </NavLink>,
              <NavLink
                className="usa-nav__link"
                to="/proposals"
                key="/proposals"
              >
                Proposals
              </NavLink>,
              /**  gcn (<>
              <NavDropDownButton
                    className={pathMatches('/user') ? 'active' : undefined}
                    type="button"
                    key="gcn"
                    label={gcn}
                    isOpen={userMenuIsOpen}
                    onToggle={() => setUserMenuIsOpen(!userMenuIsOpen)}
                    menuId="gcn"
              />
              <Menu
                    id="gcn"
                    isOpen={userMenuIsOpen}
                    items={[
                      <Link className="usa-nav__link" key="notices" to="/notices">
                        Notices
                      </Link>,
                       <Link className="usa-nav__link" key="circulars" to="/circulars">
                       Circulars
                     </Link>,
                    ]}
              />
               </>
               ),
               */
              <NavLink className="usa-nav__link" to="/tools" key="/tools">
                Tools
              </NavLink>,
              <NavLink
                className="usa-nav__link"
                to="/conferences"
                key="/conferences"
              >
                Conferences
              </NavLink>,

              /**
               *              <NavLink className="usa-nav__link" to="/notices" key="/notices">
               *                Notices
               *              </NavLink>,
               *              <NavLink
               *                className="usa-nav__link"
               *                to="/circulars"
               *                key="/circulars"
               *              >
               *                Circulars
               *              </NavLink>,
               */
              <NavLink className="usa-nav__link" to="/docs" key="/docs">
                Documentation
              </NavLink>,
              email ? (
                <>
                  <NavDropDownButton
                    className={pathMatches('/user') ? 'active' : undefined}
                    type="button"
                    key="user"
                    label={email}
                    isOpen={userMenuIsOpen}
                    onToggle={() => setUserMenuIsOpen(!userMenuIsOpen)}
                    menuId="user"
                  />
                  <Menu
                    id="user"
                    isOpen={userMenuIsOpen}
                    items={[
                      <Link key="logout" to="/logout">
                        Sign Out
                      </Link>,
                    ]}
                  />
                </>
              ) : (
                <Link className="usa-nav__link" to="/login" key="/login">
                  Sign in / Sign up
                </Link>
              ),
            ]}
            onToggleMobileNav={onClick}
          />
        </div>
      </USWDSHeader>
    </>
  )
}
