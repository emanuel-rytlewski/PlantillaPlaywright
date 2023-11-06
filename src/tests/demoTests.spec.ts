import { test, expect } from '@playwright/test';
import {homePage} from "../autogestion/pages/homePage";

test.describe('Demo Challenge Tests', () => {
    test('Login', async ({ page }, testInfo) => {
        //Arrange
        const home = new homePage(page);
    
        //Act
        await home.navigateToLoginPage()
    });
});
