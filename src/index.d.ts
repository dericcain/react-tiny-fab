// Type definitions for react-tiny-fab 2.0
// Project: https://github.com/dericgw/react-tiny-fab, https://dericgw.github.io/react-tiny-fab/
// Definitions by:  Ji-Hoon Lee <https://github.com/NoMoreViolence>
// TypeScript Version: 3.4.5

import { ReactElement, DOMAttributes, CSSProperties, HTMLAttributes } from 'react';

interface ActionProps {
  text?: string;
  children?: ReactElement;
}
interface FabProps {
  mainButtonStyles?: CSSProperties;
  position?: { bottom?: number; top?: number; right?: number; left?: number };
  icon: ReactElement;
  event?: 'hover' | 'click';
  children?: ReactElement[] | ReactElement;
  alwaysShowTitle?: boolean;
  text?: string;
  onClick?: (e: any) => any;
}

type Action = (props: ActionProps & DOMAttributes<HTMLElement> & HTMLAttributes<HTMLElement>) => ReactElement;
type Fab = (props: FabProps) => ReactElement;

declare const Action: Action;
declare const Fab: Fab;
