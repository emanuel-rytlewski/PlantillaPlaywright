import { test, expect } from '@playwright/test';
import {loginPage} from "../pages/canned/pages/loginPage";

test.describe('Demo Challenge Tests', () => {
    test('Login', async ({ page }, testInfo) => {
        //Arrange
        const login = new loginPage(page);
    
        //Act
        await login.navigateToLoginPage()
        
    });
});
