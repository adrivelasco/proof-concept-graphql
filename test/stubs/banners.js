module.exports = {
  getBanners() {
    return {
      'data': [
        {
          'id': 'aaaaaaaaaaaa',
          'type': 'mobile',
          'image': 'https://s3.amazonaws.com/cupona-stage/public/content/banners/5a78acee4316b-original.jpg'
        },
        {
          'id': 'bbbbbbbbbbbb',
          'type': 'web',
          'image': 'https://s3.amazonaws.com/cupona-stage/public/content/banners/5aeb077d91350-original.PNG'
        },
        {
          'id': 'cccccccccccc',
          'type': 'mobile',
          'image': 'https://s3.amazonaws.com/cupona-stage/public/content/banners/5aecc4932ed12-original.png'
        },
        {
          'id': 'dddddddddddd',
          'type': 'mobile',
          'image': 'https://s3.amazonaws.com/cupona-stage/public/content/banners/5afdbdbabb445-original.png'
        }
      ],
      'links': {
        'first': 'http://api.stage.cupona.com/sites/aaaaaaaaaaaa/banners?page=1',
        'last': 'http://api.stage.cupona.com/sites/aaaaaaaaaaaa/banners?page=1',
        'prev': null,
        'next': null
      },
      'meta': {
        'current_page': 1,
        'from': 1,
        'last_page': 1,
        'path': 'http://api.stage.cupona.com/sites/aaaaaaaaaaaa/banners',
        'per_page': 15,
        'to': 4,
        'total': 4
      }
    };
  }
};
