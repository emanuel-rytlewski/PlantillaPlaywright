import {Locator, Page} from '@playwright/test';
import { basePage } from '../../base/basePage';
import { URLBuilder } from '../../../utils/URLBuilder';
import { env } from "../../../../load-env";

/**
 * Class for login page.
 */
export class loginPage extends basePage {

    /**
     * Constructor of the login page
     */
    constructor(page: Page) {
        super(page);
        
    }

    /**
     * Open navigator
     * Navigates to the login page
     * @returns {Promise<void>}
     */
    async navigateToLoginPage(): Promise<void> {
        const urlBuilder = new URLBuilder(env.APP_ENV, env.APP_LANG);
        const url = urlBuilder.buildURL('');
        await this.page.goto(url);
        await this.page.setViewportSize(this.viewportSize);
    }

}