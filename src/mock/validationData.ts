interface ValidationStatus {
  personalData: boolean;
  legalAccords: boolean;
  address: boolean;
  conditions: boolean;
}

class ValidationAPI {
  private static status: ValidationStatus = {
    personalData: false,
    legalAccords: false,
    address: false,
    conditions: false
  };

  static async getValidationStatus(): Promise<ValidationStatus> {
    // Simulate API delay
    await new Promise(resolve => setTimeout(resolve, 500));
    return this.status;
  }

  static async updateValidationStatus(field: keyof ValidationStatus, value: boolean): Promise<ValidationStatus> {
    // Simulate API delay
    await new Promise(resolve => setTimeout(resolve, 500));
    this.status[field] = value;
    return this.status;
  }

  static async isAllValidated(): Promise<boolean> {
    const status = await this.getValidationStatus();
    return Object.values(status).every(value => value === true);
  }
}

export { ValidationAPI, ValidationStatus }; 