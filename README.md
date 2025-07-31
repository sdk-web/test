# 💬 실시간 채팅 애플리케이션

Node.js, Express, Socket.IO를 사용한 실시간 채팅 애플리케이션입니다.

## ✨ 주요 기능

- 🔄 **실시간 메시지 전송**: Socket.IO를 사용한 양방향 실시간 통신
- 👥 **접속자 목록**: 현재 채팅방에 접속한 사용자들을 실시간으로 확인
- 🎭 **아바타 시스템**: 사용자가 선택할 수 있는 다양한 이모지 아바타
- ⌨️ **타이핑 표시**: 다른 사용자가 메시지를 입력 중일 때 실시간 표시
- 📱 **반응형 디자인**: 모바일과 데스크톱에서 모두 사용 가능
- 🎨 **모던 UI**: Tailwind CSS를 사용한 깔끔하고 현대적인 인터페이스

## 🚀 설치 및 실행

### 1. 의존성 설치
```bash
npm install
```

### 2. 서버 실행
```bash
# 개발 모드 (자동 재시작)
npm run dev

# 또는 프로덕션 모드
npm start
```

### 3. 브라우저에서 접속
```
http://localhost:3000
```

## 📁 프로젝트 구조

```
├── server.js          # Express 서버 및 Socket.IO 설정
├── chat.html          # 채팅 클라이언트 인터페이스
├── index.html         # 기존 상품 쇼케이스 페이지
├── package.json       # 프로젝트 의존성 및 스크립트
└── README.md         # 프로젝트 설명서
```

## 🛠️ 기술 스택

- **백엔드**: Node.js, Express.js
- **실시간 통신**: Socket.IO
- **프론트엔드**: HTML5, CSS3, JavaScript (ES6+)
- **스타일링**: Tailwind CSS
- **폰트**: Google Fonts (Inter)

## 🎯 사용법

1. **채팅방 입장**
   - 닉네임을 입력하세요
   - 원하는 아바타를 선택하세요
   - "채팅방 입장하기" 버튼을 클릭하세요

2. **메시지 전송**
   - 하단 입력창에 메시지를 입력하세요
   - Enter 키를 누르거나 "전송" 버튼을 클릭하세요

3. **접속자 확인**
   - 우측 패널에서 현재 접속자 목록을 확인할 수 있습니다

4. **채팅방 나가기**
   - 상단 우측의 "나가기" 버튼을 클릭하세요

## 🔧 개발 환경 설정

### 필요한 도구
- Node.js (v14 이상)
- npm 또는 yarn

### 개발 서버 실행
```bash
# 의존성 설치
npm install

# 개발 모드로 실행 (nodemon 사용)
npm run dev
```

## 📝 API 엔드포인트

- `GET /` - 채팅 페이지
- `GET /api/status` - 서버 상태 확인

## 🔌 Socket.IO 이벤트

### 클라이언트 → 서버
- `join` - 채팅방 입장
- `sendMessage` - 메시지 전송
- `typing` - 타이핑 상태 전송

### 서버 → 클라이언트
- `userJoined` - 사용자 입장 알림
- `userLeft` - 사용자 퇴장 알림
- `newMessage` - 새 메시지 수신
- `userList` - 접속자 목록 업데이트
- `userTyping` - 타이핑 상태 표시

## 🎨 커스터마이징

### 색상 테마 변경
`chat.html` 파일의 Tailwind CSS 클래스를 수정하여 색상을 변경할 수 있습니다.

### 아바타 추가
`chat.html`의 아바타 선택 부분에 새로운 이모지를 추가할 수 있습니다.

## 📱 배포

### Heroku 배포
```bash
# Heroku CLI 설치 후
heroku create your-chat-app
git push heroku main
```

### Vercel 배포
```bash
# Vercel CLI 설치 후
vercel
```

## 🤝 기여하기

1. 이 저장소를 포크하세요
2. 새로운 기능 브랜치를 생성하세요 (`git checkout -b feature/amazing-feature`)
3. 변경사항을 커밋하세요 (`git commit -m 'Add amazing feature'`)
4. 브랜치에 푸시하세요 (`git push origin feature/amazing-feature`)
5. Pull Request를 생성하세요

## 📄 라이선스

MIT License - 자세한 내용은 LICENSE 파일을 참조하세요.

## 🙏 감사의 말

- Socket.IO 팀에게 실시간 통신 라이브러리를 제공해주셔서 감사합니다
- Tailwind CSS 팀에게 아름다운 CSS 프레임워크를 제공해주셔서 감사합니다

---

**즐거운 채팅 되세요! 🎉**