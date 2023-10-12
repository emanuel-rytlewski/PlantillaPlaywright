import { test, expect } from '@playwright/test';
import {homePage} from "../pages/canned/pages/homePage";

test.describe('Demo Challenge Tests', () => {
    test('Login', async ({ page }, testInfo) => {
        //Arrange
        const home = new homePage(page);
    
        //Act
        await home.navigateToLoginPage()
    });
});
