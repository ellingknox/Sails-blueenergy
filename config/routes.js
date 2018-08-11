module.exports.routes = {

  // HTML Views
  '/': { view: 'homepage' },
  'get /login': { view: 'user/login' },
  'get /signup': { view: 'user/signup' },
  '/settings': 'SettingsController.index',
  '/welcome': 'WelcomeController.index',
  '/history': 'HistoryController.index',
  '/address': 'AddressController.index',
  '/send': 'SendController.index',
  
  //settings
  'post /saveinfor': 'SettingsController.saveinfor',
  'post /savepassword': 'SettingsController.savepassword',
  // Endpoints
  'post /login': 'UserController.login',
  'post /signup': 'UserController.signup',
  '/logout': 'UserController.logout',
  'post /api/login': 'ApiController.login',
  'post /api/signup': 'ApiController.signup',
};
