# 배경
- TypeScript와 (개인적으로 익숙한) Java는 코드 스타일이 다르다.
    - 들여쓰기: TS 2칸 / Java 4칸
    - 세미콜론: TS 선택 / Java 강제

## 고민점
- 세미콜론을 넣고 들여쓰기 2칸으로 선택하되, 이후 변경이 될 수 있음을 고려하여 스타일 자동 교정 모듈을 설치!

## ESLint와 Prettier 설정 방법
- 모듈 설치
```bash
npm install --save-dev \
  prettier \
  eslint-config-prettier \
  eslint-plugin-prettier \
  @typescript-eslint/eslint-plugin \
  @typescript-eslint/parser
```
- .eslintrc.json
```json
{
  "extends": [
    "next/core-web-vitals",
    "plugin:@typescript-eslint/recommended",
    "plugin:prettier/recommended"
  ],
  "plugins": ["@typescript-eslint", "prettier"],
  "rules": {
    "prettier/prettier": [
      "error",
      {
        "semi": true,
        "singleQuote": true,
        "tabWidth": 2,
        "trailingComma": "es5"
      }
    ],
    "semi": ["error", "always"],
    "quotes": ["error", "single"],
    "@typescript-eslint/no-unused-vars": ["warn"]
  }
}
```
- .prettierignore
```
# Next.js
node_modules
.next
build
dist
# IDE
.vscode
docs
README.md
```
- package.json
```json
"scripts": {
  "format": "prettier --write .",
}
```

