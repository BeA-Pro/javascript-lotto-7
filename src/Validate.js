class Validate {
  static validateMoney(money) {
    const numberMoney = Number(money);
    if (!this.#isPositiveInteger(numberMoney) || numberMoney % 1000 !== 0) {
      throw new Error('[Error] 금액은 양의 정수이며 1000으로 나눠떨어져야 합니다.');
    }
  }

  static #isPositiveInteger(value) {
    return Number.isInteger(value) && value > 0;
  }
}

export default Validate;
