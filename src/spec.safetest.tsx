import { describe, it, expect } from 'safetest/vitest'
import { render } from 'safetest/react'
import { MainPageFileOverride } from '@/app/Overrides'

import Login from '@/app/page'
import LoginModal from './components/login/loginModal/index'
import Dashboard from '@/app/(main)/@supervisor/dashboard/page'
import PastCallsCard from './components/dash/pastCallsCard'
import OnGoingCallsCard from './components/dash/onGoingCallsCard'
import TrendingCard from './components/dash/trendingCard'
import MetricsCard from './components/dash/metricsCard/index'
import Profile from '@/app/(main)/@supervisor/profile/page'
import ProfileCard from './components/profile'
import DocumentViewer from './components/docs/viewer/index'
import BottomNav from './components/docs/bottomnav/index'

// LOGIN TESTS
  describe('logo image', () => {
    it('renders', async () => {
      const { page } = await render((page) => (
        <MainPageFileOverride.Override 
        with={(old) => old?.split('').reverse().join('')} 
        children={page} 
        />
      ));
      await expect(
        page.getByAltText('logo')).toBeVisible();
    });
  });

// SUPERVISOR DASHBOARD
describe("supervisor dashboard", () => {
  it("renders", async () => {
    const { page } = await render(<Dashboard />);
    expect (await page.screenshot()).toMatchImageSnapshot();
  });
});

describe("past calls card", () => {
  it("renders", async () => {
    const { page } = await render(<PastCallsCard maximize={() => {}} minimize={() => {}} isMaximized={false} />);

    const pastCallsText = page.locator('text="Past Calls"');
    await expect(pastCallsText).toBeVisible();

    expect (await page.screenshot()).toMatchImageSnapshot();
  });
});

describe("ongoing calls card", () => {
  it("renders", async () => {
    const { page } = await render(<OnGoingCallsCard maximize={() => {}} minimize={() => {}} isMaximized={false} />);

    const ongoingCallsText = page.locator('text="Ongoing Calls"');
    await expect(ongoingCallsText).toBeVisible();

    // const screenshot = await page.screenshot();
    expect (await page.screenshot()).toMatchImageSnapshot();
  });
});

describe('trending topics card', () => {
  it ('renders', async () => {
    const { page } = await render(<TrendingCard maximize={() => {}} minimize={() => {}} isMaximized={false} />);
    const trendingText = page.locator('text="Most Requested Topics"');
    await expect(trendingText).toBeVisible();
    expect (await page.screenshot()).toMatchImageSnapshot();
  });
});

describe('metrics card', () => {
  it('renders', async () => {
    const { page } = await render(<MetricsCard maximize={() => {}} minimize={() => {}} isMaximized={false} />);
    const metricsText = page.locator('text="Data"');
    await expect(metricsText).toBeVisible();
    expect (await page.screenshot()).toMatchImageSnapshot();
  });
});

// USER PROFILE
describe('user icon', () => {
  it('renders', async () => {
    const { page } = await render(<Profile/>);
    await expect(page.getByAltText('user')).toBeVisible();
  });
});

describe('profile card', () => {
  it('renders', async () => {
    const { page } = await render(<ProfileCard username={''} userId={''} email={''} handleSignOut={function (event: any): Promise<void> {
      throw new Error('Function not implemented.')
    } } />);
    await expect(page.locator('text="Profile"')).toBeVisible();
    expect (await page.screenshot()).toMatchImageSnapshot();
  });
});

describe('sign out button', () => {
  it('renders', async () => {
    const { page } = await render(<ProfileCard username={''} userId={''} email={''} handleSignOut={function (event: any): Promise<void> {
      throw new Error('Function not implemented.')
    } } />);
    await expect(page.locator('text="Sign Out"')).toBeVisible();
  });
});

// DOCUMENT VIEWER / TRANSCRIPTS
describe ('document viewer', () => {
  it('renders', async () => {
    const { page } = await render(<DocumentViewer documents={[]} />);
    await expect(page.locator('text="Documents"')).toBeVisible();
    expect (await page.screenshot()).toMatchImageSnapshot();
  });
});

describe('document viewer', () => {
  it('renders', async () => {
    const { page } = await render(<DocumentViewer documents={[]} />);
    await expect(page.locator('text="Select a document to view"')).toBeVisible();
  });
});

describe('bottom nav', () => {
  it('renders', async () => {
    const { page } = await render(<BottomNav />);
    await expect(page.locator('text="Documents"')).toBeVisible();
    await expect(page.locator('text="Transcripts"')).toBeVisible();
  });
});

// QUEUE

// ALERTS

// CHAT
