import { env } from "../../../../load-env";
import { URLBuilder } from "../../../utils/URLBuilder";
import {basePage} from "../../base/basePage";
import {Locator, Page} from "@playwright/test";

export class homePage extends basePage {
    private readonly contractCardListContainer: Locator;
    private readonly filterContainer: Locator;

    /**
     * Constructor of the class.
     */
    constructor(page: Page) {
        super(page);
        this.contractCardListContainer = page.locator('');

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

    /**
     * Retrieves the container of the contract card list.
     * @returns {Promise<Locator>} - The container of the contract card list.
     */
    async getContractCardListContainer() {
        this.logger.info('Retrieves the container of the contract card list');
        return this.contractCardListContainer;
    }

    
}