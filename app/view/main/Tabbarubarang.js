/**
 * Demonstrates a very simple tab panel with 3 tabs
 */
Ext.define('Inventori.view.main.Tabbarubarang', {
    extend: 'Ext.tab.Panel',
    xtype: 'tabbarubarang',
    
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
            title: 'Daftar Barang',
            iconCls: 'x-fa fa-cubes',
            layout: 'fit',
            items: [{
               id: 'lbarang',
               xtype: 'baranglist'
             }],
            cls: 'card'
        },
        {
            title: 'Masuk',
            iconCls: 'x-fa fa-shopping-cart',
            layout: 'fit',
            items: [{
                id: 'lmasuk',
               xtype: 'masuklist'

             }],
            cls: 'card'
        },
        {
            title: 'Keluar',
            iconCls: 'x-fa fa-bars',
            layout: 'fit',
            items: [{
               id: 'lkeluar',
               xtype: 'keluarlist'
             }],
            cls: 'card'
        }
    ]
});