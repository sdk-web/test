const express = require('express');
const http = require('http');
const socketIo = require('socket.io');
const cors = require('cors');
const path = require('path');

const app = express();
const server = http.createServer(app);
const io = socketIo(server, {
    cors: {
        origin: "*",
        methods: ["GET", "POST"]
    }
});

// 미들웨어 설정
app.use(cors());
app.use(express.json());
app.use(express.static(path.join(__dirname, '.')));

// 연결된 사용자들을 저장할 객체
const connectedUsers = new Map();

// Socket.IO 이벤트 핸들러
io.on('connection', (socket) => {
    console.log(`새로운 사용자가 연결되었습니다: ${socket.id}`);

    // 사용자 입장 처리
    socket.on('join', (userData) => {
        const { username, avatar } = userData;
        connectedUsers.set(socket.id, { username, avatar, id: socket.id });
        
        // 입장 메시지 브로드캐스트
        socket.broadcast.emit('userJoined', {
            username,
            avatar,
            message: `${username}님이 채팅방에 입장했습니다.`,
            timestamp: new Date().toLocaleTimeString('ko-KR')
        });

        // 현재 접속자 목록 전송
        const users = Array.from(connectedUsers.values());
        io.emit('userList', users);
        
        console.log(`${username}님이 입장했습니다. (현재 접속자: ${users.length}명)`);
    });

    // 메시지 전송 처리
    socket.on('sendMessage', (messageData) => {
        const user = connectedUsers.get(socket.id);
        if (user) {
            const message = {
                id: socket.id,
                username: user.username,
                avatar: user.avatar,
                message: messageData.message,
                timestamp: new Date().toLocaleTimeString('ko-KR'),
                type: 'message'
            };
            
            io.emit('newMessage', message);
            console.log(`${user.username}: ${messageData.message}`);
        }
    });

    // 타이핑 상태 처리
    socket.on('typing', (isTyping) => {
        const user = connectedUsers.get(socket.id);
        if (user) {
            socket.broadcast.emit('userTyping', {
                username: user.username,
                isTyping
            });
        }
    });

    // 연결 해제 처리
    socket.on('disconnect', () => {
        const user = connectedUsers.get(socket.id);
        if (user) {
            connectedUsers.delete(socket.id);
            
            // 퇴장 메시지 브로드캐스트
            socket.broadcast.emit('userLeft', {
                username: user.username,
                message: `${user.username}님이 채팅방을 나갔습니다.`,
                timestamp: new Date().toLocaleTimeString('ko-KR')
            });

            // 업데이트된 접속자 목록 전송
            const users = Array.from(connectedUsers.values());
            io.emit('userList', users);
            
            console.log(`${user.username}님이 퇴장했습니다. (현재 접속자: ${users.length}명)`);
        }
    });
});

// 기본 라우트
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'chat.html'));
});

// 서버 상태 확인용 API
app.get('/api/status', (req, res) => {
    res.json({
        status: 'running',
        connectedUsers: connectedUsers.size,
        timestamp: new Date().toISOString()
    });
});

const PORT = process.env.PORT || 3000;
server.listen(PORT, () => {
    console.log(`🚀 채팅 서버가 포트 ${PORT}에서 실행 중입니다!`);
    console.log(`📱 브라우저에서 http://localhost:${PORT} 로 접속하세요.`);
}); 