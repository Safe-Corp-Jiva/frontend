import { describe, it, expect } from 'safetest/vitest'
import { render } from 'safetest/react'
import { MainPageFileOverride } from '@/app/Overrides'

import Login from '@/app/page'
import LoginModal from '@/components/login/loginModal/index'
import Dashboard from '@/app/(main)/@supervisor/dashboard/page'
import PastCallsCard from './components/dash/pastCallsCard'

// LOGIN TESTS
describe('random text', () => {
  it('shows', async () => {
    const { page } = await render((Login) => (
      <MainPageFileOverride.Override 
      with={(old) => old?.split('').reverse().join('')} 
      children={Login} 
      />
    ));
    await expect(
      page.locator('text=Aquí va el logo')).toBeVisible();
  })
})

describe('logo image', () => {
  it('renders', async () => {
    const { page } = await render((ctm) => (
      <MainPageFileOverride.Override 
      with={(old) => old?.split('').reverse().join('')} 
      children={ctm} 
      />
    ));
    await expect(
      page.getByAltText('logo')).toBeVisible();
  })
})

// describe('fill login', () => {
//   it('with password', async () => {


// SUPERVISOR DASHBOARD
describe("dashboard", () => {
  it("renders", async () => {
    const { page } = await render(<Dashboard />);
    // await expect(page.locator('text=Past Calls')).toBeVisible();
    expect (await page.screenshot()).toMatchImageSnapshot();
  })
})

describe("past calls card", () => {
  it("renders", async () => {
    const { page } = await render(<PastCallsCard maximize={()=>{}} minimize={()=>{}} isMaximized={false} />);
    await expect(page.locator('text=Past Calls')).toBeVisible();
    console.log(page)
  })
})
