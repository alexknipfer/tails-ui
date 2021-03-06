import PropTypes from 'prop-types'
import React from 'react'

const Flex = ({
  display,
  direction,
  wrapping,
  justify,
  align,
  padding,
  paddingLeft,
  paddingRight,
  paddingTop,
  paddingBottom,
  margin,
  marginLeft,
  marginRight,
  marginTop,
  marginBottom,
  children,
  smHeight,
  mdHeight,
  lgHeight,
  xlHeight,
  smWidth,
  mdWidth,
  lgWidth,
  xlWidth
}) => (
  <div
    className={`h-${smHeight} sm:h-${smHeight} md:h-${mdHeight} lg:h-${lgHeight} xl:h-${xlHeight} w-${smWidth} sm:w-${smWidth} md:w-${mdWidth} lg:w-${lgWidth} xl:w-${xlWidth} ${display} flex-${direction} flex-${wrapping} justify-${justify} items-${align} p-${padding} pl-${paddingLeft} pr-${paddingRight} pt-${paddingTop} pb-${paddingBottom} m-${margin} ml-${marginLeft} mr-${marginRight} mt-${marginTop} mb-${marginBottom}`}
  >
    {children}
  </div>
)

Flex.defaultProps = {
  display: 'flex',
  direction: 'col',
  wrapping: 'wrap',
  justify: 'start',
  align: 'start',
  padding: '0',
  margin: '0'
}

Flex.propTypes = {
  display: PropTypes.oneOf(['flex', 'inline-flex']),
  direction: PropTypes.oneOf(['row', 'row-reverse', 'col', 'col-reverse']),
  wrapping: PropTypes.oneOf(['no-wrap', 'wrap', 'wrap-reverse']),
  justify: PropTypes.oneOf(['start', 'center', 'end', 'between', 'around']),
  align: PropTypes.oneOf(['stretch', 'start', 'center', 'end', 'baseline']),
  padding: PropTypes.oneOf(['0', '1', '2', '3', '4', '5', '6', '7', '8']),
  paddingLeft: PropTypes.oneOf(['0', '1', '2', '3', '4', '5', '6', '7', '8']),
  paddingRight: PropTypes.oneOf(['0', '1', '2', '3', '4', '5', '6', '7', '8']),
  paddingTop: PropTypes.oneOf(['0', '1', '2', '3', '4', '5', '6', '7', '8']),
  paddingBottom: PropTypes.oneOf(['0', '1', '2', '3', '4', '5', '6', '7', '8']),
  margin: PropTypes.oneOf(['0', '1', '2', '3', '4', '5', '6', '7', '8']),
  marginLeft: PropTypes.oneOf(['0', '1', '2', '3', '4', '5', '6', '7', '8']),
  marginRight: PropTypes.oneOf(['0', '1', '2', '3', '4', '5', '6', '7', '8']),
  marginTop: PropTypes.oneOf(['0', '1', '2', '3', '4', '5', '6', '7', '8']),
  marginBottom: PropTypes.oneOf(['0', '1', '2', '3', '4', '5', '6', '7', '8']),
  children: PropTypes.node.isRequired,
  smHeight: PropTypes.string,
  mdHeight: PropTypes.string,
  lgHeight: PropTypes.string,
  xlHeight: PropTypes.string,
  smWidth: PropTypes.string,
  mdWidth: PropTypes.string,
  lgWidth: PropTypes.string,
  xlWidth: PropTypes.string
}

export default Flex
