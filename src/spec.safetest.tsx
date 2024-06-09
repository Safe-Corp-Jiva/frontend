import { describe, it, expect } from 'safetest/vitest'
import { render } from 'safetest/react'
import { MainPageFileOverride } from '@/app/Overrides'

describe('login', () => {
  it('works', async () => {
    const { page } = await render((app) => (
      <MainPageFileOverride.Override with={(old) => old?.split('').reverse().join('')} children={app} />
    ))
    // Insert email and password to login if not already logged in
    await expect(page.locator('text=Email')).toBeVisible()
    // await page.fill('input[name="email"]', 'john@doe.com')
    // await page.fill('input[name="password"]', 'johndoe#')
    // await page.click('button[type="submit"]')

    expect(await page.screenshot()).toMatchImageSnapshot()
  })
})
