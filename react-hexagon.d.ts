declare module 'react-hexagon' {
    import * as React from 'react';
  
    interface HexagonProps extends React.HTMLAttributes<HTMLDivElement> {
      style?: React.CSSProperties;
      backgroundImage?: string;
      children?: React.ReactNode;
    }
  
    const Hexagon: React.FC<HexagonProps>;
  
    export default Hexagon;
  }
  