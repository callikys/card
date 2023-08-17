import { useMediaQuery } from 'react-responsive';

const Mobile  = ({children}) => {
    const isMobile  = useMediaQuery({minWidth: 320, maxWidth: 767 })
    return isMobile  ? children : null
  }

  export default Mobile;