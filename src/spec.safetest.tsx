import { describe, it, expect } from 'safetest/vitest'
import { render } from 'safetest/react'
import { MainPageFileOverride } from '@/app/Overrides'

describe('app test', () => {
  it('works', async () => {
    const { page } = await render((app) => (
      <MainPageFileOverride.Override with={(old) => old?.split('').reverse().join('')} children={app} />
    ))
    await expect(page.locator('text=Welcome Back!')).toBeVisible()
    expect(await page.screenshot()).toMatchImageSnapshot()
  })
})
