import { Page, Locator, expect } from '@playwright/test';

export class ChatPage {
    readonly page:Page;
    readonly title: Locator;
    readonly request: Locator;
    readonly response:Locator;
    readonly loading: Locator;

    constructor(page: Page) {
      this.page = page
      this.title = page.getByText('Safely share your PHI data.');
      this.request = page.getByPlaceholder('Send message')
      this.response = page.getByText('¡Hola! Parece que este es un mensaje de prueba. ¿En qué puedo ayudarte hoy?')
      this.loading = page.locator('.sc-aXZVg') //Loading response
    }

  async assertTitleValidation() {
    await this.title.isVisible();
    await expect(this.title).toContainText('Safely share your PHI data.')
  }


  async sendMessage(message:string){
    await this.request.fill(message)
    await this.request.press('Enter')
  }

  async validateAnswerMessage(){
    await expect(this.loading.first()).toBeVisible()
    await expect(this.loading.first()).toBeHidden({ timeout: 10000 })
    await expect(this.response).toContainText('¡Hola! Parece que este es un mensaje de prueba. ¿En qué puedo ayudarte hoy?',{ timeout: 10000 })
  }

  async chatInteraction(message:string){
    await this.sendMessage(message);
    await this.validateAnswerMessage()
  }

}