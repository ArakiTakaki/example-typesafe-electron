import * as React from 'react';
import styled from '@emotion/styled';

export interface AccordionProps {
  isOpen: boolean;
  duration?: number;
  delay?: number;
}

const AccordionWrap = styled.div({
  transitionProperty: 'max-height, opacity',
});

export const Accordion: React.SFC<AccordionProps> = ({
  isOpen,
  delay,
  duration,
  children,
}) => {
  const wrapRef = React.useRef<HTMLDivElement>(null)

  const handleTransitionEnd = React.useCallback(() => {
    if (wrapRef.current == null) return;
    if (isOpen) {
      wrapRef.current.style.maxHeight = '';
      wrapRef.current.style.overflow = '';
    }
    wrapRef.current.style.willChange = '';
  }, [isOpen]);

  React.useEffect(() => {
    if (wrapRef.current == null) return;
    wrapRef.current.style.transitionDuration = `${(duration || 0)}ms`;
    wrapRef.current.style.transitionDelay = `${(delay || 0)}ms`;
    wrapRef.current.style.maxHeight = isOpen ? '' : '0px';
    wrapRef.current.style.overflow = isOpen ? '' : 'hidden';
  }, []);

  React.useEffect(() => {
    if (wrapRef.current == null) return;
    const height = wrapRef.current.scrollHeight
    wrapRef.current.style.willChange = 'opacity, max-height';
    if (!isOpen) {
      wrapRef.current.style.overflow = 'hidden';
      wrapRef.current.style.maxHeight = `${height}px`;
    }
    requestAnimationFrame(() => {
      if (wrapRef.current == null) return;
      if (isOpen) {
        wrapRef.current.style.maxHeight = `${height}px`;
        wrapRef.current.style.opacity = '1';
      } else {
        wrapRef.current.style.maxHeight = `${0}px`;
        wrapRef.current.style.opacity = '0';
      }
    });
  }, [isOpen]);

  return (
    <AccordionWrap ref={wrapRef} onTransitionEnd={handleTransitionEnd}>
      {children}
    </AccordionWrap>
  )
}