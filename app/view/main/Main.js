/**
 * This class is the main view for the application. It is specified in app.js as the
 * "mainView" property. That setting causes an instance of this class to be created and
 * added to the Viewport container.
 *
 * TODO - Replace the content of this view to suit the needs of your application.
 */
Ext.define('Inventori.view.main.Main', {
    extend: 'Ext.tab.Panel',
    xtype: 'app-main',
    requires: [
        'Ext.MessageBox',
        'Inventori.view.main.MainController',
        'Inventori.view.main.MainModel',
        'Inventori.view.main.Lbarang',
        'Inventori.view.main.Lkategori',
        'Inventori.view.main.Lsatuan',
        'Inventori.view.main.Lkeluar',
        'Inventori.view.main.Lmasuk',
        'Inventori.view.main.Ljurusan',
        'Inventori.view.main.Tabbarubarang',
        'Inventori.view.main.Tabbarulain'        

    ],
       controller: 'main',
    viewModel: 'main',
    defaults: {
        tab: {
            iconAlign: 'top'
        },
        styleHtmlContent: true
    },
    tabBarPosition: 'bottom',
    items: [
        {
            title: 'Home',
            iconCls: 'x-fa fa-home',
            layout: 'fit',
            // The following grid shares a store with the classic version's grid as well!
            items: [{
                xtype: 'baranglist'
            }]
        },{
            title: 'Barang',
            iconCls: 'x-fa fa-cube',
            layout: 'fit',
            items: [{
               xtype: 'tabbarubarang'
             }]
        },{
            title: 'Laporan',
            iconCls: 'x-fa fa-book'
        },{
            title: 'Lainnya',
            iconCls: 'x-fa fa-tasks',
            layout: 'fit',
            items: [{
               xtype: 'tabbarulain'
             }]
        },
        {
            title: 'Setting',
            iconCls: 'x-fa fa-cog',
            bind: {
                html: '{loremIpsum}'
            }
        }
    ]
});
