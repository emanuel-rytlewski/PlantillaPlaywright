import {BaseComponent} from "../../base/baseComponent";
import {Locator, Page} from "@playwright/test";

/**
 * Class for header
 */
export class header extends BaseComponent{
    private readonly homeButton: Locator;

    /**
     * Constructor of the class.
     * @param page
     */
    constructor(page: Page){
        super(page);
        this.homeButton = this.page.locator('');
    }

    /**
     * Goes to the home page.
     */
    async goToHomePage(): Promise<void> {
        this.logger.info('Go to Home Page')
        await this.homeButton.click();
    }

}