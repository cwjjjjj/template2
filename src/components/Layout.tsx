import { getEnv } from '@ruguoapp/jkfe-env'
import clsx from 'clsx'
import { HTMLAttributes } from 'react'
import { Outlet } from 'react-router-dom'
import { css } from '@emotion/react'
import { IN_JIKE_OR_DEV_MODE } from '../constants/env'

const env = getEnv()

export interface LayoutProps extends HTMLAttributes<HTMLDivElement> {}

export default function Layout({ children, className, ...props }: LayoutProps) {
  return (
    <div
      className={clsx('w-screen min-h-screen', className)}
      css={css`
        --status-bar-height: ${env.os.isiOS
          ? 'env(safe-area-inset-top, 20px)'
          : `${env.device.statusBarHeight ?? 20}px`};
        --navbar-height: ${IN_JIKE_OR_DEV_MODE ? '51px' : '20px'};
        padding: calc(var(--status-bar-height) + var(--navbar-height))
          env(safe-area-inset-right) 0 env(safe-area-inset-left);
      `}
      {...props}
    >
      <Outlet />
    </div>
  )
}
