/** @jsx jsx */
import { ReactNode } from 'react';
import { jsx } from '@emotion/core'
import { LIST_COMPONENT_ERROR } from '../constants/errors'

export const List = (props: {
  verticalMargin: number;
  horizontalMargin: number;
  children: ReactNode[];
}) => {
  if (props.verticalMargin < 0) throw new Error(LIST_COMPONENT_ERROR);
  if (props.horizontalMargin < 0) throw new Error(LIST_COMPONENT_ERROR);
  return (
    <div>
      <div css={{
        display: 'inline-flex',
        flexWrap: 'wrap',
        maxWidth: '100vw',
        margin: `${-props.verticalMargin}px ${-props.horizontalMargin}px`
      }}>
        {
          props.children
            .map((component, index) => (
              <div
                key={index}
                css={{
                  boxSizing: 'border-box',
                  padding: `${props.verticalMargin}px ${props.horizontalMargin}px`
                }}
              >
                {component}
              </div>
            ))
        }
      </div>
    </div>
  )
}
