export const BREAKPOINT_TYPES = {
  mobile: 'mobile',
  tablet: 'tablet',
  desktop: 'desktop',
}

export const BREAKPOINTS = {
  [BREAKPOINT_TYPES.mobile]: {
    min: 0,
    max: 575,
  },
  [BREAKPOINT_TYPES.tablet]: {
    min: 576,
    max: 889,
  },
  [BREAKPOINT_TYPES.desktop]: {
    min: 990,
    max: Infinity,
  },
}
