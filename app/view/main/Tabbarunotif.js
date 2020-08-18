/**
 * Demonstrates a very simple tab panel with 3 tabs
 */
Ext.define('Inventori.view.main.Tabbarunotif', {
    extend: 'Ext.tab.Panel',
    xtype: 'tabbarunotif',
    
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
            title: 'Log Aktifitas',
            iconCls: 'x-fa fa-bell-o',
            layout: 'fit',
            items: [{
                id: 'laktifitas',
               xtype: 'laktifitas'
             }],
            cls: 'card'
        },
        {
            title: 'Pemberitahuan',
            iconCls: 'x-fa fa-bell',
            layout: 'fit',
            items: [{
               id: 'lnotif',
               xtype: 'lnotif'
             }],
            cls: 'card'
        }
    ]
});