export const version = 'v0.20.2';
export const downloads = [{
  platform: 'downloads.wallet.macos',
  icon: 'macos',
  builds: [{
    name: 'downloads.wallet.withElectron',
    architectures: [{
      name: '',
      download: 'https://downloads.skycoin.net/wallet/Skycoin-0.20.2.dmg',
      torrent: 'https://downloads.skycoin.net/wallet/skycoin-0.20.2.torrent',
      filetype: '.dmg',
      filesize: '51mb',
    }],
  }, {
    name: 'downloads.wallet.withoutElectron',
    architectures: [{
      name: '',
      download: 'https://downloads.skycoin.net/wallet/skycoin-0.20.2-bin-osx-darwin-x64.zip',
      torrent: 'https://downloads.skycoin.net/wallet/skycoin-0.20.2.torrent',
      filetype: '.zip',
      filesize: '14mb',
    }],
  }],
}, {
  platform: 'downloads.wallet.windows',
  icon: 'windows',
  builds: [{
    name: 'downloads.wallet.withElectron',
    architectures: [{
      name: '64bit',
      download: 'https://downloads.skycoin.net/wallet/skycoin-0.20.2-gui-win-setup.exe',
      torrent: 'https://downloads.skycoin.net/wallet/skycoin-0.20.2.torrent',
      filetype: '.exe',
      filesize: '68mb',
    }],
  }, {
    name: 'downloads.wallet.withoutElectron',
    architectures: [{
      name: '32bit',
      download: 'https://downloads.skycoin.net/wallet/skycoin-0.20.2-bin-win-x86.zip',
      torrent: 'https://downloads.skycoin.net/wallet/skycoin-0.20.2.torrent',
      filetype: '.zip',
      filesize: '14mb',
    }, {
      name: '64bit',
      download: 'https://downloads.skycoin.net/wallet/skycoin-0.20.2-bin-win-x64.zip',
      torrent: 'https://downloads.skycoin.net/wallet/skycoin-0.20.2.torrent',
      filetype: '.zip',
      filesize: '14mb',
    }],
  }],
}, {
  platform: 'downloads.wallet.linux',
  icon: 'linux',
  builds: [{
    name: 'downloads.wallet.withElectron',
    architectures: [{
      name: '64bit',
      download: 'https://downloads.skycoin.net/wallet/skycoin-0.20.2-gui-linux-x64.AppImage',
      torrent: 'https://downloads.skycoin.net/wallet/skycoin-0.20.2.torrent',
      filetype: '.AppImage',
      filesize: '56mb',
    }],
  }, {
    name: 'downloads.wallet.withoutElectron',
    architectures: [{
      name: 'arm',
      download: 'https://downloads.skycoin.net/wallet/skycoin-0.20.2-bin-linux-arm.tar.gz',
      torrent: 'https://downloads.skycoin.net/wallet/skycoin-0.20.2.torrent',
      filetype: '.tar.gz',
      filesize: '14mb',
    }, {
      name: '64bit',
      download: 'https://downloads.skycoin.net/wallet/skycoin-0.20.2-bin-linux-x64.tar.gz',
      torrent: 'https://downloads.skycoin.net/wallet/skycoin-0.20.2.torrent',
      filetype: '.tar.gz',
      filesize: '14mb',
    }],
  }],
}];
