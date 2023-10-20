import { type Page, type Locator, expect } from '@playwright/test';
const URL = process.env.URL || "";;


export class LoginPage {
    readonly page:Page;
    readonly fullname: Locator;
    readonly email: Locator;
    readonly password: Locator;
    readonly signInButton: Locator;
    readonly loginButton: Locator;
    readonly logoutButton: Locator;
    readonly logoutModal: Locator;
    readonly invalidCredentialsLabel: Locator;

    
    constructor(page: Page) {
      this.page=page;
      this.invalidCredentialsLabel = page.getByText('Invalid credentials')
      this.fullname = page.getByRole('textbox',{name:'John Doe'});
      this.email = page.getByRole('textbox', { name: 'you@domain.com' });
      this.password = page.getByRole('textbox', { name: 'password'})
      
      this.signInButton = page.getByRole('button',{name:'sign in'});
      
      this.loginButton = page.getByRole('button', { name: 'Log in' })
      this.logoutButton = page.getByRole('button', { name: 'Logout' })
      this.logoutModal= page.getByRole('dialog')
    }


    async login(email: string, password: string){
      await this.loginButton.isVisible();
      await this.loginButton.click();
      await this.email.fill(email);
      await this.password.fill(password);
      await this.loginButton.click();
    }

    async visit(){
      await this.page.goto(URL)
    }

    async logout(){
      await this.logoutButton.click();
      await this.logoutModal.isVisible();
      await this.logoutButton.click();
    }

    async assertInvalidCredentials() {
      await this.invalidCredentialsLabel.isVisible();
      await expect(this.invalidCredentialsLabel).toContainText('Invalid credentials')
    }
}