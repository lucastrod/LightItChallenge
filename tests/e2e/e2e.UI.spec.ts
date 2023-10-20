import { test} from '@playwright/test';
import { LoginPage } from '../../page-objects/LoginPage';
import { ChatPage } from '../../page-objects/ChatPage';
import users from '../../utils/users.json';
const env = process.env.NODE_ENV || 'qa';
const { email, password } = users[env];


let loginPage: LoginPage;
let chatPage:ChatPage;


test.beforeEach(async ({page}) =>{
  loginPage = new LoginPage(page);
  chatPage = new ChatPage(page)
  
  await loginPage.visit();
})

test('Positive Scenario for login + logout', async ({ page }) => {
  
  await loginPage.login(email,password)
  await chatPage.assertTitleValidation()
  await loginPage.logout()

});

test('Negative Scenario for login', async ({ page }) => {
  
  await loginPage.login('invalidEmail@invalid.com','invalidPassword')
  await loginPage.assertInvalidCredentials()

});

test('Login + Chat Interaction', async ({ page }) => {
  
  await loginPage.login(email,password)
  await chatPage.assertTitleValidation()
  await chatPage.chatInteraction("Este es un mensaje de prueba")  
  await loginPage.logout()

});