// Safetest bootstraps the application by importing the main file of the application.
'use client'

import { Bootstrap as Wrapper } from 'safetest/react'
import { imports } from './imports'

export const SafetestWrapper = (props: React.PropsWithChildren) => <Wrapper imports={imports}>{props.children}</Wrapper>
