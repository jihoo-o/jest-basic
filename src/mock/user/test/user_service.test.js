const UserService = require('../user_service.js');
const UserClient = require('../user_client.js');
jest.mock('../user_client');

describe('UserService', () => {
    const login = jest.fn(async () => true);

    UserClient.mockImplementation(() => {
        return {
            login,
        };
    });

    let userService;

    beforeEach(() => {
        userService = new UserService(new UserClient());
    });

    it('calls login() on UserClient when tries to login', async () => {
        await userService.login('id', 'password');
        // 내부적인 구현 사항 테스트 제거
        // -> 변수 이름이 변경되면 테스트 코드까지 수정되어야 함
        // expect(userService.isLoggedIn).toBeTruthy();
        expect(login.mock.calls.length).toBe(1);
    });

    it('should not call login() on UserClient again if already logged in', async () => {
        await userService.login('id', 'password');
        await userService.login('id', 'password');
        expect(login.mock.calls.length).toBe(1);
    });
});
