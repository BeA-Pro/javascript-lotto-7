import Validate from './Validate.js';
import Lotto from './Lotto.js';
import { Random } from '@woowacourse/mission-utils';

class LottoMachine {
  #lottoCount;
  #lottoDigitCount;
  #boughtLottos;
  #bonusNum;
  #winningLotto;
  constructor(money) {
    Validate.validateMoney(money);
    this.#lottoCount = parseInt(money / 1000, 10);
    this.#lottoDigitCount = 6;
    this.#boughtLottos = this.#buyLottos(this.#lottoCount, this.#lottoDigitCount);
    this.#bonusNum = null;
    this.winningLotto = null;
  }

  #buyLottos() {
    return Array.from({ length: this.#lottoCount }, () => new Lotto(this.#makeRandomNumbers()));
  }

  #makeRandomNumbers() {
    return Random.pickUniqueNumbersInRange(1, 45, this.#lottoDigitCount);
  }

  getBoughtLottosInfo() {
    let result = `${this.#lottoCount}개를 구매했습니다\n`;
    result += this.#boughtLottos
      .map((boughtLotto) => boughtLotto.getNumbersWithSquareBrackets())
      .join('\n');
    return result;
  }

  setBonusNum(num) {
    this.#bonusNum = num;
  }

  setWinningLotto(strWinningNumbers) {
    const winningNumbers = strWinningNumbers.split(',').map((number) => Number(number));
    this.winningLotto = new Lotto(winningNumbers);
  }

  getLottoCount() {
    return this.#lottoCount;
  }
}

export default LottoMachine;
