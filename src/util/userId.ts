import Cookies from 'js-cookie';
import { v4 as uuid } from 'uuid';

const USER_ID_COOKIE = 'user_id';

export function getUserId(): string {
    let userId = Cookies.get(USER_ID_COOKIE);

    if (!userId) {
        userId = uuid();
        Cookies.set(USER_ID_COOKIE, userId, { expires: 365 });
    }

    return userId;
}