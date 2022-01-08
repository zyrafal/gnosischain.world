import { SvgIcon } from '@material-ui/core';
import logo from './LOGOB2.svg'

// const Logo = ({
//   style,
// }) => {
//   return (
//     <SvgIcon viewBox="0 0 86 18" version="1.1" style={Object.assign({}, { height: 18, width: 86 }, style)}>
//       <g id="画板" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
//         <rect fill="#FFFFFF" x="0" y="0" width="220" height="34"></rect>
//         <text id="XDAI.world" font-family="Nurom-Bold, Nurom" font-size="40" font-weight="bold" letter-spacing="1.33333333" fill="#4AA8A7">
//           <tspan x="38" y="31">XDAI</tspan>
//           <tspan x="136.613333" y="31" font-size="28" letter-spacing="0.933333333">.world</tspan>
//         </text>
//       </g>
//     </SvgIcon>
//   )
// }
const Logo = () => {
  return <img src={logo} width='240' />
}

export default Logo;
