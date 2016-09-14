(function (app) {
    'use strict';

    app.registerModule('home');
    app.registerModule('home.login');
    app.registerModule('home.logout');
    app.registerModule('home.routes', ['ui.router']);
}(ApplicationConfiguration));
