import { Page } from '@playwright/test';

export async function takeEvidence(
    page: Page,
    tcId: string,
    tcName: string,
    status: string
) {

    const timestamp = new Date()
        .toISOString()
        .replace(/[:.]/g, '-');

    await page.screenshot({
        path: `screenshots/${tcId}_${tcName}_${status}_${timestamp}.png`,
        fullPage: true
    });

}