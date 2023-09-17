import Page from './page'

export default class LoginPage extends Page {
  constructor(page) {
    super(page)

    // Grouping elements locators by objects
    this.input = {
      email: page.locator('#normal_login_email'),
      password: page.locator('#normal_login_password'),
    }

    this.button = {
      submit: this.buttonSubmit = page.locator('[type="submit"]')
    }

    // Grouping elements locators by name
    // this.inputEmail = page.locator('#normal_login_email')
    // this.inputPassword = page.locator('#normal_login_password')
    // this.buttonSubmit = page.locator('[type="submit"]')
  }

  async open() {
    return this.page.goto('/user/login')
  }

  async login(email, password) {
    await this.input.email.fill(email)
    await this.input.password.fill(password)
    await this.button.submit.click()
  }
}

