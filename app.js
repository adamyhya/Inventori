/*
 * This file is generated and updated by Sencha Cmd. You can edit this file as
 * needed for your application, but these edits will have to be merged by
 * Sencha Cmd when upgrading.
 */
Ext.application({
    name: 'Inventori',

    extend: 'Inventori.Application',

    requires: [
        'Inventori.view.main.login.Login',
        'Inventori.view.main.MainController',
        'Inventori.view.main.MainModel',
        'Inventori.view.main.Lbarang',
        'Inventori.view.main.Lkategori',
        'Inventori.view.main.Lsatuan',
        'Inventori.view.main.Lkeluar',
        'Inventori.view.main.Lmasuk',
        'Inventori.view.main.Ljurusan',
        'Inventori.view.main.Luser',
        'Inventori.view.main.Tabbarubarang',
        'Inventori.view.main.Tabbarulain',
        'Inventori.view.main.Tabbarusett',
        'Ext.data.Store',     
        'Ext.form.Panel',
        'Ext.grid.Grid',   
        'Ext.tab.Panel',
        'Ext.app.ViewController',
        'Ext.app.ViewModel',
        'Inventori.store.Lisbarang',
        'Inventori.store.Lisjurusan',
        'Inventori.store.Liskategori',
        'Inventori.store.Liskeluar',
        'Inventori.store.Lismasuk',
        'Inventori.store.Lissatuan',
        'Inventori.store.Lisuser'
    ],

    // The name of the initial view to create. With the classic toolkit this class
    // will gain a "viewport" plugin if it does not extend Ext.Viewport. With the
    // modern toolkit, the main view will be added to the Viewport.
    //
    mainView: 'Inventori.view.main.Main'

    //-------------------------------------------------------------------------
    // Most customizations should be made to Inventori.Application. If you need to
    // customize this file, doing so below this section reduces the likelihood
    // of merge conflicts when upgrading to new versions of Sencha Cmd.
    //-------------------------------------------------------------------------
});
