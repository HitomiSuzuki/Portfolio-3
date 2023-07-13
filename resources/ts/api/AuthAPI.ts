import axios from 'axios';

type User = {
    id: number,
    name: string,
    email: string
}

// ユーザー取得処理
const getUser = async () => {
    const {data} = await axios.get<User[]>('api/user');
    return data
}

// ログイン処理
const login = async({email, password}: {email: string, password: string}) => {
    const {data} = await axios.post<User>(
        `/api/login`, {email, password}
    )
    return data
}

// ログアウト処理
const logout = async() => {
    const {data} = await axios.post<User>( `/api/logout`)
    return data
}

export {
    getUser,
    login,
    logout
}

