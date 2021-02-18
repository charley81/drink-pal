/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react'

export const About = () => {
  return (
    <section
      css={css`
        margin: 10vh auto 0;
        text-align: left;
        max-width: var(--maxWidth);
        padding: 1rem;

        @media (min-width: 600px) {
          text-align: center;
        }

        h2 {
          margin-bottom: 1rem;
        }
      `}
    >
      <h2>about us</h2>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat dolor
        minus ipsam distinctio quis? Minus rerum voluptatem architecto odit,
        nesciunt cum sint deserunt itaque. Ad inventore ipsa quis laboriosam
        accusamus atque, possimus delectus sequi cum enim, earum autem
        dignissimos optio saepe laborum voluptas minima dolorum. In porro
        consequatur illum quos consequuntur deleniti id iure nam.
      </p>
    </section>
  )
}
