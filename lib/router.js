

Router.configure({
    layoutTemplate: 'layout',

});
Router.route('/', {name : 'home'})

Router.route('/tuto', {name : 'tuto'});
Router.route('/exo', {name : 'exo'});
Router.route('/DL', {name : 'DL'});
Router.route('/AP', {name : 'AP'});
Router.route('/VPN', {name : 'VPN'});
Router.route('/CTC', {name : 'contact'});
Router.route('/FLC', {name : 'FLC'});
;

