# javascript-lotto-precourse

## 기본 구현 목록

### 기능 구현

- [x] 구입 금액을 입력받기
- [x] 당첨 번호 입력받기
- [x] 보너스 번호를 입력받기
- [x] 구매 내역 오름차순으로 출력
- [x] 당첨 통계 출력

### 예외 처리

- [x] 로또 구입 번호 예외 처리
  - [x] 로또 구입 금액 양수가 아닌 경우
  - [x] 로또 구입 금액이 1,000원으로 나누어 떨어지지 않는 경우
- [x] 로또 번호 예외 처리
  - [x] 로또에 중복 되는 경우가 있는 경우
  - [x] 로또 번호가 주어진 범위 내에 없는 경우
  - [x] 로또 변호가 숫자가 아닌 경우
  - [x] 로또 번호가 6개가 아닌 경우
- [x] 보너스 번호 예외 처리
  - [x] 보너스 번호가 양수가 아닌 경우
  - [x] 보너스 번호가 주어진 범위 내에 없는 경우
  - [x] 보너스 번호가 당첨 로또 번호와 중복 되는 경우

### 그 외 요구 사항

- [ ] AngularJS Git Commit Message Conventions에 맞춰 커밋 메시지 작성
- [ ] JavaScript Style Guide 컨벤션을 지키며 코드 작성
- [ ] indent(인덴트, 들여쓰기) depth를 3이 넘지 않도록 구현하기
- [ ] 3항 연산자를 쓰지 않기
- [ ] 코드를 깔끔하게 리팩토링
- [ ] 함수(또는 메서드)의 길이가 15라인을 넘어가지 않도록 구현하기
- [ ] else를 지양
- [ ] 함수(또는 메서드)가 한 가지 일만 하도록 최대한 작게 만들기

## 테스트 케이스 구현

- [x] LottoAnalyzerTest 단위 테스트 구현
- [x] LottoShopTest 단위 테스트 구현
- [x] LottoTest 단위 테스트 구현
