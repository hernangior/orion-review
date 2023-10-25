import { Component, EventEmitter, Input, Output } from '@angular/core';
import { PasswordValidationService } from 'src/app/services/password-validation/password-validation.service';

@Component({
  selector: 'app-password-requirement',
  templateUrl: './password-requirement.component.html',
  styleUrls: ['./password-requirement.component.scss']
})
export class PasswordRequirementComponent {
  @Input() password: string = '';
  upperCase: boolean = false;
  specialChar: boolean = false;
  passwordSize: boolean = false;
  samePassword: boolean = true;
  hide = true;

  @Output() passwordValueChanged = new EventEmitter<string>();

  constructor(private passwordValidationService: PasswordValidationService) { }

  /**
   * Valida a senha inserida baseada no tamanho, letras maiúsculas e caracteres especiais
   * @param passwordValue a senha a ser validada pelo service
   */
  public validatePassword(passwordValue: string): void {

    if (passwordValue) {
      this.password = passwordValue;
      this.passwordSize = this.passwordValidationService.passwordSize(this.password);
      this.upperCase = this.passwordValidationService.upperCase(this.password);
      this.specialChar = this.passwordValidationService.specialChar(this.password);
    }
  }

  /**
   * Compara duas strings de senha para verificar se são iguais
   * @param password senha inserida pelo usuário
   * @param confirmPassword senha de confirmação inserida pelo usuário
   * @returns valor booleano indicando se as senhas são iguais
   */
  public comparePassword(password: string, confirmPassword: string): boolean {
    return this.samePassword = password === confirmPassword;
  }
}
