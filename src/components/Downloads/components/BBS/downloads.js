export const version = 'v4.2.0';
export const downloads = [{
  platform: 'downloads.wallet.macos',
  icon: 'macos',
  builds: [{
    name: 'downloads.wallet.withElectron',
    architectures: [{
      name: '',
      download: 'https://github.com/skycoin/bbs/releases/download/v4.2/skycoin_bbs_4.2_osx_amd64.zip',
      filetype: '.zip',
      filesize: '5.6mb',
    }],
  }],
}, {
  platform: 'downloads.wallet.windows',
  icon: 'windows',
  builds: [{
    name: 'downloads.wallet.withElectron',
    architectures: [{
      name: '64bit',
      download: 'https://github.com/skycoin/bbs/releases/download/v4.2/skycoin_bbs_4.2_windows_amd64.zip',
      filetype: '.zip',
      filesize: '5.6mb',
    }],
  }],
}, {
  platform: 'downloads.wallet.linux',
  icon: 'linux',
  builds: [{
    name: 'downloads.wallet.withElectron',
    architectures: [{
      name: '64bit',
      download: 'https://github.com/skycoin/bbs/releases/download/v4.2/skycoin_bbs_4.2_linux_amd64.zip',
      filetype: '.zip',
      filesize: '5.7mb',
    }],
  }],
}];
