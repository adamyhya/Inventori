/**
 * The main application class. An instance of this class is created by app.js when it
 * calls Ext.application(). This is the ideal place to handle application launch and
 * initialization details.
 */
Ext.define('Inventori.Application', {
    extend: 'Ext.app.Application',

    name: 'Inventori',

    quickTips: false,
    platformConfig: {
        desktop: {
            quickTips: true
        }
    },

    stores: [
       'Inventori.store.Lisbarang',
       'Inventori.store.Lisbarang1',
        'Inventori.store.Lisjurusan',
        'Inventori.store.Liskategori',
        'Inventori.store.Liskeluar',
        'Inventori.store.Lismasuk',
        'Inventori.store.Lissatuan',
        'Inventori.store.Lisuser'
        
    ],

    launch: function () {
        // TODO - Launch the application
    },

    onAppUpdate: function () {
        Ext.Msg.confirm('Application Update', 'This application has an update, reload?',
            function (choice) {
                if (choice === 'yes') {
                    window.location.reload();
                }
            }
        );
    }
});
