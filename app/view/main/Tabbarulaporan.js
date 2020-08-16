/**
 * Demonstrates a very simple tab panel with 3 tabs
 */
Ext.define('Inventori.view.main.Tabbarulaporan', {
    extend: 'Ext.tab.Panel',
    xtype: 'tabbarulaporan',
    
    shadow: true,
    cls: 'demo-solid-background',
    tabBar: {
        layout: {
            pack: 'center'
        }
    },
    activeTab: 1,
    defaults: {
        scrollable: true
    },
    items: [
        {
            title: 'Barang Masuk',
            iconCls: 'x-fa fa-shopping-cart',
            layout: 'fit',
            items: [{
                id: 'llaporanmasuklist',
               xtype: 'laporanmasuklist'
             }],
            cls: 'card'
        },
        {
            title: 'Barang Keluar',
            iconCls: 'x-fa fa-bars',
            layout: 'fit',
            items: [{
                id: 'llaporankeluarlist',
               xtype: 'laporankeluarlist'
             
             }],
            cls: 'card'
        }
    ]
});