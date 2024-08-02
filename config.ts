import publicKey from './public.pem?raw';

export const window = {
    width: 900,
    height: 550,
    frame: false,
    resizable: false,
    maximizable: false,
    fullscreenable: false,
    title: 'Eternal Launcher',
};

export const api = {
    ws: 'ws://91.107.120.103:1370/ws',
    web: 'http://91.107.120.103:1370',
    publicKey,
};

export const appPath = '.eternal-launcher';

export const discordRPC = {
    appId: '1268925763550187574',
    default: {
        firstLineText: 'Играю на проекте Eternal',
        secondLineText: 'Присоединяйся к нам!',
        buttons: [
            {
                label: 'Discord',
                url: 'https://discord.gg/3ZjhZDbt',
            },
        ],
        largeImageKey: 'icon',
        smallImageKey: '',
        largeImageText: 'Eternal Launcher',
        smallImageText: '',
    },
    profile: {
        firstLineText: 'Выбираю профиль игры',
        secondLineText: 'Загружаю {server}',
        buttons: [
            {
                label: 'Discord',
                url: 'https://discord.gg/3ZjhZDbt',
            },
        ],
        largeImageKey: 'icon',
        smallImageKey: '',
        largeImageText: 'Eternal Launcher',
        smallImageText: '',
    },
    game: {
        firstLineText: 'Играю на сервере',
        secondLineText: 'Играю под ником {nickname}',
        buttons: [
            {
                label: 'Discord',
                url: 'https://discord.gg/3ZjhZDbt',
            },
        ],
        largeImageKey: 'icon',
        smallImageKey: '',
        largeImageText: 'Eternal Launcher',
        smallImageText: '',
    }
};
