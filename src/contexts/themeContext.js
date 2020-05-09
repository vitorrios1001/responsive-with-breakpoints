import React, { createContext, useState, useContext, useEffect } from 'react'

import useWindowSize from '../hooks/useWindowSize'
import { BREAKPOINTS, BREAKPOINT_TYPES } from '../constants'

const ThemeContext = createContext()

const initialViewPort = {
  desktop: false,
  tablet: false,
  mobile: false,
  text: 'none',
}

const getViewPortByWidth = width => {
  let viewPort = BREAKPOINT_TYPES.tablet

  if (width < BREAKPOINTS.mobile.max) {
    viewPort = BREAKPOINT_TYPES.mobile
  } else if (width > BREAKPOINTS.desktop.min) {
    viewPort = BREAKPOINT_TYPES.desktop
  }

  return viewPort
}

export const ThemeProvider = ({ children }) => {
  const [width,] = useWindowSize()
  const [viewPort, setViewPort] = useState(initialViewPort)

  useEffect(() => {
    const viewPortType = getViewPortByWidth(width)

    switch (viewPortType) {
      case BREAKPOINT_TYPES.mobile:
        if (!viewPort.mobile) {
          setViewPort({ ...initialViewPort, mobile: true, text: BREAKPOINT_TYPES.mobile })
        }
        break;
      case BREAKPOINT_TYPES.tablet:
        if (!viewPort.tablet) {
          setViewPort({ ...initialViewPort, tablet: true, text: BREAKPOINT_TYPES.tablet })
        }
        break;
      case BREAKPOINT_TYPES.desktop:
        if (!viewPort.desktop) {
          setViewPort({ ...initialViewPort, desktop: true, text: BREAKPOINT_TYPES.desktop })
        }
        break;    
      default:
        break;
    }
  }, [viewPort.desktop, viewPort.mobile, viewPort.tablet, width])

  useEffect(() => {
    console.log('viewport:::', viewPort)
  }, [viewPort])

  return (
    <ThemeContext.Provider value={{
      viewPort, 
      isMobile: viewPort.mobile,
      isTablet: viewPort.tablet,
      isDesktop: viewPort.desktop,
    }}
    >
      {children}
    </ThemeContext.Provider>
  )
}

export const useTheme = () => {
  const context = useContext(ThemeContext)

  return context
}

export default ThemeContext
