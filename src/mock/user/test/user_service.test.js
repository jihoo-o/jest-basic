const UserService = require('../user_service.js');
const UserClient = require('../user_client.js');
jest.mock('../user_client');

describe('UserService', () => {
    const clientLogin = jest.fn(async () => true);

    UserClient.mockImplementation(() => {
        return {
            login: clientLogin,
        };
    });

    let userService;

    beforeEach(() => {
        userService = new UserService(new UserClient());
    });

    it('First attempt', async () => {
        await userService.login('id', 'password');
        expect(userService.isLoggedIn).toBeTruthy();
        expect(clientLogin).toHaveBeenCalledTimes(1);
    });

    it('Additional attempts after the user has already logged in', async () => {
        await userService.login('id', 'password');
        await userService.login('id', 'password');
        expect(clientLogin).toHaveBeenCalledTimes(1);
    });
});
