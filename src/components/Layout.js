import React, { PureComponent } from 'react'
import styled,  { injectGlobal } from 'styled-components'
import 'typeface-ibm-plex-sans'

import rem from '../utils/rem'
import Nav from './Nav'
import Footer from './Footer'

injectGlobal`
  body {
    margin: 0;
    font-family: "ibm plex sans";
    letter-spacing: ${rem(.25)};
  }
`

const Wrapper = styled.div`
  display: flex;
  min-height: 100vh;
  flex-direction: column;
`

class Layout extends PureComponent {
  state = {
    isMobileNavFolded: true,
  }

  toggleMobileNav = () => {
    this.setState(prevState => ({
      isMobileNavFolded: !prevState.isMobileNavFolded,
    }))
  }

  onRouteChange = () => {
    this.setState({
      isMobileNavFolded: true,
    })
  }

  render() {
    const { isMobileNavFolded } = this.state
    return (
      <Wrapper>
        <Nav
          isMobileNavFolded={isMobileNavFolded}
          onMobileNavToggle={this.toggleMobileNav}
        />
        {this.props.children}
        <Footer />
      </Wrapper>
    )
  }
}

export default Layout
